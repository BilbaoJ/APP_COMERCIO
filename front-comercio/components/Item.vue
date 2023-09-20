<template>
    <div class="bg-white grid grid-cols-7 shadow-md rounded-lg w-5/6 p-8">
        <img src="../static/box.png" alt="Producto" class="w-20 h-20 justify-self-center col-span-2">
        <div class="grid grid-cols-1 grid-rows-2 col-span-2">
            <p class="text-sm">Codigo: {{ props.item_agregado.item.producto.sku }}</p>
            <p class="text-xl">{{ props.item_agregado.item.producto.nombre }}</p>
        </div>
        <div class="grid grid-cols-1 grid-rows-2 col-span-2">
            <p>Cantidad: {{ props.item_agregado.item.cantidad_compra }}</p>
            <p>Precio: ${{ props.item_agregado.precio_calculado }} COP</p>
        </div>
        <div class="flex ">
            <button @click="eliminarItemAgregado()" class=" bg-red-50 hover:bg-red-500 hover:text-white self-start flex p-2">
                <Icon icon="material-symbols:delete"/>
                <p class="text-xs">Eliminar</p>
            </button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import ComercioStore from '~/store/ComercioStore';
import { ItemAgregado } from '~/models/ItemAgregado.model';
import swal from 'sweetalert2';
const props = defineProps({
  item_agregado: { type: Object, required: true }
});

const eliminarItemAgregado = async () => {
    
    await swal.fire({
        title: 'Estás seguro de eliminar el producto?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, borrar'
    }).then((result) => {
        if (result.isConfirmed) {
            const item: ItemAgregado = {
                item: props.item_agregado.item,
                precio_calculado: props.item_agregado.precio_calculado
            }; 
            ComercioStore.eliminarProductoCarrito(item);
            ComercioStore.calcularPrecioCarrito();
        }
    })
}
</script>