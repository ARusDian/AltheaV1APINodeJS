import {
    Sequelize
} from "sequelize";
import db from "../Config/database.js";
import RekamPengukuran from "./RekamPengukuran.js";

const {
    DataTypes
} = Sequelize;

const Pasien = db.define('pasien', {
    nama: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.STRING
    },
    tempat_lahir:{
        type: DataTypes.STRING
    },
    tanggal_lahir:{
        type: DataTypes.STRING
    },
    
}, {
    freezeTableName: true
});


export default Pasien;