let express = require('express')
let app = express()
let port = process.env.port || 5000;

app.use(express.static(__dirname +'/'));

app.use(express.json());

app.get('/', (req,res)=>{

    res.render('index.html');
})

app.get("/addTwoNumbers",(req,res)=>{

    let statusCode=200;
    let successMessage = "successful";
    let val1  = req.query.val1;
    let val2 = req.query.val2;
    let result = parseFloat(val1) + parseFloat(val2);
    res.json({
        message:successMessage,
        code:statusCode,
        data:result
    });

});


app.post('/multiply', (req, res) => {
    
  const { num1, num2 } = req.body;
    const result = num1 * num2;
    res.json({ result });
  
});


app.listen(port,()=>{
    console.log('Server started')
})
