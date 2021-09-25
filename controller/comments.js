const comments = require("../data/comments");

const getAll = (req, res) => {
    res.json(comments)
}

const getByID= (req, res) => {
    let chosen1 = comments.find(comment => comment._id == req.params.id) ;
    if(!chosen1){
    res.status(404).send("comment not found")
    }else{
    res.json(chosen1) 
    }
};

const addComment = (req, res) => {
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
    addComment
}
