<template>
    <div class="main-content-container">
      
      <!-- <img class="necklace-image" :src="currentNecklace" alt="necklace"> -->
      <img class="necklace-image" :src="fake" alt="necklace">
      
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import fakeData from "@/fakeData.json";

export default {
  name: 'MainContent',  
  props: {},
  computed: {
      ...mapGetters({
          currentNecklace: 'currentNecklace'
      })
  },
  data: function () {
    return{
      // fakeData1: fakeData,
      // test: "@" + this.fakeData1.necklace.silverNecklace,
      fake: require('../assets/silverNecklace.png')
      
    }
  }
}
</script>

<style scoped>
  .main-content-container{
    float: left;
    width: calc(80% - 1px);
    height: 100%;
  }

  .necklace-image {
    height: 880px;
    width: 1520px;
  }
</style>
