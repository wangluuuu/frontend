<script setup>

</script>

<template>
  <router-view/>
</template>

<style>
/*日历样式*/
.vc-container .vc-weekday-1, .vc-container .vc-weekday-7 {
  color: #6366f1;
}

/* 去除日历年月份按、左右箭头按钮默认背景色 （因为是VCalendar3.x版本，可能得手动修改）*/
.vc-title, .vc-arrow,.vc-nav-title,.vc-nav-arrow,.vc-nav-item{
  background-color: transparent;
}
</style>
