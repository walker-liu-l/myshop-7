<template>
  <div>
    <NavBar>
      <div slot="left" class="back" @click="backClick">
        <i class="back el-icon-arrow-left"></i>
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item,index) in titles"
          :key="item.index"
          :class="{active:index === currentIndex}"
          @click="titleClick(index)"
        >{{item}}</div>
      </div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "../../../components/navbar/NavBar";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit('titleClick',index)
    },
    //点击返回按钮
    backClick(){
     this.$router.back()
    }
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-around;
  font-size: 13px;
}

.active {
  color: red;
}

.back i {
    margin-left: 15px;
}
</style>