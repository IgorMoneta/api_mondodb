"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const futebol_routes_1 = __importDefault(require("./routes/futebol.routes"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(body_parser_1.default.json());
const mongoURL = 'mongodb+srv://igormoneta:sportcampeao123@futebol.wgh36lz.mongodb.net/?retryWrites=true&w=majority';
mongoose_1.default.connect(mongoURL, {})
    .then(() => {
    console.log('Conexão com o MongoDB estabelecida com sucesso');
})
    .catch((error) => {
    console.error('Erro ao conectar com o MongoDB:', error);
});
app.use('/api/', futebol_routes_1.default);
