<template>
<div>

      <div class="restable">
    <div class="wrapper"><input type="text" style="border-radius:10px ;background:white;" v-model="search"  placeholder="ค้นหาCourse"/>
    <!-- <button class="btn btn-outline-primary" v-on:click="activeclass(1)" v-bind:class="{ active: y1 }">ปี 1</button>
    <button class="btn btn-outline-primary" v-on:click="activeclass(2)" v-bind:class="{ active: y2 }">ปี 2</button>
    <button class="btn btn-outline-primary" v-on:click="activeclass(3)" v-bind:class="{ active: y3 }"> ปี 3</button>
    <button class="btn btn-outline-primary" v-on:click="activeclass(4)" v-bind:class="{ active: y4 }"> ปี 4</button> -->
    </div>
      <table-c :search="search" :searchyear="searchyear"></table-c>
				</div>
    </div>
</template>

<script>
import Stbar from "@/components/Header/Navbar.vue"
import TableC from "@/components/Coursetable/CourseTable.vue"
export default {
    data(){
        return{
            // y1: {
            // type: Boolean,
            // required: false
            // },
            // y2: {
            // type: Boolean,
            // required: false
            // },
            // y3: {
            // type: Boolean,
            // required: false
            // },
            // y4: {
            // type: Boolean,
            // required: false
            // }
            // ,
            search: "",
            searchyear:""
        }
        },
  components: {
    Stbar,TableC
  }
  ,
  methods:{
    //   setfalse(){
    //       this.y1 = false
    //       this.y2 = false
    //       this.y3 = false
    //       this.y4 = false
    //       this.searchyear = ''
    //   },
    //   activeclass(input){
    //       if (input == 1 && this.y1 != true){
    //         this.setfalse()
    //         this.y1 = true
    //         this.searchyear = '1'
    //       }else if (input == 2 && this.y2 != true){
    //           this.setfalse()
    //           this.y2 = true
    //           this.searchyear = '2'
    //       }else if (input == 3 && this.y3 != true){
    //           this.setfalse()
    //           this.y3 = true
    //           this.searchyear = '3'
    //       }else if (input == 4 && this.y4 != true){
    //           this.setfalse()
    //           this.y4 = true
    //           this.searchyear = '4'
    //       }
    //       else{
    //           this.setfalse()
    //       }

    //   }
  },
  mounted(){
    //   this.setfalse()
  }
  }
</script>