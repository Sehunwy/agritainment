// exports.gallery = function(req, res){
//     res.render('gallery',{});
// };

exports.gallery =  function(req, res) {
    var id = req.query.id;
    // req.on('data',function (id) {
        console.log("id  "+id);
        var GalleryService = require('../service/GalleryService');
        galleryService = new GalleryService();
        galleryService.init();
        galleryService.gallery(id,function (result) {
            // var response = {
            //     result:result
            // };
            console.log(result);
            // res.end(JSON.stringify(response));
            res.render('gallery',{result:result});
        });
    // })
 }