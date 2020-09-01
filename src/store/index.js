import Vue from 'vue'
import Vuex from 'vuex'

//引入创建的 gettrs.js 文件
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCounter(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      //1 查找之前数组中是否有该商品
      let oldProduct = context.state.cartList.find(item => item.iid == payload.iid)
      //2.判断 oldproduct 
      if (oldProduct) {
        // oldProduct.count += 1
        context.commit('addCounter', oldProduct)
      } else {
        payload.count = 1
        // state.cartList.push(payload)
        context.commit('addToCart', payload)
      }
    }
  },
  modules: {

  },
  getters,
})
