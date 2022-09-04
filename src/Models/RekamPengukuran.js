import {
    Sequelize
} from "sequelize";
import db from "../Config/database.js";

const {
    DataTypes
} = Sequelize;

const RekamPengukuran = db.define(
	"rekam_pengukuran",
	{
		lingkar_lengan: {
			type: DataTypes.DOUBLE,
		},
		lingkar_kepala: {
			type: DataTypes.DOUBLE,
		},
		panjang_ulna: {
			type: DataTypes.DOUBLE,
		},
		suhu: {
			type: DataTypes.DOUBLE,
		},
		berat_badan: {
			type: DataTypes.DOUBLE,
		},
		tinggi_badan: {
			type: DataTypes.DOUBLE,
		},
		status_gizi: {
			type: DataTypes.DOUBLE,
		},
		BEE: {
			type: DataTypes.DOUBLE,
		},
	},
	{
		freezeTableName: true,
	}
);

export default RekamPengukuran;
