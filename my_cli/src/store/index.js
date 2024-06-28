import { createStore } from 'vuex';
import  axios from 'axios';

const store = createStore({
  state: {
    user: JSON.parse(localStorage.getItem('user')) || null,
    error: null,
    orders: []
  },
  getters: {
    isAuthenticated: state => !!state.user,
    getUser: state => state.user,
    getError: state => state.error,
    getOrders: state => state.orders
  },
  actions: {
    async fetchOrders({ commit }) {
      try {
        const response = await axios.get('/api/orders');
        commit('setOrders', response.data);
      } catch (error) {
        console.error('Failed to fetch orders:', error.response ? error.response.data : error.message);
        commit('setError', 'Failed to fetch orders');
      }
    },
    clearError({ commit }) {
      commit('setError', null);
    },
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    setOrders(state, orders) {
      state.orders = orders;
    }
  }
});

export default createStore({
 state: {
    foods: []
 },
 getters: {
    getFood(){
        return foods
    }
 },
 mutations: {
    addFood(state, newFood){
        for(food in state.foods){
            if(newFood.id === food.id){
                food.count += 1
                return
            }
        }
        state.foods.push(newFood)
    },

    removeFood(state, newFood){
        for(food in state.foods){
            if(newFood.id === food.id){
                food.count -= 1
                if(food.count === 0){
                    state.foods.splice(indexOf(food), 1)
                }
                return
            }
        }
    }
 },
 actions: {
 },
 modules: {
 }
})
