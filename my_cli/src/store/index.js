import { createStore } from 'vuex'

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
