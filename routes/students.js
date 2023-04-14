const express = require("express");
const router = express.Router();
const studentCtrl = require("../controllers/students");

// GET all students
router.get("/", studentCtrl.index);

// POST new student
router.post("/", studentCtrl.create);

module.exports = router;
