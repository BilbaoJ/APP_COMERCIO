import ReglaPrecio from "./ReglaPrecio";

export default class ReglaPeso implements ReglaPrecio{

    //cantidad viene dada en kilogramos
    calcularTotal(cantidad: number, precio: number): number {
        const gramos = cantidad*1000;
        return gramos * precio;
    }

}