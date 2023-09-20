import { reactive } from 'vue';
import { ItemAgregado } from '~/models/ItemAgregado.model';
import Producto from '~/models/Producto.model';

const comercioStore = reactive({
    productos: [] as Producto[],
    productos_carrito:[] as ItemAgregado[],
    total_compra: 0,
    actualizarProductos(payload: Producto[]){
        this.productos = payload;
    },
    agregarProductoCarrito(payload: ItemAgregado){
        this.productos_carrito.push(payload);
    },
    eliminarProductoCarrito(payload: ItemAgregado){
        this.productos_carrito = this.productos_carrito.filter(item_agregado => item_agregado.item.producto.sku !== payload.item.producto.sku);
    },
    calcularPrecioCarrito(){
        var precios: number[] = this.productos_carrito.map(item_agregado => item_agregado.precio_calculado);
        this.total_compra = precios.reduce((suma, precio)=> suma + precio, 0);
    },
    vaciar_carrito(){
        this.productos_carrito = [];
        this.total_compra = 0;
        this.productos = [];
    }
});

export default comercioStore;