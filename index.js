const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;

// allow multiline body
app.use(bodyParser.text({ type: "*/*" }));

let storedScript = "";

// POST ONLY — stores new script and returns old one
app.post("/", (req, res) => {
    const newScript = req.body || "";

    const previousScript = storedScript; // return last stored script

    storedScript = newScript; // update storage

    res.type("text/plain");
    res.send(previousScript);
});

app.listen(PORT, () => {
    console.log(`String API running on port ${PORT}`);
});
