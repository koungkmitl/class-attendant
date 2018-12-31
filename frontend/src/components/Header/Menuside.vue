<template>
    <div>
        
                <ul class="list-unstyled components">
                     
    <router-link to="/" exact-active-class="active" tag="li">
    <a>
                            <i class="fa fa-home" aria-hidden="true"></i>
                            หน้าแรก
                            </a>
                    </router-link>
                    <router-link to="/checkin" exact-active-class="active" tag="li">
                 <a>
                            <i class="fa fa-book" aria-hidden="true"></i>
                            ตรวจสอบการมาเรียน
                            </a>
                    </router-link>
                     <router-link v-if="cookie != null" to="/manage" exact-active-class="active" tag="li">
                 <a>
                            <i class="fa fa-user" aria-hidden="true"></i>
                            จัดการวิชาการสอน
                            </a>
                    </router-link>
                </ul>
                <ul class="list-unstyled components">
                    <li>
                        <router-link to="/help" exact-active-class="active" tag="li">
                        <a>
                            <i class="fa fa-question"></i>
                            Help
                        </a>
                        </router-link>
                    </li>
                     <li v-if="cookie === null">
                        <a href="/login">
                            <i class="fa fa-power-off"></i>
                            Login
                        </a> 
                    </li>
                    <li v-else>
                        <a href="/" v-on:click="logout">
                            <i class="fa fa-power-off"></i>
                            Logout
                        </a> 
                    </li>
                    </ul>
                    
    </div>
</template>

<script>
import Auth from '@/function/Auth.vue'
export default {
data(){
    return{
    cookie: this.$cookies.get("email")
    }
}
,methods:{
    ...Auth.methods
}
}
</script>

<style>

</style>
