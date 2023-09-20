import ReglaPrecio from "./ReglaPrecio";

export default class ReglaEspecial implements ReglaPrecio{

    calcularTotal(cantidad: number, precio: number): number {
        const numeroDescuentos = cantidad/3;
        let descuentoAplicado = 0.2*numeroDescuentos;
        if(descuentoAplicado > 0.5){
            descuentoAplicado = 0.5;
        }
        const precionNormal = cantidad * precio;
        return precionNormal*(1 - descuentoAplicado);
    }

    aplica(sku:string):boolean{
        return sku.startsWith("SP")
    }

}