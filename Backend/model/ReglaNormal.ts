import ReglaPrecio from "./ReglaPrecio";

export default class ReglaNormal implements ReglaPrecio{

    calcularTotal(cantidad: number, precio: number): number {
        return cantidad * precio;
    }
    
}