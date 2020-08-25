const express = require('express'); // โหลด module express
const app = express(); // สร้าง Instance express
const swig = require('swig'); // สร้าง Instance swig template for render html
const path = require('path') // สร้าง Instance path
const body = require('body-parser'); // สร้าง Instance body-parser for post req

const indexRouter = require('./routes/indexRouter') //import indexRouter 
const puankinRouter = require('./routes/puankinRouter') //import userRouter 

//Middleware for render
app.use(body());
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views',path.join(__dirname , './views'));
//Store all HTML files in views folder.
app.use(express.static(path.join(__dirname , './public')));
//Store all JS and CSS in public folder.


// Middleware URL
app.use('/', indexRouter)
app.use('/puankin', puankinRouter)

//for Error URL
app.use(function (req, res, next) {
    res.status(404).render('Error404')
})

app.listen(5000, () => console.log('Example app listening on port 5000!')) 
// Start Server ที่ localhost Port 5000
