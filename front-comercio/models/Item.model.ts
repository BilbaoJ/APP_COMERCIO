import Producto from './Producto.model';

export default interface Item{
    producto: Producto,
    cantidad_compra: number
}