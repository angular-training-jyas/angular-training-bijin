import angular from 'angular';
// import the register component here
import registerComponent from './register.component';
// import the register config here
import registerConfig from './register.config';

let registerModule = angular.module('registerModule', []);
// here we are creating a component with the name `register`
registerModule.component('register', registerComponent);
// here we register the config for the module
registerModule.config(registerConfig);

export default registerModule;