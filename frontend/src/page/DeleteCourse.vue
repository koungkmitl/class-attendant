<style scoped>
@import "../styles/login/login.css";
</style>

<template>
<div class="login-page">
  <div class="form">
    <h3>ลบคอร์ส</h3>
    <br>
      <input type="number" placeholder="courseid" v-model="cid"/>
      <button type="button" @click="delCourse(cid)">Submit</button>
  </div>
</div>
</template>
<script>
import Course from '@/function/Course.vue'

export default {
  data() {
    return {
      cid:''
    }
  },
    methods: {
      ...Course.methods
}
}
</script>
