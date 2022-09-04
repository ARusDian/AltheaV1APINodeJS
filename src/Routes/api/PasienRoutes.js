import express from "express";

import {
	getAllPasien,
	storeRekamPengukuran,
} from "../../Controllers/api/PasienController.js";

const router = express.Router();

router.get('/pasien/', getAllPasien);
router.post('/rekam-pengukuran/store/',storeRekamPengukuran);
export default router;
