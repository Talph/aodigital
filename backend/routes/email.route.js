let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

// Student Model
let emailSchema = require('../models/Email');

// CREATE Student
router.route('/send-email').post((req, res, next) => {
  emailSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
});

module.exports = router;