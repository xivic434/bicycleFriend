var express = require('express');
var router = express.Router();
var oDb = require('../modules/db/manager');

/* GET users listing. */
/*일반 게시판 보기 일반게시판 추후에 사용*/
router.get('/lists/:id', function(req, res, next) {
    res.render('boards/lists', {
        title: '게시판'
    });
});

/*일반 게시판 생성*/
router.get('/lists/:id/create', function(req, res, next) {
    res.render('boards/lists', {
        title: '게시판'
    });
});

router.post('/lists/:id/create', function(req, res, next) {
    //res.render('lists', { title: '게시판' });
    res.redirect('/lists/:id');
});

/*일반 게시판 수정*/
router.get('/lists/:id/update', function(req, res, next) {
    res.render('boards/lists', {
        title: '게시판'
    });
});

router.put('/lists/:id/update', function(req, res, next) {
    res.redirect('/lists/:id');
});

/*일반 게시판 삭제*/
router.delete('/lists/:id/delete', function(req, res, next) {
    res.redirect('/lists/:id');
});

/*갤러리 게시판 전체 보기*/
router.get('/gallery/:id', function(req, res, next) {
    res.render('boards/gallery', {
        title: '갤러리'
    });
});

/*갤러리 게시판 상세보기*/
router.get('/gallery/:id/view', function(req, res, next) {
    res.render('boards/view', {
        title: '갤러리'
    });
});

/*갤러리 게시판 생성*/
router.get('/gallery/:id/create', function(req, res, next) {
    res.render('boards/gallery', {
        title: '갤러리'
    });
});

router.post('/gallery/:id/create', function(req, res, next) {
    res.redirect("/gallery/:id");
});

/*갤러리 게시판 수정*/
router.get('/gallery/:id/update', function(req, res, next) {
    res.render('boards/gallery', {
        title: '갤러리'
    });
});

router.put('/gallery/:id/update', function(req, res, next) {
    res.redirect("/gallery/:id");
});

/*갤러리 게시판 삭제*/
router.delete('/gallery/:id/delete', function(req, res, next) {
    res.redirect("/gallery/:id");
});

module.exports = router;
