"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFutebol = exports.putFutebol = exports.getFutebolID = exports.getFutebol = exports.createFutebol = void 0;
const futebol_models_1 = __importDefault(require("../models/futebol.models"));
const createFutebol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const futebol = new futebol_models_1.default(req.body);
        const savedFutebol = yield futebol.save();
        res.status(201).json(savedFutebol);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar o futebol' });
    }
});
exports.createFutebol = createFutebol;
const getFutebol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const futebol = yield futebol_models_1.default.find();
        res.status(200).json(futebol);
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao criar o futebol' });
    }
});
exports.getFutebol = getFutebol;
const getFutebolID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const futebol = yield futebol_models_1.default.findById(req.params.id);
        if (!futebol) {
            res.status(404).json({ error: 'Futebol não encontrado' });
        }
        else {
            res.status(200).json(futebol);
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao buscar o futebol' });
    }
});
exports.getFutebolID = getFutebolID;
const putFutebol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const futebol = yield futebol_models_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!futebol) {
            res.status(404).json({ error: 'Futebol não encontrado' });
        }
        else {
            res.status(200).json(futebol);
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar futebol' });
    }
});
exports.putFutebol = putFutebol;
const deleteFutebol = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const futebol = yield futebol_models_1.default.findByIdAndDelete(req.params.id);
        if (!futebol) {
            res.status(404).json({ error: 'Futebol não encontrado' });
        }
        else {
            res.status(204).send();
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao deletar futebol' });
    }
});
exports.deleteFutebol = deleteFutebol;
