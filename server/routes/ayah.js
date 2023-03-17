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

router.post('/fav', async (req, res) => {
    const { push, pop, ref } = req.body
    const favs = req.user.favourites
    console.log(ref.number,push,pop,"LINE 33")

    if (push === 'true') {
        req.user.favourites = favs.includes(ref) ? favs : [...favs, ref]
        // console.log([...favs, ref], 'X');
    }
    else if(pop === 'true') {
        req.user.favourites = favs.filter(r => r.number !== ref.number)
    }


    await req.user.save()
    // console.log(req.user.favourites)
    res.status(200).json({
        favourites: req.user.favourites
    })
})

module.exports = router
