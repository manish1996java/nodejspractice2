const adminData = require('../routes/admin');

module.exports.getAddProduct = (req,res,next)=>{
    // res.sendFile(path.join(__dirname,'..','views','add-product.html'));
    res.render('add-product');
    }

const products = [];
module.exports.postAddProduct = (req,res,next)=>{
    products.push({title:req.body.msg});
    res.redirect('/shop');
    // return res.end();
    // req.next();
    }

module.exports.getProduct = (req,res,next)=>{
    console.log(adminData.product);
    // res.sendFile(path.join(__dirname,'..','views','shop.html'));
    res.render('shop',{products:adminData.product,title:'shop page'});
    }