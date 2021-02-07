//Bringing in connection so ORM can connect with mysql server
var connection = require('./connection.js');

    var orm = {

        //Setting the function to get all data from table
        selectAll: function(callback){
        connection.query('SELECT * FROM burgers', function(err, result){
            if (err) throw err;
            callback(result);
        })
        },

        //Setting the function to insert data into table
        insertOne: function(burgerName, callback) {
        connection.query(`INSERT INTO burgers SET ?`, [
            {
                burger_name: burgerName
            }
            ], 
            function(err, result) {
            if (err) throw err;
            callback(result);
        });
        },

        //Setting the function to update data from table
        updateOne: function(burger_id, callback) {
        connection.query(`UPDATE burgers SET ? WHERE ?`, [
            {
            devoured: true
            },
            {
            id: burger_id
            }
          ],
          function(err, result) {
            if (err) throw err; 
            callback(result);
            
        });
        },
    };
module.exports = orm;
