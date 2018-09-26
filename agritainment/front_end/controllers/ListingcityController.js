exports.listing_city =  function(req, res) {
    var id = req.query.id;
    var ListingService = require('../service/ListingService');
    listingService = new ListingService();
    listingService.init();
    listingService.queryCity(id,function (result) {
        res.render('listing_city',{result:result});
    });
}

exports.listing_cityid =  function(req, res) {
    var city = req.body.city;
    var SearchService = require('../service/SearchService');
    searchService = new SearchService();
    searchService.init();
    searchService.queryCity(city,function (result) {
        var response = {
            result:result
        };
        res.end(JSON.stringify(response));
    });
}

