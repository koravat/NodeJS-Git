const express = require('express'); // โหลด module express
const router = express(); // สร้าง Instance express
module.exports = router

router.get('/', (req, res) => {
    res.redirect('/puankin');
  })