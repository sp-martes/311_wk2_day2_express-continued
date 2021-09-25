const vehicles = require('../data/vehicles');

const getAll = (req, res) => {
    res.json(vehicles)
  }

const getByID= (req, res) => {
    let chosen1 = vehicles.find(vehicle => vehicle._id == req.params.id);
    if(!chosen1){
    res.status(404).send("vehicle not found")
    }else{
    res.json(chosen1) 
    }
};

const addVehicle= (req, res) => {
    let newID= vehicles.length + 1;
    let newVehicle = {
        "_id": newID,
        "imgUrl": req.body.imgUrl,
        "year": req.body.year,
        "make": req.body.make,
        "model": req.body.model,
        "price": req.body.price,
        "km": req.body.km,
        "miles": req.body.miles,
        "fuel": req.body.fuel,
        "city": req.body.city,
        "isNew": req.body.isNew,
	    "postID": 1
    }
    vehicles.push(newVehicle);
    res.json(vehicles)
}




module.exports = {
    getAll,
    getByID,
    addVehicle
}