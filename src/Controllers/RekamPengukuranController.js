import {
    RekamPengukuran,
} from "../Models/index.js";

export const getAllRekamPengukuran = async (req, res) => {
    // try {
    //     const pasien = await Pasien.findAll();
    //     res.status(200).render('pages/pasien/index.ejs', {
    //         Pasien: pasien,
    //     });
    // } catch (error) {
    //     res.json({
    //         message: error.message
    //     });
    // }
}

export const getRekamPengukuranById = async (req, res) => {
    // try {
    //     const pasien = await Pasien.findAll({
    //         where: {
    //             id: req.params.id
    //         }
    //     });
    //     res.status(200).render('pages/riwayatPengukuran/index.ejs', {
    //         pasien: pasien[0],
    //         url : req.url
    //     });
    // } catch (error) {
    //     res.json({
    //         message: error.message
    //     });
    // }
}

export const editRekamPengukuran = async (req, res) => {
    try {
        const rekampengukuran = await RekamPengukuran.findAll({
            where: {
                id: req.params.id
            },
        });
        // console.log(rekampengukuran[0]);
        res.status(200).render('pages/rekampengukuran/edit.ejs',{
            rekampengukuran: rekampengukuran[0],
        })
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const storeRekamPengukuran = async (req, res) => {
    try {
        console.log(res,req);
        await RekamPengukuran.create(req.body);
        res.status(200).redirect('back');
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const updateRekamPengukuran = async (req, res) => {
    try {
        await RekamPengukuran.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.status(200).redirect(`/pasien/${req.body.pasienId}`);
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}

export const deleteRekamPengukuran = async (req, res) => {
    try {
        await RekamPengukuran.destroy({
            where: {
                id: req.params.id
            }
        });
        res.redirect('back');
    } catch (error) {
        res.json({
            message: error.message
        });
    }
}
