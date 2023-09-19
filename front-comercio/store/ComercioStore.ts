import { reactive } from 'vue';
import Producto from '~/models/Producto.model';

const comercioStore = reactive({
    productos: [
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
        },
        {
            sku: "EA13423",
            nombre: "Fruta",
            unidades_disponibles: 5,
            descripcion: "fruta",
            precio_unitario: 1000
        }
    ] as Producto[],

});

export default comercioStore;