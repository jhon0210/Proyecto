const connection = require('../database/db')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const {promisify} = require('util')

exports.login = async (req, res) => {
   try {

    const user = req.body.user
    const pass = req.body.pass
    console.log(user);
    if (!user || !pass) {
        res.render('login', {
            alert:true,
            alertTitle: '!Advertencia',
            alertMessage: 'Todos los campos deben ser diligenciados',
            alertIcon: 'warning',
            showConfirmButton: true,
            timer: false,
            ruta: 'login'
        })
        
    } else {
        
    }
       
   } catch (error) {
       
   }
}

