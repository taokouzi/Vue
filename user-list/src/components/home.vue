<template>
  <div id="home">
    <h1>{{ count }}</h1>

    <my-add></my-add>
    <my-remove></my-remove>

  </div>
</template>

<script>


export default {
  name: 'home',
  components: {
    "my-add":{
      template: `<button @click="add">+</button>`,
      methods:{
        add(){
          this.$store.commit('add')
        }
      }
    },
    "my-remove":{
      template: `<button @click="remove">-</button>`,
      methods:{
        remove(){
          this.$store.commit('remove')
        }
      }
    }
  },
  computed:{
    count(){
      return this.$store.state.count;
    }
  }
}

</script>

<style>

</style>
