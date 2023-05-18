
<template>
 
  <div class="grid grid-cols-2 lg:grid-cols-5 gap-2 p-4">
    <div v-for="producto in productos" :key="producto.id" class="card rounded-lg card-compact w-full bg-white shadow">
      <figure>
        <div
          v-bind:style="{ 'background-image': 'url(https://http2.mlstatic.com/D_' + producto.thumbnail_id + '-O.webp)' }"
          class="border-b-1 h-56 w-full bg-contain bg-center bg-no-repeat"></div>

      </figure>
      <div class="card-body">
        <NuxtLink :to="`/producto/${producto.id}`">
          <h4 class="line-clamp-2 group-hover:line-clamp-4  hover:underline">{{ producto.title }}</h4>
          <h1>U$D {{ producto.price }}</h1>
        </NuxtLink>
        <div class="card-actions justify-end">
       
        </div>
      </div>

    </div>
  </div>
  <div v-if="pendiente" class="flex justify-center p-8">
        <progress class="progress w-56 "></progress>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { defineProps } from 'vue'

const props = defineProps({
  categoria: {
    type: String,
    required: true
  }
})
const productos = ref([]);
const offset = ref(0);
const totalResults = ref(0);
const pendiente = ref(false);

onMounted(() => {
  cargarProductos(props.categoria);
});


const cargarProductos = (categoria) => {
  pendiente.value = true;

  fetch(`https://api.mercadolibre.com/sites/MLV/search?seller_id=96773693&offset=${offset.value}&limit=5&category=${categoria}`)
    .then((response) => response.json())
    .then((data) => {
      agregarProducto(data.results);
      pendiente.value = false;
      totalResults.value = data.paging.total;

    });
};

const agregarProducto = (nuevosProductos) => {
  nuevosProductos.forEach((producto) => {
    productos.value.push(producto);
  });
};
</script>
