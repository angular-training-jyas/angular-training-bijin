import angular from 'angular';
import router from '@uirouter/angularjs';
import loginModule from './app/login';

var app = angular.module('myApp', [router, loginModule.name]);

// here i am bootstrapping the angular application
angular.bootstrap(document, [app.name]);