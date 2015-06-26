var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    minifyHtml = require("gulp-minify-html"),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    path = require('path'),
    livereload = require('gulp-livereload'),
    runSequence = require('run-sequence'),
    connect = require("gulp-connect"),
    inject = require("gulp-inject"),
    ngHtml2Js  = require('gulp-ng-html2js'),
    series = require('stream-series'),
    clean = require('gulp-clean'),
    merge = require('merge-stream'),
    streamqueue = require('streamqueue');
    bump = require('gulp-bump'),
    beep    = require('beepbeep'),
    watch = require('gulp-watch'),
    stripDebug = require('gulp-strip-debug');
    imagemin = require('gulp-imagemin');
    pngquant = require('imagemin-pngquant');
    argv = require('yargs').argv;


var pack = require('./package.json');
var versionPack = require('./version.json');

var config = {
    platform: "",
    base_path:"./",
    dev_path:"build/",
    prod_path:"bin/",
    current_path:""
};

var sources={
  app:[]
};

var getVendorStream = function(){
    return gulp.src([
      config.current_path+'vendor/jquery/dist/jquery.min.js',
      config.current_path+'vendor/angular/angular.js',
      config.current_path+'vendor/angular-animate/angular-animate.min.js',
      config.current_path+'vendor/angular-timeline/dist/angular-timeline.js',
      config.current_path+'vendor/angular-ui-router/release/angular-ui-router.min.js',
      config.current_path+'vendor/lodash/lodash.min.js',
      config.current_path+'vendor/angular-bootstrap/ui-bootstrap.min.js',
      config.current_path+'vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
      config.current_path+'vendor/angular-scroll-animate/dist/angular-scroll-animate.js',
      ],{base: "."});
      
};

var getAppStream = function(){
  return gulp.src([
    config.current_path+'src/**/*.js',
    config.current_path+'!src/**/*.spec.js',
    config.current_path+'!src/assets/**/*.js'
    ],{base: "."});
};

//=============================================

gulp.task("sass-dev",function(){
    return gulp.src('./src/sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build/assets'));
});

gulp.task("images-dev",function(){
    return gulp.src('./src/assets/img/**/*.{png,PNG,jpeg,JPEG,jpg,JPG,gif}')
    .pipe(gulp.dest('./build/assets/img'));
});

gulp.task("sass-prod",function(){
    return gulp.src('./src/sass/main.scss')
    .pipe(sass())
    .pipe(minifycss())
    .pipe(rename(pack.name+'-'+versionPack.version+".css"))
    .pipe(gulp.dest('./bin/assets'));
});


gulp.task("images-prod",function(){
      return gulp.src('./src/assets/img/**/*.{png,PNG,jpeg,JPEG,jpg,JPG,gif}')
            .pipe(imagemin({
                progressive: true,
                svgoPlugins: [{removeViewBox: false}],
                use: [pngquant()]
            }))
            .pipe(gulp.dest('./bin/assets/img'));
});


//=============================================
// COMPILE TEMPLATES
//=============================================



gulp.task('copy-templates-dev', function () {
    var templates_app = gulp.src([ 'src/**/*.tpl.html'])
        .pipe(ngHtml2Js({
            moduleName: "templates-app",
            stripPrefix:"app/"
        }))
        .pipe(concat('templates-app.js'))
        .pipe(gulp.dest('./build/assets/templates'));
    return templates_app;
});


//=============================================
// COMPILE SCRIPTS
//=============================================

gulp.task("copy-scripts-dev",function(){
    config.current_path=config.base_path;
    var app = getAppStream().pipe(gulp.dest('./build'));
    var vendor = getVendorStream().pipe(gulp.dest('./build'));
    return merge(vendor,app);
});

gulp.task("scripts-prod",function(){
    config.current_path=config.base_path;
    var templates=gulp.src(['./build/assets/templates/*js']);

    return streamqueue({ objectMode: true },
            getVendorStream(),
            getAppStream(),
            templates
        ).pipe(concat(pack.name+"-"+versionPack.version+".js"))
          .pipe(stripDebug())
          .pipe(uglify())
          .pipe(gulp.dest('./bin/assets'));
});

//=============================================
// BUILD INDEX FILE
//=============================================

gulp.task('index-dev', function () {
  config.current_path=config.dev_path;

  var target = gulp.src('./src/index.html');

  var styles = gulp.src([
        './build/assets/*.css'
        ], {read: false}); 
  var templates = gulp.src([
    './build/assets/templates/*js'
  ]);
  //config.current_path=""
  return target.pipe(inject(series(getVendorStream(), getAppStream(),templates,styles),{relative:true}))
    .pipe(gulp.dest('./build'));
});

gulp.task('index-prod', function () {
  var target = gulp.src('./src/index.html');
  // It's not necessary to read the files (will speed up things), we're only after their paths:
  var sources = gulp.src(['./bin/assets/'+pack.name+'-'+versionPack.version+'.js', './bin/assets/'+pack.name+'-'+versionPack.version+'.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./bin'));
});

//=============================================
// CLEAN
//=============================================

gulp.task('clean-dev', function () {
  return gulp.src(config.dev_path + "*",{read:false}).pipe(clean());
});

//=============================================
// WATCH
//=============================================
gulp.task("connect", function () {
    connect.server({
        root: "./*",
        livereload: true
    });
});

gulp.task('dev-watch', function (){

  watch(['src/**/*.js','!src/**/*.spec.js','!src/assets/**/*.js'],function(){
    runSequence('jslint','copy-scripts-dev');
  });

  gulp.watch('src/index.html',['index-dev']);
  gulp.watch(['src/app/**/*.tpl.html'],['copy-templates-dev']);
  gulp.watch(['src/**/*.scss'],['sass-dev']);
  
  livereload.listen();

 if(argv.reload){
  gulp.watch(['build/**']).on('change', livereload.changed);
 }
 
});

gulp.task('watch',function(){
 runSequence('build-dev','dev-watch',function(){});
});

//=============================================
// DEPLOY
//=============================================

gulp.task('jslint', function() {
  config.current_path=config.base_path;
  return getAppStream()
    .pipe(jshint({
        curly: true,
        immed: true,
        newcap: true,
        noarg: true,
        sub: true,
        boss: true,
        eqnull: true
      }))
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .on('error', beep);
});

gulp.task('bump', function(){
  gulp.src('./version.json')
  .pipe(bump())
  .pipe(gulp.dest('./'));
});

gulp.task('build-dev',function(callback){
  return runSequence('clean-dev',['copy-scripts-dev','copy-templates-dev','sass-dev','images-dev'],'index-dev', callback);
});

gulp.task('build-prod',function(){
    runSequence('bump','copy-templates-dev',['scripts-prod','sass-prod','images-prod'],'index-prod', function() {});
});