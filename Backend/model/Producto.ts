export default class Producto{

    private _sku: string;
    private _nombre: string;
    private _descripcion: string;
    private _unidadesDisponibles: number;
    private _precioUnitario: number;

    constructor(sku:string, nombre:string, descripcion:string, unidadesDisponibles:number, precioUnitario:number){
        this._sku = sku;
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._unidadesDisponibles = unidadesDisponibles;
        this._precioUnitario = precioUnitario;
    }

    public get sku(): string {
        return this._sku;
    }
    public set sku(value: string) {
        this._sku = value;
    }
    
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }

    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }
    
    public get unidadesDisponibles(): number {
        return this._unidadesDisponibles;
    }
    public set unidadesDisponibles(value: number) {
        this._unidadesDisponibles = value;
    }

    public get precioUnitario(): number {
        return this._precioUnitario;
    }
    public set precioUnitario(value: number) {
        this._precioUnitario = value;
    }

    public hayUnidades(cantidad:number){
        return cantidad <= this._unidadesDisponibles;
    }

    public restarUnidades(cantidad:number){
        this._unidadesDisponibles -= cantidad;
    }

}