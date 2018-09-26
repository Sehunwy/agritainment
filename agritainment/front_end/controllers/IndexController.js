exports.index = function(req, res){
    var ProvinceService = require('../service/ProvinceService');
    provinceService = new ProvinceService();
    provinceService.init();
    var FarmService = require('../service/FarmService');
    farmService = new FarmService();
    farmService.init();
    var cites = [];
    provinceService.province(function (result) {

        for(var i=0;i<result.length;i++) {
            cites.push(result[i].provinceid);
        }

        provinceService.city(cites,function (city) {
            farmService.farm(function (farm) {
                // console.log(farm);
                res.render('index',{
                    province:result,
                    city:city,
                    farm:farm
                });
            })

        });

11
        // var response = {
        //     result:result
        // };

        // res.end(JSON.stringify(response));
    });

};

