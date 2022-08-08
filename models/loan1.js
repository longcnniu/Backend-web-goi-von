// Using Node.js `require()`
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const laon1Schema = new Schema({
    TieuDe: {
        type: String,
        query: true,
        default: 'Vay thế chấp dự án lớn'
    },
    NumLoan: {
        type: Number,
        query: true,
        default: 1
    },
    Seen: {
        type: Boolean,
        query: true,
        default: false
    },
    TrangThai: {
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
    MucDichDA: {
        type: String,
        query: true
    },
    TenDA: {
        type: String,
        query: true
    },
    DiaChiDA: {
        type: String,
        query: true
    },
    TSTheChap: {
        type: String,
        query: true
    },
    DienTich: {
        type: String,
        query: true
    },
    SLBanRaDuKien: {
        type: String,
        query: true
    },
    TienDaDauTu: {
        type: String,
        query: true
    },
    DaQuyHoach: {
        type: String,
        query: true
    },
    DaDuocCapPhep: {
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
const loan1Module = mongoose.model('Loan1', laon1Schema);
module.exports = loan1Module