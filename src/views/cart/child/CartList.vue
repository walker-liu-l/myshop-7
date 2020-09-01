<template>
  <div class="cart-list">
    <!-- scroll滚动内容 -->
    <Stroll class="content">
      <!-- 引入 CartListItem 组件 -->
      <CartListItem></CartListItem>
    </Stroll>
    <!-- 底部栏 -->
  </div>
</template>

<script>
import CartListItem from "./CartListItem";
import { mapGetters } from "vuex";
import Stroll from "../../../components/common/scroll/Scroll";

export default {
  name: "CartList",
  components: {
    CartListItem,
    Stroll,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
};
</script>

<style scoped>
.cart-list {
  height: calc(100% - 44px - 49px);
}

.content {
  height: 100%;
  overflow: hidden;
}
</style>