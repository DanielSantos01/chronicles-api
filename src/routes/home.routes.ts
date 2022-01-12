import { Router } from 'express';
import { homeController } from '../controllers';
import fillDatabase from '../utils/fillDatabase/index';

const router = Router();

router.route('/').get(homeController.renderHome);
router.route('/fillDatabase').post(fillDatabase);

export default router;
