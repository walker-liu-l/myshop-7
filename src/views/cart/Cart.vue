<template>
  <div class="cart">
    <!-- 顶部导航栏 -->
    <NavBar class="nav-bar">
      <div slot="center" class="nav-txt">购物车({{cartLength}})</div>
    </NavBar>
    <!-- 购物车商品列表 -->
    <CartList></CartList>
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar";
import CartList from "./child/CartList";
import { mapGetters } from "vuex";

export default {
  name: "cart",
  components: {
    NavBar,
    CartList,
  },
  computed: {
    //   mapgetters函数将 store 中的 getter 转化为局部计算属性
    ...mapGetters(["cartLength"]),
  },
};
</script>

<style scoped>
.cart {
  height: 100vh;
}

.nav-bar {
  background-color: #fb7299;
}

.nav-txt {
  color: #fff;
}
</style>