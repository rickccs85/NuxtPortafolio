import { defineStore, storeToRefs } from 'pinia';
import axios from 'axios';

export const useCarrito = defineStore('carrito', {
    state: () => ({
        carrito: [],
        categorias: [],
        productos: [],
    }),
    getters: {
        carritoCuentaTotal(state) {
            return state.carrito.length
        },
        subTotal: (state) => state.carrito.reduce((total, item) => total + item.price * item.quantity, 0)
        ,
        productosCheaperThan(state) {
            return (price) => (
                state.carrito.filter(product =>
                    product.price < price
                )
            )
        }
    },
    actions: {
        async cargarCategorias() {
            const { data } = await axios.get("https://api.mercadolibre.com/sites/MLV/categories");
            this.categorias = data;
        },
        async agregarProducto(productoNuevo) {

            //Cheaqueamos que el productos exista
            const productoExistente = this.carrito.find(productos => {
                return productos.id === productoNuevo.id
            })
            if (productoExistente) {
                let productoExistenteIndex = this.carrito.findIndex(
                    item => item.productId === productoExistente.productId
                )
                productoExistente.quantity = productoExistente.quantity + 1
                productoExistente.subTotal = productoNuevo.price * productoExistente.quantity
                this.carrito[productoExistenteIndex] = productoExistente
            } else {
                this.carrito.push(productoNuevo)
            }
        },
        removerProducto(id) {
            const indexProducto = this.carrito.findIndex(productos => {
                return productos.id === id
            })
            this.carrito.splice(indexProducto, 1)

        },
        async traerCategoria(category_id) {
            const response = await fetch("https://api.mercadolibre.com/categories/" + category_id)
            const data = await response.json();
            return data.name
        },
        async cargarProductosMl() {
            let allProducts = [];
            let page = 0;
            let totalPages = 1;

            while (page < totalPages) {
                const { data } = await axios.get(`https://api.mercadolibre.com/sites/MLV/search?seller_id=96773693&offset=${page * 50}`);
                const producto = data.results;
                allProducts.push(...producto);
                totalPages = Math.ceil(data.paging.total / data.paging.limit);
                page++;
            }

            const products = allProducts.map(product => ({
                id: product.id,
                title: product.title,
                price: product.price,
                category_id: product.category_id,
                thumbnail_id: product.thumbnail_id,
                permalink: product.permalink,
                sold_quantity: product.sold_quantity,
                available_quantity: product.available_quantity,
                shipping: {
                    free_shipping: product.shipping.free_shipping,
                    mode: product.shipping.mode,
                    tags: product.shipping.tags,
                    logistic_type: product.shipping.logistic_type,
                    store_pick_up: product.shipping.store_pick_up
                },
                attributes: product.attributes.map(attribute => ({
                    name: attribute.name,
                    value_name: attribute.value_name
                }))
            }));
            this.productos = products;
        }
    }

})