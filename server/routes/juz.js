const { Router } = require('express')
const axios = require('axios').default
const { toWordsOrdinal } = require('number-to-words')

const router = Router()

router.get('/', (_req, res) => {
    const juzs = []
    for (let i = 1; i <= 30; i++) {
        juzs.push({
            number: i,
            name: (
                toWordsOrdinal(i, false)
                .split('-')
                .map( w => (w.charAt(0).toUpperCase() + w.slice(1)))
                .join(' ')
            )
        })
    }
    res.status(200).json({ juzs })
})

router.get('/:ref', async (req, res) => {
    const { ref } = req.params

    const [r1, r2] = await Promise.all([
        axios(`http://api.alquran.cloud/v1/juz/${ref}/en.ahmedali`)
            .then(({ data }) => data),
        axios(`http://api.alquran.cloud/v1/juz/${ref}/ar.alafasy`)
            .then(({ data }) => data),
    ])

    res.status(200).json({
        ayahs: r2.data.ayahs.map((ayah, i) => ({
            ...ayah,
            translatedText: r1.data.ayahs[i].text
        }))
    })
})

module.exports = router
