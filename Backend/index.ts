import express from 'express';
import cors from 'cors';
import productoRouter from './routes/producto.route';
const app = express();

//Servicios externos a usar en express
app.use(express.json);
app.use(cors())

//Rutas
app.use('/producto', productoRouter)

//Listener de la app
app.listen('3000', () => {
    console.log('Server running on port 3000');
})



