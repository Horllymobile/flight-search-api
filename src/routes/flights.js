const express = require('express');

const route = express.Router();

route.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

});

module.export = route;