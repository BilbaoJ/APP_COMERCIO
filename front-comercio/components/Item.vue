<template>
    <div class="bg-white grid grid-cols-3 shadow-md rounded-lg w-5/6 p-8">
        <img src="../static/box.png" alt="Producto" class="w-20 h-20 justify-self-center">
        <div class="grid grid-cols-1 grid-rows-2">
            <p class="text-sm">Codigo: {{ props.item.producto.sku }}</p>
            <p class="text-xl">{{ props.item.producto.nombre }}</p>
        </div>
        <div class="grid grid-cols-1 grid-rows-2">
            <p>Cantidad: {{ props.item.cantidad_compra }}</p>
            <p>Precio: ${{ props.item.producto.precio_unitario }} COP</p>
        </div>
        
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
  item: { type: Object, required: true }
});
</script>