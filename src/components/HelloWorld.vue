<template>
  <div class="hello">
    <h1>{{ $store.state.count }}</h1>
    <h2>{{$store.getters.score}}</h2>
    <button @click="add">add</button>
    <button @click="asyncAdd">asyncAdd</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    add() {
      this.$store.commit('add', 2)
    },
    asyncAdd() {
      this.$store.dispatch('asyncAdd', 3)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button + button {
  margin-left:10px;
}
h3 {
  margin: 40px 0 0;
}

</style>
