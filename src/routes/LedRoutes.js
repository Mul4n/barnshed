import { Router } from "express";
import { lightsOff, lightsUpBoulder, lightsUpFromHolds } from "../controllers/LedController.js";

const router = Router();

router.route('/off').get(lightsOff);
router.route('/on/:id').get(lightsUpBoulder);
router.route('/on').post(lightsUpFromHolds);

export default router;