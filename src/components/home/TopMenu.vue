<template>
  <div>
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo top_menu"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        @select="handleSelect"
    >
      <!-- 头像 -->
      <div class="avatar-wrapper">
        <el-avatar size="default" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
      </div>
      <el-menu-item index="1">社区</el-menu-item>
      <el-menu-item index="2">我的博客</el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts" setup>
import {ref} from 'vue'

const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style scoped>
.avatar-wrapper{
  align-content: center;
}

.top_menu{
  padding: 0 10px;
}
</style>