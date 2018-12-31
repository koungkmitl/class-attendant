<script>
import axios from 'axios'
import Var from './Variable.vue'
let server = Var.data().server
import axiosCookieJarSupport from 'axios-cookiejar-support'
import tough from 'tough-cookie'
axiosCookieJarSupport(axios)
let cookiejar = new tough.CookieJar()
export default {
    data(){
        return{
            studentlistdata:[],
            studentlistcheckin:[],
            list_data:[]
        }
    },
    methods:{
        deleteStudent(snumber, cnumber){
            let params = {
                'studentId': snumber,
                'courseId' : cnumber
                 }
        axios.delete(server+'student/',{params,
        jar:cookiejar,
        withCredentials: true }).then(response =>{
            console.log("OK")
            this.$router.push("/manage")
        })
        },
    getStudent(cnumber){
        console.log("Start get Student")
        axios.get(server + 'student/' + cnumber,{
            jar:cookiejar,
            withCredentials: true
        }).then(response =>{
            this.studentlistdata = response.data
            console.log(this.studentlistdata)
             axios.get(server + 'participation/' + cnumber,{
            jar:cookiejar,
            withCredentials: true
        }).then(response =>{
            this.studentlistcheckin = response.data
            this.getListStudentCheckin()
        })
        })
    },
    getListStudentCheckin(){
        console.log("Start get StudentCheckin")
        this.studentlistdata.forEach(element => {
            let sid = element.studentId
            if(sid in this.studentlistcheckin){
                this.list_data.push( {
                    'studentId' : sid,
                    'name' : element.firstname + ' ' + element.lastname,
                    'checkin' : this.studentlistcheckin[sid],
                    'ps' : ''
                })
            }
            else{
                this.list_data.push({
                    'studentId' : sid,
                    'name' : element.firstname + ' ' + element.lastname,
                    'checkin' : 0,
                    'ps': ''
                })
            }
        });
        this.setPS()
    },
    setPS(){
         let count = []
         this.list_data.forEach(ele =>{
           count.push(ele.checkin)
         })
         let maxstudy = Math.max.apply(null,count)
         this.list_data.forEach(ele =>{
           if (maxstudy - ele.checkin > 3){
               ele.ps = 'ขาดเรียนเกินสามครั้ง'
           }
           else{
               ele.ps = ' - '
           }
         })
    }
    }
}
</script>