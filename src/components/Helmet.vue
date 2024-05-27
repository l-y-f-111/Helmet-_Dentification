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
        <el-header style="background-color: #d9d9d9">
          <el-icon>
            <View/>
          </el-icon>
          <el-breadcrumb separator="/ " style="background-color: lightgrey;font-size: 20px">

            <el-breadcrumb-item :to="{ path: '/safety_warning' }">安全警示</el-breadcrumb-item>

            <el-breadcrumb-item :to="{ path: '/helmet' }">头盔选购教程</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <!--      主体-->
        <el-main>
          <el-col :span="5"> </el-col>
          <el-row :span="12">
            <el-col :span="2"> </el-col>
            <el-col :span="11">
              <a href="/helmet_type">
                <div class="helmet_type">头盔类型</div>
              </a>
              <div style="margin-top: 5vh ;font-size: 20px;font-family: 新宋体">
                提醒大家，安全帽、运动头盔不能替代安全头盔 ！
              </div>

            </el-col>
            <el-col :span="11">
              <a href="/helmet_standard">
                <div class="helmet_standard">头盔标准</div>
              </a>
              <div style="margin-top: 5vh ;font-size: 20px;font-family: 新宋体;
              margin-left: -30vh;
             ;text-align: center;/*水平居中*/">
                头盔是有国家标准的，实行强制性产品认证，
                <br> 也就是大家常说的3C认证
              </div>

            </el-col>
          </el-row>
          <el-row :span="12">
            <a href="/helmet_brand">

              <div class="helmet_brand">头盔品牌介绍</div>
            </a>
            <div style="margin-top: 35vh;margin-left: -43vh ;font-size: 20px;font-family: 新宋体">
              头盔品牌种类繁多，此处仅介绍JD销量前四的品牌
            </div>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<script setup>

import {Histogram, House, Search, View} from "@element-plus/icons-vue";
</script>
<style>
.helmet_type {
  font-family: 新宋体;
  font-size: 40px;
  margin-top: 10vh;
  margin-left: -200px;
}

.helmet_standard {
  font-family: 新宋体;
  font-size: 40px;
  margin-top: 10vh;
  margin-left: 100px;
}

.helmet_brand {
  font-family: 新宋体;
  font-size: 40px;
  margin-top: 10vh;
  margin-left: 50vh;
  margin-top: 20vh;
}


</style>
