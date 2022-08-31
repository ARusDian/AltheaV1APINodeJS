import express from "express";
import partials from "express-partials";
import db from "./Config/database.js";
import pasienRoutes from "./Routes/web/pasienRoutes.js";
import apiPasienRoutes from "./Routes/api/pasienRoutes.js";
import rekamPengukuranRoutes from "./Routes/web/rekamPengukuranRoutes.js";
import cors from "cors";
import bodyParser from 'body-parser';
import flash from 'flash-express';
import compression from 'compression';

const app = express();

try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());
app.use(flash());
app.set('view engine', 'ejs');
app.set('views', 'src/views');
app.use('/Resources', express.static('Resources'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(partials());
app.use(express.json());
app.use(compression());
app.use('/pasien', pasienRoutes);
app.use('/rekam-pengukuran', rekamPengukuranRoutes);
app.use('/api/pasien', apiPasienRoutes);
app.listen(5000, async() => {
    console.log('Server running at port 5000');
});