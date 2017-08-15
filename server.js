var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={ 
    
'article-one': { title:'Article One | Aashcharya',
  heading:'Article One',
  date:'Aug 15,2017',
  content:`<p>
              This is the content for my first article.This is the content for my first web page.
            </p>
            `
  
},
'article-two':{ title:'Article Two | Aashcharya',
  heading:'Article Two',
  date:'Aug 16,2017',
  content:`<p>
              This is the content for my second article.This is the content for my first web page.
            </p>
            `
  
},
'article-there':{ title:'Article There | Aashcharya',
  heading:'Article There',
  date:'Aug 17,2017',
  content:`<p>
              This is the content for my third article.This is the content for my first web page.
            </p>
            `
 },
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
app.get('/:articleName', function (req, res)
{
    var articleName=req.params.articleName;
     res.send(create(articles[articleName]));
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
