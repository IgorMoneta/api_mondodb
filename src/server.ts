import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import futebolRoutes from './routes/futebol.routes';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const mongoURL = 'mongodb+srv://igormoneta:sportcampeao123@futebol.wgh36lz.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(mongoURL, { })
    .then (() => {
        console.log('Conexão com o MongoDB estabelecida com sucesso');
})
.catch ((error) => {
    console.error('Erro ao conectar com o MongoDB:', error);
});

app.use('/api/', futebolRoutes)
