const { Router } = require('express')

const router = Router()

router.get('/ping', (_req, res) => {
  res.status(200).send('pong')
})

router.use('/juz', require('./juz'))
router.use('/ayah', require('./ayah'))
router.use('/surah', require('./surah'))

module.exports = {
  auth: require('./auth'),
  api: router,
}
