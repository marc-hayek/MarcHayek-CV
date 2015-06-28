# Application Setup
by [Marc Hayek](mailto:marchayek90@gmail.com)

## I. Setup

1. [Setting Up Local Environment](#1-setting-up-local-environment)
2. [Configuration](#2-configuration)
3. [Building the Application](#3-build-the-application)

## II. Demo

[See the Demo in Action](http://cv.marchayek.me)


### 1. Setting Up Local Environment

1.  Install the following packages and programs to your system
    - [Git](http://git-scm.com/downloads)
    - [Node JS and npm](https://nodejs.org/)
    - [Bower](http://bower.io/#install-bower)

        ```
        $ npm install -g bower
        ```
    - [Gulp](http://gulpjs.com/)

        ```
        $ npm install --global gulp
        ```

2.  Clone the repo into your local server using the following command
    
    ssh

    ```
    git clone git@github.com:marc-hayek/MarcHayek-CV.git
    ```

    or http (add your account username)

    ```
    git clone https://github.com/(username)MarcHayek-CV.git  
    ```

### 2. Configuration

1. Add your email and password to the ```config.json``` file located in the ```server``` folder in order for the contact me messages to send.

2. If you wish to run the app on the provided server, set the "baseURL" option in the ```config.json``` file to "../build" for development environments, or "../bin" for production environments  


### 3. Building the Application

1. In you main folder, run the following command to install all of the required node modules

    ```
    npm install
    ```
2. In you main folder, run the following command to install all of the required vendor files
    
    ```
    bower install
    ```
  
3. Building The App for a Development Environment
	
	The development build will compile all the project files into the ```build``` folder
    
    To build the app files for development environment, run the following command in the main folder
    
    ```
    $ gulp build-dev
    ```
    
    You can also run the following command if you want you to build the code on every code change
    
    ```
    $ gulp watch
    ```
    
    or the following to enable live reload
    
    ```
    $ gulp watch --reload
    ```
    
3. Building The App for a Production Environment
	
	The production build will compile all the project files into the ```bin``` folder
    
    To build the app files for Production Environment, run the following command in the main folder
    
    ```
    $ gulp build-prod
    ```

4. Running the Server
	
	The node server provided with the app is located in the ```server``` folder as ```server.js```. Run the server using the following command while inside the ```server``` folder:

    ```
    node server.js
    ```

    The server listens to port 3000

    *The Contact Me form in the app requires this server to be running in order to function*

5. Running the App in the browser

	If the provided node server is running, go to http://localhost:3000 to run the app.

	If you are using your own server, navigate to the compiled ```index.html``` found in either the ```build``` folder or the ```bin``` folder



















