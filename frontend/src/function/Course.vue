<script>
import axios from 'axios'
import Var from './Variable.vue'
import axiosCookieJarSupport from 'axios-cookiejar-support'
import tough from 'tough-cookie'
axiosCookieJarSupport(axios)
let cookiejar = new tough.CookieJar()
let server = Var.data().server
export default {
    data(){
        return{
            listdata:[]
        }
    },
    methods:{
        getAllcourse(){
            axios
            .get(server + 'courseall',{
                jar:cookiejar,
                withCredentials: true
            }
            )
            .then(data => {
                this.listdata = data.data
            })
        },

    getCourse() {
        axios
        .get(server + 'course',{
            jar:cookiejar,
            withCredentials: true
        }
        )
        .then(data => {
                this.listdata = data.data
        })

        },
    addCourse(course){
        course.subject = course.subject.toUpperCase()
        axios.post(server + 'course', course,
        {
            jar:cookiejar,
            withCredentials: true
        })
        .then(data =>{
            this.$router.push("/manage")
        })
    },

    delCourse(cid){
        axios.delete(server + 'course/'+ cid,
        {
            jar:cookiejar,
            withCredentials: true
        })
        .then(data =>{
            this.$router.push("/manage")
        })
    }
    }
}
</script>
