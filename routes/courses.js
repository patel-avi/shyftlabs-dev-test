const express = require("express");
const router = express.Router();
const courseCtrl = require("../controllers/courses");

// GET all courses
router.get("/", courseCtrl.index);

// POST new course
router.post("/", courseCtrl.create);

module.exports = router;
