<style scoped>
@import "../styles/login/login.css";
</style>

<template>
<div class="login-page">
  <div class="form">
    <h3>เพิ่มคอร์ส</h3>
    <br>
      <input type="number" placeholder="courseid" v-model="course.courseId"/>
      <input type="text" placeholder="ชื่อคอร์ส" v-model="course.subject"/>
      <button type="button" @click="addCourse(course)">Add</button>
  </div>
</div>
</template>
<script>
import Course from '@/function/Course.vue'
export default {
  data() {
    return {
      course: {
        courseId: '',
        subject:''
      }
    }
  },
    methods: {
      ...Course.methods
}
}
</script>
