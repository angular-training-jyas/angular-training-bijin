class DashboardController {
    constructor(userService){
        this.userService = userService;
        this.users = [];
    }

    $onInit(){
        this.users = this.userService.getAllUsers();
    }
}

export default DashboardController;