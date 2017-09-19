const express = require( 'express' );
const app = express(); // creates an instance of an express application

app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    if(res.statusCode == 200){
        console.log(req.method + ' / ' + 200)        
    }
    console.log(req.path)

    next();
})


console.log('YESSSSSSSSSSSSS!')



app.listen(3000, function () {
    console.log('server listening')
  })

  app.get('/', function (req, res) {
    res.send('Hello World!')
  })

  app.get('/news', function (req, res) {
    res.send('No news is good news!')
  })