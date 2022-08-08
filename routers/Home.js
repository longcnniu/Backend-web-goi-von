const express = require('express')
var router = express.Router()

//DB
const CarouselsModule = require('../models/carousels')
const AccordionsModule = require('../models/Accordions')
const ContactModule = require('../models/Contact')
const linenumberModule = require('../models/linenumber')

router.post('/carousels', async (req, res) => {
    const { url } = req.body

    if (!url) {
        return res.status(402).json({ success: false, st: true, message: 'Vui lòng nhập đủ các trường' })
    }

    try {
        const data = await CarouselsModule({ url })
        await data.save()

        return res.status(200).json({ success: true, message: 'Đăng thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})

router.get('/carousels', async (req, res) => {
    try {
        const data = await CarouselsModule.find()

        return res.status(200).json({ success: true, message: data })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})

router.delete('/carousels/:id', async (req, res) => {
    const id = req.params.id

    try {
        const data = await CarouselsModule.findByIdAndDelete(id)

        return res.status(200).json({ success: true, message: 'Xóa thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})

//===================
router.post('/accordions', async (req, res) => {
    const { TD, ND } = req.body

    if (!TD || !ND) {
        return res.status(402).json({ success: false, st: true, message: 'Vui lòng nhập đủ các trường' })
    }

    try {
        const data = await AccordionsModule({ TD, ND })
        await data.save()

        return res.status(200).json({ success: true, message: 'Đăng thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})

router.get('/accordions', async (req, res) => {
    try {
        const data = await AccordionsModule.find()

        return res.status(200).json({ success: true, message: data })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})

// router.put('/accordions/:id', async (req, res) => {
//     const { TD, ND } = req.body

//     try {
//         const data = await AccordionsModule.findByIdAndUpdate(id, { TD, ND })

//         return res.status(200).json({ success: true, message: 'Cập nhật thành công' })
//     } catch (error) {
//         return res.status(500).json({ success: false, st: false, message: 'Server Error' })
//     }
// })

router.delete('/accordions/:id', async (req, res) => {
    const id = req.params.id

    try {
        const data = await AccordionsModule.findByIdAndDelete(id)

        return res.status(200).json({ success: true, message: 'Xóa thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})
//===================
//lien he
router.post('/contact', async (req, res) => {
    const { Phone, Email, DiaChi, Url } = req.body

    if (!Phone || !Email || !DiaChi || !Url) {
        return res.status(402).json({ success: false, st: true, message: 'Vui lòng nhập đủ các trường' })
    }

    try {
        const data = await ContactModule({ Phone, Email, DiaChi, Url })
        await data.save()

        return res.status(200).json({ success: true, message: 'Đăng thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})

router.get('/contact', async (req, res) => {
    try {
        const data = await ContactModule.find()

        return res.status(200).json({ success: true, message: data })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})

router.put('/contact-Phone/:id', async (req, res) => {
    const id = req.params.id
    const { Phone } = req.body

    if (!Phone) {
        return res.status(402).json({ success: false, st: true, message: 'Vui lòng nhập đủ các trường' })
    }

    try {
        const data = await ContactModule.findByIdAndUpdate(id, { Phone: Phone })

        return res.status(200).json({ success: true, message: 'Cập nhật thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' + error })
    }
})

router.put('/contact-Email/:id', async (req, res) => {
    const id = req.params.id
    const { Email } = req.body

    if (!Email) {
        return res.status(402).json({ success: false, st: true, message: 'Vui lòng nhập đủ các trường' })
    }

    try {
        const data = await ContactModule.findByIdAndUpdate(id, { Email: Email })

        return res.status(200).json({ success: true, message: 'Cập nhật thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})

router.put('/contact-Url/:id', async (req, res) => {
    const id = req.params.id
    const { Url } = req.body

    if (!Url) {
        return res.status(402).json({ success: false, st: true, message: 'Vui lòng nhập đủ các trường' })
    }

    try {
        const data = await ContactModule.findByIdAndUpdate(id, { Url: Url })

        return res.status(200).json({ success: true, message: 'Cập nhật thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})

router.put('/contact-DiaChi/:id', async (req, res) => {
    const id = req.params.id
    const { DiaChi } = req.body

    if (!DiaChi) {
        return res.status(402).json({ success: false, st: true, message: 'Vui lòng nhập đủ các trường' })
    }

    try {
        const data = await ContactModule.findByIdAndUpdate(id, { DiaChi: DiaChi })

        return res.status(200).json({ success: true, message: 'Cập nhật thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})

//============
//line number
router.post('/linenumber', async (req, res) => {
    const { Number, TD } = req.body

    if (!Number || !TD) {
        return res.status(402).json({ success: false, st: true, message: 'Vui lòng nhập đủ các trường' })
    }

    try {
        const data = await linenumberModule({ Number, TD })
        await data.save()

        return res.status(200).json({ success: true, message: 'Đăng thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})

router.get('/linenumber', async (req, res) => {
    try {
        const data = await linenumberModule.find()

        return res.status(200).json({ success: true, message: data })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})

router.delete('/linenumber/:id', async (req, res) => {
    const id = req.params.id

    try {
        const data = await linenumberModule.findByIdAndDelete(id)

        return res.status(200).json({ success: true, message: 'Xóa thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})


module.exports = router