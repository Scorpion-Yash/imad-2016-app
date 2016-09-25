var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one' : {
    
    title:' Article - One || Yash Jain',
    heading: 'Article One',
    date: 'Sept 25, 2016.',
    content: `<p>
           This Is The Content Of Article-One.
           This Is The Content Of Article-One.
           This Is The Content Of Article-One.
           This Is The Content Of Article-One.
           </p>
           <br/>
           <p>
           This Is The Content Of Article-One.
           This Is The Content Of Article-One.
           This Is The Content Of Article-One.
           This Is The Content Of Article-One.
           </p>
           <br/>
           <p>
           This Is The Content Of Article-One.
           This Is The Content Of Article-One.
           This Is The Content Of Article-One.
           This Is The Content Of Article-One.
           </p>`
    
},
'article-two' : {
     title:' Article - Two || Yash Jain',
    heading: 'Article Two',
    date: 'Sept 26, 2016.',
    content: ` <p>
           This Is The Content Of Article-Two.
           This Is The Content Of Article-Two.
           This Is The Content Of Article-Two.
           This Is The Content Of Article-Two.
           </p>
           <br/>
           <p>
           This Is The Content Of Article-Two.
           This Is The Content Of Article-Two.
           This Is The Content Of Article-Two.
           This Is The Content Of Article-Two.
           </p>
           <br/>
           <p>
            This Is The Content Of Article-Two.
           This Is The Content Of Article-Two.
           This Is The Content Of Article-Two.
           This Is The Content Of Article-Two.
           </p>`
},
'article-three' : {
     title:' Article - Three || Yash Jain',
    heading: 'Article Three',
    date: 'Sept 27, 2016.',
    content : ` <p>
           This Is The Content Of Article-Three.
           This Is The Content Of Article-Three.
           This Is The Content Of Article-Three.
           This Is The Content Of Article-Three.
           </p>
           <br/>
           <p>
           This Is The Content Of Article-Three.
           This Is The Content Of Article-Three.
           This Is The Content Of Article-Three.
           This Is The Content Of Article-Three.
           </p>
           <br/>
           <p>
           This Is The Content Of Article-Three.
           This Is The Content Of Article-Three.
           This Is The Content Of Article-Three.
           This Is The Content Of Article-Three.
           </p>`
}
};

function createTemplate(data)
{
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var template = `<html>
    <head>
        <title>
             ${title}
        </title>
        <meta name="viewport" content = "width = device-width, initial-scale = 1" />
        
           <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <div class ="container">
            
        <div>
            <a href = "/"> Home Button </a>
        </div>
        
        <hr/>
        
        <div>
            <h3>  ${heading} </h3>
             <h5>  ${date}</h5>
        </div>
        
         <div>
           ${content}
        </div>
        
        <hr/>
         <div>
            <h3>Page Ends Here.</h3>
            <a href= "/article-two">Go To Article Two</a>
        </div>
        
        </div>
    </body>
    
</html>
 `;
 return template;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
     res.send(createTemplate(article-one));
});

app.get('/article-two', function (req, res) {
    res.send(createTemplate(article-two));
});

app.get('/article-three', function (req, res) {
     res.send(createTemplate(article-three));
});

app.get('/ui/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
