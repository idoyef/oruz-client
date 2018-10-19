<template>
    <div class="main-container">
       <MainSideBar/>     
       <MainContent/>
    </div>
</template>

<script>

import MainSideBar from './MainSideBar.vue';
import MainContent from './MainContent.vue';

export default {
  name: 'MainContainer',
  components: {
    MainSideBar,
    MainContent
  },
  props: {}
  
}
</script>

<style scoped>
    .main-container{
      position: absolute;
      top: 80px;
      width: 100%;
    }
  
</style>
