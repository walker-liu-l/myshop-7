<template>
  <div class="goodsItem">
    <img :src="goodsItem.show.img" @load="imgLoad"  alt />
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
      <span class="cfav el-icon-star-off">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImgLoad')
    }
  }
};
</script>

<style scoped>
.goodsItem {
  width: calc(50% - 5px);
  margin-bottom: 10px;
  border: 1px solid #eee;
  font-size: 13px;
  /* background-color: #ffffff; */
}
.goodsItem img {
  width: 100%;
  height: 80%;
  border-radius: 5px;
}

.goods-info {
  position: relative;
  padding-bottom: 5px;
}

.goods-info p {
  overflow: hidden;
  padding: 8px 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #858585;
}

.price {
  padding-left: 10px;
  font-weight: bold;
  margin-right: 10px;
  color: red;
}

.cfav {
  position: absolute;
  right: 10px;
  color: #858585;
  padding-bottom: 10px;
}
</style>