import Item from "../../model/Item";
import Producto from "../../model/Producto";
import ProductoDTO from "../dtos/ProductoDTO";
import CompraDTO from "../dtos/CompraDTO";

const compraDTO2Item = (compraDTO: CompraDTO): Item[] => {
    return compraDTO.productos_carrito.map(
        producto => 
        new Item(productoDTO2Producto(producto.producto), producto.cantidad_compra))
}

const productoDTO2Producto = (productoDTO: ProductoDTO): Producto => {
    return new Producto(
        productoDTO.sku,
        productoDTO.nombre,
        productoDTO.descripcion,
        productoDTO.unidades_disponibles,
        productoDTO.precio_unitario
    )
}

export default compraDTO2Item