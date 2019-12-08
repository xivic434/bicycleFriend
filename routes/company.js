var express= require('express');
var router= express.Router();

router.get("/",function(req,res,next){
    res.render('company',{title:'회사소개'});
})

module.exports= router;
