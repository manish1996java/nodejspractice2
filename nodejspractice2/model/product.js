const Products = [];


module.exports = class Product {
    
    constructor(title,){
        this.title = title;
    }

    save(){
        products.push(this);
    }

    static fetchAll(){
        return this.products;

    }

}   