import { Router } from 'express';
import { homeController } from '../controllers';

const router = Router();

router.route('/').get(homeController.renderHome);

export default router;
