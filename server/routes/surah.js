const { Router } = require('express')
const axios = require('axios').default

const router = Router()

router.get('/', async (req, res) => {
    const { data } = await axios('http://api.alquran.cloud/v1/surah')

    res.status(200).json({
        surahs: data.data
    })
})

router.get('/:ref', async (req, res) => {
    const { ref } = req.params

    const [r1, r2] = await Promise.all([
        axios(`http://api.alquran.cloud/v1/surah/${ref}/en.ahmedali`)
            .then(({ data }) => data),
        axios(`http://api.alquran.cloud/v1/surah/${ref}/ar.alafasy`)
            .then(({ data }) => data),
    ])

    res.status(200).json({
        surah: r2.data.ayahs.map((ayah, i) => ({
            ...ayah,
            translatedText: r1.data.ayahs[i].text
        }))
    })
})

module.exports = router
