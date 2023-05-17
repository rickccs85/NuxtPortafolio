<template>
    <div>
        <ul>
            <li v-for="product in store.carrito" :key="store.carrito.id">
                {{ product.id }} {{ product.title }} {{ product.price }} {{ product.quantity }} {{ product.subTotal }}
                <span @click="store.removerProducto(product.id)">X</span>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { useCarrito } from '~/stores/carrito';
const store = useCarrito();
</script>