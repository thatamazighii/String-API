import express from "express";
import fs from "fs";

const app = express();
app.use(express.text({ type: "*/*" }));

app.post("/:username", (req, res) => {
    const file = `data_${req.params.username}.txt`;
    fs.writeFileSync(file, req.body);
    res.send("OK");
});

app.get("/:username", (req, res) => {
    const file = `data_${req.params.username}.txt`;
    if (!fs.existsSync(file)) return res.send("");
    res.type("text/plain");
    res.send(fs.readFileSync(file, "utf8"));
});

const port = process.env.PORT || 3000;
app.listen(port);
