import express from 'express';

import * as loginController from './controller';



const router = express.Router();

//Para fazer login
router.route('/').post(loginController.makeLogin);



export default router;