<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'bot-ui'
  }
</script>

<style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  h1 {
    color: #D6CBCB;
  }

  a {
    color: #DADADA;
  }

  p {
    color: #DADADA;
  }

  #app {
    background-color: #2C2F33;
    height: 100%;
  }
</style>
