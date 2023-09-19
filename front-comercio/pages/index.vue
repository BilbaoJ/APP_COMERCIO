<template>
    <NuxtLayout :name="layout" class="">
      <div class=" bg-slate-400 w-full h-fit flex justify-center">
        <section class="bg-white min-h-screen h-fit w-5/6 my-10 p-10 grid grid-cols-5 auto-rows-auto gap-y-10 gap-x-4">
          <div v-for="producto in ComercioStore.productos" :key="producto.sku">
            <Producto :producto="producto"/>
          </div>
          
        </section>
      </div>
    </NuxtLayout>
</template>
<script setup lang="ts">
import ComercioStore from "../store/ComercioStore";
import Producto from "../components/Producto.vue"
const layout = "comercio";
  
</script>