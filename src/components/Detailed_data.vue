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
          <div style="display: flex;align-items: center;justify-self: center">
            数 据 统 计
          </div>

        </el-header>
        <!--      主体-->

        <el-row :gutter="16">
          <el-col :span="8">
            <div class="statistic-card">
              <el-statistic :value="total_count" style="font-size: 40px">
                <template #title>
                  <div style="display: inline-flex; align-items: center;font-size: 20px">
                    今日检测总次数
                    <el-tooltip
                        effect="dark"
                        content="一天中使用检测总次数"
                        placement="top"
                    >
                      <el-icon style="margin-left: 4px" :size="12">
                        <Warning/>
                      </el-icon>
                    </el-tooltip>
                  </div>
                </template>
              </el-statistic>
              <div class="statistic-footer">
                <div class="footer-item">

                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="statistic-card">
              <el-statistic :value=wear_count>
                <template #title>
                  <div style="display: inline-flex; align-items: center;font-size: 20px">
                    戴头盔人数
                    <el-tooltip
                        effect="dark"
                        content="当日检测中戴头盔人数"
                        placement="top"
                    >
                      <el-icon style="margin-left: 4px" :size="12">
                        <Warning/>
                      </el-icon>
                    </el-tooltip>
                  </div>
                </template>
              </el-statistic>
              <div class="statistic-footer">
                <div class="footer-item">

                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="statistic-card">
              <el-statistic :value='without_count' title="New transactions today">
                <template #title>
                  <div style="display: inline-flex; align-items: center ;font-size: 20px">
                    未佩戴头盔人数
                  </div>
                </template>
              </el-statistic>
              <div class="statistic-footer">
                <div class="footer-item">

                </div>
                <div class="footer-item">
                  <el-icon :size="14">
                    <ArrowRight/>
                  </el-icon>
                </div>
              </div>
            </div>
          </el-col>

        </el-row>


        <el-main>

          <el-row :gutter="10">
            <el-col :span="12">
              <el-card>
                <div id="pie" style="height: 400px;width: 100vh;">

                </div>
              </el-card>
            </el-col>

            <el-col :span="12">
              <el-card>
                <div id="line" style="height: 400px;">

                </div>
              </el-card>
            </el-col>
          </el-row>

        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script lang="ts" setup>
import {Histogram, House, Search, View} from "@element-plus/icons-vue";
import {
  ArrowRight,
  CaretBottom,
  CaretTop,
  Warning,
} from '@element-plus/icons-vue'
import {onMounted, ref} from "vue";
import request from "@/request";

//获取所有检测数据
const total = ref({})
const total_count = ref(-1)
const wear_count = ref(-1)
const without_count = ref(-1)
const bike_count = ref(-1)

onMounted(
    async () => {
      total.value = await request.post("/helmet/select")
      total_count.value = total.value[0]
      wear_count.value = total.value[1]
      without_count.value = total.value[2]
      bike_count.value = total.value[3]
    }
)
const yes_total = ref({})
const yes_total_count = ref(-1)
const yes_wear_count = ref(-1)
const yes_without_count = ref(-1)
const yes_bike_count = ref(-1)
onMounted(
    async () => {
      yes_total.value = await request.post("/helmet/select_yes")
      yes_total_count.value = yes_total.value[0]
      yes_wear_count.value = yes_total.value[1]
      yes_without_count.value = yes_total.value[2]
      yes_bike_count.value = yes_total.value[3]
    }
)


</script>
<script lang="ts">
import * as echarts from 'echarts';
// import * as echarts from 'echarts/core';
import {TooltipComponent, LegendComponent} from 'echarts/components';
import {PieChart} from 'echarts/charts';
import {LabelLayout} from 'echarts/features';
import {CanvasRenderer} from 'echarts/renderers';
import {onMounted, ref} from "vue";

const option1 = {
  title: {
    text: '佩戴头盔与未佩戴头盔人数对比图',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: '人数',
      type: 'pie',
      radius: '50%',
      data: [],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};
const option2 = {
  title: {
    text: '近七日内趋势图'
  },
  tooltip: {
    trigger: 'axis'
  },
  xAxis: {
    type: 'category',
    data: []
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: "佩戴头盔",
      data: [],
      type: 'line',
      smooth: true
    },
    {
      name: "未佩戴头盔",
      data: [1210, 232, 501, 1234, 190, 730, 320],
      type: 'line',
      smooth: true
    }
  ]
};
// echarts.use([
//   TooltipComponent,
//   LegendComponent,
//   PieChart,
//   CanvasRenderer,
//   LabelLayout
// ]);
const helmet_data = await request.post("/helmet/select")
const days_time = await request.post("/helmet/select_time")
const days_wear = await request.post("/helmet/select_wear")
const days_without = await request.post("/helmet/select_without")

const wear_count = ref(0)
const without_count = ref(0)

export default {
  name: "Charts",
  data() {
    return {}
  },
  //等待页面元素全部加载完成后再初始化
  mounted() {
    //饼状图

    let dict = [{name: '戴头盔', value: helmet_data[1]}, {name: '未佩戴头盔', value: helmet_data[2]}]
    dict["戴头盔"] = helmet_data[1]
    console.log(helmet_data[1])
    dict["未佩戴头盔"] = helmet_data[2]
    /*    dict["戴头盔"] = wear_count
        dict["未佩戴头盔"] = without_count*/
    option1.series[0].data = dict
    let pieDom = document.getElementById('pie')
    let pieChart = echarts.init(pieDom)
    pieChart.setOption(option1)


    //折线图
    // console.log(days_time)
    option2.xAxis.data = days_time
    option2.series[0].data=days_wear
    option2.series[1].data=days_without
    let lineDom = document.getElementById('line')
    let lineChart = echarts.init(lineDom)
    lineChart.setOption(option2)


  },
  methods: {}
}

</script>
<style scoped>


:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--el-fill-color) !important;
}

.el-statistic {
  --el-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: var(--el-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--el-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--el-color-success);
}

.red {
  color: var(--el-color-error);
}
</style>
