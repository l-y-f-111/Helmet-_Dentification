<template>
  <div class="back">

    <el-container class="home_container">
      <el-aside style="background-color: lightslategrey; width: 200px">
        <div
            style="height: 100px;line-height: 60px;color: white;display: flex;align-items: center;justify-content: center">
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
        <el-header>
          <div
              style="align-items: center;justify-self: center;display: flex;margin-left: 60vh;font-weight:bolder;font-size: 40px">
            欢迎使用头盔检测系统！
          </div>

        </el-header>
        <!--      主体-->
        <el-main>
          <div class="block text-center" style="width: 100%;margin-left: 44vh">

            <el-carousel style="height: 50%;width:50%;" motion-blur>
              <!--              <el-carousel-item v-for="item in carouseData" :key="item">-->
              <!--                <img :src="item.url" alt=""/>-->
              <!--              </el-carousel-item>-->
              <el-carousel-item>
                <img src="E:/helmet-_dentificatihon/src/assets/Carousel_image/1.jpg" style="width: 100%;height: 100% ">
              </el-carousel-item>
              <el-carousel-item>
                <img src="E:/helmet-_dentificatihon/src/assets/Carousel_image/2.png" style="width: 100%;height: 100%">
              </el-carousel-item>
              <el-carousel-item>
                <img src="E:/helmet-_dentificatihon/src/assets/Carousel_image/3.jpg" style="width: 100%;height: 100%">
              </el-carousel-item>
              <el-carousel-item>
                <img src="E:\helmet-_dentificatihon\src\assets\Carousel_image\4.jpg" style="width: 100%;height: 100%">
              </el-carousel-item>
            </el-carousel>
            <span class="demonstration" style="margin-left: 40vh">交通事故警示</span>
          </div>
          <div class="txt" style="align-items: center;justify-self: center;display:
          flex;text-indent: 2em;font-size: 20px;font-family: 新宋体;line-height: 40px;font-weight:bold;  ">
            <strong>
              近年来，交通事故频发，因未佩戴头盔而造成的伤亡率居高不下。以天津市为例，2019年天津市

              范围内发生的交通死亡事故中有21.17%的事故涉及电动自行车，同比上升8.99%.在因交通事故

              死亡的人员中，骑、乘电动自行车的人数较多，其中颅脑损伤致死率高达80%。有研究表明，正

              确佩戴安全头盔、规范使用安全带能够将交通事故死亡风险降低60%至70%。
            </strong>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>
<script setup>


import {Histogram, House, Search, View} from "@element-plus/icons-vue";

</script>
<style>
.home_container {
  height: 100%;
  width: 100%;
}

.el-menu-item:hover {
  color: powderblue !important;
}

.back {
  display: flex;
  flex-direction: column;

  background-attachment: fixed;
  width: 100%;
  height: 100%;
  background-size: cover; /* 使图片平铺满整个浏览器（从宽和高的最大需求方面来满足，会使某些部分无法显示在区域中） */
  position: absolute; /* 不可缺少 */
  justify-content: center;
  align-items: center;
}

.demonstration {
  color: black;
  margin-left: 37%;
  font-weight: bold;
}

.el-header {
  display: flex;
  align-items: center;
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;

}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.txt{
  width: 60%;
  height:37vh;
  margin-left: 35vh;
  margin-top: 2vh;
  box-shadow: 1px 0 4px rgba(0, 21, 41, .35);
  border-radius: 5px;
  border: 4px solid white;
}
</style>
