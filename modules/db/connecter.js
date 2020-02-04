
var mysql = require('mysql');
var config = require('./config/config').dev;

module.exports = (function(){
    return {
        init : function(){
            return mysql.createConnection(config);
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
