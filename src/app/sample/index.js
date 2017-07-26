import angular from 'angular';
// here we are importing the sample controller
import SampleController from './sample.controller';

// create the angular module
var sampleModule = angular.module('sampleModule', []);
// create a angular controller
sampleModule.controller('sampleController', SampleController);

// export the module here to bind it in main.js
export default sampleModule;