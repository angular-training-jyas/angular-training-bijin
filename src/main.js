import angular from 'angular';
// we import sample module here
import sampleModule from './app/sample-module';

var app = angular.module('myApp', [sampleModule.name]);

// here i am bootstrapping the angular application
angular.bootstrap(document, [app.name]);