import { reactive } from 'vue';
import { Item } from '~/models/Item.model';
import Producto from '~/models/Producto.model';

const comercioStore = reactive({
    productos: [
        {
            sku: "EA13423",
            nombre: "Fruta variada",
            unidades_disponibles: 5,
            descripcion: "fruta frutafruta fruta fruta fruta fruta fruta fruta fruta fruta fruta",
            precio_unitario: 1000
        },
        {
            sku: "EA13423",
            nombre: "Fruta",
            unidades_disponibles: 5,
            descripcion: "fruta",
            precio_unitario: 1000
        },
        {
            sku: "EA13423",
            nombre: "Fruta",
            unidades_disponibles: 5,
            descripcion: "fruta",
            precio_unitario: 1000
        }
    ] as Producto[],
    productos_carrito:[] as Item[]
});

export default comercioStore;