import angular from 'angular';
import loginConfig from './login.config';
import loginComponent from './login.component';

let loginModule = angular.module('loginModule', []);
loginModule.config(loginConfig);
loginModule.component('login', loginComponent);

export default loginModule;