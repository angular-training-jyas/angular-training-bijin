// $stateProvider and $urlRouterProvider are available form the router module.
// myApp module is depending on the router module
let loginConfig = ($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state({
            'name': 'login',
            'url': '/login',
            'template': '<login></login>' // login component is created in login module. see login/index.js
        });

    $urlRouterProvider.otherwise('/login');
}

export default loginConfig;