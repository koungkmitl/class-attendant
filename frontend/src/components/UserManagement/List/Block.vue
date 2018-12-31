<template>

   <div class="card w-100" style="margin-bottom: 10px;">
  <div class="card-body" style="margin-left: 40px">
    <div class="wrapper">
    <h2 class="card-title">{{sname}}</h2>
    <p style="color: black; margin: 0.5rem;"> {{cname}} </p>
    <div style="margin-left:auto;">
    <button type="button" class="btn btn-outline-success" style="margin-left:auto;"><router-link :to="{ name: 'MStudent', params: { cnumber: cnumber, cname:cname } }">จัดการนักศึกษา</router-link></button>
    <button type="button" class="btn btn-outline-success" style="margin-left:auto;" v-on:click="getStudent(name, cnumber)">Download CSV</button></div>
    </div>
    <p cass="card-text">{{courseid}}</p>
  </div>
   </div>
</template>

<script>
import functiongetname from '@/function/GetNameCourse.vue'
import GetNameCourseVue from '../../../function/GetNameCourse.vue'
import exportFile from '@/function/ExportFile.vue'
export default {
   props: {
   name: {
    type: String,
    required: true
   },
   courseid:{
     type: String,
     required: true
   }
   },
   data(){
     return{
       cname: this.name,
       cnumber: this.courseid,
       sname:''
     }
   },
   methods:{
     ...functiongetname.methods,
     ...exportFile.methods
   },
   mounted(){
     this.sname = this.getnamecourse(this.name)
   }
}
</script>

<style scope>

</style>
