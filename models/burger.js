var orm = require("../config/orm.js");

// constructiong methods for burger model object
var burger = {
  selectAll: function(callback) {orm.selectAll(function(result){callback(result);});},

  insertOne: function(burger_name, callback) {orm.insertOne(burger_name, function(result) {callback(result);});},

  updateOne: function(id, callback) {orm.updateOne(id, function(result) {callback(result);});}
};

console.log(burger)
// exporting burger model
module.exports = burger;
