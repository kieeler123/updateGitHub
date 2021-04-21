const express = require('express');
const router = express.Router();

function fmid(req,res,next){
    console.log('first middleware start');
    next();
}

function smid(req,res,next){
    console.log('second middleware start');
    next();
}

router.get('/',fmid,smid,(req,res)=>{
    res.render('admin/main.html');
});

router.get('/table',(req,res)=>{
    res.render('admin/table.html');
});

router.get('/table/write',(req,res)=>{
    res.render('admin/write.html');
});

router.post('/table/write',(req,res)=>{
    res.send(req.body);
})

module.exports = router;