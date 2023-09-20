<template>
    <NuxtLayout :name="layout" class="">
        <div class=" bg-[#e2cdc6] w-full h-fit flex justify-center">
            <div class="rounded-full hover:bg-[#E16036] w-fit h-fit absolute left-40 top-32">
                <NuxtLink href="/" class="bg-transparent rounded-full content-center flex items-center p-1">
                    <Icon icon="material-symbols:arrow-back" class="ml-3"/> 
                    <p>Volver</p>
                </NuxtLink>
            </div>
            <section class="bg-white min-h-screen h-fit w-5/6 my-10 p-10 grid grid-cols-8">
                <div class="col-span-6 grid grid-cols-1 gap-y-4">
                    <div v-for="item_agregado in ComercioStore.productos_carrito" >
                        <Item :item_agregado="item_agregado"></Item>
                    </div>
                </div> 
                <div class="col-span-2 bg-[#e2cdc6] h-1/2 w-full flex flex-col p-8 space-y-5">
                    <h1 class="text-2xl font-semibold">Detalle de compra</h1>
                    <p class="text-lg">Total: {{ ComercioStore.total_compra }} COP</p>
                    <button @click="terminarCompra()" class="bg-[#E16036] text-white rounded-full p-2">Ir a pagar</button>
                </div>
            </section>
        </div>
    </NuxtLayout>
</template>
<script setup lang="ts">
import Item from '~/components/Item.vue';
import ComercioStore from "~/store/ComercioStore";
import { Icon } from '@iconify/vue';
import { ItemAgregado } from '~/models/ItemAgregado.model';
import ItemCompra from '~/models/Item.model';
const layout = "comercio";
import swal from 'sweetalert2';

const terminarCompra = async () =>{
    await swal.fire({
        title: 'Seguro que quiere finalizar la compra?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, finalizar'
    }).then(async (result) => {
        if (result.isConfirmed) {
            try {
                const items = obtenerSoloItems(ComercioStore.productos_carrito);
                const data = {
                    productos_carrito: items,
                    total_compra: ComercioStore.total_compra
                };
                const response:any = await $fetch("http://localhost:5000/producto/venta", {method: "PUT", body: data});
                console.log(response);
                
                if (response.ok) {
                        swal.fire({
                            title:'Compra finalizada!',
                            text:'Gracias por su compra',
                            icon: 'success',
                            timer: 2000,
                            showConfirmButton: false
                        });
                        ComercioStore.vaciar_carrito();
                        const router = useRouter();
                        router.push('/');
                    } else {
                        swal.fire({
                            title:'Algo inesperado pasó, no pudo realizarse la compra',
                            icon: 'error',
                            timer: 2000,
                            showConfirmButton: false
                        });
                    }
            } catch (error) {
                console.log(error);
            }
        }
    })
}

const obtenerSoloItems = (items_agregados: ItemAgregado[]) => {
    const listaItems: ItemCompra[] = items_agregados.map((item_carrito) => item_carrito.item);
    return listaItems;
}
</script>