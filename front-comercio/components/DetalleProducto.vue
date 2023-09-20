<template>
    <div  class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-auto">
        <section class="bg-white w-3/5 h-4/6 grid grid-cols-2 grid-rows-1 justify-items-center self-center p-20">
            <div class="rounded-full hover:bg-[#E16036] w-fit h-fit absolute left-3/4 top-32">
                <button class="bg-transparent rounded-full w-10 h-10 content-center" @click="$emit('close')">
                    <Icon icon="material-symbols:close" class="ml-3"/>
                </button>
            </div>
            <div class="w-full flex flex-col justify-center space-y-5">
                <h1 class="text-2xl text-black">{{ props.producto.nombre }}</h1>
                <img src="../static/box.png" alt="Producto" class=" w-52 h-52 self-center">
            </div>
            <div class="w-full grid grid-cols-1 grid-rows-3 gap-0">
                <p class="text-lg h-fit">{{ props.producto.descripcion }}</p>
                <h1 class="text-xl font-semibold">${{ props.producto.precio_unitario }} COP</h1>
                <form class="flex space-x-4"  @submit.prevent="agregarProducto(); $emit('close')">
                    <div class="flex flex-col self-center">
                        <label for="cantidad" class="text-xs">Cantidad</label>
                        <input v-model="item_compra_agregado.item.cantidad_compra" id="cantidad" name="cantidad" type="number" class=" w-14 h-10 text-lg" min="1" required>
                    </div>
                    <button type="submit" class="bg-[#E16036] text-white w-44 h-10 rounded flex items-center justify-center space-x-2 self-center">
                        <p>Agregar</p>
                        <Icon icon="ph:shopping-cart-simple-bold" class="text-white w-5 h-5"></Icon>
                    </button>
                </form>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
import ComercioStore from '~/store/ComercioStore';
import { ItemAgregado } from '~/models/ItemAgregado.model';
import swal from 'sweetalert2';
const props = defineProps({
  producto: { type: Object, required: true }
});

const item_compra_agregado: ItemAgregado = {
    item:{
        producto:{
            sku:props.producto.sku,
            nombre:props.producto.nombre,
            descripcion:props.producto.descripcion,
            unidades_disponibles:props.producto.unidades_disponibles,
            precio_unitario:props.producto.precio_unitario
        },
        cantidad_compra:1
    },
    precio_calculado: 0
}

const hayStock = () => {
    return item_compra_agregado.item.cantidad_compra <= item_compra_agregado.item.producto.unidades_disponibles
}

const agregarProducto = async () => {
    if(hayStock()) {
        try {
            const data = item_compra_agregado.item;           
            const response:number = await $fetch("http://localhost:5000/producto/precio", {method: "POST", body: data});
            item_compra_agregado.precio_calculado = response;
                ComercioStore.agregarProductoCarrito(item_compra_agregado);
                ComercioStore.calcularPrecioCarrito();
                swal.fire({
                    title:'Producto agregado',
                    icon: 'success',
                    timer: 1000,
                    showConfirmButton: false
                });
        } catch (error) {
            console.log(error);
        }
    } else {
        await swal.fire({
            title:'No hay stock disponible',
            icon: 'warning',
            timer: 1000,
            showConfirmButton: false
        });
    }
}
</script>