const express = require('express')
const router =  express.Router()
const adminController = require('../controllers/adminController')

router.get("/login", (req, res) => {
    res.render("login");
  })
  
router.get("/", (req, res) => {
    res.render("index");
  })  
  
  router.get("/register", (req, res) => {
    res.render("adminUser");
  })

module.exports = router
