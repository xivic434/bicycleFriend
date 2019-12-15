
var mysql = require('mysql');
var config = require('./config/config').dev;

module.exports = (function(){
    return {
        init : function(){
            return mysql.createConnection(config);
            /*
            return mysql.createConnection({
                host : config.host,
                port : config.port,
                user : config.user,
                password : config.password,
                database : config.database,
            });
            */
        },
        connect_test : function(con){
            con.connect(function(err){
                if(err){
                    console.error("mysql Connect error : " + err );
                }
                else { 
                    console.info("mysql is connected successfully.");
                }
            })
        }
    }
})();
