<script setup>
const isActive = false;
import { useCarrito } from '~/stores/carrito';
const store = useCarrito();
import { useRouter } from 'vue-router'

const router = useRouter()
let searchTerm = ''
function submit() {
  const cleanedTerm = cleanSearchTerm(searchTerm)
  router.push(`/busqueda/${cleanedTerm}`)
}
function cleanSearchTerm(term) {
  return term.trim().toLowerCase()
}
</script>
<template>
  <div class="navbar bg-base-100 sticky top-0 z-50 shadow-xl">
    <div class="navbar-start">
      <div class="dropdown dropdown-hover">
        <label tabindex="0" class="btn btn-circle btn-ghost">
          <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
            viewBox="0 0 512 512">
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        </label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box ">
          <li v-for="categoria in store.categorias"><NuxtLink :to="`/categoria/${categoria.id}`">{{ categoria.name }}</NuxtLink></li>
        </ul>
      </div>
      <NuxtLink to="/">
        <img class="h-12 max-w-none pl-2" src="~/assets/img/tugangaelectronic-logo-32.svg">
      </NuxtLink>
      
        <div class="lg:visible md:visible invisible form-control pl-2 w-full">
          <form @submit.prevent="submit">
          <input v-model="searchTerm" type="text" placeholder="Encuentra +600 productos" class="input input-bordered w-full max-w-lg" />
        </form>
        </div>
    
    </div>
    <div class="navbar-center">

    </div>
    <div class="navbar-end">
      <button class="btn gap-2 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
        </svg>
        <label class="swap">
          <input type="checkbox" />
          <div class="swap-on">USD</div>
          <div class="swap-off">VES</div>
        </label>
      </button>

      <div class="dropdown dropdown-hover dropdown-end">
        <label tabindex="0">
          <button class="btn btn-ghost btn-circle ml-2 ">
            <div class="indicator">
              <NuxtLink to="/carrito">
                <label for="shopping-cart" class="drawer-button"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8"
                    viewBox="0 0 24 24" id="shopping-cart-alt">
                    <path fill="#000000"
                      d="M21.5,15a3,3,0,0,0-1.9-2.78l1.87-7a1,1,0,0,0-.18-.87A1,1,0,0,0,20.5,4H6.8L6.47,2.74A1,1,0,0,0,5.5,2h-2V4H4.73l2.48,9.26a1,1,0,0,0,1,.74H18.5a1,1,0,0,1,0,2H5.5a1,1,0,0,0,0,2H6.68a3,3,0,1,0,5.64,0h2.36a3,3,0,1,0,5.82,1,2.94,2.94,0,0,0-.4-1.47A3,3,0,0,0,21.5,15Zm-3.91-3H9L7.34,6H19.2ZM9.5,20a1,1,0,1,1,1-1A1,1,0,0,1,9.5,20Zm8,0a1,1,0,1,1,1-1A1,1,0,0,1,17.5,20Z">
                    </path>
                  </svg></label>
              </NuxtLink>
              <span class="badge badge-xs  indicator-item">{{ store.carritoCuentaTotal }}</span>
            </div>
          </button>
        </label>
        <div tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-auto">
          <Carrito />
        </div>
      </div>
    </div>
  </div>
</template>