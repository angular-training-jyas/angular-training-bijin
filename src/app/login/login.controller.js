class LoginController {
    constructor(userService) {
        this.userService = userService;
        this.username = '';
        this.password = '';
        this.message = '';
    }

    submit() {
        let user = {
            'username': this.username,
            'password': this.password
        }
        let isValidUser = this.validate(user);
        // calling userService to authenticate the user
        if (isValidUser) {
            if (this.userService.authenticate(user)) {
                this.message = 'User is valid';
            } else {
                this.message = 'We dont find you. Please register and try again';
            }
        }
    }

    validate(user) {
        // here you can have your own validations. such as string or a rule validation
        if (user.username == '' || user.password == '') {
            this.message = 'Username & Password should not be empty';
            return false;
        }
        this.message = '';
        return true;
    }
}

export default LoginController;