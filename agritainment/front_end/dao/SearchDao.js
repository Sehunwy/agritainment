function UserDao() {
    var connection;
    this.init = function () {
        var mysql = require('mysql');  //调用MySQL模块
        //1，创建一个connection
        connection = mysql.createConnection({
            host: 'localhost',       //主机 ip
            user: 'root',            //MySQL认证用户名
            password: '123456',                //MySQL认证用户密码
            port: '3306',                 //端口号
            database: 'farmhouse'          //数据库里面的数据
        });
        //2,连接
        connection.connect();
    }

    //查询
    this.queryProvince = function (province,call) {
        var sql = "select distinct provinces.provinceid,farmId,province,pic01,area from farm,provinces,cities,areas,picture where picture.picId=farm.picId and provinces.provinceid=cities.provinceid and cities.cityid=areas.cityid  and areas.areaid=farm.areaId and  provinces.province = '" +province+ "'";
        // var sql = "select * from provinces where pcName LIKE "+'%province%+';
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
        //连接结束
        connection.end();
    }

    this.queryCity = function (name,call) {
        var sql = "select distinct cities.cityid,farmId,farmName,city,pic01,area from farm,cities,areas,picture where picture.picId=farm.picId and cities.cityid=areas.cityid  and areas.areaid=farm.areaId and  cities.city = '" +name+ "'";
        connection.query(sql, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                return;
            }
            call(result);
        });
        //连接结束
        connection.end();
    }
}

module.exports = UserDao;