class RegisterController {
    constructor(userService) {
        this.userService = userService;
        this.user = {
            'name': '',
            'username': '',
            'password': '',
            'retypepassword': '',
            'gender': ''
        };
        this.messages = [];
    }

    save() {
        let isValid = this.validate(this.user);
        if (isValid) {
            let userToSave = {
                'name': this.user.name,
                'username': this.user.username,
                'password': this.user.password,
                'gender': this.user.gender
            };

            let isValidAdd = this.userService.add(userToSave);
            if(isValidAdd){
                this.messages.push('User successfully added.');
            }
        }
    }

    validate(user) {
        this.messages = [];
        let isValid = true;
        if (!user.name || !user.username || !user.password || !user.retypepassword || !user.gender) {
            isValid = false;
            this.messages.push('Enter all values.');
            if (user.password && user.retypepassword && (user.password !== user.retypepassword)) {
                isValid = false;
                this.messages.push('Passwords do not match. Please re-enter.');
            }
        }
        return isValid;
    }
}

export default RegisterController;