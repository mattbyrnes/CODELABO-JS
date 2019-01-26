const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// mongoose.connect('mongodb://codelabouser:codelabopass1@ds131954.mlab.com:31954/heroku_1m80w7kx', { useNewUrlParser: true });

mongoose.connect('mongodb://localhost/codelaborate', {
  useNewUrlParser: true
});

// Routes
require('./sockets/sockets')(io);
require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

// Start the server
server.listen(PORT, function () {
  console.log(`App running on port ${PORT}`);
});
