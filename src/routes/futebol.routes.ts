import { Router } from "express";
import { createFutebol, getFutebol, getFutebolID, putFutebol, deleteFutebol } from '../controllers/futebol.controllers';

const router = Router();


router.post ('/futebol', createFutebol);
router.get('/futebol', getFutebol);
router.get('/futebol/:id', getFutebolID);
router.put('/futebol/:id', putFutebol);
router.delete('/futebol/:id', deleteFutebol);

export default router;

