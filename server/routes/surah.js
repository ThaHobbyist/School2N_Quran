const { Router } = require('express')
const axios = require('axios').default

const router = Router()

router.get('/', async (req, res) => {
    const { data } = await axios('http://api.alquran.cloud/v1/surah')

    res.status(200).json({
        surahs: data.data
    })
})

module.exports = router
