class UserService {
    // $http is a angular provided http service
    constructor($http) {
        this.$http = $http;
        this.validUsers = [{
            'username': 'rani',
            'password': 'rani'
        }, {
            'username': 'jyasveer',
            'password': 'jyasveer'
        }];
    }

    // this is a custom method
    authenticate(user) {
        console.log("user", user);
        let isValid = false;
        // "() => {}" this is the ES6 way of writing a function
        this.validUsers.forEach((item, index) => {
            if (user.username === item.username && user.password === item.password) {
                isValid = true;
            }
        });
        return isValid;
    }
}

export default UserService;