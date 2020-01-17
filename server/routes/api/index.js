const express = require('express')
const router = express.Router()

const { passport } = require('../../lib/auth')

router.get('/api/profile', passport.authenticate('jwt', { session: false }), function(req, res) {
  res.send(req.user)
})

module.exports = router
