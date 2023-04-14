const Student = require("../models/Student");

module.exports = {
  index,
  create,
};

async function index(req, res) {
  // 1. Get all Students from the database
  try {
    let students = await Student.find({});
    // 2. Use res.json() to send the posts to the frontend
    if (students) {
      res.json(students).status(200);
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

async function create(req, res) {
  try {
    // 1. Create a student in the database (the data will be incoming via `req.body`)

    let student = await Student.create(req.body);
    // 2. use res.json() to send a response to the frontend
    if (student) {
      res.status(200).json("ok");
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
