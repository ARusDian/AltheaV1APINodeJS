import express from "express";

import {
    getAllPasien,
} from "../../Controllers/api/PasienController.js";

const router = express.Router();

router.get('/', getAllPasien);
export default router;