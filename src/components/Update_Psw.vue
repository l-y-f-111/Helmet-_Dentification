<template>
  <div id="building">
    <body>
    <div style="height: 100svh;display: flex;align-items: center;justify-content: center;overflow: hidden">
      <div class="register_body"
      >
        <div style="flex: 1;display: flex;align-items: center;justify-content: center">
          <el-form :model="user" style="width: 80%">
            <div style="font-size: 20px;font-weight: bold;text-align: center;margin-bottom: 20px;color: white">
              忘记密码
            </div>
            <el-form-item prop="account">
              <el-input prefix-icon="el-icon-user" size="large" placeholder="请输入账号"
                        v-model="user.uid"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input prefix-icon="el-icon-lock" size="large" show-password placeholder="请输入新的密码"
                        v-model="user.psw"></el-input>
            </el-form-item>
            <el-form-item prop="telephone">
              <el-input prefix-icon="el-icon-lock" size="large" show-password placeholder="请再次输入新的密码"
                        v-model="user.againpassword"></el-input>
            </el-form-item>


            <el-form-item size="large">
              <el-button class="regitser_btn" type="success" style="width: 100%" @click="update_psw">
                修改
              </el-button>
            </el-form-item>
            <div style="display: flex">
              <div style="flex: 1">
                            <span style="color: chartreuse;cursor: pointer" @click="login()">
                                返回
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
import {ref} from "vue";
import request from "@/request"
import {ElMessage} from "element-plus";
import "@/components/Update_Psw.vue";

let user = ref({
  uid: '',
  psw: '',
  againpassword: '',
})

const update_psw = async () => {

  if (user.value.uid != null && user.value.psw != null) {
    if (user.value.psw !== user.value.againpassword) {
      ElMessage({type: 'error', message: '两次密码错误'})
    } else {
      if ((await request.post('/user/update', user.value)).data) {
        ElMessage({type: 'success', message: '修改成功！'})
      } else ElMessage({type: 'error', message: '该账号不存在，修改失败！'})
    }
  } else {
    ElMessage({type: 'error', message: '数据不能为空'})
  }
}

</script>
<script>
export default {
  methods: {
    login() {
      this.$router.push("/")
    }
  }
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
.register_body {
  position: relative;
  border: 4px solid #ccc;


  /* 使边框也变透明 */
  border-color: transparent;
  /* 给边框加阴影能够使其有立体感 */
  box-shadow: 2px 2px 0 0 rgba(255, 255, 255, 0.1);

  background-color: rgba(255, 255, 245, 0.3);
  display: flex;
  width: 40%;
  height: 60%;
  border-radius: 10px;
  overflow: hidden;
  align-items: center;
  justify-content: center;

}
</style>