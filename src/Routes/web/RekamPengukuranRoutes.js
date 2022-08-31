import express from 'express';

import {
    getAllRekamPengukuran,
    getRekamPengukuranById,
    editRekamPengukuran,
    storeRekamPengukuran,
    updateRekamPengukuran,
    deleteRekamPengukuran,
} from "../../Controllers/RekamPengukuranController.js";

const router = express.Router();

router.get('/', getAllRekamPengukuran);
router.get('/:id', getRekamPengukuranById);
router.post('/store/', storeRekamPengukuran);
router.get('/edit/:id', editRekamPengukuran);
router.post('/update/:id', updateRekamPengukuran);
router.get('/delete/:id', deleteRekamPengukuran);

export default router;