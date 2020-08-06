<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="item.index"
      class="tab-control-item"
      :class="{active:index === currentIndex}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
      itemClick(index) {
        this.currentIndex = index
        this.$emit('tabClick', index)
      }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  justify-content: space-around;
  font-size: 15px;
  /* color: #fff; */
  background-color: #fff;
}

.tab-control-item {
  height: 40px;
  line-height: 40px;
}

.active {
  color: #fb7299;
}

.active span {
    border-bottom: 2px solid #fb7299;
}

.tab-control-item span {
  padding: 5px;
}
</style>