const express = require("express");
const port = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(express.static('./public'));


const contacts = require('./routes/contacts');
const vehicles = require('./routes/vehicles');
const comments = require('./routes/comments');
const products = require('./routes/products');

app.use(contacts);
app.use(vehicles);
app.use(comments);
app.use(products);


app.listen(port, () => {
 console.log(`Server is live on port ${port}!`);
});
