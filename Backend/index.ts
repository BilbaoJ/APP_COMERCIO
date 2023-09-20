import express from 'express';
import productoRouter from './routes/producto.route';

const cors = require('cors')
const app = express();

//Servicios externos a usar en express
app.use(express.json());
app.use(cors())

//Rutas
app.use('/producto', productoRouter)

//Listener de la app
app.listen("5000", () => {
    console.log('Server running on port 5000');
})



