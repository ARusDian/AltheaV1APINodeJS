import {
    Pasien,
    RekamPengukuran
} from "./../Models/index.js";
import {
    Sequelize
} from "sequelize";

export const getAllPasien = async (req, res) => {
    try {
        const pasien = await Pasien.findAll();
        res.status(200).render('pages/pasien/index.ejs', {
            Pasien: pasien,
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const getPasienById = async (req, res) => {
    try {
        const pasien = await Pasien.findAll({
            where: {
                id: req.params.id
            },
            order: Sequelize.literal('rekam_pengukurans.createdAt ASC'),
            include: [{
                model: RekamPengukuran,
                
            }],
            
        });
        res.status(200).render('pages/rekampengukuran/index.ejs', {
            pasien: pasien[0],
            url : req.url
        });
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const editPasien = async (req, res) => {
    try {
        const pasien = await Pasien.findAll({
            where: {
                id: req.params.id
            }
        });
        res.status(200).render('pages/pasien/edit.ejs',{
            pasien: pasien[0],
        })
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const storePasien = async (req, res) => {
    try {
        await Pasien.create(req.body);
        res.status(200).redirect('/pasien');
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const updatePasien = async (req, res) => {
    try {
        await Pasien.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/pasien');
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const deletePasien = async (req, res) => {
    try {
        await Pasien.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect('/pasien');
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}