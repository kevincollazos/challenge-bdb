import {Router } from 'express'
import { usersController } from '../controllers/usersControllers'

class UsuariosRoutes{

    public router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get( '/', usersController.list);
        this.router.get( '/:id', usersController.listOne);
        this.router.post('/', usersController.create);
        this.router.delete('/:id', usersController.delete);
        this.router.put('/:id', usersController.update);
    }

}

const usuariosRoutes = new UsuariosRoutes();
export default usuariosRoutes.router;