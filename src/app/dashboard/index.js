import angular from 'angular';
// import the dashboard component here
import dashboardComponent from './dashboard.component';
// import the dashboard config here
import dashboardConfig from './dashboard.config';

let dashboardModule = angular.module('dashboardModule', []);
// here we are creating a component with the name `dashboard`
dashboardModule.component('dashboard', dashboardComponent);
// here we register the config for the module
dashboardModule.config(dashboardConfig);

export default dashboardModule;