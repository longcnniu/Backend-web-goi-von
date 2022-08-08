// Using Node.js `require()`
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const laon5Schema = new Schema({
    TieuDe: {
        type: String,
        query: true,
        default: 'Vay hạn mức doanh nghiệp vừa và doanh nghiệp lớn'
    },
    NumLoan: {
        type: Number,
        query: true,
        default: 5
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
    tenCty: {
        type: String,
        query: true
    },
    NamThanhLap: {
        type: String,
        query: true
    },
    MaSoThue: {
        type: String,
        query: true
    },
    DiaChi: {
        type: String,
        query: true
    },
    HanMongMuon: {
        type: String,
        query: true
    },
    MucDichVay: {
        type: String,
        query: true
    },
    BCTaiChinhGanNhat: {
        type: String,
        query: true
    },
    DoanhThu: {
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
    NghiVuThue: {
        type: String,
        query: true
    },
    TienNoThue: {
        type: String,
        query: true
    },
    NoXau: {
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
const loan5Module = mongoose.model('Loan5', laon5Schema);
module.exports = loan5Module