// $stateProvider and $urlRouterProvider are available form the router module.
// myApp module is depending on the router module
let dashboardConfig = ($stateProvider) => {
    $stateProvider
        .state({
            'name': 'dashboard',
            'url': '/dashboard',
            'template': '<dashboard></dashboard>'
        });
}

export default dashboardConfig;