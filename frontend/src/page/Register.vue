<style scoped>
@import "../styles/login/login.css";
</style>

<template>
<div class="login-page">
  <div class="form">
    <h3>เพิ่มนักศึกษาเข้าคอร์ส</h3>
    <br>
      <input type="email" placeholder="email" v-bind="email"/>
      <input type="password" placeholder="password" v-bind="password"/>
      <input type="text" placeholder="ชื่อ" v-bind="firstname"/>
      <input type="text" placeholder="นามสกุล" v-bind="lastname"/>
      <button type="button" @click="adduser()">Submit</button>
  </div>
</div>
</template>
<script>
import User from '@/function/User.vue'
export default {
  data() {
    return {
        email : '',
        password: '',
        firstname: '',
        lastname: ''
    } 
  }
  ,
    methods: {
    ...User.methods,
}
}
</script>
