import { createStore } from 'vuex';
export default createStore({
  state: {
    listaJuegos: [],
  },
  getters: {
    // getJuegoById: (state) => (codigo) => {
    //   return state.listaJuegos.fin(listaJuegos => listaJuegos.codigo == codigo)
    // }
  },
  mutations: {
    SET_JUEGOS(state, listaJuegos) {
      state.listaJuegos = listaJuegos
    },
    ADD_STOCK(state, indice){
     state.listaJuegos[indice].stock ++
    },
    DELETE_STOCK(state, indice){
      state.listaJuegos[indice].stock --
     },

  },
  actions: {
    async cargarJuegos({ commit }) {
      try {
        let domain = location.origin
        let project = "/desafio-vuex3/"
        let url = `${domain}${project}juegos.json`
        console.log(url)
        let response = await fetch(url);
        let juegos = await response.json();
          commit("SET_JUEGOS", juegos);
      } catch (error) {
        console.log(error)
      }
    },
    addStock(context, codigo){
      let indice = context.state.listaJuegos.findIndex(
        (juego) => juego.codigo == codigo)
        context.commit("ADD_STOCK", indice)
    },
    deleteStock(context, codigo){
      let indice = context.state.listaJuegos.findIndex(
        (juego) => juego.codigo == codigo)
        context.commit("DELETE_STOCK", indice)
    }  
  },
  modules: {
  }
})