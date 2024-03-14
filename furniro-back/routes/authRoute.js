import express from 'express';
import { registerController } from '../controllers/authController.js'

//router onject
const router = express.Router();

//rounting
//register || method post
router.post('/register', registerController)

export default router;