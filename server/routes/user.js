const express = require('express')
const request = require('superagent')

const router = express.Router()

router.get('/', (req, res) => {
  request
    .get
    // API
    ()
    .then((response) => {
      res.json(response.body)
    })
    .catch((err) => {
      res.status(500).send(err.message)
    })
})

module.exports = router
