<script>
import Var from './Variable.vue'
import axios from 'axios'
import axiosCookieJarSupport from 'axios-cookiejar-support'
import tough from 'tough-cookie'
axiosCookieJarSupport(axios)
let cookiejar = new tough.CookieJar()
let variable = Var.data()
export default {
    data(){
        return{
            msg:'',
        }
    },
    methods:{
        logout(){
        this.$cookies.remove('email')
        axios.get(variable.server + 'logout',{
            jar:cookiejar,
            withCredentials: true
        }).then(data =>{
        })
    },


    login(user) {
        user = JSON.stringify(user)
        user = JSON.parse(user)
        axios
        .post(variable.server + 'login',user,{
            jar:cookiejar,
            withCredentials: true
        }
        )
        .then(data => {
            if(data.status >= 200 || data.status <= 304){
                axios
        .get(variable.server,{
            jar:cookiejar,
            withCredentials: true
        }
        )
        .then(data => {
            if(data.status == 403){
            }
            else{
                this.$cookies.set('email', data.data.email)
                this.$router.push('/')
            }
        })
            
            }
        }).catch(err =>{
            this.msg = 'กรุณาลองใหม่อีกครั้ง'
        })
        }
        ,
          register(user){
            user = JSON.stringify(user)
            user = JSON.parse(user)
            axios
            .post(variable.server + 'register',user,{
            }
             )
            .then(data => {
               if(data.status >= 200 || data.status <= 304){
                   this.$router.push('/')
            }
            }).catch(err =>{
               this.msg = 'กรุณาลองใหม่อีกครั้ง'
         })
        }
        },
}
</script>
