<script>
import axios from 'axios'
import Var from './Variable.vue'
import axiosCookieJarSupport from 'axios-cookiejar-support'
import tough from 'tough-cookie'
axiosCookieJarSupport(axios)
let cookiejar = new tough.CookieJar()
let server = Var.data().server
export default {
    methods:{
        adduser(user) {
        user = JSON.stringify(user)
        user = JSON.parse(user)
        axios
        .post(server + 'register',user,{
            jar:cookiejar,
            withCredentials: true
        }
        )
        .then(data => {
            if(data.status != 422){
            window.location.href = '/'
            }
            else{
                this.msg = 'กรุณาลองใหม่อีกครั้ง'
            }
        }).catch(err =>{
            this.msg = 'กรุณาลองใหม่อีกครั้ง'
        })
        },
    }
}
</script>
