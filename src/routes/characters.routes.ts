import { Router } from 'express';
import { charactersController } from '../controllers';

const router = Router();

router.route('/characters/povCharacters').get(charactersController.povCharacters);
router.route('/characters/relatedBooks').get(charactersController.relatedBooks);
router.route('/characters/details').get(charactersController.details);

export default router;
