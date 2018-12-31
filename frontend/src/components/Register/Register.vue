<style scoped>
@import "../../styles/login/login.css";
</style>

<template>
<div class="login-page">
  <div class="form">
    <h3>เพิ่มนักศึกษาเข้าคอร์ส</h3>
    <br>
    <p style="color:red">{{msg}}</p>
      <input type="email" placeholder="email" v-model="user.email"/>
      <input type="password" placeholder="password" v-model="user.password"/>
      <input type="text" placeholder="name" v-model="user.firstname"/>
      <input type="text" placeholder="surname" v-model="user.lastname"/>
      <button type="button" @click="msg = adduser(user)">Submit</button>
  </div>
</div>
</template>
<script>
import User from '@/function/User.vue'
export default {
  data() {
    return {
      user:{
        email : '',
        password: '',
        firstname: '',
        lastname: ''
    } ,
    msg: ''
    }
  }
  ,
    methods: {
    ...User.methods,
}
}
</script>
