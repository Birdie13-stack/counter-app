<template>
  <div class="counting">
    <img src="../assets/counter.jpg">
    <p>{{ count }}</p>
    <button @click="increment" class="btn">Increment</button>
    <button @click="decrement" class="btn">Decrement</button>
    <button @click="reset" class="btn">Reset</button>
    <input type="number" v-model.number="value" />
    <button @click="setValue(value)">Set Value</button>

    <br />
    <router-link to="/" class="btn2"> Go Back Home </router-link>
    
  </div>
</template>

<script>
import { ref } from "vue";
import useCounter from "@/composables/useCounter";
import { RouterLink } from "vue-router";

export default {
    setup() {
        const { count, increment, decrement, reset, setValue } = useCounter();
        const value = ref(0);
        return {
            count,
            increment,
            decrement,
            reset,
            value,
            setValue,
        };
    },
    components: { RouterLink }
};
</script>

<style scoped>
/* div{
    background-color: red;
} */

p {
  font-size: 2.5rem;
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

.btn2 {
  margin-top: 30px;
  font-size: 2rem;
  background-color: #717975;
  color: white;
  border: none;
  text-decoration: none;
  border-radius: 10px;
  padding: 5px 5px;
}

.btn2:hover {
  background-color: #42b983;
  color: white;
  cursor: pointer;
  text-decoration: underline;
}

input{
  height: 30px;
  width: 300px;
  border: 5px solid #42b983;
  font-size: 2rem;
  text-align: center;
}

input:focus{
  outline: none;
}
</style>
