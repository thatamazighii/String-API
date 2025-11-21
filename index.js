const express = require('express');
const app = express();
app.use(express.json());

let storedStrings = [];

app.post('/add', (req, res) => {
    const { text } = req.body;
    if (!text) return res.status(400).send({ error: 'No text provided' });
    storedStrings.push(text);
    res.send({ success: true, stored: text });
});

app.get('/get', (req, res) => {
    res.send({ strings: storedStrings });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
