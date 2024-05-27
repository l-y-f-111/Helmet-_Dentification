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
            <span style="display: flex;align-items: center;justify-content: center;">安全警示</span>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-container>
        <!--    头部-->
        <el-header style="background-color: #d9d9d9">
          <el-icon>
            <View/>
          </el-icon>
          <el-breadcrumb separator="/">

            <el-breadcrumb-item :to="{ path: '/safety_warning' }" style="background-color: lightgrey;font-size: 20px">安全警示</el-breadcrumb-item>


          </el-breadcrumb>
        </el-header>
        <!--      主体-->
        <el-main>
          <el-row>
            <el-container>
              <a href="https://inanshan.sznews.com/content/2017-03/13/content_15640711_0.htm">
                <img src="/src/assets/safety1.png" style="width: 50vh;height: 50vh;margin-left: 20vh">
                <div class="div1">
                  <br>
                  深圳宝安一电动车“逆行”与的士相撞 1人身亡
                </div>
              </a>

            </el-container>
            <el-container>
              <a href="https://user.guancha.cn/main/content?id=214350">
                <img src="/src/assets/safety2.jpg" style="width: 50vh;height: 50vh">
                <div class="div2">
                  <br>
                  令人惊心：两起电动车事故，戴没戴头盔，差别迥异！
                </div>
              </a>
            </el-container>
          </el-row>
          <el-row>
            <a href="/helmet">
              <div class="helmet">
                电动车头盔究竟该如何选购，点击此查看教程
              </div>
            </a>

          </el-row>

        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<script setup>

import {Histogram, House, Search, View} from "@element-plus/icons-vue";
import router from "@/router/index.js";
/*function safety1(){
  this.$router.push('https://inanshan.sznews.com/content/2017-03/13/content_15640711_0.htm')
}*/
</script>
<style>
.div1 {
  margin-left: 20vh;
  margin-bottom: -15vh;
  font-family: 新宋体;
  font-size: 17px;
}

.div2 {
  margin-left: -2vh;
  margin-bottom: -15vh;
  font-family: 新宋体;
  font-size: 17px;
}

.helmet {
  margin-top: 30vh;
  font-size: 30px;
  font-family: 新宋体;
}
</style>