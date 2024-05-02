<template>
  <div class>

    <el-container class="home_container">
      <el-aside style="width: 200px;background-color: lightslategrey; min-height: 100vh"  >
        <div style="height: 60px;line-height: 60px;color: white;display: flex;align-items: center;justify-content: center">
          <img src="/src/assets/logo.jpg" style="height: 150px;width: 150px;margin-bottom: -20px" >
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
        <el-menu router style="border: none" :default-active="$route.path" background-color="lightslategrey" active-text-color="deepskyblue" text-color="rgba(255,255,255,0.65)">

          <el-menu-item index="/"  >
            <el-icon><House /></el-icon>
            <span style="display: flex;align-items: center;justify-content: center">系统首页</span>
          </el-menu-item>

          <el-menu-item   index="/recognize">
            <el-icon><Search /></el-icon>
            <span style="display: flex;align-items: center;justify-content: center">识别图像</span>
          </el-menu-item>



          <el-menu-item   index="/detailed_data">
            <el-icon><Histogram /></el-icon>
            <span style="display: flex;align-items: center;justify-content: center">详细数据</span>
          </el-menu-item>

          <el-menu-item   index="/safety_warning">
            <el-icon><View /></el-icon>
            <span style="display: flex;align-items: center;justify-content: center">安全警示</span>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-container>
        <!--    头部-->
        <el-header>
          头部区域
        </el-header>
        <!--      主体-->
        <el-main>
          SqsQ
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<script setup>

import {Histogram, House, Search, View} from "@element-plus/icons-vue";
</script>