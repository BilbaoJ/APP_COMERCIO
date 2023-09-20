import Item from "../model/Item";
import Producto from "../model/Producto";
import Tienda from "../model/Tienda";
import * as fs from 'fs';

const bd = fs.readFileSync('./BD/tienda.json', 'utf-8');
const bdJson = JSON.parse(bd);

const hacerCompraService = (itemsComprados: Item[], totalCompra: number) => {
    const tienda = obtenerTiendaDeBD();
    itemsComprados.map(item => {
        const productoComprado = item.getProducto()
        tienda.restarUnidadesDeProducto(productoComprado.sku, item.getCantidad());
        tienda.sumarVenta(totalCompra);
        const numeroEspacios = 2;
        const tiendaActualizada = JSON.stringify(tienda, null, numeroEspacios);
        fs.writeFileSync('./BD/tienda.json', tiendaActualizada, 'utf-8');
    })
};

const obtenerTiendaDeBD = (): Tienda => {
    const productos: Producto[] = bdJson.productos.map((producto:any) => 
    new Producto(producto.sku, 
        producto.nombre, 
        producto.descripcion, 
        producto.unidadesDisponibles, 
        producto.precioUnitario));
    return new Tienda(productos, bdJson.totalVentas);
};

export default {hacerCompraService}