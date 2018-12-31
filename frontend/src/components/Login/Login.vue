<style scoped>
@import "../../styles/login/login.css";
</style>

<template>
<div class="login-page">
  <div class="form">
    <h3>เข้าสู่ระบบสำหรับอาจารย์</h3>
    <br>
    <p style="color:red">{{msg}}</p>
      <input type="text" placeholder="e-mail" v-model="user.email"/>
      <input type="password" placeholder="password" v-model="user.password"/>
      <button type="button" @click="msg = login(user)">login</button>
  </div>
</div>
</template>
<script>
import Auth from '@/function/Auth.vue'

export default {
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      msg: ''
    }
  },
    methods: {
        ...Auth.methods,
        cantlogin(){
          if(this.$cookies.get('email') != null){
            this.$router.push('/')
          }
        }
},
mounted(){
  this.cantlogin()
}
}
</script>
<style>
</style>

