<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <tabBar></tabBar>
  </div>
</template>

<script>
import tabBar from "./components/tabBar/tabBar";
export default {
  components: {
    tabBar,
  },
};
</script>

<style scoped>
</style>