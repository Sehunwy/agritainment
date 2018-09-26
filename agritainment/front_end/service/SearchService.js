function UserService() {
    this.init = function () {

    }

    this.queryProvince = function (name,call) {
        var provinceName = name;
        var SearchDao = require('../dao/SearchDao');
        var searchDao = new SearchDao();
        searchDao.init();
        searchDao.queryProvince(provinceName,function (result) {
            call(result);
        });
    }

    this.queryCity = function (name,call) {
        var cityName = name;
        var SearchDao = require('../dao/SearchDao');
        var searchDao = new SearchDao();
        searchDao.init();
        searchDao.queryCity(cityName,function (result) {
            call(result);
        });
    }
}
module.exports = UserService;
