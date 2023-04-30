<template>
  <div class="navbar bg-base-100 sticky top-0 z-50 shadow-xl">
    <div class="navbar-start">
      <div class="dropdown dropdown-hover ">
        <label tabindex="0" class="btn btn-circle swap btn-ghost 	 swap-rotate">
<input type="checkbox">
          <!-- hamburger icon -->

            <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
              viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
        
          <!-- close icon -->
          
            <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
              <polygon
                points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
       

        </label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
        </ul>
      </div>
      <NuxtLink to="/"><img class="h-14 pl-2" src="~/assets/img/tugangaelectronic-logo-32.svg"></NuxtLink>
      <div class="form-control pl-2 w-full">
        <input type="text" placeholder="Encuentra +600 productos" class="input input-bordered" />
      </div>
    </div>

    <div class="navbar-center">
      <a class="btn btn-ghost normal-case text-xl"></a>
    </div>
    <div class="navbar-end">
      <button class="btn gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <label class="swap">
          <input type="checkbox" />
          <div class="swap-on">USD</div>
          <div class="swap-off">VES</div>
        </label>
      </button>

      <button class="btn btn-ghost btn-circle ml-2 ">
        <div class="indicator">
          <NuxtLink to="/carrito">
          <label for="shopping-cart" class="drawer-button"><svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8"
              viewBox="0 0 24 24" id="shopping-cart-alt">
              <path fill="#000000"
                d="M21.5,15a3,3,0,0,0-1.9-2.78l1.87-7a1,1,0,0,0-.18-.87A1,1,0,0,0,20.5,4H6.8L6.47,2.74A1,1,0,0,0,5.5,2h-2V4H4.73l2.48,9.26a1,1,0,0,0,1,.74H18.5a1,1,0,0,1,0,2H5.5a1,1,0,0,0,0,2H6.68a3,3,0,1,0,5.64,0h2.36a3,3,0,1,0,5.82,1,2.94,2.94,0,0,0-.4-1.47A3,3,0,0,0,21.5,15Zm-3.91-3H9L7.34,6H19.2ZM9.5,20a1,1,0,1,1,1-1A1,1,0,0,1,9.5,20Zm8,0a1,1,0,1,1,1-1A1,1,0,0,1,17.5,20Z">
              </path>
            </svg></label> </NuxtLink >
          <span class="badge badge-xs  indicator-item">{{ store.carritoCuentaTotal }}</span>
        </div>
      </button>
    </div>
  </div>
</template>
<script setup>
const isActive = false;
import { useCarrito } from '~/stores/carrito';
const store = useCarrito();
</script>
