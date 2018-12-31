<template>
        <div class="wrapper">

            <!-- Sidebar Holder -->
            <nav id="sidebar" v-bind:class="{ active: sidebartoggle }">
                <div class="sidebar-header" >
                    <h3>IT CHECK-IN ♥</h3>
                    <strong>ITC</strong>
                </div>
            <Menuside></Menuside>
            </nav>
 
            <!-- Page Content Holder -->
     <slot></slot>
</div>

</template>

<script>
import Menuside from './Menuside.vue'
export default {
    props: {
    sidebartoggle: {
      type: Boolean,
      required: false
    },
    
  },
  data() {
    return {
      name: "",
      role: [],
      state: {
        admin: false,
      }
    };
  },
    components:{
        Menuside
    }
}
</script>

<style>

</style>
