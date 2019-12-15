
var connecter = require('./connecter');
var db = connecter.init();
var mysqlManager = { 
    query : function ( query, callback){
        db.query(query , function(err, result ){
            if( err){
                console.error(err);
            } else {
                callback(result);
            }
        });
    }, 
    board : function(callback){
        var queryBoardSet = require('./web/board.js');
        var sSql = "show databases";
        this.query(sSql ,callback );
    }
};
module.exports = mysqlManager;