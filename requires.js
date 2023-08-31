const express=require('express');
const cors=require('cors');
const body=require('body-parser');
const routes=require('./Routes/routes');
const app=express();
app.use(cors());
app.use(body.json());
app.use(body.urlencoded({extended:true}));


module.exports = app;

app.use('/',routes);