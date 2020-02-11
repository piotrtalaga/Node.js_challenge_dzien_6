//Twój kod

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('./public/zadanie01/'));
app.use(bodyParser.urlencoded());

app.post('/result', (req, res) => {
    const {numA, numB} = req.body;
    let isTheDivider;
    if((parseInt(numA))%(parseInt(numB)) === 0){
        isTheDivider = ' jest dzielnikiem';
    }
    else{
        isTheDivider = ' nie jest dzielnikiem';
    }
    res.send("Liczba "+numB+isTheDivider+" liczby "+numA);
});

app.listen(3000, () => {
    console.log('Serwer uruchomiony na porcie 3000');
});