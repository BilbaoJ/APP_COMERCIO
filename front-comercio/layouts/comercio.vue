<template>
    <nav class=" bg-gray-900 h-fit flex flex-row justify-between p-5">
        <h1 class="text-3xl text-white">APP COMERCIO</h1>
        <NuxtLink href="/carrito">
            <Icon icon="ph:shopping-cart-simple-bold" class="text-white w-10 h-10"></Icon>
        </NuxtLink>
    </nav>
    <slot />
</template>
<script setup lang="ts">
import { Icon } from '@iconify/vue';
</script>