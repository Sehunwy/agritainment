exports.personal =  function(req, res) {
    res.render('personal',{});
}

exports.pass =  function(req, res) {
    var user = req.body.user;
    var old_pass1 = req.body.old_pass1;
    var new_pass1 = req.body.new_pass1;
    var con_pass1 = req.body.con_pass1;
    if(new_pass1!=con_pass1) {
        var response = {
            result:false
        };
        res.end(JSON.stringify(response));
    }
    else {
        var PersonService = require('../service/PersonService');
        var personService = new PersonService();
        personService.init();
        personService.queryPass(user,old_pass1,function (result) {
            if(result==false) {
                var response = {
                    result:false
                };
                res.end(JSON.stringify(response));
            }

            else {
                personService.updatePass(user,new_pass1,function (result) {
                    var response = {
                        result:result
                    };
                    res.end(JSON.stringify(response));
                })
            }
        });
    }
}