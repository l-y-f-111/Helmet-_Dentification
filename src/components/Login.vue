<template>
  <div id="building">


    <body >
    <div style="height: 100svh;display: flex;align-items: center;justify-content: center;overflow: hidden">
      <div class="login_body">

        <div style="flex: 1;display: flex;align-items: center;justify-content: center">
          <el-form :model="user" style="width: 50%">
            <div style="font-size: 20px;font-weight: bold;text-align: center;margin-bottom: 20px;color: white;font-size: 24px">
              欢迎登入头盔识别系统
            </div>
            <el-form-item prop="uid">
              <el-input prefix-icon="el-icon-user" size="large" placeholder="请输入账号"
                        v-model="user.uid"></el-input>
            </el-form-item>
            <el-form-item prop="psw">
              <el-input prefix-icon="el-icon-lock" size="large" show-password placeholder="请输入密码"
                        v-model="user.psw"></el-input>
            </el-form-item>
            <el-form-item prop="validCode">
              <div style="display: flex">
                <el-input placeholder="请输入验证码" v-model="ValidCodeMode" style="flex: 1;width: 37vh"></el-input>
                <div class="code" @click="refreshCode" style="flex: 1;margin-left: 0vh;">
                  <ValidCode title="点击刷新验证码" :identifyCode="identifyCode"></ValidCode>
                </div>
              </div>
            </el-form-item>
            <el-form-item size="large">
              <el-button class="login_btn" type="success" style="width: 100%" @click="login">
                登 录
              </el-button>
            </el-form-item>
            <div style="display: flex">
              <div style="flex: 1;color: white">
                还没有账号？请
                <span style="color: chartreuse;cursor: pointer" @click="register">
                                注册
                            </span>
              </div>
              <div style="flex: 1;text-align: right">
                            <span style="color: chartreuse ;cursor: pointer" @click="update_psw">
                                忘记密码
                            </span>
              </div>
            </div>
          </el-form>
        </div>
      </div>
    </div>
    </body>
  </div>
</template>
<script setup>

import ValidCode from 'E:\\helmet-_dentificatihon\\src\\components\\ValidCode.vue'
import {ElMessage} from 'element-plus'
import {ref, onMounted} from 'vue'
import {useRouter} from 'vue-router'
//import api from "@/axios/api.js"
import request from "@/request"
//获取路由器
let $router = useRouter()
let ValidCodeMode = ref('') //输入框验证码
let identifyCode = ref('') //图形验证码
let identifyCodes = ref('1234567890abcdefjhijklinopqrsduvwxyz') //验证码出现的数字和字母
//存储账号密码信息
let user = ref({
  uid: '',
  psw: ''
})
let l = ref('')
let errorMessage = ref('')
//组件挂载
onMounted(() => {
  identifyCode.value = ''
  makeCode(identifyCodes.value, 4)
})

// 生成随机数
const randomNum = (min, max) => {
  max = max + 1
  return Math.floor(Math.random() * (max - min) + min)
}
// 随机生成验证码字符串
const makeCode = (o, l) => {
  for (let i = 0; i < l; i++) {
    identifyCode.value += o[randomNum(0, o.length)]
  }
}
// 更新验证码
const refreshCode = () => {
  identifyCode.value = ''
  makeCode(identifyCodes.value, 4)
}
//登录
const
    login = async () => {
      if (user.value.uid && user.value.psw) {

        if (!ValidCodeMode.value) {
          ElMessage({type: 'error', message: '验证码不能为空！'})
          return
        }
        //验证验证码是否正确
        if (ValidCodeMode.value !== identifyCode.value) {
          ElMessage({type: 'error', message: '验证码错误'})
          refreshCode()
          return
        } else {
          //向后端通过请求传输账号密码信息
          let res = await request.post('/user/login', user.value);
          if (res.data) {
            ElMessage({type: 'success', message: '登录成功！'})
            $router.push('/home')
          } else
            ElMessage({type: 'error', message: '密码错误！'})
        }
      }
    }

const register = () => {
  $router.push('/register')
}
const update_psw = () => {
  $router.push('/update_psw')
}

</script>

<style>
.img {
  box-shadow: 3px 3px 10px rgba(238, 241, 244, 0.75);
}

#building {
  background: url("/src/assets/preview.jpg");
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
}
.login_body{


  position: relative;
  border: 4px solid #ccc;


  /* 使边框也变透明 */
  border-color: transparent;
  /* 给边框加阴影能够使其有立体感 */
  box-shadow: 2px 2px 0 0 rgba(255,255,255,0.1);

  background-color: rgba(255, 255, 245, 0.3);
  display: flex;
  width: 40%;
  height:60%;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
}
</style>