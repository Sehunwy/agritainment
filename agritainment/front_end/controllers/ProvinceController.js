exports.provinceController =  function(req, res) {
    var ProvinceService = require('../service/ProvinceService');
    provinceService = new ProvinceService();
    provinceService.init();
    provinceService.province(function (result) {
        var response = {
            result:result
        };
        res.end(JSON.stringify(response));
    });
}
