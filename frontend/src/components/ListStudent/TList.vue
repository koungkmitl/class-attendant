<template>
<div>

      <div class="restable">
    <div class="wrapper" style="margin-left:15px">
     <router-link :to="{ name: 'Addstudent', params: { cnumber: courseid, cname:cname } }"><button class="btn btn-success">เพิ่มนักศึกษา</button></router-link>
    </div>
    
      <table-s></table-s>
				</div>
    </div>
</template>

<script>
import TableS from "@/components/Coursetable/TStudentTable.vue"
export default {
  created() {
        this.courseid = this.$route.params.cnumber
        this.cname = this.$route.params.cname

    },
  components: {
    TableS
  }
  ,
  methods:{
  },
  mounted(){
  }
  }
</script>