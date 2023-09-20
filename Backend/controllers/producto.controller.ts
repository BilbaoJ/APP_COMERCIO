import { Request, Response } from "express";
import Item from "../model/Item";
import CompraDTO from "./dtos/CompraDTO"
import compraFactory from "./factories/CompraFactory"
import productoService from "../services/producto.service"
import Producto from "../model/Producto";
import ProductoDTO from "./dtos/ProductoDTO";
import ItemDTO from "./dtos/ItemDTO";

const terminarCompra = (req: Request, res: Response) => {
    let response = {
        ok: false,
    };
    const compraDTO: CompraDTO = req.body;
    const itemsComprados: Item[] = compraFactory.compraDTO2Item(compraDTO)
    productoService.hacerCompraService(itemsComprados, compraDTO.total_compra)
    response.ok = true
    res.send(response);
}

const consultarProductos = (req: Request, res: Response): Response => {
    const productos: Producto[] = productoService.obtenerProductosDeDB();
    const productosDTO: ProductoDTO[] = productos.map(producto => compraFactory.producto2ProductDTO(producto));
    return res.status(200).json(productosDTO);
}

const calcularPrecio = (req: Request, res:Response) => {
    const itemDTO: ItemDTO = req.body;
    const item: Item = compraFactory.itemDTO2Item(itemDTO);
    const precioCalculado = productoService.calcularPrecioService(item);
    return res.status(200).json(precioCalculado);
}

export default {terminarCompra, consultarProductos, calcularPrecio}