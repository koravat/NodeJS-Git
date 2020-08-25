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

var store_controller = require('../controllers/storeController');
var auth_controller = require('../controllers/authController');
var add_controller = require('../controllers/addController');
var edit_controller = require('../controllers/editController');

// router.get('/editAccount', store_controller.Editaccount);

//test template

router.get('/', (req, res) => {
    res.redirect('/puankin/store/login');
})

router.get('/login', auth_controller.auth_login);

router.get('/enter', auth_controller.auth_enter);

router.get('/addevent', add_controller.add_addevent);

router.get('/addpromotion', add_controller.add_addpromotion);



router.get('/profile-aoudom', store_controller.store_aoudom);

router.get('/profile-sipsamhang', store_controller.store_sipsamhang);

// method get use for config error 404 

router.get('/editevent', edit_controller.edit_editevent);

router.post('/editevent', edit_controller.edit_editevent);

router.get('/editpromotion', edit_controller.edit_editpromotion);

router.post('/editpromotion', edit_controller.edit_editpromotion);

router.get('/settings', edit_controller.edit_settings);

router.post('/settings', edit_controller.edit_settings);