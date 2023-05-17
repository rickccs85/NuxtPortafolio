

<script setup>

import { useCarrito } from '~/stores/carrito';
import { ref, onMounted  } from 'vue';



const store = useCarrito();
const route = useRoute();
const category = route.params.id;
const offset = ref(0);
const totalResults = ref(0);
const productos = ref([]);
const pendiente = ref(false);

onMounted(() => {
    cargarProductos();
  
});

const cargarProductos = () => {
    pendiente.value = true;

    fetch(`https://api.mercadolibre.com/sites/MLV/search?seller_id=96773693&offset=${offset.value}&limit=50&category=${category}`)
        .then((response) => response.json())
        .then((data) => {
            agregarProductos(data.results);
            pendiente.value = false;
            totalResults.value = data.paging.total;
            
        });
};

const agregarProductos = (nuevosProductos) => {
    nuevosProductos.forEach((producto) => {
        productos.value.push(producto);
    });
};
</script>
<template>
   <div class="position-relative">
    <div class="d-flex justify-content-center align-items-center w-100 position-fixed bottom-0" v-if="!pendiente && productos.length === 0">
      <p class="text-center text-xl">No se han encontrado resultados, intenta con otro término de búsqueda</p>
    </div>
  </div>
        <div class="grid grid-cols-2 lg:grid-cols-5 gap-2 p-4">
        <div v-for="producto in productos" :key="producto.id" class="card card-compact w-full bg-base-100 shadow">
                           <figure>
                            <div v-bind:style="{ 'background-image': 'url(https://http2.mlstatic.com/D_' + producto.thumbnail_id + '-O.webp)' }" class="border-b-1 h-56 w-full bg-contain bg-center bg-no-repeat" ></div>
   
                </figure>
                <div class="card-body"><NuxtLink :to="`/producto/${producto.id}`">
                    <h4 class="line-clamp-2 group-hover:line-clamp-4  hover:underline">{{ producto.title }}</h4>
                    <h1>U$D {{ producto.price }}</h1></NuxtLink>
                                      <div class="card-actions justify-end">
                        <button
                            @click="addToCart(store.agregarProducto({ id: producto.id, title: producto.title, price: producto.price, thumbnail: producto.thumbnail, quantity: 1, subTotal: producto.price }))"
                            class="btn btn-xs ">Añadir a Carrito</button>
                    </div>
                </div>
            
        </div>
    </div>
    <div v-if="pendiente" class="flex justify-center p-8">
        <progress class="progress w-56 "></progress>
    </div>
</template>