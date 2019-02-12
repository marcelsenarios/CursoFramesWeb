const port = 3003;

const bodyParser = require('body-parser');

const express = require('express');

const server = express();

server.use(bodyParser.urlencoded({ extend: true }));

server.use(bodyParser.json());


server.listen(port, function() {
	console.log(`BACKEND ESTA RODANDO NA PORTA ${port}`);
});


module.exports = server;

/*
server.use(function(req, res, next) {
	//res.send('Funcionou!');
	console.log('middlewere 1');
	next();
});


server.use(function(req, res, next) {
	console.log('meu middlewere 2');
	res.send('Funcionou de novo!');
});
*/