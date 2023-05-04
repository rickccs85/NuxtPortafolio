import { defineStore } from 'pinia';

import axios from "axios";
export const useCarrito = defineStore('carrito', {
    state: () => ({
        productos: [],
        categorias: null,
        catalogo: null
    }),
    getters: {
        carritoCuentaTotal(state) {
            return state.productos.length
        },

        productosCheaperThan(state) {
            return (price) => (
                state.productos.filter(product =>
                    product.price < price
                )
            )
        }
    },
    actions: {
        fetchCategorias() {
            const { data: categorias } =  useFetch("https://api.mercadolibre.com/sites/MLV/categories");
            this.categorias = categorias;
           },
        async agregarProducto(productoNuevo) {

            //Cheaqueamos que el productos exista
            const productoExistente = this.productos.find(productos => {
                return productos.id === productoNuevo.id
            })
            if (productoExistente) {
                let productoExistenteIndex = this.productos.findIndex(
                    item => item.productId === productoExistente.productId
                )
                productoExistente.quantity = productoExistente.quantity + 1
                productoExistente.subTotal = productoNuevo.price * productoExistente.quantity
                this.productos[productoExistenteIndex] = productoExistente
            } else {
                this.productos.push(productoNuevo)
            }
        },
        removerProducto(id) {
            const indexProducto = this.productos.findIndex(productos => {
                return productos.id === id
            })


            this.productos.splice(indexProducto)
        },
        async cargarProductosMl() {
            const HTTP = axios.create({
                baseURL: "https://api.mercadolibre.com/",
            });
            const products = [];
            let page = 1;
            let totalPages = 1;

            while (page <= totalPages) {
                const response = await HTTP.get(`https://api.mercadolibre.com/sites/MLV/search?seller_id=96773693&limit=50&page=${page}`);

                products.push(...response.data.results);

                totalPages = response.data.paging.total;

                page++;
            }

            const categories = await Promise.all(products.map(product => HTTP.get(`https://api.mercadolibre.com/categories/${product.category_id}`)));

            this.catalogo = await products.map((product, index) => ({
                id: product.id,
                title: product.title,
                price: product.price,
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
                })),
                category: categories[index].data.name
            }));
            console.log(this.catalogo)
        }
    }
})