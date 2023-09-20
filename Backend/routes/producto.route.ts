import Router from 'express';
import productoController from "../controllers/producto.controller"

const productoRouter = Router();

productoRouter.put('/venta', productoController.terminarCompra)

export default productoRouter;