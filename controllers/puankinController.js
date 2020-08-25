exports.index = function(req,res) {
    res.render('user/Puankin page.html')
};

exports.puankin_home = function(req,res) {
    res.render('user/TemHome.html')
};

exports.puankin_book = function(req,res) {
    res.render('user/TemBook.html')
};

exports.puankin_promotion = function(req,res) {
    res.render('user/TemPromotion.html')
};

exports.puankin_contract = function(req,res) {
    res.render('user/TemContact.html')
};

