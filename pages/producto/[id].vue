<template>
    <div class="container p-10">
        <div class="text-sm breadcrumbs">
            <ul>
                <li>
                    <router-link to="">
                        <span @click="$router.back()"> Volver </span>
                    </router-link>
                </li>
                <li>
                    <NuxtLink to="/">
                        Home
                    </NuxtLink>
                </li>
                <li>
                    <a>

                        {{ producto.category_id }}
                    </a>
                </li>

            </ul>
        </div>
        <div class="container mx-auto py-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="flex justify-center items-center">
                    <img :src="'https://http2.mlstatic.com/D_' + producto.thumbnail_id + '-O.webp'"
                        alt="Imagen del producto" class="h-90 object-contain">
                </div>
                <div>
                    <h1 class="text-3xl font-bold mb-4">{{ producto.title }}</h1>
                    <p class="text-gray-600 text-lg mb-4">{{ producto.descripcion }}</p>
                    <div class="flex items-center mb-4">
                        <span class="text-2xl font-bold mr-2">{{ producto.price }}</span>
                        <span class="text-gray-600">{{ producto.moneda }}</span>
                    </div>
                    <button @click="store.agregarProducto({id:producto.id, title:producto.title, price:producto.price, thumbnail:producto.thumbnail,quantity:1,subTotal:producto.price})"
                        class="btn gap-2">Agregar al carrito</button>
                </div>
            </div>
        </div>
      </div>
</template>

<script setup>
import { useCarrito } from '~/stores/carrito';
const store = useCarrito();
const route = useRoute();
const id = route.params.id;
const { data: producto } = await useFetch(`https://api.mercadolibre.com/items/${id}`);

</script>