<template>
    <div class="carousel w-full">
  <div id="slide1" class="carousel-item w-full relative max-w-screen-xl h-96">
    <img src="https://http2.mlstatic.com/D_NQ_967191-MLA54964809759_042023-OO.webp" class="object-cover"/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item w-full relative">
    <img src="https://http2.mlstatic.com/D_NQ_654264-MLA54970421849_042023-OO.webp" class="object-cover"  />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item w-full relative">
    <img src="https://http2.mlstatic.com/D_NQ_988304-MLA54973417046_042023-OO.webp" class="object-cover"  />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
  
    </div>
  </div> 
  </div>
</template>