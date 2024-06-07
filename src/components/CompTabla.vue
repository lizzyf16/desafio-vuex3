<template>
    <div class="juegos">
        <main class="container">
            <section class="lista-productos">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Código</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">stock</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(juego, index) in listaJuegos" :key="index" :class="{ 'text-danger': stockControl(juego.stock)}">
                            <td>{{ juego.codigo }}</td>
                            <td>{{ juego.nombre }}</td>
                            <td>{{ juego.stock }}</td>
                            <td>{{ juego.precio }}</td>
                            <td>
                                <button class="btn btn-success mx-1" @click="botonAddStock(juego.codigo)">+</button>
                                <button class="btn btn-danger mx-1" @click="botonDeleteStock(juego.codigo)" :disabled="stockControl(juego.stock)">-</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

        </main>
    </div>

</template>


<script>
import { mapActions, mapState } from "vuex";
export default {
    name: "CompTabla",
    components: {
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapState(["listaJuegos"]),

    },
    methods: {
        ...mapActions(["cargarJuegos"]),
        botonAddStock(codigo) {
            this.$store.dispatch("addStock", codigo)
        },
        botonDeleteStock(codigo) {
            this.$store.dispatch("deleteStock", codigo)
        },
        stockControl(stock) {
            console.log(stock)
            if (stock < 1) {
                return true
            } else {
                return false
            }
        }
    },
    async created() {
        try {
            let respuesta = await this.cargarJuegos();
            if (!respuesta) {
                this.error = "No se cargaron los Juegos";
            }
        } catch (error) {
            this.error = "Algo salió mal al intenar cargar Juegos"
        }
    }
}
</script>


<style scoped lang="scss">
.table>:not(caption)>*>* {
    color: inherit
}
</style>