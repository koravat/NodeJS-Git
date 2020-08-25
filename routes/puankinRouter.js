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

var puankin_controller = require('../controllers/puankinController');
const barsRouter = require('./barsRouter') //import barsRouter
const storeRouter = require('./storeRouter') //import storeRouter
 

// Middleware URL
router.use('/bars', barsRouter)
router.use('/store', storeRouter)

router.get('/', puankin_controller.index);

router.get('/home', puankin_controller.puankin_home);

router.get('/book', puankin_controller.puankin_book);

router.get('/promotion', puankin_controller.puankin_promotion);

router.get('/contract', puankin_controller.puankin_contract);

