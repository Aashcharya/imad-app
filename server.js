var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleonet= 
{
  title:'Article One | Aashcharya',
  heading:'Article One',
  date:'Aug 15,2017',
  content:`<p>
              This is the content for my first web page.This is the content for my first web page.This is the content for my first web page.This is the content for my first web page.is is the content for my first web page.This is the content for my first web page.This is the content for my first web page.This is the content for my first web page.This is the content for my first web page.This is the content for my first web page.
            </p>
            
            <p>
              This is the content for my first web page.This is the content for my first web page.This is the content for my first web page.This is the content for my first web page.is is the content for my first web page.This is the content for my first web page.This is the content for my first web page.This is the content for my first web page.This is the content for my first web page.This is the content for my first web page.
            </p>
            
            <p>
              This is the content for my first web page.This is the content for my first web page.This is the content for my first web page.This is the content for my first web page.is is the content for my first web page.This is the content for my first web page.This is the content for my first web page.This is the content for my first web page.This is the content for my first web page.This is the content for my first web page.
            </p>`
  
};

function create (data)
{
    var title=data.title;
    var date=data.date;
    var content=data.content;
    var heading=data.heading;
var htmltemp=
`<html>
    <Head>
        <Title>${title}</Title>
        <meta name="viewport" content="width-device-width,intial-scale-1"/>
        <link href="/ui/style.css" rel="stylesheet"/>
        <style>
            
        </style>
    </Head>
    <Body>
        <div class="Container">
        <div>
            <a href="/">Home</a>
        </div>
        <hr>
        <h3>
        ${heading}
        </h3>
        <div>
            {date}
        </div>
        <div>
         ${content}
        </div>
        </div>
    </Body>

</html>


`;
return htmltemp;
}




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one', function (req, res)
{
     res.send(create(articleone));
});

app.get('/article-two', function (req, res)
{
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-There', function (req, res)
{
    res.sendFile(path.join(__dirname, 'ui', 'article-there.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
