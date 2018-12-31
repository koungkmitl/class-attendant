<template>
<div>

<Stbar>
    <div slot="context" class="page">
      <h2 style="padding-bottom: 20px"> สำหรับนักศึกษา </h2>
        <help-block v-bind:header = "help1.header" v-bind:body = "help1.body"></help-block>

      <h2 style="padding-top:20px; padding-bottom:20px"> สำหรับอาจารย์ </h2>
        <help-block v-bind:header = "help2.header" v-bind:body = "help2.body"></help-block>
        <help-block v-bind:header = "help3.header" v-bind:body = "help3.body"></help-block>
        <help-block v-bind:header = "help4.header" v-bind:body = "help4.body"></help-block>
        <help-block v-bind:header = "help5.header" v-bind:body = "help5.body"></help-block>
        <help-block v-bind:header = "help6.header" v-bind:body = "help6.body"></help-block>
    </div>
  </Stbar>
  

</div>
</template>

<script>
import Stbar from "@/components/Header/Navbar.vue"
import HelpBlock from "@/components/HelpBlock/Block.vue"
import BootstrapVue from 'bootstrap-vue'
export default {
  data(){
    return{
      help1:{
        header:'การตรวจสอบการมาเรียน',
        body:'กดเมนู ตรวจสอบการมาเรียน > ทำการเลือกวิชาที่เรียน'
      },
      help2:{
        header:'เพิ่มวิชาที่สอน',
        body:'ทำการล๊อคอินเข้าสู่ระบบ > กดที่เมนู จัดการวิชาการสอน > กด เพิ่มคอร์สเรียน > กรอกข้อมูลตามที่ระบบต้องการ (เลขคอร์สที่สอน 8 หลัก และ ชื่อวิชาที่สอนตัวอักษรภาษาอังกฤษพิมพ์ใหญ่หรือเล็กก็ได้) > กดยืนยัน'
      },
      help3:{
        header:'ลบวิชาที่สอน',
        body:'ทำการล๊อคอินเข้าสู่ระบบ > กดที่เมนู จัดการวิชาการสอน > กด ลบคอร์สเรียน > กรอกข้อมูลตามที่ระบบต้องการ (เลขคอร์สที่สอน 8 หลัก) > กดยืนยัน'
      },
      help4:{
        header:'เพิ่มนักศึกษาลงในวิชา',
        body:'ทำการล๊อคอินเข้าสู่ระบบ > กดที่เมนู จัดการวิชาการสอน > กดปุ่ม จัดการนักศึกษาในวิชาที่ต้องการ > กดปุ่มเพิ่มนักศึกษา > กด เลือกไฟล์ .csv ที่ประกอบไปด้วย fomat ที่ถูกต้อง > กดปุุ่มยืนยัน'
      },
      help5:{
        header:'ลบนักศึกษาออกจากวิชา',
        body:'ทำการล๊อคอินเข้าสู่ระบบ > กดที่เมนู จัดการวิชาการสอน > กดปุ่ม จัดการนักศึกษาในวิชาที่ต้องการ > กดปุ่มลบนักศึกษา > กดยืนยัน'
      },
       help6:{
        header:'การดาวน์โหลดไฟล์ CSV',
        body:'ทำการล๊อคอินเข้าสู่ระบบ > กดที่เมนู จัดการวิชาการสอน > กด Download CSV > ไฟล์จะถูกดาวน์โหลดเข้าเครื่องโดยจะได้ชื่อไฟล์ตามวิชาที่เลือก.csv เช่น EZ SE.csv'
      },
    }
  },
  components: {
    Stbar, HelpBlock
  }
  }
</script>
<style scoped>
.page{
  margin: auto;
  max-width: 1200px;
}
</style>
