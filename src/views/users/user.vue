<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '234px'" class="aside"
        ><div class="moke">
          <img
            class="moimg"
            src="https://m.imooc.com/static/wap/static/common/img/logo-small@2x.png"
          />
          <b v-show="!isCollapse">imooc-admin</b>
        </div>
        <el-menu
          :collapse="isCollapse"
          active-text-color="#ffd04b"
          background-color="#304156"
          class="el-menu-vertical-demo"
          text-color="#fff"
          unique-opened
          router
        >
          <el-menu-item index="/profile">
            <el-icon><User /></el-icon>
            <span>个人中心</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><Histogram /></el-icon>
            <span>数据可视化</span>
          </el-menu-item>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><User /></el-icon>
              <span>用户</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <el-icon><User /></el-icon>员工管理</el-menu-item
              >
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="1-2"
                ><el-icon><User /></el-icon>角色列表</el-menu-item
              >
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="1-3">
                <el-icon><Lollipop /></el-icon>权限列表</el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <el-icon><Tickets /></el-icon>
              <span>文章</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">
                <el-icon><Notebook /></el-icon> 文章排名</el-menu-item
              >
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="2-2">
                <el-icon><ChatLineSquare /></el-icon>创建文章</el-menu-item
              >
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu></el-aside
      >
      <el-main>
        <!-- 顶部部分 -->
        <div class="herad">
          <div class="left">
            <el-icon size="28px" v-if="!isCollapse" @click="isCollapse = true">
              <Fold
            /></el-icon>
            <el-icon size="28px" v-else @click="isCollapse = false"
              ><Expand
            /></el-icon>
          </div>
          <div class="right">
            <div @click="onToggle">
              <svg-icon v-if="!isFullscreen" :icon="'fullscreen'" />
              <svg-icon v-else :icon="'exit-fullscreen'" />
            </div>
          </div>
        </div>

        <div class="viees">
          <!-- 面包屑 -->
        </div>
        <div class="views">
          <!-- routevivew -->
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import {
  Tickets,
  Fold,
  Expand,
  User,
  Histogram,
  Lollipop,
  ChatLineSquare,
  Notebook
} from '@element-plus/icons-vue'
import { ref, onMounted, onUnmounted } from 'vue'
import screenfull from 'screenfull'

const isCollapse = ref(false)
// 是否全屏
const isFullscreen = ref(false)

// 监听变化
const change = () => {
  isFullscreen.value = screenfull.isFullscreen
}

// 切换事件
const onToggle = () => {
  screenfull.toggle()
}

// 设置侦听器
onMounted(() => {
  screenfull.on('change', change)
})

// 删除侦听器
onUnmounted(() => {
  screenfull.off('change', change)
})
</script>

<style lang="scss" scoped>
/* 加过渡给侧边导航*/
.el-aside {
  height: 100vh;
  background: #304156;
  transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -moz-transition: width 0.25s;
  -webkit-transition: width 0.25s;
  -o-transition: width 0.25s;
}
/*加快侧边栏文字消失的速度*/
.el-menu {
  transition: all 2ms;
}

.moke {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  .moimg {
    width: 44px;
    height: 44px;
  }
  b {
    margin-left: 10px;
  }
}
.el-main {
  padding: 0px;
  margin: 0px;
  .herad {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: rgb(240, 245, 245) solid 1px;
    .left {
    }
    .right {
      font-size: 26px;
    }
  }
  .views {
    width: 100%;
    height: 100%;
    margin-top: 10px;
    background: #fbfbfb;
  }
  .viees {
    width: 100%;
    height: 32px;
    background: rgb(137, 216, 238);
  }
}
</style>
