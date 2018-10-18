<template>
  <div id="app">
    <MainHeader/>
    <div style="height: 1000px; background-color: #ededed;">
      dgdsfgdfgdgdfgdfgdfgdfgd <br><br>
      saadsasadas  
    </div>    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import MainHeader from './components/MainHeader.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    MainHeader
  }
}
</script>

<style>
  html, body {
    height:100%;
    padding:0;
    margin:0;
  }
  #app {    
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;   
  }
</style>
