import ItemDTO from "./ItemDTO"

export default interface CompraDTO{
    productos_carrito: ItemDTO[],
    total_compra: number
}