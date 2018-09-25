function FarmService() {
    this.init = function () {

    }
    this.farm = function (call) {
        var UserDao = require('../dao/FarmDao');
        var userDao = new UserDao();
        userDao.init();
        userDao.queryFarm(function (result) {
            call(result);
        });
    }
}
module.exports = FarmService;
