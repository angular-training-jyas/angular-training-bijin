import angular from 'angular';
// here we are importing the ui router module
import router from '@uirouter/angularjs';

// we import sample module here
// these are my sub modules
import sampleModule from './app/sample';
import loginModule from './app/login';
import registerModule from './app/register';
import dashboardModule from './app/dashboard';
// import the user service here
import userService from './app/common/user.service';

// router module is added as a dependency to the main application module
let app = angular.module('myApp', [router, sampleModule.name, loginModule.name, registerModule.name, dashboardModule.name]);
app.service('userService', userService);

// here i am bootstrapping the angular application
angular.bootstrap(document, [app.name]);