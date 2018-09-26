exports.listing =  function(req, res) {
    var id = req.query.id;
    console.log("id  "+id);
    var ListingService = require('../service/ListingService');
    listingService = new ListingService();
    listingService.init();
    listingService.queryProvince(id,function (result) {
        res.render('listing',{result:result});
    });

}

exports.listing_id =  function(req, res) {
    var province = req.body.province;
    console.log(province);
    var SearchService = require('../service/SearchService');
    searchService = new SearchService();
    searchService.init();
    searchService.queryProvince(province,function (result) {
        var response = {
            result:result
        };
        console.log(result);
        res.end(JSON.stringify(response));
    });
}