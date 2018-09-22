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

    //插入用户
    this.inserUser = function (pcName,pcPw,call) {
        //1,编写sql语句
        var userAddSql = 'INSERT INTO pcuser (pcName,pcPw) VALUES(?,?)';//pcuser
        var userAddSql_Params = [pcName,pcPw];
        var isTrue = true ;
        //2,进行插入操作
        connection.query(userAddSql, userAddSql_Params, function (err, result) {
            if (err) {
                console.log('[INSERT ERROR] - ', err.message);
                isTrue = false;
            }
            call(isTrue);
        });
        // 3,连接结束
        connection.end();

    }

    //查询用户
    this.queryUser = function (pcName,call) {
        var sql = "select * from pcuser where pcName='" +pcName+ "'";
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