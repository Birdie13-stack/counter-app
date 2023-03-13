<template>
  <!-- <img alt="Counter Image" src="./assets/counter.jpg"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <router-view></router-view> -->
  <!-- <CounterView/> -->
  <!-- <NotFoundView/> -->
  <router-view/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import CounterView from './views/CounterView.vue'
// import NotFoundView from './views/NotFoundView.vue'


export default {
  name: 'App',
  components: {
    // HelloWorld,
    // CounterView,
    // NotFoundView,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
