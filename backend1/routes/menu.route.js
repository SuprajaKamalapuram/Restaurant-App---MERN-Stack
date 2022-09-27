let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// Menu Model
let menuSchema = require('../models/Menu')

// CREATE Menu
router.route('/create-menu').post((req, res, next) => {
    menuSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ Menu Items
router.route('/').get((req, res) => {
    menuSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Menu
router.route('/edit-menu/:id').get((req, res) => {
    menuSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Menu
router.route('/update-menu/:id').put((req, res, next) => {
    menuSchema.findByIdAndUpdate(
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

// Delete Menu
router.route('/delete-menu/:id').delete((req, res, next) => {
    menuSchema.findByIdAndRemove(req.params.id, (error, data) => {
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