const express = require("express");
const router = express.Router();
const carRouter = require("./car");
const optionRouter = require("./option");
const specRouter = require("./spec");

router.use("/cars", carRouter);
router.use("/options", optionRouter);
router.use("/specs", specRouter);

module.exports = router;
