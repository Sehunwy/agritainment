function UserService() {
    this.init = function () {

    }
    this.register = function (name,passwd,call) {
        var Username = name;
        var Userpasswd = passwd;
        var UserDao = require('../dao/UserDao');
        var userDao = new UserDao();
        userDao.init();
        var isTrue = false;
        userDao.inserUser(Username,Userpasswd,function (result) {
            isTrue = result;
            call(result);
        });
    }

    this.login = function (name,passwd,call) {
        var Username = name;
        var Userpasswd = passwd;
        var UserDao = require('../dao/UserDao');
        var userDao = new UserDao();
        userDao.init();
        var isTrue = false;
        userDao.queryUser(Username,function (users) {
            users.forEach(function (user) {
                if(user.pcPw == Userpasswd) {
                    isTrue = true;
                }
            });
            call(isTrue);
        });
    }
}
module.exports = UserService;
