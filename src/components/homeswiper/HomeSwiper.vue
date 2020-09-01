<template>
  <Swiper class="home-swiper">
    <SwiperItem v-for="item in bannerdatas" :key="item.index">
      <a :href="item.link">
        <img :src="item.image" alt @load="swiperImgLoad" />
      </a>
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "../../components/common/swiper";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: {
    bannerdatas: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
      swiperImgLoad(){
          this.$emit('swiperImgLoad')
      }
  },
};
</script>

<style scoped>
</style>