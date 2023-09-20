import ReglaEspecial from "./ReglaEspecial";
import ReglaNormal from "./ReglaNormal";
import ReglaPeso from "./ReglaPeso";
import ReglaPrecio from "./ReglaPrecio";

export default class ManejadorReglas{
    private regla: ReglaPrecio | undefined;

    constructor(){
        this.regla = undefined;
    }

    public ejecutarRegla(cantidad:number, precio:number, sku:string): number | undefined{
        const primerasLetras = sku.substring(0,2);
        switch(primerasLetras){
            case "EA":
                this.regla = new ReglaNormal()
                break;
            case "WE":
                this.regla = new ReglaPeso()
                break;
            case "SP":
                this.regla = new ReglaEspecial()
                break
        }
        return this.regla?.calcularTotal(cantidad, precio);
    }
}