//Twój kod

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const document = require('html-element').document;
let myCookie;
app.use(express.static('./public/zadanieDnia/'));
app.use(bodyParser.urlencoded());
app.use(cookieParser());

function addComment(commentsCookieValue, newComment) {
    const comments = readComments(commentsCookieValue);
    comments.push(newComment);
    return JSON.stringify(comments);
}

function readComments(commentsCookieValue) {
        return commentsCookieValue ? JSON.parse(commentsCookieValue) : [];
}


app.post('/save', (req, res) => {
    const {comment} = req.body;
    if(req.cookies.comments){
        myCookie =  addComment(req.cookies.comments,comment);
    }
    else {
        myCookie = JSON.stringify([comment]);;
    }
    res.cookie('comments', myCookie , {
        maxAge : 2628000000,
    });
    res.send(`<a href="/">Main Page</a>`)
});
app.get('/', (req, res) => {
    const myCookie = req.cookies.comments;
   res.send('Komentarze: '+JSON.parse(myCookie)+`<br><a href="/add.html">Dodaj komentarz</a>`);
});
app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});

