
<template>
    <div class=" bg-gray-100 px-4 py-8 lg:p-8">
        <h1 class="mb-10 text-center text-2xl font-bold">Mi Carrito</h1>
        <div class="mx-auto max-w-5xl justify-center  md:flex md:space-x-6 xl:px-0">
        <div class="flex flex-col">
            <div v-if="store.productos.length == 0 " class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            No hay productos que mostrar.
            <nuxt-link to="/">Volver al Inicio</nuxt-link>
            </div>
            <div v-else v-for="producto in store.productos" :key="store.productos.id" class="rounded">
                <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                    <img :src="producto.thumbnail" :alt="producto.title" class="w-full rounded-lg sm:w-40" />
                    <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                        <div class="mt-5 sm:mt-0">
                            <h2 class="text-lg font-bold text-gray-900">{{ producto.title }}</h2>
                            <p class="mt-1 text-xs text-gray-700">USD {{ producto.price }}</p>
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
                                <p class="text-sm">259.000 ₭</p>
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
                    <p class="text-gray-700">$129.99</p>
                </div>
                <div class="flex justify-between">
                    <p class="text-gray-700">Shipping</p>
                    <p class="text-gray-700">$4.99</p>
                </div>
                <hr class="my-4" />
                <div class="flex justify-between">
                    <p class="text-lg font-bold">Total</p>
                    <div class="">
                        <p class="mb-1 text-lg font-bold">$134.98 USD</p>
                        <p class="text-sm text-gray-700">including VAT</p>
                    </div>
                </div>
                <button class="mt-6 w-full rounded-md btn btn-accent">Check out</button>
            </div>
        </div>
    </div>

    <!--  <div class="p-6 relative">
        <div class="mb-6 flex w-full items-center justify-between">
            <div class="text-2xl font-medium">My Cart</div> <button
                class="text-sm uppercase opacity-80 hover:opacity-100">Refrescar</button>
        </div>
        <div class="overflow-y-auto" style="height: 80%;">
            <div v-for="producto in store.productos" :key="store.productos.id" class="mb-2 flex w-full">
            

                <img loading="lazy" class="w-20 flex-none bg-white" :src="producto.thumbnail" :alt="producto.title">
                <div class="ml-4 flex w-full flex-col justify-between">
                    <div class="flex w-full justify-between">
                        <di>
                            <p class="text-lg font-medium">{{ producto.title }}    {{ producto.id }} {{ producto.quantity }}</p>
                            <p class="text-sm">{{ producto.price }}</p>
                        </di>
                        <p class="font-medium">{{ producto.subTotal }}</p>
                    </div>
                </div>
                <span @click="store.removerProducto(producto.id)">X</span>
            </div>

            <div class="mb-4 flex w-full">
                <button
                    class="mr-2 flex h-8 w-8 items-center justify-center border border-white/40 bg-white/0 hover:bg-white/10">
                    <div>
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="#fff" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision"
                            class="hover:text-accent-3 h-6 w-6">
                            <path d="M18 6L6 18"></path>
                            <path d="M6 6l12 12"></path>
                        </svg>
                    </div>
                </button>
                <div class="flex h-8 w-full border border-white/40">
                    <div class="flex h-full items-center px-2 ">1</div> <button
                        class="ml-auto flex h-8 w-8 items-center justify-center border-l border-white/40 bg-white/0 hover:bg-white/10">
                        <div>
                     
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M5 12H19" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </svg>
                        </div>
                    </button>
                    <button
                        class="flex h-8 w-8 items-center justify-center border-l border-white/40 bg-white/0 hover:bg-white/10">
                        <div>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                <path d="M12 5V19" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path d="M5 12H19" stroke="#fff" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </div>
        <button
            class="mt-6 flex w-full items-center justify-center bg-white p-3 text-sm font-medium uppercase text-black opacity-90 hover:opacity-100">
            <span>Proceed to Checkout</span>
        </button>
    </div> --></template>

<script setup>
import { useCarrito } from '~/stores/carrito';
const store = useCarrito();
</script>