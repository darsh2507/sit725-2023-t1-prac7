let express = require('express')
let app = express()
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://localhost:27017/darsh";
let port = process.env.port || 5000;

app.use(express.static(__dirname +'/'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function runDBConnection() {
    try {
        await client.connect();
        collection = client.db().collection('Cat');
        console.log(collection);
    } catch(ex) {
        console.error(ex);
    }
}

app.get('/', (req,res)=>{

    res.render('index.html');
})
app.get('/api/cats', (req,res) => {
    getAllCats((err,result)=>{
        if (!err) {
            res.json({statusCode:200, data:result, message:'get all cats successful'});
        }
    });
});

app.post('/api/cat', (req,res)=>{
    let cat = req.body;
    postCat(cat, (err, result) => {
        if (!err) {
            res.json({statusCode:201, data:result, message:'success'});
        }
    });
});


// app.get("/addTwoNumbers",(req,res)=>{

//     let statusCode=200;
//     let successMessage = "successful";
//     let val1  = req.query.val1;
//     let val2 = req.query.val2;
//     let result = parseFloat(val1) + parseFloat(val2);
//     res.json({
//         message:successMessage,
//         code:statusCode,
//         data:result
//     });

// });


// app.post('/multiply', (req, res) => {
    
//   const { num1, num2 } = req.body;
//   const result = num1 * num2;
//    res.json({ result });
  
// });

function postCat(cat,callback) {
    collection.insertOne(cat,callback);
}

function getAllCats(callback){
    collection.find({}).toArray(callback);
}

app.listen(port,()=>{
    console.log('Server started')
    runDBConnection();
})
