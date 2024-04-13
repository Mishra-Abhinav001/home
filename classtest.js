const express = require('express');
const path = require('path');
const ejs = require('ejs');
const app = express();
app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get("/",(req,res)=>{
 res.render('index');
});
app.listen(3000,() => {console.log("server is running on port 3000")});