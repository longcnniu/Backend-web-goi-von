// Using Node.js `require()`
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const laon3Schema = new Schema({
    TieuDe: {
        type: String,
        query: true,
        default: 'Vay thế chấp khách hàng cá nhân'
    },
    NumLoan: {
        type: Number,
        query: true,
        default: 3
    },
    TrangThai: {
        type: Boolean,
        query: true,
        default: false
    },
    Seen: {
        type: Boolean,
        query: true,
        default: false
    },
    HoVTen: {
        type: String,
        query: true
    },
    NamSinh: {
        type: String,
        query: true
    },
    CCCD: {
        type: String,
        query: true
    },
    NoiO: {
        type: String,
        query: true
    },
    TienVay: {
        type: String,
        query: true
    },
    ThoiGianVay: {
        type: String,
        query: true
    },
    MucDichVay: {
        type: String,
        query: true
    },
    PhuongThucTra: {
        type: String,
        query: true
    },
    NguonThu: {
        type: String,
        query: true
    },
    DienTich: {
        type: String,
        query: true
    },
    DatO: {
        type: String,
        query: true
    },
    DatNN: {
        type: String,
        query: true
    },
    DatKhac: {
        type: String,
        query: true
    },
    DiaChiBDS: {
        type: String,
        query: true
    },
    NhanHieuOT: {
        type: String,
        query: true
    },
    NamSanXuatOT: {
        type: String,
        query: true
    },
    TrongTaiOT: {
        type: String,
        query: true
    },
    TenLienHe: {
        type: String,
        query: true
    },
    SoDTLienHe: {
        type: String,
        query: true
    },
}, { timestamps: true });
//
const loan3Module = mongoose.model('Loan3', laon3Schema);
module.exports = loan3Module