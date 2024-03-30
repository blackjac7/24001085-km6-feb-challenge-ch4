require("dotenv").config();

const express = require("express");
const fileUpload = require("express-fileupload");
const routes = require("./routers");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const PORT = 4000;

app.use(express.json());

app.use(fileUpload({ useTempFiles: true }));

app.use(express.static("public"));

app.use("/api", routes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
