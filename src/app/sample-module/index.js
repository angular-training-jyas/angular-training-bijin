import angular from 'angular';
import sampleController from './controller.js';

var sampleModule = angular.module('sampleModule', []);
sampleModule.controller('sampleController', ['$scope', sampleController]);

export default sampleModule;