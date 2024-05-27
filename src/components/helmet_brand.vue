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
        <el-header style="background-color: #d9d9d9">
          <el-icon>
            <View/>
          </el-icon>
          <el-breadcrumb separator="/" style="background-color: lightgrey;font-size: 20px">

            <el-breadcrumb-item :to="{ path: '/safety_warning' }">安全警示</el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/helmet">头盔选购教程</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/helmet_brand">头盔品牌介绍</a>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <!--      主体-->
        <el-main>
          <el-row>
            <el-col :span="5">
              <a href="https://item.jd.com/100051112310.html?cu=true&utm_source=kong&utm_medium=tuiguang&utm_campaign=t_1001542270_2030336762_4100877403_3004996216&utm_term=cb38edaae7e74e63ad2ebc36c12613d6">
                <img style="width: 100%" src="/src/assets/yema.jpg">
              </a>
              <br> <br>
              <div style="text-align: center;font-weight: bolder ">
                NO.1
              </div>
              <div style="line-height: 5vh;font-family: 新宋体;font-size: 18px;border: 3px solid #ccc;">
                YEMA野马成立于1991年，坐落在浙江省金华市兰溪市经济开发区，是一家占地面积30000平方米，集生产、检测
                、开发、创作、销售于一体的头盔制作商，是目前中国市场销量遥遥领先的头盔品牌
              </div>
            </el-col>
            <el-col :span="1">
            </el-col>
            <el-col :span="5">
              <a href="https://item.jd.com/66705290180.html?cu=true&utm_source=kong&utm_medium=tuiguang&utm_campaign=t_1001542270_2030336762_4100877403_3004996216&utm_term=16717acd405340aabe5bae3b596e1cba">
                <img style="width: 100%" src="/src/assets/ls.jpg">
              </a>
              <br>
              <br>
              <div style="text-align: center;font-weight: bolder ">
                NO.2
              </div>
              <div style="line-height: 5vh;font-family: 新宋体;font-size: 18px;border: 3px solid #ccc;">
                鹏程头盔有限公司为香港独资企业。公司座落于风景秀丽的广东省鹤山市共和镇境内，以生产摩托
                车头盔和赛车盔为主。产品远销欧美，遍布全球。公司年出口总量超过200万顶，年生产总值过亿
                元。鹏程头盔有限公司现已发展成为国内具规模的头盔生产基地。
              </div>
            </el-col>
            <el-col :span="1">
            </el-col>
            <el-col :span="5">
              <a href="https://item.jd.com/100048728039.html?cu=true&utm_source=kong&utm_medium=tuiguang&utm_campaign=t_1001542270_2030336762_4100877403_3004996216&utm_term=70c710fb584e417e91f7cc29f1b7eef2&czLogin=1">
                <img style="width: 100%" src="/src/assets/yohe.jpg">
              </a>
              <br>
              <br>
              <div style="text-align: center;font-weight: bolder ">
                NO.3
              </div>
              <div style="line-height: 5vh;font-family: 新宋体;font-size: 18px;border: 3px solid #ccc;">
                永恒公司有独立的头盔加工装配工厂、头盔镜片厂、头盔EPS厂及花纸印刷厂四个生产基地。
                产品分半盔、全盔、组合盔、越野盔四大系列，目前有12个产品外观及实用新型获得专利。
              </div>
            </el-col>
            <el-col :span="1">
            </el-col>
            <el-col :span="5">
              <a href="https://item.jd.com/100035986597.html?cu=true&utm_source=kong&utm_medium=tuiguang&utm_campaign=t_1001542270_2030336762_4100877403_3004996216&utm_term=28fb51d176d1489b86ba91945efa09e0">
                <img style="width: 100%" src="/src/assets/agv.jpg">
              </a>

              <br>
              <br>
              <div style="text-align: center;font-weight: bolder ">
                NO.4
              </div>
              <div style="line-height: 5vh;font-family: 新宋体;font-size: 18px;border: 3px solid #ccc;">
                agv是意大利的头盔品牌，是较早生产玻璃纤维头盔的企业，也是大型国际体育竞赛用品制造企业，创立于1947年。
                但是国内大部分agv都是厦门产地。颜值高质量好

              </div>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<script setup>

import {Histogram, House, Search, View} from "@element-plus/icons-vue";
</script>