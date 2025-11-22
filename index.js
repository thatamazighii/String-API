//Thanks to some guy from an javascript scripting website
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;


app.use(bodyParser.text({ type: "*/*" }));

let storedScript = "";


app.post("/", (req, res) => {
    const newScript = req.body || "";

    const previousScript = storedScript; 

    storedScript = newScript; 
    res.type("text/plain");
    res.send(previousScript);
});

app.listen(PORT, () => {
    console.log(`String API running on port ${PORT}`);
});
