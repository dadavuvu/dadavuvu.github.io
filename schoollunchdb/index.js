var express = require('express');
var fs = require('fs');
var app = express();
 
app.get('/like', function(req, res) {
   res.status(200)
});
 
app.listen(3000, function() {
   console.log('localhost:3000');
});
