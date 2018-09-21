function UserService() {
    this.init = function () {

    }
    this.register = function (name,passwd,call) {
        var Username = name;
        var Userpasswd =  passwd;
        var UserDao = require('../dao/UserDao');
        var userDao = new UserDao();
        userDao.init();
        var isTrue = false;
        userDao.inserUser(Username,Userpasswd,function (result) {
            isTrue = result;
            call(result);
        });
    }
}
module.exports = UserService;
