import Pasien from "./Pasien.js";
import RekamPengukuran from "./RekamPengukuran.js";


Pasien.hasMany(RekamPengukuran);
RekamPengukuran.belongsTo(Pasien);

export {
    Pasien,
    RekamPengukuran
}