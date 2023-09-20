import Producto from "./Producto";

export default class Tienda{

    private productos: Producto[];
    private totalVentas: number;

    constructor(productos: Producto[], totalVentas: number){
        this.productos = productos;
        this.totalVentas = totalVentas;
    }

    public getTotalVentas(){
        return this.totalVentas;
    }

    public getProductos(): Producto[]{
        return this.productos;
    }

    public sumarVenta(venta:number){
        this.totalVentas += venta;
    }

    public restarUnidadesDeProducto(sku: string, cantidad: number){
        this.productos = this.productos.map(producto => {
            if(producto.sku === sku){
                producto.restarUnidades(cantidad)
            }
            return producto;
        })
    }

}