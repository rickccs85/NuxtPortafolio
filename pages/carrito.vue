
<template>

    <div class="bg-gray-100 px-4 py-8 lg:p-8">
        <h1 class="mb-10 text-center text-2xl font-bold">Mi Carrito</h1>
        <div class="mx-auto max-w-5xl justify-center  md:flex md:space-x-6 xl:px-0">
        <div class="flex flex-col">
            <div v-if="store.carrito.length == 0 " class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            No hay productos que mostrar.
            <nuxt-link to="/">Para comenzar selecciona un producto</nuxt-link>
            </div>
            <div v-else v-for="producto in store.carrito" :key="store.carrito.id" class="rounded">
                <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img :src="producto.thumbnail" :alt="producto.title" class="w-full rounded-lg sm:w-40" />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div class="mt-5 sm:mt-0">
                            <h2 class="text-lg font-bold text-gray-900">{{ producto.title }}</h2>
                            <p class="mt-1 text-xs text-gray-700">U$D {{ producto.price }}</p>
                        </div>
                        <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                            <div class="flex items-center border-gray-100">
                                <span
                                    class="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                    - </span>
                                <input class="h-8 w-8 border bg-white text-center text-xs outline-none" type="number"
                                    :value="producto.quantity" min="1" />
                                <span
                                    class="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                                    + </span>
                            </div>
                            <div class="flex items-center space-x-4">
                                <p class="text-sm">Sub Total U$D {{ producto.price * producto.quantity }} </p>
                                <div @click="store.removerProducto(producto.id)" class="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor"
                                        class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
            <!-- Sub total -->
            <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div class="mb-2 flex justify-between">
                    <p class="text-gray-700">Subtotal</p>
                    <p class="text-gray-700">U$D {{subTotal }}</p>
                </div>
                <div class="flex justify-between">
                    <p class="text-gray-700">Shipping</p>
                    <p class="text-gray-700">GRATIS</p>
                </div>
                <hr class="my-4" />
                <div class="flex justify-between">
                    <p class="text-lg font-bold">Total</p>
                    <div class="">
                        <p class="mb-1 text-lg font-bold">U$D {{subTotal }}</p>
                        <p class="text-sm text-gray-700">I.V.A. Incluido</p>
                    </div>
                </div>
                <button class="mt-6 w-full rounded-md btn btn-accent">Check out</button>
            </div>
        </div>
    </div>

 </template>

<script setup>
import { useCarrito } from '~/stores/carrito';
const store = useCarrito();
let subTotal = store.subTotal
</script>