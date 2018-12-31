<style scoped>
@import "../styles/login/login.css";
</style>

<template>
<div class="login-page">
  <div class="form">
    <h3>เพิ่มนักศึกษาเข้าคอร์ส</h3>
    <br>
      <input type="text" readonly v-bind:placeholder="courseid"/>
      <input type="text" readonly v-bind:placeholder="coursename"/>
      <input type="file" id="file" ref="file" v-on:change="handleupload()"/>
      <a href="https://firebasestorage.googleapis.com/v0/b/se-projectkmitl.appspot.com/o/MICROPROCESSORS.csv?alt=media&token=13bb4246-4618-4362-882c-f503eba562a3"><p>ตัวอย่าง format file Click</p></a>
      <button type="button" @click="csvtojson(courseid)">Submit</button>
  </div>
</div>
</template>
<script>
import Auth from '@/function/Auth.vue'
import exprotfile from '@/function/ExportFile.vue'
export default {
  data() {
    return {
        courseid:'',
        coursename:'',
        file:''
    } 
  }
  ,
    created() {
        this.courseid = this.$route.params.cnumber
        this.coursename = this.$route.params.cname

    },
    methods: {
    ...exprotfile.methods,
}
}
</script>
