<template>
  <div class="calendar-box">
    <VCalendar
        expanded
        title-position="left"
        show-weeknumbers
        class="calendar-box"
        :attributes="nowDate"
    >
      <template #footer>
        <!-- 日期文字和时间组件分割线 -->
        <div class="calendar-divider"></div>
        <Time/>
      </template>
    </VCalendar>
  </div>
</template>
<script setup>
import {ref} from 'vue';
import Time from "./Time.vue";

const nowDate = ref([
  {
    highlight: true,
    dates: new Date(),
  },
]);

</script>

<style scoped>
.calendar-box {
  transform: scale(0.9);
  transform-origin: top left;
}
/* 分割线样式 */
.calendar-divider {
  height: 1px;
  background-color: #e5e7eb;
  margin: 6px auto;
  width: 90%;
  border-radius: 1px;
}
</style>