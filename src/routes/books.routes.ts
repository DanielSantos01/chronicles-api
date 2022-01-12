import { Router } from 'express';
import { booksController } from '../controllers';

const router = Router();

router.route('/books/covers').get(booksController.getCovers);

export default router;
