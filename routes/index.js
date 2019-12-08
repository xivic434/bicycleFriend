var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: '메인',
        lists: [{
            href: "/board/gallery",
            name: "전체",
            src: "/images/g1.jpg",
            desc: "갤러리1"
        }, {
            href: "/board/gallery",
            name: "자유",
            src: "/images/g2.jpg",
            desc: "갤러리2"
        }]
    });
});

module.exports = router;
