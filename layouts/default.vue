<template>
  <Header />

      <slot  class="bg-secondary"/>

  <Footer />
</template>
<script setup>
import { onMounted } from 'vue';
import { useCarrito } from '~/stores/carrito';
const store = useCarrito();
console.log("Bien")
onMounted(() => {
  // console.log( store.cargarProductosMl());
});
</script>