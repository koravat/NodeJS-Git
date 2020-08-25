exports.edit_settings = function(req,res) {
    childkey= req.body.childkey
    res.render('store/Temsettings.html',{childkey}) 
};

exports.edit_editevent = function(req,res) {
    childkey= req.body.childkey
    res.render('store/TemEditEvent.html',{childkey})
};

exports.edit_editpromotion = function(req,res) {
    childkey= req.body.childkey
    res.render('store/TemEditPromotion.html',{childkey})
};
