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

        //Setting the function to insert data into table
        insertOne: function (tableName, columnName, burger_name, callback) {
        connection.query("INSERT INTO ?? (??) VALUES (?)", [ tableName ,columnName, burger_name], function (err, result) {
            if (err) throw err;			
            callback(result);
        });
        },

        //Setting the function to update data from table
        updateOne: function ( tableName,columnName, devoured, id, callback) {
        connection.query("UPDATE ?? SET ?? = ? WHERE id = ?", [tableName , columnName ,devoured , id], function (err, result) {
            if (err) throw err;			
            callback(result);
            
        });
        },
        };
        
        module.exports = orm;
