var express = require('express');
var router = express.Router();
var mongoJS = require('mongojs');
var db = mongoJS('mongodb://generalread:generalread@ds125318.mlab.com:25318/fatomar_main',['main_content']);
router.get('/allReviews', function(req, res, next){
    db.main_content.find(function(err, main_content){
        if(err){
            res.send(err);
        }
        res.json(main_content);
    });
});

router.get('/review/:id', function(req, res, next){
    db.main_content.findOne({_id: mongoJS.ObjectID(req.params.id)},function(err, main_content){
        if(err){
            res.send(err);
        }
        res.json(main_content);
    });
});



module.exports = router;