"use strict";

/*
 |--------------------------------------------------------------------------
 | Application Process Handler
 |--------------------------------------------------------------------------
 |
 | This script is used to create application threads and initialize app on them.
 | Master process is responsible for managing forks, and export app metrics.
 |
 */
 const app = require('./app');
 

const cat_controller = require('./app/cat_controller')
let argv = require('minimist')(process.argv.slice(2));
cat_controller(app).catImageBindController(argv);
