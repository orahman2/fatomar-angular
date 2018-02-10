var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api',tasks);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});
const port = process.env.PORT || '3000';
app.set('port', port);
//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);

//app.use(express.static(path.join(__dirname, 'client')))
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));