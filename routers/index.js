const express = require("express");
const router = express.Router();
const carRouter = require("./car");

router.use("/cars", carRouter);

module.exports = router;
