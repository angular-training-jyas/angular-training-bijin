// $stateProvider and $urlRouterProvider are available form the router module.
// myApp module is depending on the router module
let loginConfig = ($stateProvider, $urlRouterProvider) => {
    $stateProvider
        .state({
            name: 'login',
            url: '/login',
            template: '<login></login>'
        });

    $urlRouterProvider.otherwise('/login');
}

export default loginConfig;