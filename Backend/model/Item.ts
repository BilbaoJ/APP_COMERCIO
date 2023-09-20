import ManejadorReglas from "./ManejadorReglas";
import Producto from "./Producto";

export default class Item{
    private producto: Producto;
    private cantidad: number;
    constructor(producto: Producto, cantidad: number){
        this.producto = producto;
        this.cantidad =  cantidad;
    }

    public getProducto(): Producto{
        return this.producto;
    }

    public getCantidad(): number{
        return this.cantidad;
    }

    public calcularTotal(): (number | undefined){
        const manejadorReglas =  new ManejadorReglas();
        return manejadorReglas.ejecutarRegla(this.cantidad, this.producto.precioUnitario, this.producto.sku);
    }
}