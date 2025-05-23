import express from 'express';
import dotenv from "dotenv";
import cors from 'cors'


import { connectToDataBase } from './config/db.js';
import filmesRoutes from './Routes/filmes.js';
import usuariosRoutes from './Routes/usuarios.js'
import auth from './Middleware/auth.js';


const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;
app.use(express.json())
app.use("/", express.static('public'));

app.use("/api/filmes",auth, filmesRoutes);
app.use("/api/usuarios", usuariosRoutes);

dotenv.config();
connectToDataBase(app).then(() => {

    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });


});
