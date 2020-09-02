let Vue

function install(_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate() {
      if (this.$options.store) {
        Vue.prototype.$store = this.$options.store
      }
    },
  })
}
class Store {
  //   {
  //     state: {
  //       count: 0,
  //     },
  //     mutations: {
  //       add(state, number = 1) {
  //         state.count += number
  //       },
  //     },
  //     actions: {
  //       asyncAdd({ commit }, number = 1) {
  //         setTimeout(() => {
  //           commit('add', number)
  //         }, 100)
  //       },
  //     },
  //     getters: {
  //       score: (state) => {
  //         return `score:${state.count}`
  //       },
  //     },
  //     modules: {},
  //   }
  constructor(options) {
    // let vm = new Vue({
    //   data: options.state,
    // })
    // this.state = vm.$data
    this.state = new Vue({
      data: options.state,
    })
    this.mutations = options.mutations || {}
    this.actions = options.actions || {}
    this.handleGetters(options.getters)
  }
  commit = (type, payload) => {
    console.log(type, payload)
    let fn = this.mutations[type]
    fn(this.state, payload)
  }

  dispatch = (type, payload) => {
    console.log(type, payload)
    let fn = this.actions[type]
    fn({ commit: this.commit, state: this.state }, payload)
  }

  handleGetters = (getters) => {
    this.getters = {}
    Object.keys(getters).forEach(key => {
        Object.defineProperty(this.getters, key, {
            get:()=> {
                return getters[key](this.state)
            },
           
        })
    })
  }
}

export default { Store, install }
