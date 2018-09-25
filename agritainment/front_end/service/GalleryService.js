function GalleryService() {
    this.init = function () {

    }
    this.gallery = function (id,call) {
        var GalleryDao = require('../dao/GalleryDao');
        var galleryDao = new GalleryDao();
        galleryDao.init();
        galleryDao.queryFarm(id,function (result) {
            call(result);
        });
    }
}
module.exports = GalleryService;
