// $stateProvider and $urlRouterProvider are available form the router module.
// myApp module is depending on the router module
let registerConfig = ($stateProvider) => {
    $stateProvider
        .state({
            'name': 'register',
            'url': '/register',
            'template': '<register></register>' // register component is created in login module. see register/index.js
        });
}

export default registerConfig;