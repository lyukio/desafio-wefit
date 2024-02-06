import { Request, Response } from "express"
import User from "../models/user"
import Address from "../models/address"

export class UserController{
    
    async route_postJSON(req: Request, res: Response) {
        let address
        try {
            address = new Address(req.body.address)
            await address.save()
        } catch (error) {
            console.error('Error creating address: ', error)
            res.status(500).json({ error: 'Error creating address' })
        }

        try {
            let user = new User({...req.body, addressId: address?.dataValues.id})
            await user.save()
            res.json({...user.dataValues, address: {...address?.dataValues}})
        } catch (error) {
            console.error('Error creating user: ', error)
            res.status(500).json({ error: 'Error creating user' })
        }
    }

    async route_getJSON(req: Request, res: Response) {
        const id = req.params.id
        let user
        if (id) user = await User.findByPk(id)
        user = await User.findAll()
        return res.json({ 
            user
        })
    }
}

export const instance = new UserController()