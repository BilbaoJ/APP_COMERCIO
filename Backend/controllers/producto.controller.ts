import { Request, Response } from "express";
import Item from "../model/Item";
import CompraDTO from "./dtos/CompraDTO"
import compraDTO2Item from "./factories/CompraFactory"
import productoService from "../services/producto.service"

const terminarCompra = (req: Request, res: Response): Response => {
    const compraDTO: CompraDTO = req.body;
    const itemsComprados: Item[] = compraDTO2Item(compraDTO)
    productoService.hacerCompraService(itemsComprados, compraDTO.total_compra)
    return res.status(200).json()
}

export default {terminarCompra}