import {
    Pasien,
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
