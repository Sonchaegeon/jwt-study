import { Router } from "express";
const router: Router = Router();

import {TokenValidation} from "../middlewares/verifyToken";

import { signup, signin, profile } from '../controllers/authController';

router.post('/signup', signup);
router.post('/signin', signin);

router.get('/profile', TokenValidation, profile);

export default router;