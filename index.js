const http=require('http');
const express = require('express');
const app = express();
const server=http.createServer(app);

server.listen(process.env.PORT || 3000 ,function(){
    console.log("Up and running on port " + process.env.PORT);
  });

app.use(express.static(__dirname + '/build'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});