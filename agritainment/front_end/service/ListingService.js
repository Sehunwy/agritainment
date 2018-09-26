function UserService() {
    this.init = function () {

    }

    this.queryProvince = function (id,call) {
        var provinceId = id;
        var FarmDao = require('../dao/FarmDao');
        var farmDao = new FarmDao();
        farmDao.init();
        farmDao.provinceQueryFarm(provinceId,function (result) {
            call(result);
        });
    }

    this.queryCity = function (id,call) {
        var cityId = id;
        var FarmDao = require('../dao/FarmDao');
        var farmDao = new FarmDao();
        farmDao.init();
        farmDao.cityQueryFarm(cityId,function (result) {
            call(result);
        });
    }
}
module.exports = UserService;
