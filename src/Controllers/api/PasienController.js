import {
    Pasien,
} from "../../Models/index.js";
import {
    RekamPengukuran,
} from "../../Models/index.js";


export const getAllPasien = async (req, res) => {
    try {
        const pasien = await Pasien.findAll();
        res.status(200).json(pasien);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}
export const storeRekamPengukuran = async (req, res) => { 
    try {
        const result = await RekamPengukuran.create(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}
