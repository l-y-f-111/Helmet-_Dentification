<template>
  <div class>

    <el-container class="home_container">
      <el-aside style="width: 200px;background-color: lightslategrey; min-height: 100vh">
        <div
            style="height: 60px;line-height: 60px;color: white;display: flex;align-items: center;justify-content: center">
          <img src="/src/assets/logo.jpg" style="height: 150px;width: 150px;margin-bottom: -20px">
        </div>
        <!--          <el-menu router background-color="lightslategrey" active-text-color="blue" style="border: none" default-active="$route.path">-->

        <!--            <el-menu-item index="/" style="background-color: lightslategrey" >-->
        <!--                <el-icon><House style="color: white"/></el-icon>-->
        <!--                  <span style="color: white;display: flex;align-items: center;justify-content: center">信息管理</span>-->
        <!--            </el-menu-item>-->

        <!--            <el-menu-item  style="background-color: lightslategrey" index="/element">-->
        <!--              <el-icon><House style="color: white"/></el-icon>-->
        <!--              <span style="color: white;display: flex;align-items: center;justify-content: center">信息管理</span>-->
        <!--            </el-menu-item>-->

        <!--          </el-menu>-->
        <el-menu router style="border: none" :default-active="$route.path" background-color="lightslategrey"
                 active-text-color="deepskyblue" text-color="rgba(255,255,255,0.65)">

          <el-menu-item index="/home">
            <el-icon>
              <House/>
            </el-icon>
            <span style="display: flex;align-items: center;justify-content: center">系统首页</span>
          </el-menu-item>

          <el-menu-item   index="/recognize">
            <el-icon><Search /></el-icon>
            <span style="display: flex;align-items: center;justify-content: center">识别图片</span>
          </el-menu-item>

          <el-menu-item index="/recognize_mp4">
            <el-icon>
              <Search/>
            </el-icon>
            <span style="display: flex;align-items: center;justify-content: center">识别视频</span>
          </el-menu-item>


          <el-menu-item index="/detailed_data">
            <el-icon>
              <Histogram/>
            </el-icon>
            <span style="display: flex;align-items: center;justify-content: center">详细数据</span>
          </el-menu-item>

          <el-menu-item index="/safety_warning">
            <el-icon>
              <View/>
            </el-icon>
            <span style="display: flex;align-items: center;justify-content: center">安全警示</span>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-container>
        <!--    头部-->
        <el-header style="background-color: lightgrey;font-size: 20px">
          请 上 传 图 像 进 行 识 别
        </el-header>
        <!--      主体-->
        <el-main style="align-items: center;display: flex">


          <el-row>
            <el-container style="display: flex;align-items: center">
              <el-upload
                  class="avatar-uploader"
                  action="http://localhost:8080/file/upload"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <el-icon v-else class="el-icon-plus avatar-uploader-icon">
                  <Plus></Plus>
                </el-icon>
              </el-upload>


            </el-container>

            <div>


            </div>
            <div style="margin-left: 20vh;font-family: 新宋体;font-size: 5vh;display: flex;
               margin-bottom: 10vh; align-items: center;line-height: 15vh">
              <!--              <div>-->
              <!--                检 测 结 果：-->
              <!--                <el-scrollbar height="400px">-->
              <!--                  <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>-->
              <!--                </el-scrollbar>-->
              <!--              </div>-->
              <el-col>
                <el-row :span="5" style=" border: 5px solid #ccc; width: 80vh">
                  <div style="margin-top: 8vh">    检 测 结 果：</div>

                  <el-scrollbar height="30vh"  style="width:30vh;margin-left: 12vh">
                    <p v-for="type in types" :key="type" class="scrollbar-demo-item">{{ type }}</p>
                  </el-scrollbar>
                </el-row>

                <el-row :span="4"></el-row>

                <el-row :span="5" style=" border: 5px solid #ccc;width: 80vh">
                  <div style="margin-top: 8vh">   准 确 率 ：</div>
                  <el-scrollbar height="30vh" style="width:30vh;margin-left: 17vh;display: flex;align-items: center;justify-self: center">
                    <p v-for="ac in accuracy" :key="ac" class="scrollbar-demo-item">{{ ac }}</p>
                  </el-scrollbar>
                </el-row>

              </el-col>
              <el-button @click="confirm" class="button_style">识别图像</el-button>
            </div>


          </el-row>

        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<script lang="ts">

import api from '../api.js'

</script>



<script lang="ts" setup>


import {ref} from 'vue'
import {ElMessage} from 'element-plus'
import {Histogram, House, Plus, Search, View} from "@element-plus/icons-vue";

import type {UploadProps} from 'element-plus'
import request from "@/request";
import axios from "axios";



const imageUrl = ref('')


let dialogImageUrl = '';
let dialogVisible = false;
const types=ref({}) ;
const  accuracy=ref({});

function handleRemove(file, fileList) {
  console.log(file, fileList);
}

function handlePictureCardPreview(file) {
  this.dialogImageUrl = file.url;
  this.dialogVisible = true;
}

const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}


const
    confirm = async () => {
      const response = await api.getPicture()
      imageUrl.value = "data:image/png;base64, " + response.data
      //获取类型信息
   /*   axios.get('/helmet/type')
          .then(response => {
            this.items = response.data; // 将后端返回的数据赋值给items数组
          })
          .catch(error => {
            console.error(error);
          });*/
      types.value = await request.post('/helmet/type')
      // types = (await axios.get('http:/localhost:8080/helmet/type')).data
     // console.log(items)
     // console.log("asdadadadasdasdasd")
      accuracy.value = await request.post('/helmet/accuracy')
    }
</script>

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      imageUrl: ''-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    handleAvatarSuccess(res, file) {-->
<!--      this.imageUrl = URL.createObjectURL(file.raw);-->
<!--    },-->

<!--  }-->
<!--}-->
<!--</script>-->
<style>
.avatar-uploader .el-upload {
  border: 5px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 100px;
  color: #8c939d;
  width: 55vh;
  height: 55vh;
  line-height: 400px;
  text-align: center;
}

.avatar {
  width: 55vh;
  height: 55vh;
  display: block;
}

.button_style {
  background-color: #1795bb;
  border-radius: 12px;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 25px;
  margin: 4px 2px;
  height: 8vh;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  cursor: pointer;
  margin-top: 75vh;
  margin-left: -35vh;

}

.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  margin: 30px;
  text-align: center;
  border-radius: 1px;
  color: var(--el-color-primary);
}
</style>