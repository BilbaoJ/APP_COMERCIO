<template>
    <div class="bg-white flex flex-col justify-center items-center shadow-md rounded-lg">
        <button @click="mostrarDetalle">
            <img src="../static/box.png" alt="Producto" class="w-40 h-40">
            <h2 class="text-lg font-semibold text-black">{{ props.producto.nombre }}</h2>
            <h1 class="text-xl font-semibold text-black">${{ props.producto.precio_unitario }} COP</h1>
        </button>
        <DetalleProducto v-if="detalle" :producto="producto" @close="ocultarDetalle"/>
    </div>
</template>
<script setup lang="ts">
import DetalleProducto from './DetalleProducto.vue';
const props = defineProps({
  producto: { type: Object, required: true }
});

const detalle = ref(false);

const mostrarDetalle = () => {
    detalle.value = true;
};

const ocultarDetalle = () =>{
    detalle.value = false;
};

</script>