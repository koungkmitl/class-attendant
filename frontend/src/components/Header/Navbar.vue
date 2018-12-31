<style scoped>
@import "../../styles/sidebar.css";
#sidebar{
  height:100vh; z-index:9999;
}
@media screen and (max-height: 700px) and (min-width: 600px){
	#sidebar{
		height: 100%;
	}
}
</style>

<template>
<div class="content">
<Sidebar v-bind:sidebartoggle="isActive">
    <div class="page-content" style="width:100%;">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
       <div 
                        v-on:click="isActive = !isActive"
                         class="navbar-header">
               
                    <button class="btn btn-outline-primary d-inline-block ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fas fa-align-justify"></i>
                    </button>
       </div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul v-if="checklogin != null" class="nav navbar-nav  ml-auto">
                            <li class="nav-item">
                                <a class="nav-link"  style="color:black">Hello, {{ $cookies.get("email") }}</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" v-on:click="logout" href="/">Logout</a>
                            </li>
                        </ul>
                    </div>

            </nav>
<slot name="context"></slot>
</div>
</Sidebar>
</div>
</template>

<script>
import Sidebar from "./Sidebar.vue"
import Auth from '@/function/Auth.vue'
import axios from 'axios'
import axiosCookieJarSupport from 'axios-cookiejar-support'
import tough from 'tough-cookie'
axiosCookieJarSupport(axios)
let cookiejar = new tough.CookieJar()
export default {
  components: {
    Sidebar
  },
  data() {
    return {
      isActive: true,
      checklogin: this.$cookies.get("email")
    };
  },
  methods: {
    ...Auth.methods,
  },
  mounted(){
  }
};
</script>
<style>
.content {
  background: #f2f2f2;
}
</style>


