exports.gallery =  function(req, res) {
    var id = req.query.id;
        var GalleryService = require('../service/GalleryService');
        galleryService = new GalleryService();
        galleryService.init();
        galleryService.gallery(id,function (result) {
            res.render('gallery',{result:result});
        });
 }