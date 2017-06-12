var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'UVic FSAE' });
});

/* GET */
router.get('/sponsors/', function(req, res, next) {
  res.render('sponsors', { title: 'UVic FSAE | Our Sponsors' });
});

/* GET */
router.get('/car2012/', function(req, res, next) {
  res.render('car2012', { title: 'UVic FSAE | The Car 2012' });
});

/* GET */
router.get('/car2013/', function(req, res, next) {
  res.render('car2013', { title: 'UVic FSAE | The Car 2013' });
});

/* GET */
router.get('/car2014/', function(req, res, next) {
  res.render('car2014', { title: 'UVic FSAE | The Car 2014' });
});

/* GET */
router.get('/car2015/', function(req, res, next) {
  res.render('car2015', { title: 'UVic FSAE | The Car 2015' });
});

/* GET */
router.get('/car2016/', function(req, res, next) {
  res.render('car2016', { title: 'UVic FSAE | The Car 2016' });
});

/* GET */
router.get('/car2017/', function(req, res, next) {
  res.render('car2017', { title: 'UVic FSAE | The Car 2017' });
});

/* GET */
router.get('/team/', function(req, res, next) {
  res.render('team', { title: 'UVic FSAE | The Team' });
});

/* GET */
router.get('/comp/', function(req, res, next) {
  res.render('comp', { title: 'UVic FSAE | The Competition' });
});

/* GET */
router.get('/contact/', function(req, res, next) {
  res.render('contact', { title: 'UVic FSAE | Contact Us' });
});


module.exports = router;
