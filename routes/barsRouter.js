const express = require('express'); // โหลด module express
const router = express(); // สร้าง Instance express
const swig = require('swig');
const path = require('path')

router.engine('html', swig.renderFile);
router.set('view engine', 'html');
router.set('views', path.join(__dirname , '../views'));
//Store all HTML files in views folder.
router.use(express.static(path.join(__dirname , '../public')));
//Store all JS and CSS in public folder.
router.use(express.static(path.join(__dirname , '../public/fonts')));
//Store all FONTS in fonts folder.
module.exports = router

var bars_controller = require('../controllers/barsController');

router.get('/', (req, res) => {
    res.redirect('/puankin/home');
})

router.get('/aou', bars_controller.bar_aoudom);

router.get('/sip', bars_controller.bar_sipsamhang);