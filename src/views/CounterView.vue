<template>
     <div class = "counting">

        <img alt="Counter Image" src="../assets/counter.jpg">
       <h1 class>Counter</h1>
        <p>{{ count }}</p>
     <button @click="incrementCount">Increment</button>
     <!-- <div class="resetContainer"> -->
     <button @click="reset" class="reset">Reset</button>
     <!-- </div> -->
    <button @click="decrementCount">Decrement</button> 
    <button @click="setValue">Set Value</button> 
    
    </div>
</template>

<script>
import useCounter from '../useCounter';

export default {
  setup() {
    const { count, incrementCount, decrementCount, reset, setValue } = useCounter();

   return {
     count,
     incrementCount,
     decrementCount,
     reset,
     setValue,
   };

}
}
    
</script>

<style scoped>
/* div{
    background-color: red;
} */

p{
    font-size: 3rem;
}
img{
    width: 200px;
}
h1{
    font-size: 3.5rem;
}
.counting {
    text-align: center;
    margin-top: 60px;
}

button {
    font-size: 2rem;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 10px;
}
/* 
.resetContainer{
        display: flex;
        /* flex-direction: row; */
    /* } */

/* .reset{
    margin: 0 0 0 30px;
    padding: 10px 20px;
    } */ 

button:hover {
    background-color: #2c3e50;
    color: red;
    cursor: pointer;
}

</style>