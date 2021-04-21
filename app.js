const express = require('express');
const nunjucks = require('nunjucks');
const morgan = require('morgan');

const path = require('path');
const bodyParser = require('body-parser');
const db = require('./models');

const app = express();
const pName = 2000;

nunjucks.configure('template',{
    autoescape:true,
    express:app
});

app.use((req,res,next)=>{
    app.locals.isLogin = true;
    app.locals.req_path = req.path;
    next();
})

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'template')));

app.get('/',(req,res)=>{
    res.render('admin/main.html');
});

app.get('/table',(req,res)=>{
    res.render('admin/table.html');
});

app.use(require('./controllers'));

db.sequelize.authenticate()
    .then(() => {
        console.log('success connection');
        return db.sequelize.sync();
    })
    .then(() => {
        console.log('db sync success');
    })
    .catch(err => {
        console.error('unable connector', err);
    })

app.listen(pName,()=>{
    console.log("port number is ", pName);
})