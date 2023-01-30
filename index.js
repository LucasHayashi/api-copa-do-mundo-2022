import express from 'express';
import cors from 'cors';
import router from './router.js';
import cookieParser from 'cookie-parser';
import { validaToken } from './services/authy.js';

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(cookieParser());
app.use("/api", validaToken, router);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
})