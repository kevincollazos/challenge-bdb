import { Request, Response } from 'express'

import pool from '../database'

class UsersController {

    public async list ( req: Request, res: Response ): Promise<any> {
        const users = await pool.query('SELECT * FROM person');
        if(users.length > 0 ){
            return res.json(users);
        }
        res.status(404).json({text:"No hay usuarios registrados"})
    } 

    public async listOne ( req: Request, res: Response ): Promise<any> {
        const { id } = req.params;
        const user = await pool.query('SELECT * FROM person WHERE id = ?', [id])
        if(user.length > 0 ){
            return res.json(user[0]);
        }
        res.status(404).json({text:"El usuario no existe"})
    }

    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO person set ?', [req.body]);
        res.json({
            message: 'Usuario creado'
        });     
    }

    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM person WHERE id = ?', [id])
        res.json({
            message:"Se ha eliminado el usuario"
        })
    }

    public async update (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE person set ? WHERE id = ?', [req.body, id])
        res.json({
            message:"Se ha actualizado el usuario"
        })
    }

}

export const usersController = new UsersController();