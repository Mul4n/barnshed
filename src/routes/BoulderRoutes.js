import { Router } from 'express';
import { deleteBoulder, getAllBoulders, getBoulderById, updateBoulder, createBoulder } from '../controllers/BoulderController.js';

const router = Router();

router.route('/').get(getAllBoulders);
router.route('/:id').get(getBoulderById).put(updateBoulder).delete(deleteBoulder);
router.route('/add').post(createBoulder);
export default router;