import ReglaEspecial from "./ReglaEspecial";
import ReglaNormal from "./ReglaNormal";
import ReglaPeso from "./ReglaPeso";
import ReglaPrecio from "./ReglaPrecio";

export default class ManejadorReglas{
    private regla: ReglaPrecio[];

    constructor(){
        this.regla = [new ReglaNormal(), new ReglaPeso(), new ReglaEspecial()];
    }

    public ejecutarRegla(cantidad:number, precio:number, sku:string): number | undefined{
        return this.regla.filter(regla => regla.aplica(sku) === true)[0].calcularTotal(cantidad, precio)
    }
}