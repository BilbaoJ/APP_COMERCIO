import Producto from './Producto.model';

export interface Item{
    producto: Producto,
    cantidad_compra: number
}