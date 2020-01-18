const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the main build directory
app.use(express.static(__dirname + '/build/default'));

// Render index.html on the main page, specify the root
app.get('/', function(req, res){
    res.sendFile("index.html", {root: '.'});
});

app.listen(PORT);