const contacts = require('../data/contacts');

const getAll = (req, res) => {
    res.json(contacts)
  }

const getByID= (req, res) => {
    let chosen1 = contacts.find(contact => contact._id == req.params.id);
    if(!chosen1){
    res.status(404).send("contact not found")
    }else{
    res.json(chosen1) 
    }
};

const addContact = (req, res) => {
    let newID = comments.length + 1;
    const newComment = {
        "_id": newID,
        "body": req.body.body,
        "postId": 1
    }
    comments.push(newComment)
    res.json(comments)
}


module.exports = {
    getAll,
    getByID,
    addContact
}