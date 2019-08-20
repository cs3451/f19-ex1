# Simple TypeScript web example 

## Overview 

This is a sample of web programming in TypeScript that will be used in class. It's not particularly exciting, but will help you verify everything is installed and working and create a small web application.

# Development Environment

The sample has been set up with a complete project for Typescript development.

To work with this sample and prepare your submission, you should have Node (and in particular, npm) installed, which you can retrieve from [nodejs.org](http://nodejs.org).   

In addition to node, you should make sure a recent (e.g., version 3.5 or later) version of Typescript is installed, as described at [www.typescriptlang.org](http://www.typescriptlang.org).

Finally, we will use [https-localhost](https://www.npmjs.com/package/https-localhost) to run a local https webserver on your machine.  The ```package.json``` is set up to run this server on Mac and Linux (see below), but on Windows you will need to install the server globally, as described on the package website: 
```
npm i -g --only=prod https-localhost
```

If you are in your project directory, you can start the server with ```serve```

## Running 

You can compile the typescript to javascript:
```
tsc
```
You can also run ```tsc --watch``` so that ```tsc``` remains running and recompiles whenever you save a file. 

The project also includes a simple https-localhost package (specified in the ```package.json```) and a command to launch a web server to serve up the files in this directory.  To use it, you must install all the required npm packages, and then run ```serve``` command in the ```package.json``` using ``npm run```
```
npm install
npm run server
```

Alternatively, if you install ```https-localhost``` globally (needed on Windows), you can just run ```serve``` in the project directory.

You can run the sample by pointing your web browser at ```https://localhost:8080/app.html```
