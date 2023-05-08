<template>
  <Header />

      <slot  class="bg-secondary min-h-screen"/>

  <Footer />
</template>
<script setup>
import { useCarrito } from '~/stores/carrito';
const store = useCarrito();
</script>