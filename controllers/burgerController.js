//Bringing in dependencies
const express = require('express')
const router = express.Router();
const burger = require('../models/burger.js');

//Creating Routes starting with home page
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var burgerData = {
        burgers: data
      };
      res.render("index", burgerData);
    });
});

//creating Post route via Burger model
router.post("/api/burger", function(req, res) {
    burger.insertOne(req.body.burger_name, function(data) {
      res.json({id: result.insertId});
    });
  });

