<template>
  <div class="counting">
    <img alt="Counter Image" src="../assets/counter.jpg" />
    <h1 class>Counter</h1>
    <p>{{ count }}</p>
    <button @click="incrementCount" class="btn">Increment</button>
    <!-- <div class="resetContainer"> -->
    <button @click="reset" class="btn">Reset</button>
    <!-- </div> -->
    <button @click="decrementCount" class="btn">Decrement</button>
    <button @click="setValue" class="btn">Set Value</button>
    <br />
    <router-link to="/" class="btn2"> Go back Home </router-link>
  </div>
</template>

<script>
export default {
  name: "CounterView",
  props: {
    msg: String,
  },

  data() {
    return {
      count: 0,
    };
  },

  methods: {
    incrementCount() {
      this.count++;
    },

    decrementCount() {
      this.count--;
    },

    reset() {
      this.count = 0;
    },

    setValue() {
      let value = prompt("Enter a value");
      if (value != null && value >= 0) {
        this.count = value;
      }
    },
  },
};
</script>

<style scoped>
/* div{
    background-color: red;
} */

p {
  font-size: 3rem;
}
img {
  width: 200px;
}
h1 {
  font-size: 3.5rem;
}
.counting {
  text-align: center;
  margin-top: 60px;
}
.btn {
  font-size: 2rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 10px;
  text-decoration: none;
}

.btn:hover {
  background-color: #2c3e50;
  color: red;
  cursor: pointer;
}

.btn2{
    margin-top: 400px;
    font-size: 2rem;
    background-color: #717975;
    color: white;
    border: none;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 10px;
}
</style>
