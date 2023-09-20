export default interface ReglaPrecio{
    calcularTotal(cantidad:number, precio:number): number
    aplica(sku:string):boolean
}