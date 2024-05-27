import express from 'express';

import * as generalController from './controller';
import { validSchemaVideos } from './middleware';

const router = express.Router();

router.route('/').get(validSchemaVideos, generalController.findVideos);

export default router;