const { Router } = require('express')
const axios = require('axios').default

const router = Router()

router.get('/id/:ref', async (req, res) => {
    const { ref } = req.params

    const [r1, r2] = await Promise.all([
        axios(`http://api.alquran.cloud/v1/ayah/${ref}/en.ahmedali`)
            .then(({ data }) => data),
        axios(`http://api.alquran.cloud/v1/ayah/${ref}/ar.alafasy`)
            .then(({ data }) => data),
    ])

    res.status(200).json({
        ayah: {
            ...r2.data,
            translatedText: r1.data.text
        }
    })
})

router.get('/fav', async (req, res) => {
    res.status(200).json({
        favourites: req.user.favourites
    })
})

router.post('/fav/:ref', async (req, res) => {
    const { ref } = req.params
    const { push, pop } = req.body
    console.log(ref,push,pop,req.body)
    const favs = req.user.favourites

    if (push === 'true') {
        req.user.favourites = favs.includes(ref) ? favs : [...favs, ref]
    }
    else if(pop === 'true') {
        req.user.favourites = favs.filter(r => r !== ref)
    }

    console.log(req.user.favourites)

    await req.user.save()
    res.status(200).json({
        favourites: req.user.favourites
    })
})

module.exports = router
