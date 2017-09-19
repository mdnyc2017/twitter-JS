const express = require( 'express' );
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks')
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];



app.use(function (req, res, next) {
    if(res.statusCode == 200){
        console.log(req.method + ' / ' + 200)        
    }
    console.log(req.path)
    res.render( 'index', {title: 'Hall of Fame', people: people} );    
    next();
})


nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates


app.listen(3000, function () {
    console.log('server listening')
  })

  app.get('/', function (req, res) {
    res.send('Hello World!')
  })

  app.get('/news', function (req, res) {
    res.send('No news is good news!')
  })

  var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

