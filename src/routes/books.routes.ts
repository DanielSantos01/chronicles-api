import { Router } from 'express';
import fillDatabase from '../utils/fillDatabase/index';

const router = Router();

router.route('/fill-db').post(fillDatabase);

export default router;
