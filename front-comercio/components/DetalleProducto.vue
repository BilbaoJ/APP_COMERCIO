<template>
    <div  class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-auto">
        <section class="bg-white w-3/5 h-4/6 grid grid-cols-2 grid-rows-1 justify-items-center self-center p-20">
            <div class="rounded-full hover:bg-slate-500 w-fit h-fit absolute left-3/4 top-32">
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
                <form class="flex space-x-4"  @submit.prevent="$emit('close')">
                    <div class="flex flex-col self-center">
                        <label for="cantidad" class="text-xs">Cantidad</label>
                        <input id="cantidad" name="cantidad" type="number" class=" w-14 h-10 text-lg" min="1" value="1" required>
                    </div>
                    <button type="submit" class="bg-black text-white w-44 h-10 rounded flex items-center justify-center space-x-2 self-center">
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
const props = defineProps({
  producto: { type: Object, required: true }
});
</script>