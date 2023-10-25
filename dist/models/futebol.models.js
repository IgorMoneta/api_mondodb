"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FutebolSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    estadio: { type: String, required: true },
    fundacao: { type: Number, required: true },
    titulos: { type: Number, required: true },
});
exports.default = (0, mongoose_1.model)('Futebol', FutebolSchema);
