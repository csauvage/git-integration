"use strict";
console.log("Running webapp...");

let Express = require('express');
let app = Express();

let messages = require('./messages.js');
let port = 80;

//app.use(Express.static('./app'));

app.get('/',(req,res)=>{
	res.send('Hello World');
});

app.get('/messages',(req,res)=>{
	res.send(JSON.stringify(messages));
});

app.listen(port,()=>{
	console.log(`App listening on port ${port}`);
});
