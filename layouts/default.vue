<template>
  <Header />
<div class="container mx-auto bg-secondary max-w-full">
      <slot  />
    </div>
  <Footer />
</template>
<script setup>
import { useCarrito } from '~/stores/carrito';
const store = useCarrito();
</script>