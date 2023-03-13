<template>
  <div class="hello">
    <h1>Oops! Page not found</h1>
    <router-link to="/counter" class="link"> Back to Counter </router-link>
  </div>
</template>

<style>
.link{
    font-size: 2rem;
    background-color: #f1f1f1;
    color: rgb(214, 164, 164);
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    margin: 10px;
    text-decoration: none;
}

.link:hover{
    background-color: #42b983;
    color: white;
    text-decoration: underline;
}
</style>

<script>
export default {};
</script>