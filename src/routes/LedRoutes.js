import { Router } from "express";
import { lightsOff, lightsUpBoulder } from "../controllers/LedController.js";

const router = Router();

router.route('/off').get(lightsOff);
router.route('/on/:id').get(lightsUpBoulder);

export default router;