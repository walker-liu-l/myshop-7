<template>
  <div class="base-info" v-if="goods.length !==0">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>

    <div class="info-other">
      <span v-for="item in goods.columns" :key="item">{{item}}</span>
      <!-- <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>-->
    </div>

    <!-- <div class="info-services">
      <span class="info-services-item" v-for="index in goods.services.length - 1" :key="index">
          <img :src="goods.services[index - 1].icon" alt="">
          <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>-->
  </div>
</template>


<script>
export default {
  name: "DetailBaseInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.base-info {
  margin-top: 12px;
}
.base-info .info-price {
  margin-top: 10px;
}

.base-info .n-price {
  color: deeppink;
}

.base-info .info-other {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding-bottom: 13px;
  font-size: 12px;
  color: #666;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
</style>