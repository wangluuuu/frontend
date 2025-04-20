<template>
  <el-container style="height: 100vh;">
    <el-header style="background: aqua;padding: 0">
      <top-menu/>
    </el-header>
    <el-container style="padding: 10px 10px">
      <!-- 左侧侧边栏 -->
      <el-aside width="240px" class="sidebar">
        <!-- 日历 -->
        <LCalendar />
        <!-- 个人时间线 -->
        <h3>个人时间线</h3>
        <el-timeline>
          <el-timeline-item
              v-for="item in timeline"
              :key="item.date"
              :timestamp="item.date"
              :color="item.color"
          >
            {{ item.content }}
          </el-timeline-item>
        </el-timeline>
      </el-aside>

      <!-- 中间博客列表 -->
      <el-main class="content" style="background: antiquewhite">
        <el-row :gutter="20">
          <el-col
              v-for="article in articles"
              :key="article.id"
              :xs="24" :sm="12" :md="8" :lg="6"
          >
            <el-card shadow="hover" class="article-card">
              <template #header>
                <h3>{{ article.title }}</h3>
              </template>
              <p class="summary">{{ article.summary }}</p>
            </el-card>
          </el-col>
        </el-row>
      </el-main>

      <!-- 右侧详情区 -->
      <el-aside width="800px" class="detail" style="background: cadetblue">
        <router-view name="detail"/>
      </el-aside>
    </el-container>

  </el-container>
</template>
<script setup>
// import { ref, onMounted } from 'vue'
// import axios from "axios"; // 按需配置的 axios 实例
// import { useRouter } from 'vue-router'

// 路由实例，用于跳转到详情页
// const router = useRouter()

// 文章列表数据
// const articles = ref([
//   {
//     id:1,
//     title:'hhh',
//     summary:'大厦看电视啦',
//     date:'2025-04-17'
//   }
// ])

// 获取文章列表接口调用
// const fetchArticles = async () => {
//   try {
//     const response = await axios.get('/api/articles')  // GET /api/articles
//     articles.value = response.data  // 假设后端返回数组
//   } catch (error) {
//     console.error('获取文章列表失败：', error)
//   }
// }

// 点击“阅读全文”跳转
// const goDetail = (id) => {
//   router.push(`/article/${id}`)
// }

// 组件挂载时自动调用
// onMounted(fetchArticles)

import {ref, onMounted} from 'vue'
import TopMenu from "../components/home/TopMenu.vue";
import LCalendar from "../components/Dates/LCalendar.vue";

// 时间线数据示例
const timeline = ref([
  {date: '2025-04-01', content: '项目启动', color: 'blue'},
  {date: '2025-04-05', content: '完成登录注册', color: 'green'},
  {date: '2025-04-10', content: '完成列表页', color: 'gray'},
])

const value = ref(new Date())
</script>
<style scoped>

</style>