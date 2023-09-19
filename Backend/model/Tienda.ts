export default class Tienda{
    private totalVentas: number;

    constructor(){
        this.totalVentas = 0;
    }

    public sumarVenta(venta:number){
        this.totalVentas += venta;
    }

    public obtenerTotalVentas(){
        return this.totalVentas;
    }
}