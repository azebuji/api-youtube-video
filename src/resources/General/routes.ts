import express from 'express';

import * as generalController from './controller';
import { validSchemaVideos } from './middleware';



const router = express.Router();

//Para fazer login
router.route('/').get(validSchemaVideos, generalController.findVideos);



export default router;