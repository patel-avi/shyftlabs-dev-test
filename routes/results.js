const express = require("express");
const router = express.Router();
const resultCtrl = require("../controllers/results");

// GET all results
router.get("/", resultCtrl.index);

// POST new result
router.post("/", resultCtrl.create);

module.exports = router;
