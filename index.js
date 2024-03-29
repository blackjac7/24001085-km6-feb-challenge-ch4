const express = require("express");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
