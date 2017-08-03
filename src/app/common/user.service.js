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
        // item , index are custom names for arguments. ES5 way of writing is function(item, index){}
        this.validUsers.forEach((item, index) => {
            if (user.username === item.username && user.password === item.password) {
                isValid = true;
            }
        });
        return isValid;
    }

    addUser(user) {
        this.validUsers.push(user);
        return true;
    }

    getAllUsers(){
        // practically you call the server here to get all the users registered
        return this.validUsers;
    }
}

export default UserService;