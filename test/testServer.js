const {expect} = require("chai")
const request = require("request")

describe("Get Function Test", function(){
    it('returns statuscode of 200',  function(done){
        request("http://localhost:3000/api/cat",function(a,b,c){
            console.log("arguments[0]")
            console.log(arguments[0]);
            console.log("arguments[1]")
            console.log(arguments[1])
            console.log("arguments[2")
            console.log(arguments[2])
            let resp = JSON.parse(c)
            expect(resp.statusCode).to.equal(200);
            done()
        })
    })
});





describe("Post Function Test", function() {
  it('returns status code of 201', function(done) {
   
const catData = {
    "id":"1",
    "title": "kandlnd",
    "subTitle": "lknalcj ",
    "path": "images/livedemo.png",
    "description": "scakn"
   }; 

    request.post(
      {
        url: 'http://localhost:3000/api/cat',
        json: catData
       
      },
      done()
    );
  });
});

describe("Delete function Test", function() {
    it('returns status code of 200', function(done) {
      const catId = '1'; 
  
      request.delete(
        {
          url: 'http://localhost:3000/api/cat/${catId}'
        },
        done()
      );
    });
  });
  
 
  
  
  
  

