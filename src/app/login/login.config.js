let loginConfig = function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state({
            name: 'login',
            url: '/login',
            template: '<login></login>'
        });

    $urlRouterProvider.otherwise('/login');
}

export default loginConfig;