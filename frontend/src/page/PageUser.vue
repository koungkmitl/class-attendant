<template>
<div>

<Stbar>
    <div slot="context">
        <div class="page">
        <div class="row text-center">
            <div class="col-sm-12 col-lg-6">
              <a href="manage/course/add">
              <Menu slot="textmenu" style="background:#299a23">
                <h1><i class="fa fa-plus"></i></h1>
                <h1><b>เพิ่มคอร์สเรียน</b></h1>
              </Menu>
              </a>
            </div>
              

        <div class="col-sm-12 col-lg-6">
          <a href="manage/course/del">
          <Menu slot="textmenu" style="background:#9a2323">
            <h1><i class="fa fa-minus"></i></h1>
            <h1><b>ลบคอร์สเรียน</b></h1></Menu>
          </a>
            </div>
        </div>
         <template v-if="listdata && listdata.length">
                                    <div v-for="i of listdata">

        <Block v-bind:name="i.subject.toUpperCase()" v-bind:courseid="i.courseId"></Block>
                                    </div>
								 </template>
         </div>
    </div>
  </Stbar>
</div>
</template>

<script>
import Stbar from "@/components/Header/Navbar.vue";
import Block from "@/components/UserManagement/List/Block";
import Menu from "@/components/UserManagement/List/Menu"
import Course from "@/function/Course"

export default {
  data(){
    return{
      ...Course.data()
    }
  },
  components: {
    Stbar,
    Block,
    Menu
  },
  methods:{
    ...Course.methods
  },
  mounted(){
    this.getCourse()
  }
}
</script>

<style scoped>
.page{
  margin: auto;
  max-width: 900px;
}
@media screen and (max-width: 768px){ 
.page{
  margin-left:5%;
  margin-right:5%;
}
}

</style>
