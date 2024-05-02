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
              <a href="/helmet_standard">头盔标准</a>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <!--      主体-->
        <el-main>
          <el-row :span="12">
            <el-col :span="5">
              <img class="s3c" src="/src/assets/3c.png">
            </el-col>
            <el-col :span="5">

              <div style="font-family: 新宋体;margin-top: 1vh;font-size: 19px;border: 5px solid #ccc;">
                现在国内的认证标准是GB 811-2010，
                其实国内的标准相对于国外的DOT、ECE之类的规范来说并不低。
                3C认证所依据的技术标准就是按GB的标准来执行，申请3C的产品质
                量必须符合国标的要求，并且要有能够保证持续满足要求的质量管理性文件。
              </div>
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="5">
              <img class="dot" src="/src/assets/dot.png">
            </el-col>
            <el-col :span="5">
              <div style="font-family: 新宋体;margin-top: 1vh;font-size: 19px;border: 5px solid #ccc;">
                DOT为美国交通运输部（UnitedStated Department of Transportation）的缩写，
                在美国市售的头盔均需要通过DOT（适用于头盔的是FMVSS No.218）认证。
                DOT一般分为A、B、C三级，其中C级标准最低，仅达到了美国运输部（DOT）规定的最低性能条件。
              </div>
            </el-col>
          </el-row>
          <el-row :span="12" style="margin-top: 10vh">
            <el-col :span="5">
              <img class="ece" src="/src/assets/ece.png">
            </el-col>
            <el-col :span="4">
              <div style="font-family: 新宋体;margin-top: 5vh;font-size: 19px; border: 5px solid #ccc;">
                ECE为欧洲经济委员会（Economic Commission of Europe）简称，
                适用于摩托车头盔的编号为ECE R22/05，欧洲部分国家生产的头盔都会通过ECE 认证。
              </div>
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="6">
              <img class="jis" src="/src/assets/jis.png">
            </el-col>
            <el-col :span="1"></el-col>
            <el-col :span="4">
              <div style="font-family: 新宋体;margin-top: -2vh;font-size: 19px;border: 5px solid #ccc;">
                日本的SG、JIS、MFJ认证：SG（Safety Goods）由消费品安全协会
                （CPSA）依据《消费品安全法》制定，JIS是日本工业标准，MFJ（M
                otorcycle Federation of Japan）是日本摩托赛事的相关单位。比较常见
                的就是JIS认证，现在的最新标准是T8133-2015（摩托车适用的标准为种类2）
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
<style>
.s3c {
  height: 30vh;
  width: 30vh;
}

.dot {
  height: 30vh;
  width: 30vh;
}

.ece {
  height: 30vh;
  width: 30vh;

}

.jis {
  height: 30vh;
  width: 50vh;
}
</style>