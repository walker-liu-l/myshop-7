<template>
  <div id="app">
    <router-view></router-view>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from './components/tabBar/tabBar'
export default {
  components:{
    tabBar,
   
  }
}
</script>

<style scoped>
  
</style>