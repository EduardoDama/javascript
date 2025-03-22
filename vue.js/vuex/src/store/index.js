import { createStore } from 'vuex'

export default createStore({
  data() {
    return {
      valorTotal: 0,
      produto: {},

    }
  },
  state: {
    user: {
      first_name: '',
      last_name: '',
      email: ''
    },
    produtos: [
      { id: 1, 
        nome: 'Notebook', 
        preco: 3500.00 
      },
      { id: 2, 
        nome: 'Smartphone', 
        preco: 2000.00 
      },
      { id: 3, 
        nome: 'Fone de Ouvido', 
        preco: 150.00 
      },
      { id: 4, 
        nome: 'Monitor', 
        preco: 1200.00 
      },
      { id: 5, 
        nome: 'Teclado Mecânico', 
        preco: 450.00 
      }
    ],
    carrinho: [],
  },
  mutations: {
    storeUser(state, data) {
      state.user = data
    },
    AdicionarCarrinho(state, data) {
      state.carrinho.push(data)
      console.log(state.carrinho)
    },
    RemoverCarrinho(state, data) {
      const index = state.carrinho.indexOf(data)
      state.carrinho.splice(index, 1)
      console.log(state.carrinho)
    }
  },
  getters: {
    TotalValor(state) {
      return state.carrinho.reduce((total, produto) => total += produto.preco, 0)
    }
  },
  actions: {
    storeUser(store, data) {
      return new Promise((resolve) => {
        setTimeout(() => {
          store.commit('storeUser', data); 
          resolve(); 
          console.log('Usuário logado');
        }, 3000);
      });
    }
  },
  modules: {
  }
})
