import { Request, Response } from "express";
import Item from "../model/Item";
import CompraDTO from "./dtos/CompraDTO"
import compraDTO2Item from "./factories/CompraFactory"
import productoService from "../services/producto.service"
import Producto from "../model/Producto";

const terminarCompra = (req: Request, res: Response): Response => {
    const compraDTO: CompraDTO = req.body;
    const itemsComprados: Item[] = compraDTO2Item(compraDTO)
    productoService.hacerCompraService(itemsComprados, compraDTO.total_compra)
    return res.status(200).json()
}

const consultarProductos = (req: Request, res: Response): Response => {
    const productos: Producto[] = productoService.obtenerProductosDeDB();
    return res.status(200).json(productos)
}

const calcularPrecio = (req: Request, res:Response) => {
    const item: Item = req.body;
    const precioCalculado = productoService.calcularPrecioService(item);
    return res.status(200).json(precioCalculado);
}

export default {terminarCompra, consultarProductos, calcularPrecio}