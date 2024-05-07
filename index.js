const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/wordcount', (req, res) => {
    const inputString = req.body.inputString;
    
    if (!inputString) {
        return res.status(400).json({ error: 'Input string is required' });
    }

    const words = inputString.split(' ').filter(word => word !== '');
    const wordCount = words.length;

    res.json({ wordCount: wordCount });
});

app.listen(port, () => {
    console.log(`Word Count app listening at http://localhost:${port}`);
});