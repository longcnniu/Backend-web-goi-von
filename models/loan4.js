// Using Node.js `require()`
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const laon4Schema = new Schema({
    TieuDe: {
        type: String,
        query: true,
        default: 'Tái cấu trúc doanh nghiệp'
    },
    NumLoan: {
        type: Number,
        query: true,
        default: 4
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
    LinhVucHoatDong: {
        type: String,
        query: true
    },
    LyDoTaiCauTruc: {
        type: String,
        query: true
    },
    HoTro: {
        type: String,
        query: true
    },
    UuDiem: {
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
const loan4Module = mongoose.model('Loan4', laon4Schema);
module.exports = loan4Module