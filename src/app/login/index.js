import angular from 'angular';
// import the login component here
import loginComponent from './login.component';
// import the login config here
import loginConfig from './login.config';

let loginModule = angular.module('loginModule', []);
// here we are creating a component with the name `login`
loginModule.component('login', loginComponent);
// here we register the config for the module
loginModule.config(loginConfig);

export default loginModule;