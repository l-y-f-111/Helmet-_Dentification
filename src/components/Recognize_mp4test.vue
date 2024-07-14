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

          <el-menu-item index="/recognize">
            <el-icon>
              <Search/>
            </el-icon>
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
              <el-row>
                <el-col>

                  <!--              <div>-->
                  <!--                检 测 结 果：-->
                  <!--                <el-scrollbar height="400px">-->
                  <!--                  <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>-->
                  <!--                </el-scrollbar>-->
                  <!--              </div>-->
                  <el-button @click="confirm" class="button_style"
                             style="color: #181818; height: 10vh;margin-left: 0vh;margin-top: -20vh">
                    识别视频
                  </el-button>
                  <el-upload

                      class="upload-demo"
                      action="http://localhost:8080/file/upload"
                      multiple
                      :on-preview="handlePreview"
                      :on-remove="handleRemove"
                      :before-remove="beforeRemove"
                      :on-success="handleAvatarSuccess"
                      :limit="3"
                      :on-exceed="handleExceed"
                  >
                    <el-button type="primary" style="height: 8vh;font-size: 20px;margin-top: 10vh">点击上传视频
                    </el-button>
                    <template #tip>
                      <div class="el-upload__tip">
                      </div>
                    </template>
                  </el-upload>
                </el-col>
              </el-row>
              <video-player

                  src="src/assets/test.mp4"
                  style="width:90vh;height: 90vh;margin-top: 0vh;margin-left: 40vh"
                  class="video-player vjs-custom-skin"
                  ref="videoPlayer"
                  :playsinline="true"
                  controls
              ></video-player
               >

            </el-container>

            <div>


            </div>


          </el-row>

        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<script lang="ts">


export default {
  data() {
    return {
      playerOptions: {

        sources: [{
          type: 'video/mp4', // 类型
          src: 'src/assets/helmet.mp4',   // url地址

        }]
      }
    }
  }
}


</script>


<script lang="ts" setup>

import 'video.js/dist/video-js.css';
import api from '../api.js'
import {ref} from 'vue'
import {ElMessage, ElMessageBox} from 'element-plus'

import type {UploadProps, UploadUserFile} from 'element-plus'
import {Histogram, House, Plus, Search, View} from "@element-plus/icons-vue";
import request from "@/request";
import axios from "axios";
import {VideoPlayer} from "@videojs-player/vue";


const mp4Url = ref('')

let dialogmp4Url = '';
let dialogVisible = false;
const types = ref({});
const accuracy = ref({});


function handlePictureCardPreview(file) {
  this.dialogImp4Url = file.url;
  this.dialogVisible = true;
}

const handleAvatarSuccess: UploadProps['onSuccess'] = async (
    response,
    uploadFile
) => {
  mp4Url.value = response.data

}


const
    confirm = async () => {
      const Idnex = mp4Url.value.lastIndexOf('/')
      const photoName = mp4Url.value.substring(Idnex + 1, mp4Url.value.length)

      const dotIndex = photoName.lastIndexOf('.');
      const filename = photoName.substring(0, dotIndex);
      console.log(photoName)
      const response = await api.getMp4({
        params: {
          photoName: photoName
        }
      })
      mp4Url.value = "data:image/png;base64, " + response.data
      console.log();
      //获取类型信息
      /*   axios.get('/helmet/type')
             .then(response => {
               this.items = response.data; // 将后端返回的数据赋值给items数组
             })
             .catch(error => {
               console.error(error);
             });*/
    }


const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}

const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
      `The limit is 3, you selected ${files.length} files this time, add up to ${
          files.length + uploadFiles.length
      } totally`
  )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
      `删除视频 ${uploadFile.name} ?`
  ).then(
      () => true,
      () => false
  )
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
<!--      this.mp4Url = URL.createObjectURL(file.raw);-->
<!--    },-->

<!--  }-->
<!--}-->
<!--</script>-->
<style scoped>
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
  margin-top: 70vh;
  margin-left: 40vh;

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