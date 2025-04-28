<template>
  <div class="calendar-footer">
    <div class="date-text">
      <b>{{ dayOfWeek }}</b><span class="highlight">{{ month }}月 {{ date }} </span> {{ year }}
    </div>
    <div class="time-display">
      <span class="icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="clock-icon"
           viewBox="0 0 16 16">
        <path d="M8 3.5a.5.5 0 0 1 .5.5v4l3 1.5a.5.5 0 0 1-.5.9l-3.5-1.75A.5.5 0 0 1 7.5 8V4a.5.5 0 0 1 .5-.5z"/>
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM1 8a7 7 0 1 1 14 0A7 7 0 0 1 1 8z"/>
      </svg>
      </span>
      <span class="time-text">{{ time }}</span>
    </div>
  </div>
</template>
<script setup>
import {onMounted, onUnmounted, ref} from "vue";

const time = ref('')
let timer = null
//获取当前时间
const now = ref(new Date())
const weekdays = ['周日', '周一', '周二', '周三', '周四', '周五', '周六']

const year = now.value.getFullYear()
const month = now.value.getMonth() + 1
const date = now.value.getDate()
const dayOfWeek = weekdays[now.value.getDay()]

const updateTime = () => {
  now.value = new Date()
  const hours = String(now.value.getHours()).padStart(2, '0')
  const minutes = String(now.value.getMinutes()).padStart(2, '0')
  const seconds = String(now.value.getSeconds()).padStart(2, '0')
  time.value = `${hours}:${minutes}:${seconds}`
}

//组件挂载完成后执行
onMounted(() => {
  updateTime()
  //定时调用更新
  timer = setInterval(updateTime, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>
<style scoped>
.time-display {
  display: inline-flex;
  align-items: center;
  background-color: #f1f5f9; /* 淡灰 */
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  padding: 6px 12px;
  font-family: 'Segoe UI', Roboto, sans-serif;
  font-size: 16px;
  font-weight: 600;
  color: #1e293b;
  margin-top: 10px;
}

.icon {
  margin-right: 6px;
  color: #3b82f6; /* 蓝色 */
  display: flex;
  align-items: center;
}

.clock-icon {
  width: 18px;
  height: 18px;
}


.calendar-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  font-family: 'Segoe UI', Roboto, sans-serif;
  font-size: 14px;
  color: #1e293b;
}

.date-text {
  margin-bottom: 6px;
  color: #475569;
}

.date-text .highlight {
  color: #3b82f6;
  font-weight: 600;
  margin: 0 5px;
}
</style>