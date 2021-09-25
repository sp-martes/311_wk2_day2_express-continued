const products = require('../data/products');

const getAll = (req, res) => {
    res.json(products)
  }

const getByID= (req, res) => {
    let chosen1 = products.find(product => product._id == req.params.id);
    if(!chosen1){
    res.status(404).send("product not found")
    }else{
    res.json(chosen1) 
    }
};

const addProduct= (req, res) => {
    let newID= products.length + 1;
    const newProduct = {
        "_id": newID,
        "name": req.body.name,
        "description": req.body.name,
        "rating": req.body.rating,
        "imgUrl": req.body.imgUrl,
        "price": req.body.price,
        "category": req.body.category,
        "reviews": {
            "description" : req.body.reviews.description,
            "rating" : req.body.reviews.rating
        },
        "postID": 1
    };
    
    products.push(newProduct);
    res.json(products)
    }


module.exports = {
    getAll,
    getByID,
    addProduct
}