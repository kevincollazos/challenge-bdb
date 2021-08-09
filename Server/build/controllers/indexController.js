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
exports.indexController = void 0;
const database_1 = __importDefault(require("../database"));
class IndexController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.params;
            const admin = yield database_1.default.query('SELECT * FROM admins WHERE email = ? && password = ?', [email, password]);
            if (admin.length > 0) {
                return res.json(admin);
            }
            res.status(404).json({ text: "Error de logeo" });
        });
    }
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const admin = yield database_1.default.query('SELECT * FROM admins');
            if (admin.length > 0) {
                return res.json(admin);
            }
            res.status(404).json({ text: "No hay admin registrados" });
        });
    }
    listOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const admin = yield database_1.default.query('SELECT * FROM admins WHERE id = ?', [id]);
            if (admin.length > 0) {
                return res.json(admin[0]);
            }
            res.status(404).json({ text: "El admin no existe" });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //console.log(req.body);
            yield database_1.default.query('INSERT INTO admins set ?', [req.body]);
            res.json({
                message: 'admin creado'
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('DELETE FROM admins WHERE id = ?', [id]);
            res.json({
                message: "Se ha eliminado el admin"
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            yield database_1.default.query('UPDATE admins set ? WHERE id = ?', [req.body, id]);
            res.json({
                message: "Se ha actualizado el admin"
            });
        });
    }
}
exports.indexController = new IndexController();
