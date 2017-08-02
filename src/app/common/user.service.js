class UserService {
    // $http is a angular provided http service
    constructor($http) {
        this.$http = $http;
        this.validUsers = [{
            'name': 'rani',
            'username': 'rani',
            'password': 'rani',
            'gender': 'female'
        }, {
            'name': 'jyasveer',
            'username': 'jyasveer',
            'password': 'jyasveer',
            'gender': 'male'
        }, {
            'name': 'bijin',
            'username': 'bijin',
            'password': 'bijin',
            'gender': 'male'
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

    add(user) {
        this.validUsers.push(user);
        return true;
    }
}

export default UserService;