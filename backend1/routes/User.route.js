let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// User Model
let userSchema = require('../models/User')

// CREATE User
router.route('/signup').post((req, res, next) => {
  try {
    userSchema.create(req.body, (error, data) => {
      if (error) {
        res.json({success: false, message: "Email Id already exists. Please login.", data: error})
        return next(error)
      } else {
        console.log("data", data)
        res.json({success: true, message: "Created succcesfully. Please login.", data:data})
      }
    })
  } catch(err) {
    res.json({success: false, message: "Oops something went wrong. Please try again. ", data: error})
  }
    
})

// READ Menu Items
router.route('/').get((req, res) => {
    userSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

router.route('/login').post((req, res) => {
  let {email, password} = req.body;
  console.log(email, "email", password, "passsword");
  try {
    userSchema.findOne({'email': email}, (error, data) => {
      if (error) {
        res.json({success: false, message: "Oops something went wrong. Please try again. ", data: error})
        return next(error)
      } else {
        if(data && data.password == password) {
          res.json({success: true, message: "Login succcessfully.", data:data});
        }else {
          res.json({success: false, message: "Invalid Credentails. Please try again", data:data});
        }
      }
    })
  } catch(err) {
    res.json({success: false, message: "Oops something went wrong. Please try again. ", data: error})
  }
 
})
// Get Single User
router.route('/edit-menu/:id').get((req, res) => {
    userSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update user
router.route('/update-menu/:id').put((req, res, next) => {
    userSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Menu updated successfully !')
      }
    },
  )
})

// Delete user
router.route('/delete-user/:id').delete((req, res, next) => {
    userSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router