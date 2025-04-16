<template>
  <div class="login-container">
    <el-card class="login-card" shadow="hover">
      <h2 style="text-align:center">登录</h2>
      <el-form :model="form" :rules="rules" ref="formRef" label-width="70px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"/>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" placeholder="请输入密码" show-password/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script setup>
import {reactive, ref} from 'vue'
import {useRouter} from 'vue-router'
import {ElMessage} from 'element-plus'

//创建路由实例，便于页面跳转
const router = useRouter()

//定义表单数据
const form = reactive({
  username: '',
  password: ''
})

//定义表单验证规则
const rules = {
  username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
  password: [{required: true, message: '请输入密码', trigger: 'blur'}]
}

//获取表单引用，用于触发表单验证
const formRef = ref()

//定义登录逻辑函数
const handleLogin = () => {
  //触发表单验证
  formRef.value.validate((valid)=>{
    // 如果验证通过，显示登录成功消息并模拟跳转
    if(valid){
      ElMessage.success('登录成功')
      router.push('/') // 跳转到首页，确保首页路由已配置
    }else{
      // 如果验证未通过，提示用户完善信息
      ElMessage.error('请填写完整信息')
      return false
    }
  })
}
</script>
<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-card {
  width: 400px;
  padding: 10px;
}
</style>