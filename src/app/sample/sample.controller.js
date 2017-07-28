var sampleController = ['$scope', function ($scope) {
    // 1. this is the data model
    // 2. here we are binding the data model with the $scope
    // 3. $scope.obj is the custom key name
    $scope = {
        'obj': {
            "name": "RTST"
        }
    };
}];

// here we are exporting this as a array which will be called in the module file and will be binded as a controller
// look for the index.js for the binding
export default sampleController;