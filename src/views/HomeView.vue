<template>
     <div class="home">
     <h1>Home</h1>
     <p>This is the home page. Click the button below to start counting.</p>
    <router-link to="/counter" class="linkie"> Start Counting </router-link>
     </div>
</template>

<script>

</script>

<style>
h1{
     font-size: 3rem;
     color: #42b983;
}
p{
     font-size: 2rem;
     color: #42b983;
}

.linkie{
     font-size: 2rem;
     background-color: #ce7777;
     color: rgb(17, 16, 16);
     border: 3px solid gray;
     border-radius: 5px;
     padding: 10px 20px;
     margin: 10px;
     text-decoration: none;
}

.linkie:hover{
     background-color: #42b983;
     color: white;
     text-decoration: underline;
     cursor: pointer;
     border: none;
}
</style>