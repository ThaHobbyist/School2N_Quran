const { Router } = require('express')
const passport = require('passport')

const { User } = require('../models')

const router = Router()

router.get('/logout', (req, res) => {
  if (req.user) { req.logout() }
  res.sendStatus(200)
})

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (_req, res) => {
    res.sendStatus(200)
  }
)

router.post('/signup', async (req, res) => {
  const { username, password } = req.body
  let user = await User.findOne({ username })
  if(user) {
    res.status(200).json({
      message: 'User exists.',
      userExists: true,
      userCreated: false
    })
    return
  }
  user = await User.create({ username, password })
  await user.save()
  res.status(201).json({
    message: 'New User created.',
    userExists: false,
    userCreated: true
  })
})

module.exports = router
