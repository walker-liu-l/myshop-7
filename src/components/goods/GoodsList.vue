<template>
  <div class="goods">
    <GoodsListIem v-for="item in goods" :key="item.index" :goodsItem="item"></GoodsListIem>
    <!-- {{goods}} -->
  </div>
</template>

<script>
import GoodsListIem from "./GoodsListItem";

export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodsListIem,
  },
};
</script>

<style scoped>
.goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>