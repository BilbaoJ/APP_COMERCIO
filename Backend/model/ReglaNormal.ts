import ReglaPrecio from "./ReglaPrecio";

export default class ReglaNormal implements ReglaPrecio{

    calcularTotal(cantidad: number, precio: number): number {
        return cantidad * precio;
    }

    aplica(sku:string):boolean{
        return sku.startsWith("EA")
    }
    
}