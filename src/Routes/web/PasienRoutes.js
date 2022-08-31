import express from "express";

import {
    getAllPasien,
    storePasien,
    getPasienById,
    editPasien,
    updatePasien,
    deletePasien,
} from "../../Controllers/PasienController.js";

const router = express.Router();

router.get('/', getAllPasien);
router.get('/:id', getPasienById);
router.post('/store/', storePasien);
router.get('/edit/:id', editPasien);
router.post('/update/:id', updatePasien);
router.get('/delete/:id', deletePasien);

export default router;