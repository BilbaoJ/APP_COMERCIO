<template>
    <NuxtLayout :name="layout" class="">
        <div class=" bg-slate-400 w-full h-fit flex justify-center">
            <div class="rounded-full hover:bg-slate-500 w-fit h-fit absolute left-40 top-32">
                <NuxtLink href="/" class="bg-transparent rounded-full content-center flex items-center p-1">
                    <Icon icon="material-symbols:arrow-back" class="ml-3"/> 
                    <p>Volver</p>
                </NuxtLink>
            </div>
            <section class="bg-white min-h-screen h-fit w-5/6 my-10 p-10 grid grid-cols-8">
                <div class="col-span-6 grid grid-cols-1 gap-y-4">
                    <div v-for="item in ComercioStore.productos_carrito" >
                        <Item :item="item"></Item>
                    </div>
                </div> 
                <div class="col-span-2 bg-slate-400 h-1/2 w-full flex flex-col p-8 space-y-5">
                    <h1 class="text-2xl font-semibold">Detalle de compra</h1>
                    <p class="text-lg">Total: {{ total }} COP</p>
                    <button class="bg-black text-white rounded-full p-2">Ir a pagar</button>
                </div>
            </section>
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">
import Item from '~/components/Item.vue';
import ComercioStore from "../store/ComercioStore";
import { Icon } from '@iconify/vue';
const layout = "comercio";
var total = 10000;
</script>