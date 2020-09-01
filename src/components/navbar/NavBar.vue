<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.left,
.right {
  width: 60px;
}

.center {
  /* width: calc(100% - 120px); */
  flex: 1;
  text-align: center;
}
</style>