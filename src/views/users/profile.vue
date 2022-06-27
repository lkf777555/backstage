<template>
  <div class="profile">
    <div class="left"></div>
    <div class="right"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.profile {
  width: 100%;
  height: 100%;
  display: flex;
  justify-items: center;
  justify-content: space-around;
  .left {
    width: 332px;
    height: 90%;
    background: rgb(80, 180, 219);
    margin: 20px 0px;
    border: #e4e7ed solid 1px;
    border-radius: 10px;
  }
  .right {
    width: 1062px;
    height: 90%;
    margin: 20px 0px;
    background: rgb(245, 130, 130);
    border: #e4e7ed solid 1px;
    border-radius: 10px;
  }
}
</style>
