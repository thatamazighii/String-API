//Make sure
import express from "express";
import fs from "fs";

const app = express();
app.use(express.text({ type: "*/*" }));

app.post("/", (req, res) => {
    fs.writeFileSync("data.txt", req.body);
    res.send("OK");
});

app.get("/", (req, res) => {
    if (!fs.existsSync("data.txt")) return res.send("");
    res.type("text/plain");
    res.send(fs.readFileSync("data.txt", "utf8"));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Server running on " + port));
