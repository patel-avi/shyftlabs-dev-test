const Course = require("../models/Course");

module.exports = {
  index,
  create,
};

async function index(req, res) {
  // 1. Get all courses from the database
  try {
    let courses = await Course.find({});
    // 2. Use res.json() to send the posts to the frontend
    if (courses) {
      res.json(courses).status(200);
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

async function create(req, res) {
  try {
    // 1. Create a course in the database (the data will be incoming via `req.body`)
    let course = await Course.create(req.body);
    // 2. use res.json() to send a response to the frontend
    if (course) {
      res.status(200).json("ok");
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
