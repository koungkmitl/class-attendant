<script>
import axios from 'axios'
import Var from './Variable.vue'
import axiosCookieJarSupport from 'axios-cookiejar-support'
import tough from 'tough-cookie'
axiosCookieJarSupport(axios)
let cookiejar = new tough.CookieJar()
var server = Var.data().server
var csvjson = require('csvjson')
var path = require('path')
var Papa = require('papaparse')
export default {
    data(){
        return {
            file: '',
            studentlistdata:[],
            studentlistcheckin:[],
            list_data:[],
            name:''
    }
    },
    methods:{
    handleupload(){
        this.file = this.$refs.file.files[0]
      },
    csvtojson(cnumber){
        let file = this.file
       try{
        Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: function(results, file) {
            let send = results.data
            axios.post(server + 'student/' + cnumber, send,{
            jar:cookiejar,
            withCredentials: true
            }).then(data=>{
                if (data.status >= 200 || data.status <= 304){
                     window.location.href = '/manage'
                }
            })
        }
        
    })
    }
    catch(e){
    }
    }
    ,getStudent(name, cnumber){
        this.name = name
        this.list_data = []
        axios.get(server + 'student/' + cnumber,{
            jar:cookiejar,
            withCredentials: true
        }).then(response =>{
            this.studentlistdata = response.data
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
        this.studentlistdata.forEach(element => {
            let sid = element.studentId
            if(sid in this.studentlistcheckin){
               var data  = {
                    'StudentId' : sid,
                    'StudentName' : element.firstname + ' ' + element.lastname,
                    'Checkin' : this.studentlistcheckin[sid],
                    'PS' : ''
                }
            }
            else{
                var data = {
                   'StudentId' : sid,
                    'StudentName' : element.firstname + ' ' + element.lastname,
                    'Checkin' : 0,
                    'PS' : ''
                }
            }
             this.list_data.push(data)
        });
        this.setPS()
    },
    setPS(){
         let count = []
         this.list_data.forEach(ele =>{
           count.push(ele.Checkin)
         })
         let maxstudy = Math.max.apply(null,count)
         this.list_data.forEach(ele =>{
           if (maxstudy - ele.Checkin > 3){
               ele.PS = 'Less than three in classes'
           }
           else{
               ele.PS = ' - '
           }
         })
         this.jsontocsv()
    }
    ,


    jsontocsv(){
    var csv = Papa.unparse(this.list_data,{encoding: 'utf8'})
    var blob = new Blob([csv])
    if (window.navigator.msSaveOrOpenBlob)
        window.navigator.msSaveBlob(blob, "notfound.csv")
    else
    {
        var a = window.document.createElement("a")
        a.href = window.URL.createObjectURL(blob, {type: "text/plain"})
        a.download = this.name + ".csv"
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }
    }
    }
}
</script>
