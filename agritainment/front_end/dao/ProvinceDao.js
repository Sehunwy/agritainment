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

    //查询省
    this.queryProvince= function (call) {
        var sql = "select * from provinces  limit 0,6";
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

    //查询市
    this.queryCity= function (ids,call) {
        var sql = " select * from cities where provinceid in ('" +ids[0]+ "','" +ids[1]+ "','" +ids[2]+ "','" +ids[3]+ "','" +ids[4]+ "','" +ids[5]+ "')";
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