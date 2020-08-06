<template>
  <div class="recomend">
    <div v-for="item in recommends" :key="item.index" class="recomend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recomend {
  display: flex;
  padding: 15px 0 20px 0;
  font-size: 12px;
  text-align: center;
  justify-content: space-around;
  border-bottom: 8px solid #eee;
}

/* .recomend-item {
    flex: 1;
} */

.recomend-item img {
    width: 80%;
}

.recomend-item p {
    margin-top: 8px;
    color: black;
}
</style>