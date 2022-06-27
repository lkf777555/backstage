<template>
  <div class="login-container">
    <el-form
      ref="LoginForm"
      :model="loginForm"
      :rules="loginRules"
      class="login-form"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
        <svg-icon className="svg-language" icon="language"></svg-icon>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <el-icon> <svg-icon icon="user"></svg-icon></el-icon>
        </span>
        <el-input v-model="loginForm.username" />
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <el-icon>
            <svg-icon icon="password"></svg-icon>
          </el-icon>
        </span>
        <el-input :type="inputType" v-model="loginForm.password"></el-input>
        <span class="svg-pwd" @click="handllePassWordStatus">
          <el-icon>
            <svg-icon :icon="passwordIconStatus"></svg-icon>
          </el-icon>
        </span>
      </el-form-item>
      <el-button
        class="login-button"
        type="primary"
        @click="handleLoginSubmit(LoginForm)"
        :loading="loadinging"
        >登录</el-button
      >
    </el-form>
    <div class="text">
      <p>1. 超级管理员账号： super-admin</p>
      <p>2. 管理员账号：admin</p>
      <p>3. 测试可配置账号：test</p>
      <p>密码统一为：123456</p>
      <p>注意：导入用户区分中英文库！！！！</p>
    </div>
  </div>
</template>

<script setup>
import { login } from '../../api/user'
import { reactive, ref, computed } from 'vue'
import { validatePassword } from './rule'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

const router = useRouter() // 引入路由
const inputType = ref('password') // 密码类型
const loadinging = ref(false) // 默认不加载
const loginForm = reactive({
  username: 'admin',
  password: '123456'
})

const loginRules = reactive({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword
    }
  ]
})

const passwordIconStatus = computed(() => {
  // 使用计算属性判断密码类型是否闭眼
  return inputType.value === 'password' ? 'eye' : 'eye-open'
})

const handleLoginSubmit = async () => {
  if (loginForm.username === 'admin' && loginForm.password === '123456') {
    router.push('/user')
  } else {
    ElMessage('登录失败')
  }
  loadinging.value = true // loading 开启
  await login(loginForm)
  loadinging.value = false // loading 请求成功关闭
}
const handllePassWordStatus = () => {
  // 点击判断密码类型
  inputType.value = inputType.value === 'password' ? 'text' : 'password'
}
</script>

<style scoped lang="scss">
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  position: relative;
  height: 100%;
  background-color: $bg;

  .login-form {
    width: 520px;
    padding: 0 35px;
    position: absolute;
    left: 50%;
    margin-left: -260px;
    top: 160px;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;

      .svg-container {
        padding: 6px 5px 6px 15px;
        color: $dark_gray;
        vertical-align: middle;
        display: inline-block;
      }

      .svg-pwd {
        position: absolute;
        right: 20px;
        top: 10px;
        font-size: 16px;
        color: $dark_gray;
        cursor: pointer;
        user-select: none;
      }
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      .el-input__wrapper {
        background: transparent !important;
        box-shadow: none;
      }
      .el-input__wrapper.is-focus {
        box-shadow: none;
      }
      input {
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }

    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        color: $light_gray;
        text-align: center;
        font-weight: bold;
        margin-bottom: 40px;
      }
      ::v-deep .svg-language {
        position: absolute;
        top: 4px;
        right: 0;
        background-color: #fff;
        font-size: 22px;
        padding: 4px;
        border-radius: 4px;
        cursor: pointer;
      }
    }

    .login-button {
      width: 100%;
      margin-bottom: 30px;
    }
  }
  .text {
    width: 520px;
    position: absolute;
    left: 30%;
    margin-left: -260px;
    top: 220px;
    color: white;
    p {
      margin-top: 10px;
    }
  }
}
</style>
