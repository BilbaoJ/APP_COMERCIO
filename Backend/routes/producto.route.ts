import Router from 'express';
import productoController from "../controllers/producto.controller"

const productoRouter = Router();

productoRouter.get('/', productoController.consultarProductos)
productoRouter.get('/precio', productoController.calcularPrecio)
productoRouter.put('/venta', productoController.terminarCompra)

export default productoRouter;