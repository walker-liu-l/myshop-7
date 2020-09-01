<template>
  <div class="detail">
    <!-- 导航栏 -->
    <DetailNavBar class="detail-nav" @titleClick="titleClick"></DetailNavBar>
    <Scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <!-- 轮播图 -->
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <!-- 详情图片下的基础数据 -->
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <!-- 店铺基础信息数据 -->
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <!-- 店铺详情页图片 -->
      <DetailGoodsInfo :detailInfo="detailInfo" @imgLoad="goodsImgLoad"></DetailGoodsInfo>
      <!-- 详情页参数数据 -->
      <DetailParams :paramInfo="paramInfo" ref="params"></DetailParams>
      <!-- 商品评论信息 -->
      <DetailComments :comment="comment" ref="comment"></DetailComments>
      <!-- 使用 goodslist 展示推荐图片 -->
      <GoodsList :goods="recommend" ref="recommend"></GoodsList>
    </Scroll>
    <!-- 回到顶部 -->
    <BackTop @click.native="backClick" v-show="isShowBackTop"></BackTop>
    <!-- 底部导航栏 -->
    <DetailFooterBar @addCart="addToCart"></DetailFooterBar>
  </div>
</template>

<script>
import DetailNavBar from "./childComponents/DetailNavBar";
import DetailSwiper from "./childComponents/DetailSwiper";
import DetailBaseInfo from "./childComponents/DetailBaseInfo";
import DetailShopInfo from "./childComponents/DetailShopInfo";
import DetailGoodsInfo from "./childComponents/DetailGoodsInfo";
import DetailParams from "./childComponents/DetailParams";
import DetailComments from "./childComponents/DetailComments";
import GoodsList from "../../components/goods/GoodsList";
import DetailFooterBar from "./childComponents/DetailFooterBar";

//引入 better-scroll
import Scroll from "../../components/common/scroll/Scroll";
import { debounce } from "../../components/common/utils";

// 回到顶部
import BackTop from "../../components/backTop/BackTop";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParams,
    DetailComments,
    GoodsList,
    DetailFooterBar,
    BackTop,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {
        title: "",
        desc: "",
        newPrice: "",
        oldPrice: "",
        discount: "",
        columns: "",
        services: "",
        realPrice: "",
      },
      shop: {
        logo: "",
        name: "",
        fans: "",
        sells: "",
        score: "",
        goodsCount: "",
      },
      detailInfo: {
        desc: "",
        detailImage: [],
      },
      paramInfo: {
        sizes: "",
        infos: "",
      },
      comment: {},
      recommend: [],
      detailTopY: [],
      isShowBackTop: false,
    };
  },
  created() {
    //拿到每个 item 图片对应的 id
    this.iid = this.$route.params.iid;
    //根据每个图片对应的 id 请求详情数据
    this.getDetail(this.iid);
    //初始化详情页推荐数据
    this.getRecommend();

    this.detailTopY = debounce(() => {
      this.$nextTick(() => {
        //获取 参数、评论、推荐 各部分的offsetTop值 ，因为防抖函数未完成，所以此处没有效果
        this.detailTopY = [];
        this.detailTopY.push(0);
        this.detailTopY.push(this.$refs.params.$el.offsetTop);
        this.detailTopY.push(this.$refs.comment.$el.offsetTop);
        this.detailTopY.push(this.$refs.recommend.$el.offsetTop);
        console.log(this.detailTopY);
      }, 100);
    });
  },
  methods: {
    //获取 detail 的数据
    async getDetail(iid) {
      const detailResult = await this.$http.get("/detail", {
        params: {
          iid,
        },
      });
      console.log(detailResult);

      const datailGoods = detailResult.data.result;
      //以下是 detail 里面的轮播图下方 goods 数据
      this.topImages = datailGoods.itemInfo.topImages;
      this.goods.title = datailGoods.itemInfo.title;
      this.goods.desc = datailGoods.itemInfo.desc;
      this.goods.newPrice = datailGoods.itemInfo.newPrice;
      this.goods.oldPrice = datailGoods.itemInfo.oldPrice;
      this.goods.discount = datailGoods.itemInfo.discount;
      this.goods.columns = datailGoods.columns;
      this.goods.services = datailGoods.shopInfo.services;
      this.goods.realPrice = datailGoods.itemInfo.lowNowPrice;

      //以下是店铺数据赋值给 shop
      const detailShop = detailResult.data.result.shopInfo;
      this.shop.logo = detailShop.shopLogo;
      this.shop.name = detailShop.name;
      this.shop.fans = detailShop.cFans;
      this.shop.sells = detailShop.cSells;
      this.shop.score = detailShop.score;
      this.shop.goodsCount = detailShop.cGoods;
      // console.log(detailShop);

      //详情页图片提取赋值
      const detailInfo = detailResult.data.result.detailInfo;
      this.detailInfo.desc = detailInfo.desc;
      this.detailInfo.detailImage[0] = detailInfo.detailImage[0].key;
      this.detailInfo.detailImage[1] = detailInfo.detailImage[0].list;

      //详情页参数信息提取
      const paramInfo = detailResult.data.result.itemParams;
      this.paramInfo.sizes = paramInfo.rule.tables;
      this.paramInfo.infos = paramInfo.info;

      //商品评论信息提取,有些商品没有评论，所以要先判断是否有评论
      if (detailResult.data.result.rate.cRate !== 0) {
        this.comment = detailResult.data.result.rate.list[0];
      }
    },
    //获取 详情页推荐数据
    async getRecommend() {
      const { data: res } = await this.$http.get("/recommend");
      this.recommend = res.data.list;
    },

    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.detailTopY[index], 200);
    },
    //监听图片是否加载完场，未完成，这个函数没调用
    goodsImgLoad() {
      this.$refs.scroll.scroll.refresh();
      this.detailTopY();
    },
    // 回到顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },
    contentScroll(position) {
      //回到顶部按钮的显隐   重新赋值后就不再是默认值 false 了。
      this.isShowBackTop = -position.y > 1000;
    },
    // 点击添加购物车
    addToCart() {
      // 1、 获取购物车需要展示的商品信息
      const product = {};
      product.img = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.newPrice;
      product.iid = this.iid;
      //2、将商品添加到购物车 ,这里使用的是 vuex
      this.$store.dispatch("addCart", product);
    },
  },
  mounted() {},
  updated() {},
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px);
  overflow: hidden;
}
</style>