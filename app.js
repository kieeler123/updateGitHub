const express = require('express');
const nunjucks = require('nunjucks');

const path = require('path');

const app = express();
const pName = 2000;

nunjucks.configure('template',{
    autoescape:false,
    express:app
});

app.use(express.static(path.join(__dirname,'template')));

app.get('/',(req,res)=>{
    res.render('view/main.html');
});

app.listen(pName,()=>{
    console.log("port number is ", pName);
})