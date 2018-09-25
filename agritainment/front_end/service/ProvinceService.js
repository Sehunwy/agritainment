function ProvinceService() {
    this.init = function () {

    }
    this.province = function (call) {
        var UserDao = require('../dao/ProvinceDao');
        var userDao = new UserDao();
        userDao.init();
        userDao.queryProvince(function (result) {
            call(result);
        });
    }
    this.city = function (ids,call) {
        var UserDao = require('../dao/ProvinceDao');
        var userDao = new UserDao();
        userDao.init();
        userDao.queryCity(ids,function (result) {
            call(result);
        });
    }
}
module.exports = ProvinceService;
