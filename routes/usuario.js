const express = require('express');
const app = express();
const Usuario = require('../models/usuario');

app.get('/usuario', function (req, res) {
    res.json('get World')
  })
   
app.post('/usuario', function (req, res) {
      
      
      let body = req.body;
      let usuario = new Usuario({
          nombre: body.nombre,
          email:body.email,
          password:body.password,
          role: body.role
      });
    console.log("save user");
    usuario.save((err,usuarioDB)=>
    { 
        if(err)
        {
            return res.status(400).json({
                ok:false,
                err
            });
        }

        res.json({
            ok:true,
            usuario:usuarioDB
        });

    });

    
})
  
app.put('/usuario/:id', function (req, res) {
      
      let id = req.params.id;
      res.json({id})
})
  
app.delete('/usuario', function (req, res) {
      res.json('delete World')
})
  
module.exports = app;