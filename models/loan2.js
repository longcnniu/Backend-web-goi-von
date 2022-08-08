// Using Node.js `require()`
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const laon2Schema = new Schema({
    TieuDe: {
        type: String,
        query: true,
        default: 'Vay thế chấp khách hàng doanh nghiệp'
    },
    NumLoan: {
        type: Number,
        query: true,
        default: 2
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
    BCTaiChinhGanNhat: {
        type: String,
        query: true
    },
    DTGanNhat: {
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
const loan2Module = mongoose.model('Loan2', laon2Schema);
module.exports = loan2Module