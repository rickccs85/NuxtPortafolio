<template>
    <Carousel />
    <div class="w-full bg-base-100 py-8 shadow-md ">
  <h2 class="mx-2 text-center text-2xl font-bold  tracking-widemd:text-3xl">Las Mejores Marcas</h2>
  <!-- <hr class="mx-auto mt-4 h-1 w-32 border-0 bg-blue-600" /> -->

  <div class="container mx-auto flex flex-wrap items-center justify-center space-y-1">
    <div class="w-40 object-contain px-6 grayscale">
      <img src="~/assets/img/decakila.png" alt="Corporate Inc" />
    </div>
    <div class="w-40 object-contain px-6 grayscale">
      <img src="~/assets/img/emtop.png" alt="Corporate Inc" />
    </div>
    <div class="w-40 object-contain px-6 grayscale">
      <img src="~/assets/img/matrix.png" alt="Corporate Inc" />
    </div>
    <div class="w-40 object-contain px-6 grayscale">
      <img src="~/assets/img/aoc.png" alt="Corporate Inc" />
    </div>
    <div class="w-40 object-contain px-6 grayscale">
      <img src="~/assets/img/genius.png" alt="Corporate Inc" />
    </div>
  </div>
</div>
    <div class="px-4 pt-4 text-3xl">Las Herramientas más compradas</div>
    <product-grid-relacionados categoria="MLV424985" />
    <div class="px-4 pt-4 text-3xl">Compra Lo Mejor en Audífonos</div>
    <product-grid-relacionados categoria="MLV8901" />
    <div class="px-4 pt-4 text-3xl">Lo último en Equipos de Bombeo</div>
    <product-grid-relacionados categoria="MLV442454" />
    <div class="px-4 pt-4 text-3xl">Lo último para tu Vehículo</div>
    <product-grid-relacionados categoria="MLV1747" />
    <ProductGrid />
</template>
MLV424985