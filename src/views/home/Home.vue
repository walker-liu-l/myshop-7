<template>
  <div id="home">
    <!-- nav -->
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 使用滚动 -->
    <Scroll
      class="content"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <!-- 轮播图 -->
      <div class="block">
        <el-carousel height="190px">
          <el-carousel-item v-for="item in bannerdatas" :key="item.index">
            <a :href="item.link">
              <img :src="item.image" alt />
            </a>
          </el-carousel-item>
        </el-carousel>
      </div>
      <!-- 推荐 -->
      <RecommendView :recommends="recommends"></RecommendView>
      <!-- 本周流行 -->
      <FashionView></FashionView>
      <!-- TabControl title -->
      <TabControl :titles="['流行', '新款', '精选']" class="tab-control" @tabClick="tabClick"></TabControl>
      <!-- 商品 goodslist  -->
      <GoodsList :goods="goods[currentType].list"></GoodsList>
    </Scroll>
    <!-- 回到顶部 -->
    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
  </div>
</template>

<script>
import NavBar from "../../components/navbar/NavBar";
import RecommendView from "./childComps/RecommendView";
import FashionView from "./childComps/FashionView";

import TabControl from "../../components/common/tabControl/TabControl";
// 引入 home 商品 list
import GoodsList from "../../components/goods/GoodsList";
//引入better-scroll
import Scroll from "../../components/common/scroll/Scroll";
// 引入backTop
import BackTop from "../../components/backTop/BackTop";

export default {
  components: {
    NavBar,
    RecommendView,
    FashionView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  created() {
    this.getHomeMultidata();
    //请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  data() {
    return {
      bannerdatas: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
    };
  },
  methods: {
    // 防抖封装
    debounce(func, delay) {
      let timer = null;
      return function (...args) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    },
    //网络请求方法
    async getHomeMultidata() {
      const { data: res } = await this.$http.get("/home/multidata");
      console.log(res.data);
      this.bannerdatas = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    },
    //请求商品数据
    async getHomeGoods(type) {
      //data 里面初始的 page 是0，这里的 page + 1 ，是发送给后端的，请求第一页数据
      const page = this.goods[type].page + 1;
      const { data: res } = await this.$http.get("/home/data", {
        params: {
          type,
          page,
        },
      });
      console.log(res.data);
      this.goods[type].list.push(...res.data.list);
      // this.goods[type].page = res.page;
      this.goods[type].page += 1;
      this.$refs.scroll.finishPullUp();
    },
    // 以上是网络请求方法
    //事件监听方法
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    //回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    contentScroll(position) {
      //回到顶部按钮的显隐   重新赋值后就不再是默认值 false 了。
      this.isShowBackTop = -position.y > 1000;
    },
    //处理上拉加载
    loadMore() {
      this.getHomeGoods(this.currentType);
      //处理可滚动区域更新后会卡顿的bug，只需要监听新的页面数据加载完之后，重新刷新一次,重新计算可滚动的区域
      this.$refs.scroll && this.$refs.scroll.refresh();
    },
    //防抖
    debounce() {},
  },
  mounted() {
    //防抖包装
    const refresh = this.debounce(this.$refs.scroll.refresh,200);
    //  监听item图片是否加载完毕
    this.$bus.$on("itemImgLoad", () => {
      // refresh();  // 这里有个bug，调用 refresh() 会报错  
    });
  },
};
</script>

<style scoped>
#home {
  /* 100vh 表示100%屏幕视口 */
  height: 100vh;
  /* padding-top: 44px; */
}
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
  background-color: #fb7299;
  color: white;
}

.el-carousel-item img {
  width: 100%;
}

.tab-control {
  position: sticky;
  top: 44px;
  /* z-index: 9; */
  cursor: pointer;
}

.content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
}
</style>