<template>
  <div class="register-container">
    <el-card class="register-card">
      <h2 style="text-align:center;">用户注册</h2>
      <el-form :model="form" :rules="rules" ref="formRef" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email" placeholder="请输入邮箱" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" placeholder="请输入密码" show-password />
        </el-form-item>
        <el-form-item label="确认密码" prop="confirm">
          <el-input v-model="form.confirm" placeholder="请再次输入密码" show-password />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleRegister">注册</el-button>
          <el-button type="text" @click="toLogin">已有账号？去登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElMessage } from 'element-plus'

// 路由实例，用于跳转
const router = useRouter()

// 表单数据对象
const form = reactive({
  username: '',
  email: '',
  password: '',
  confirm: ''
})

// 验证规则
const rules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入有效邮箱', trigger: 'blur' }
  ],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  confirm: [
    { required: true, message: '请确认密码', trigger: 'blur' },
    { validator: (rule, value) => value === form.password, message: '两次密码不一致', trigger: 'blur' }
  ]
}

// 表单引用
const formRef = ref()

// 跳转到登录页
const toLogin = () => {
  router.push('/login')
}

// 注册按钮逻辑
const handleRegister = () => {
  formRef.value.validate((valid) => {
    if (valid) {
      // 这里可以调用后端注册接口，比如 axios.post('/api/register', form)
      ElMessage.success('注册成功，正在跳转...')
      router.push('/login')
    } else {
      ElMessage.error('请检查表单信息')
    }
  })
}
</script>
<style scoped>
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.register-card {
  width: 420px;
  padding: 10px;
}
</style>