//Twój kod

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(express.static('./public/zadanie02/'));
app.use(bodyParser.urlencoded());
app.use(cookieParser());

app.post('/cookie/set', (req, res) => {
     const {imie} = req.body;
    res.cookie('imie', imie , {
        maxAge : 2628000000,
    });
    res.send('Zapisano imię');
});

app.get('/cookie/show', (req, res) => {
    const myCookie = req.cookies.imie;
    res.send('Zapisane imię to: '+myCookie);
});

app.get('/cookie/check', (req, res) => {
    const myCookie = req.cookies.imie;
    if(myCookie){
        res.send('Imię zostało zapisane w ciastku');
    }
    else{
        res.send('Imię nie zostało zapisane');
    }
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});