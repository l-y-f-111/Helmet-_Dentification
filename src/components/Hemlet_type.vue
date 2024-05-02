<template>
  <div class>

    <el-container>
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

          <el-menu-item index="/">
            <el-icon>
              <House/>
            </el-icon>
            <span style="display: flex;align-items: center;justify-content: center">系统首页</span>
          </el-menu-item>

          <el-menu-item index="/recognize">
            <el-icon>
              <Search/>
            </el-icon>
            <span style="display: flex;align-items: center;justify-content: center">识别图像</span>
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
          <el-breadcrumb separator="/">

            <el-breadcrumb-item :to="{ path: '/safety_warning' }">安全警示</el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/helmet">头盔选购教程</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/helmet_type">头盔类型介绍</a>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <!--      主体-->
        <el-main>

          <el-row>
            <el-col :span="9">
              <div class="helmet_type">
                头 盔 类 型
              </div>
              <div class="presentation">
                电动车头盔大概分为半盔，3/4盔，揭面盔，全盔，
                <br>
                儿童盔等几种，我们骑电动车的话估计比较少会买
                <br>
                全盔或者揭面盔，全盔适用于摩 托车（可惜深圳
                <br>
                禁摩，悲伤的故事），一般都是3/4盔和半盔，还
                <br>
                有儿童盔；3/4盔的话冬季会会比较合适，夏季估
                <br>
                计会热，半盔就适合夏季，两者差别不大，现在很
                <br>
                多半盔也都可以罩住后脑勺，所以两者都是可以的。
                <br>
                <img src="/src/assets/helmet.png" style="height: 30vh;width: 30vh;margin-left: 5vh">
              </div>

            </el-col>


            <el-col :span="7">
              <el-row>
                <img src="/src/assets/helmet_type1.png"
                     style="height: 30vh;width: 30vh;margin-left: 5vh;margin-top: 5vh">
                <div>

                </div>
              </el-row>
              <el-row>
                <img src="/src/assets/helmet_type2.png"
                     style="height: 30vh;width: 30vh;margin-left: 5vh;margin-top: 5vh">
              </el-row>

            </el-col>
            <el-col :span="7">
              <el-row>
                <img src="/src/assets/helmet_type3.png"
                     style="height: 30vh;width: 30vh;margin-left: 5vh;margin-top: 5vh">
              </el-row>
              <el-row>
                <img src="/src/assets/helmet_type4.png"
                     style="height: 30vh;width: 30vh;margin-left: 5vh;margin-top: 5vh">
              </el-row>

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
<style>
.helmet_type {
  font-size: 25px;
  font-family: 新宋体;
  font-weight: bolder;
  align-items: center;
  display: flex;
  justify-content: center;

}

.presentation {
  line-height: 5vh;
  font-family: 新宋体;
  font-size: 18px;
  margin-bottom: 100px;
  border: 5px solid #ccc;
}
</style>