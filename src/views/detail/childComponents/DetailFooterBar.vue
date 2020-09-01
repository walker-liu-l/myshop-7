<template>
  <div class="footer-bar">
    <ul>
      <li>
        <i class="el-icon-user-solid"></i>
        <p>客服</p>
      </li>
      <li>
        <i class="el-icon-s-shop"></i>
        <p>店铺</p>
      </li>
      <li>
        <i class="el-icon-star-off"></i>
        <p>收藏</p>
      </li>
      <li class="cart" @click="addToCart">加购物车</li>
      <li class="buy">购买</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DetailFooterBar",
  methods: {
    addToCart() {
      this.$emit('addCart')
    },
  },
};
</script>

<style scoped>
.footer-bar {
  height: 49px;
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.1);
}

.footer-bar ul {
  display: flex;
}

.footer-bar ul li {
  flex: 1;
  text-align: center;
  list-style: none;
}

.footer-bar ul li i {
  margin-top: 8px;
  font-size: 18px;
}

.footer-bar ul li p {
  font-size: 12px;
}

.footer-bar ul .cart {
  line-height: 49px;
  font-size: 14px;
  background-color: yellow;
}

.footer-bar ul .buy {
  line-height: 49px;
  font-size: 14px;
  color: #fff;
  background-color: deeppink;
  font-weight: bold;
}
</style>