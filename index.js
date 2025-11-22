const express = require("express");
const app = express();
const fs = require("fs");

app.use(express.text({ type: "*/*" }));

app.post("/", (req, res) => {
    fs.writeFileSync("data.txt", req.body);
    res.send("OK");
});

app.get("/", (req, res) => {
    if (fs.existsSync("data.txt")) {
        res.type("text/plain");
        res.send(fs.readFileSync("data.txt", "utf8"));
    } else {
        res.type("text/plain");
        res.send("");
    }
});

const port = process.env.PORT || 3000;
app.listen(port);
