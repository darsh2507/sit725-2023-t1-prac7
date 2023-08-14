let collection = require('../model/cat');

function postCat(req,res) {
    let cat = req.body;
    collection.postCat(cat, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

function getAllCats(req,res) {
    collection.getAllCats((err,result)=>{
        if (!err) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

module.exports = {postCat,getAllCats}