
let express = require('express');
let app = express();
let port = process.env.port || 3000;
require('./dbConnection');
let router = require('./routes/router');

app.use(express.static(__dirname + '/'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/cat',router);

io.on('connection',(socket)=>{
    console.log('Its connected');
    socket.on('disconnect',() => {
        console.log('Bye Bye');
    })

    setInterval(()=>{
        socket.emit('number',parseInt(Math.random()*10)) //Change later
    },1000)
})




io.on('connection',(socket)=>{
    console.log('Its connected');
    socket.on('disconnect',() => {
        console.log('Bye Bye');
    })

    setInterval(()=>{
        socket.emit('number',parseInt(Math.random()*10)) //Change later
    },1000)
})

http.listen(port, ()=>{
    console.log('express server started');
});
