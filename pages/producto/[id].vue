<script setup>
import { useCarrito } from '~/stores/carrito';
import { ref } from 'vue'
const store = useCarrito();
const route = useRoute();
const id = route.params.id;
const { data: producto } = await useFetch(`https://api.mercadolibre.com/items/${id}`);
const { data: descripcion } = await useFetch(`https://api.mercadolibre.com/items/${id}/description`);
const imageZoom = ref(producto.value.pictures[0].id);
const title = ref(producto.value.title)
const description = ref(descripcion.value.plain_text)
useSeoMeta({
    title: title,
    ogTitle: title,
    description: description,
    ogDescription: description,
    ogImage: imageZoom,
    twitterCard: 'summary_large_image',
})
const category_id = ref(producto.value.category_id)
const { data: categorias } = await useFetch(`https://api.mercadolibre.com/categories/${producto.value.category_id}`)
const categoria = ref(categorias.value.name)
const categoriaRoot = ref(categorias.value.path_from_root[0].name)
const categoriaRootId = ref(categorias.value.path_from_root[0].id)
</script>

<template>
    <div class=" p-4 lg:p-8">
        <div class="text-sm breadcrumbs">
            <ul>
                <li>
                    <router-link to="">
                        <span @click="$router.back()"> Volver </span>
                    </router-link>
                </li>
                <li>
                    <router-link :to="`/categoria/${categoriaRootId}`">
                        {{ categoriaRoot }}
                    </router-link>
                </li>
                <li>
                    <router-link :to="`/categoria/${category_id}`">
                        {{ categoria }}
                    </router-link>
                </li>

            </ul>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div class="flex-1 justify-center items-center sticky top-0">

                <div v-bind:style="{ 'background-image': 'url(https://http2.mlstatic.com/D_' + imageZoom + '-O.webp)' }"
                    class="h-96 md:h-96 rounded-lg bg-blend-multiply bg-gray-50 mb-4 flex bg-contain bg-center bg-no-repeat items-center justify-center">
                </div>

                <div class="grid  grid-cols-gap-2">
                    <div @click="imageZoom = data.id" v-for="(data, index) in producto.pictures"
                        :class="imageZoom == data.id ? 'border-2 border-primary' : ''" :key="index"
                        v-bind:style="{ 'background-image': 'url(https://http2.mlstatic.com/D_' + data.id + '-O.webp)' }"
                        class="h-11 w-11 rounded-xs bg-gray-100 bg-blend-multiply flex bg-contain  bg-center bg-no-repeat items-center justify-center">
                    </div>
                </div>
            </div>
            <div>
                <h1 class="text-4xl font-bold mb-4">{{ producto.title }}</h1>

                <div class="flex items-center mb-4">
                    <span class="text-1xl font-bold mr-2">U$D {{ producto.price }}</span>

                </div>
                <button
                    @click="store.agregarProducto({ id: producto.id, title: producto.title, price: producto.price, thumbnail: producto.thumbnail, quantity: 1, subTotal: producto.price })"
                    class="btn gap-2 mb-4">Agregar al carrito</button>
                <p class="t mb-4 whitespace-pre-line">{{ descripcion.plain_text }}</p>
            </div>
        </div>

    </div>
</template>