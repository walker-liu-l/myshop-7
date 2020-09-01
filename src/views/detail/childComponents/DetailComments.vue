<template>
  <div id="detail_comment" v-if="Object.keys(comment).length != 0">
    <div class="comment-title">
      <span class="comment-name">用户评价</span>
      <span class="comment-more" @click="moreContent">更多</span>
    </div>
    <div class="comment-info">
      <div class="u-info">
        <!-- 此处后台数据图片好像失效 -->
        <!-- <img :src="comment.user.avatar" alt=""> -->
        <span>{{comment.user.uname}}</span>
      </div>
      <div class="comment-content">
        <div class="content">{{comment.content}}</div>
        <p class="content-info"> {{comment.style}}</p>
      </div>
    </div>
    <div class="shop-reply" v-if="comment.explain != null">{{comment.explain}}</div>
    <div class="comment-img" v-if="comment.images != null">
      <img :src="item" alt v-for="(item,index) in comment.images" :key="index" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailComments",
  props: {
    comment: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    moreContent() {
      console.log("没有数据了，正常此处点击更多应加载更多评论");
    },
  },
};
</script>

<style scoped>
#detail_comment {
  font-size: 0.65rem;
  padding: 0.42rem 0.34rem;
}
.comment-title {
  padding: 0.42rem 0;
  padding-bottom: 0.8rem;
  border-bottom: 0.08rem solid rgba(128, 128, 128, 0.3);
  position: relative;
}
.comment-more {
  position: absolute;
  right: -0.26rem;
  top: 0rem;
  cursor: pointer;
}
.comment-more::after {
  content: "";
  display: inline-block;
  position: relative;
  top: 0.26rem;
  width: 1.06rem;
  height: 1.06rem;
}
.u-info {
  padding: 0.42rem 0;
  line-height: 1.8rem;
  display: flex;
}
.u-info img {
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
  border: 0.04rem solid rgba(128, 128, 128, 0.3);
}
.u-info span {
  margin-left: 0.42rem;
}
.content {
  line-height: 1rem;
  color: #666;
}
.content-info {
  color: #999;
  padding: 0.3rem 0;
}
.shop-reply {
  border-top: 0.04rem solid rgba(128, 128, 128, 0.4);
  padding: 0.5rem 0;
  color: gray;
  line-height: 0.8rem;
}
.comment-img img {
  margin-right: 0.21rem;
  width: auto;
  height: 4.26rem;
}
</style>