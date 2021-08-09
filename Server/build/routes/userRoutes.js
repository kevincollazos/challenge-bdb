"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersControllers_1 = require("../controllers/usersControllers");
class UsuariosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', usersControllers_1.usersController.list);
        this.router.get('/:id', usersControllers_1.usersController.listOne);
        this.router.post('/', usersControllers_1.usersController.create);
        this.router.delete('/:id', usersControllers_1.usersController.delete);
        this.router.put('/:id', usersControllers_1.usersController.update);
    }
}
const usuariosRoutes = new UsuariosRoutes();
exports.default = usuariosRoutes.router;
