function ProvinceDao() {
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
    this.queryFarm= function (call) {
        var sql = "select * from farm,picture,areas where picture.picId=farm.picId and areas.areaid=farm.areaId limit 0,6";
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

    //查询农家乐
    this.provinceQueryFarm = function (id,call) {
        var sql = "select distinct farmId,province,pic01,area from farm,provinces,cities,areas,picture where picture.picId=farm.picId and provinces.provinceid=cities.provinceid and cities.cityid=areas.cityid  and areas.areaid=farm.areaId and  provinces.provinceid="+id;
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

    //查询农家乐
    this.cityQueryFarm = function (id,call) {
        var sql = "select distinct farmId,farmName,city,pic01,area from farm,cities,areas,picture where picture.picId=farm.picId and cities.cityid=areas.cityid  and areas.areaid=farm.areaId and  cities.cityid="+id;
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

module.exports = ProvinceDao;