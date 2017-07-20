import angular from 'angular';
import sampleModule from './app/sample-module';

var app = angular.module('myApp', [sampleModule.name]);

// here i am bootstrapping the angular application
angular.bootstrap(document.getElementById('myApp'), [app.name]);