'use strict'
const express = require( 'express' );
const app = express(); // creates an instance of an express application
const nunjucks = require('nunjucks')
const routes = require('./routes');
const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
var tweet = require('./tweetBank')

app.use(express.static('public'))
nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {console.log(output);});
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks


app.use(function (req, res, next) {
    if(res.statusCode == 200){
        console.log(req.method + ' / ' + 200)        
    }
    console.log(req.path)
    next();
})
  //app.use('/', routes);
app.get('/',function (req, res, next) {
      console.log(tweet.list());
    res.render( 'index', {title: 'Hall of Fame', tweets: tweet.list()} );
})

app.listen(3000, function () {
    console.log('server listening')
  })












// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };









//   app.get('/', function (req, res) {
//     res.send('Hello World!')
//   })

//   app.get('/news', function (req, res) {
//     res.send('No news is good news!')
//   })