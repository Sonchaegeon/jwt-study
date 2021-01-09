import {Request, Response} from 'express';
import User, { IUser } from '../models/User';

import jwt from "jsonwebtoken";

export const signup = async (req: Request, res: Response) => {
    // Saving a new user
    const user: IUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    });
    const savedUser = await user.save();

    // Token
    const token: string = jwt.sign({_id: savedUser._id}, process.env.JWT_SECRET || 'tokensecret');

    res.header('auth-token', token).json(savedUser);
};

export const signin = (req: Request, res: Response) => {
    res.send('signin');
};

export const profile = (req: Request, res: Response) => {
    res.send('profile');
};