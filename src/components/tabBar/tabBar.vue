<template>
  <footer id="footer">
    <ul>
      <router-link tag="li" to="/home">
        <i class="el-icon-s-home"></i>
        <p>首页</p>
      </router-link>
      <router-link tag="li" to="/category">
        <i class="el-icon-menu"></i>
        <p>分类</p>
      </router-link>
      <router-link tag="li" to="/cart">
        <i class="el-icon-shopping-cart-2"></i>
        <p>购物车</p>
      </router-link>
      <router-link tag="li" to="/profile">
        <i class="el-icon-s-custom"></i>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
#footer {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 49px;
  background: #f5f4f6;
  box-shadow: 0 -1px 6px rgba(0, 0, 0, 0.1);
}
#footer ul {
  display: flex;
  margin-top: 5px;
  /* align-items: center; */
}
#footer ul li {
  flex: 1;
  text-align: center;
  height: 49px;
  list-style: none;
}
#footer ul li.active {
  color: #f03d37;
}

#footer ul li.router-link-active {
  color: #f03d37;
}

#footer ul i {
  font-size: 18px;
}
#footer ul p {
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 2;
}
</style>