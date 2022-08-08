const express = require('express')
var router = express.Router()

//DB Models
const loan1Models = require('../models/loan1')
const loan2Models = require('../models/loan2')
const loan3Models = require('../models/loan3')
const loan4Models = require('../models/loan4')
const loan5Models = require('../models/loan5')

router.post('/loan-1', async (req, res) => {

    const { tenCty, NamThanhLap, MaSoThue, DiaChi, TienVay, MucDichDA, TenDA, DiaChiDA, TSTheChap, DienTich,
        SLBanRaDuKien, TienDaDauTu, DaQuyHoach, DaDuocCapPhep, TenLienHe, SoDTLienHe } = req.body

    if (!tenCty || !NamThanhLap || !MaSoThue || !DiaChi || !TienVay || !MucDichDA || !TenDA || !DiaChiDA || !TSTheChap || !DienTich ||
        !SLBanRaDuKien || !TienDaDauTu || !DaQuyHoach || !DaDuocCapPhep || !TenLienHe || !SoDTLienHe) {

        return res.status(402).json({ success: false, st: true, message: 'Vui lòng nhập đủ các trường' })
    }
    try {
        const data = await loan1Models({
            tenCty, NamThanhLap, MaSoThue, DiaChi, TienVay, MucDichDA, TenDA, DiaChiDA, TSTheChap, DienTich,
            SLBanRaDuKien, TienDaDauTu, DaQuyHoach, DaDuocCapPhep, TenLienHe, SoDTLienHe
        })
        await data.save()

        return res.status(200).json({ success: true, message: 'Gửi thành công' })

    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})

router.post('/loan-2', async (req, res) => {

    const { tenCty, NamThanhLap, MaSoThue, DiaChi, TienVay, ThoiGianVay, MucDichVay, BCTaiChinhGanNhat,
        DTGanNhat, DienTich, DatO, DatNN, DatKhac, DiaChiBDS, NhanHieuOT, NamSanXuatOT, TrongTaiOT, TenLienHe, SoDTLienHe } = req.body

    if (!tenCty || !NamThanhLap || !MaSoThue || !DiaChi || !TienVay || !ThoiGianVay || !MucDichVay || !BCTaiChinhGanNhat ||
        !DTGanNhat || !DienTich || !DatO || !DatNN || !DatKhac || !DiaChiBDS || !NhanHieuOT || !NamSanXuatOT || !TrongTaiOT || !TenLienHe || !SoDTLienHe) {
        return res.status(402).json({ success: false, st: true, message: 'Vui lòng nhập đủ các trường' })
    }

    try {
        const data = await loan2Models({
            tenCty, NamThanhLap, MaSoThue, DiaChi, TienVay, ThoiGianVay, MucDichVay, BCTaiChinhGanNhat,
            DTGanNhat, DienTich, DatO, DatNN, DatKhac, DiaChiBDS, NhanHieuOT, NamSanXuatOT, TrongTaiOT, TenLienHe, SoDTLienHe
        })
        await data.save()

        return res.status(200).json({ success: true, message: 'Gửi thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})

router.post('/loan-3', async (req, res) => {
    const { HoVTen, NamSinh, CCCD, NoiO, TienVay, ThoiGianVay, MucDichVay, PhuongThucTra, NguonThu,
        DienTich, DatO, DatNN, DatKhac, DiaChiBDS, NhanHieuOT, NamSanXuatOT, TrongTaiOT, TenLienHe, SoDTLienHe } = req.body

    if (!HoVTen || !NamSinh || !CCCD || !NoiO || !TienVay || !ThoiGianVay || !MucDichVay || !PhuongThucTra || !NguonThu ||
        !DienTich || !DatO || !DatNN || !DatKhac || !DiaChiBDS || !NhanHieuOT || !NamSanXuatOT || !TrongTaiOT || !TenLienHe || !SoDTLienHe) {
        return res.status(402).json({ success: false, st: true, message: 'Vui lòng nhập đủ các trường' })
    }

    try {
        const data = await loan3Models({
            HoVTen, NamSinh, CCCD, NoiO, TienVay, ThoiGianVay, MucDichVay, PhuongThucTra, NguonThu,
            DienTich, DatO, DatNN, DatKhac, DiaChiBDS, NhanHieuOT, NamSanXuatOT, TrongTaiOT, TenLienHe, SoDTLienHe
        })
        await data.save()

        return res.status(200).json({ success: true, message: 'Gửi thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})

router.post('/loan-4', async (req, res) => {
    const { tenCty, NamThanhLap, MaSoThue, DiaChi, LinhVucHoatDong, LyDoTaiCauTruc, HoTro, UuDiem, TenLienHe, SoDTLienHe } = req.body

    if (!tenCty || !NamThanhLap || !MaSoThue || !DiaChi || !LinhVucHoatDong || !LyDoTaiCauTruc || !HoTro || !UuDiem || !TenLienHe || !SoDTLienHe) {
        return res.status(402).json({ success: false, st: true, message: 'Vui lòng nhập đủ các trường' })
    }

    try {
        const data = await loan4Models({
            tenCty, NamThanhLap, MaSoThue, DiaChi, LinhVucHoatDong, LyDoTaiCauTruc, HoTro, UuDiem, TenLienHe, SoDTLienHe
        })
        await data.save()

        return res.status(200).json({ success: true, message: 'Gửi thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})

router.post('/loan-5', async (req, res) => {
    const { tenCty, NamThanhLap, MaSoThue, DiaChi, HanMongMuon, MucDichVay, BCTaiChinhGanNhat, DoanhThu, DienTich, DatO,
        DatNN, DatKhac, DiaChiBDS, NhanHieuOT, NamSanXuatOT, TrongTaiOT, NghiVuThue, TienNoThue, NoXau, TenLienHe, SoDTLienHe } = req.body

    if (!tenCty || !NamThanhLap || !MaSoThue || !DiaChi || !HanMongMuon || !MucDichVay || !BCTaiChinhGanNhat || !DoanhThu || !DienTich || !DatO ||
        !DatNN || !DatKhac || !DiaChiBDS || !NhanHieuOT || !NamSanXuatOT || !TrongTaiOT || !NghiVuThue || !TienNoThue || !NoXau || !TenLienHe || !SoDTLienHe) {
        return res.status(402).json({ success: false, st: true, message: 'Vui lòng nhập đủ các trường' })
    }

    try {
        const data = await loan5Models({
            tenCty, NamThanhLap, MaSoThue, DiaChi, HanMongMuon, MucDichVay, BCTaiChinhGanNhat, DoanhThu, DienTich, DatO,
            DatNN, DatKhac, DiaChiBDS, NhanHieuOT, NamSanXuatOT, TrongTaiOT, NghiVuThue, TienNoThue, NoXau, TenLienHe, SoDTLienHe
        })
        await data.save()

        return res.status(200).json({ success: true, message: 'Gửi thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, st: false, message: 'Server Error' })
    }
})
//======================

router.get('/get-loan-all', async (req, res) => {
    try {
        const data1 = await loan1Models.find()
        const data2 = await loan2Models.find()
        const data3 = await loan3Models.find()
        const data4 = await loan4Models.find()
        const data5 = await loan5Models.find()
        return res.status(200).json({ success: true, message: data1.concat(data2, data3, data4, data5) })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

router.get('/get-loan1', async (req, res) => {
    try {
        const data = await loan1Models.find({}, { TieuDe: 1, TenLienHe: 1, createdAt: 1, TrangThai: 1 }).sort({ "createdAt": -1 })
        return res.status(200).json({ success: true, message: data })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

router.get('/get-loan2', async (req, res) => {
    try {
        const data = await loan2Models.find({}, { TieuDe: 1, TenLienHe: 1, createdAt: 1, TrangThai: 1 }).sort({ "createdAt": -1 })
        return res.status(200).json({ success: true, message: data })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

router.get('/get-loan3', async (req, res) => {
    try {
        const data = await loan3Models.find({}, { TieuDe: 1, TenLienHe: 1, createdAt: 1, TrangThai: 1 }).sort({ "createdAt": -1 })
        return res.status(200).json({ success: true, message: data })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

router.get('/get-loan4', async (req, res) => {
    try {
        const data = await loan4Models.find({}, { TieuDe: 1, TenLienHe: 1, createdAt: 1, TrangThai: 1 }).sort({ "createdAt": -1 })
        return res.status(200).json({ success: true, message: data })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

router.get('/get-loan5', async (req, res) => {
    try {
        const data = await loan5Models.find({}, { TieuDe: 1, TenLienHe: 1, createdAt: 1, TrangThai: 1 }).sort({ "createdAt": -1 })
        return res.status(200).json({ success: true, message: data })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})
//======================
//chi tiet
router.get('/get-loan1/:id', async (req, res) => {
    const id = req.params.id

    try {
        const data = await loan1Models.findById(id)

        return res.status(200).json({ success: true, message: 'successfully', data: data })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

router.get('/get-loan2/:id', async (req, res) => {
    const id = req.params.id

    try {
        const data = await loan2Models.findById(id)

        return res.status(200).json({ success: true, message: 'successfully', data: data })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

router.get('/get-loan3/:id', async (req, res) => {
    const id = req.params.id

    try {
        const data = await loan3Models.findById(id)

        return res.status(200).json({ success: true, message: 'successfully', data: data })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

router.get('/get-loan4/:id', async (req, res) => {
    const id = req.params.id

    try {
        const data = await loan4Models.findById(id)

        return res.status(200).json({ success: true, message: 'successfully', data: data })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

router.get('/get-loan5/:id', async (req, res) => {
    const id = req.params.id

    try {
        const data = await loan5Models.findById(id)

        return res.status(200).json({ success: true, message: 'successfully', data: data })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

//==============
//xoa
router.delete('/del-loan1/:id', async (req, res) => {
    const id = req.params.id

    try {
        const data = await loan1Models.findByIdAndDelete(id)

        return res.status(200).json({ success: true, message: 'Xóa thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

router.delete('/del-loan2/:id', async (req, res) => {
    const id = req.params.id

    try {
        const data = await loan2Models.findByIdAndDelete(id)

        return res.status(200).json({ success: true, message: 'Xóa thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

router.delete('/del-loan3/:id', async (req, res) => {
    const id = req.params.id

    try {
        const data = await loan3Models.findByIdAndDelete(id)

        return res.status(200).json({ success: true, message: 'Xóa thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

router.delete('/del-loan4/:id', async (req, res) => {
    const id = req.params.id

    try {
        const data = await loan4Models.findByIdAndDelete(id)

        return res.status(200).json({ success: true, message: 'Xóa thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

router.delete('/del-loan5/:id', async (req, res) => {
    const id = req.params.id

    try {
        const data = await loan5Models.findByIdAndDelete(id)

        return res.status(200).json({ success: true, message: 'Xóa thành công' })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})
//===========
//thay doi trang thai dã xem
router.post('/seen-loan1/:id', async (req, res) => {
    const id = req.params.id

    try {
        const data = await loan1Models.findByIdAndUpdate(id, { TrangThai: true })

        return res.status(200).json({ success: true, message: 'Da xem thanh cong' })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

router.post('/seen-loan2/:id', async (req, res) => {
    const id = req.params.id

    try {
        const data = await loan2Models.findByIdAndUpdate(id, { TrangThai: true })

        return res.status(200).json({ success: true, message: 'Da xem thanh cong' })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

router.post('/seen-loan3/:id', async (req, res) => {
    const id = req.params.id

    try {
        const data = await loan3Models.findByIdAndUpdate(id, { TrangThai: true })

        return res.status(200).json({ success: true, message: 'Da xem thanh cong' })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

router.post('/seen-loan4/:id', async (req, res) => {
    const id = req.params.id

    try {
        const data = await loan4Models.findByIdAndUpdate(id, { TrangThai: true })

        return res.status(200).json({ success: true, message: 'Da xem thanh cong' })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

router.post('/seen-loan5/:id', async (req, res) => {
    const id = req.params.id

    try {
        const data = await loan5Models.findByIdAndUpdate(id, { TrangThai: true })

        return res.status(200).json({ success: true, message: 'Da xem thanh cong' })
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Server Error' })
    }
})

module.exports = router