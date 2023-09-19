<template>
    <div  class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-auto">
        <section class="bg-white w-4/5 h-4/6 grid grid-cols-2 grid-rows-1 justify-items-center self-center p-20">
            <div class="rounded-full hover:bg-slate-500 w-fit h-fit absolute left-32 top-32">
                <button class="bg-transparent rounded-full w-10 h-10 content-center" @click="$emit('close')">
                    <Icon icon="material-symbols:close" class="ml-3"/>
                </button>
            </div>
            <div class="w-full flex flex-col justify-center items-center">
                <h1 class="text-2xl text-black">{{ props.producto.nombre }}</h1>
                <img src="../static/box.png" alt="Producto" class=" w-52 h-52">
            </div>
            <div class="w-full grid grid-cols-1 grid-rows-3">
                <p>{{ props.producto.descripcion }}</p>
                <h1>${{ props.producto.precio_unitario }} COP</h1>
                <div class="flex space-x-4">
                    <input type="number" class=" w-14 h-10 text-lg" min="1" value="1">
                    <button class="bg-black text-white w-40 h-10 rounded">Agregar</button>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
const props = defineProps({
  producto: { type: Object, required: true }
});
</script>