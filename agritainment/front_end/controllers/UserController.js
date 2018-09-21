exports.login = function(req, res){
    res.render('login',{});
};

exports.register =  function(req, res) {
    var user = req.body.user;
    var passwd = req.body.passwd;
    var UserService = require('../service/UserService');
    userService = new UserService();
    userService.init();
    userService.register(user,passwd,function (result) {
        var response = {
            result:result
        };
        res.end(JSON.stringify(response));
    });
}