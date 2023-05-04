<template>
  <Header />

      <slot  class="bg-secondary"/>

  <Footer />
</template>
<script setup>
import { useCarrito } from '~/stores/carrito';
const store = useCarrito();
</script>