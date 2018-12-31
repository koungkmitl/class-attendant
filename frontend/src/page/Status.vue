<template>
<div>
    <div slot="context">
        <div class="page">
            <div style="padding:60px"><div class="text-center">
                <h2> {{courseid}} : {{coursename}} </h2>
            </div></div>
            
        <student-list></student-list></div>
    </div>
  

</div>
</template>

<script>
import StudentList from "@/components/ListStudent/SList.vue"
export default {
   created() {
        this.courseid = this.$route.params.cnumber
        this.coursename = this.$route.params.cname

    },

  components: {
    StudentList
  }
  }
</script>
<style scoped>
.page{
    background: #f2f2f2;
    min-height: 100vh;
    height: 100%;
    widows: 100%;
    margin: auto;
}
</style>
