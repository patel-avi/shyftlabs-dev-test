const Result = require("../models/Result");

module.exports = {
  index,
  create,
};

async function index(req, res) {
  // 1. Get all Results from the database
  try {
    let results = await Result.find({});
    // 2. Use res.json() to send the results to the frontend
    if (results) {
      res.json(results).status(200);
    }
  } catch (error) {
    res.status(500).json(error);
  }
}

async function create(req, res) {
  try {
    // 1. Create a result in the database (the data will be incoming via `req.body`)

    let result = await Result.create(req.body);
    // 2. use res.json() to send a response to the frontend
    if (result) {
      res.status(200).json("ok");
    }
  } catch (error) {
    res.status(500).json(error);
  }
}
