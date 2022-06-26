<template>
  <div class="contont">
    <div class="left">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#304156"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <el-icon><icon-menu /></el-icon>
          <span>个人中心</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>数据可视化</span>
        </el-menu-item>
        <el-sub-menu index="3">
          <template #title>
            <el-icon><location /></el-icon>
            <span>用户</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">员工管理</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-2">角色列表</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-3">权限列表</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon><location /></el-icon>
            <span>文章</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <el-icon><Tickets /></el-icon> 文章排名</el-menu-item
            >
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="2-2">创建文章</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
      </el-menu>
    </div>
    <div class="right"></div>
  </div>
</template>

<script setup>
import { Tickets } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.contont {
  width: 100%;
  height: 100%;
  display: flex;

  .left {
    width: 14%;
    background: #304156;
  }
}
</style>
