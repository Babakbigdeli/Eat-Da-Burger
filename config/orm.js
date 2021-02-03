//Bringing in connection so ORM can connect with mysql server
var connection = require('./connection.js');

    var orm = {

        //Setting the function to get all data from table
        selectAll: function( tableName,callback){
        connection.query('SELECT * FROM ??;', [tableName], function(err, result){
            if (err) throw err;
            callback(result);
        })
        },
