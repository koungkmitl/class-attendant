import Vue from 'vue'
import Router from 'vue-router'
import Mainpage from '@/page/Mainpage'
import Checkin from '@/page/Checkin'
import Login from '@/page/PageLogin'
import VueCookies from 'vue-cookies'
import Register from '@/page/PageRegister'
import ListUser from '@/page/PageUser'
import Addcourse from '@/page/Addcourse'
import Deletecourse from '@/page/DeleteCourse'
import Addstudent from '@/page/Addstudent'
import Help from '@/page/Help'
import Status from '@/page/Status'
import ManageStudent from '@/page/TStatus'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(VueCookies)
Vue.use(Router)
export default new Router({
    routes: [
        //main
        {
        path: '/',
        name: 'Mainpage',
        component: Mainpage
        },
        //status
        {
            path: '/checkin',
            name: 'Checkin',
            component: Checkin
        },
        //Login
        {
            path: '/login',
            name: 'Login',
            component: Login
        },//Register
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
        //Test
        {
            path: '/manage',
            name: 'ListUser',
            component: ListUser
        },
        //addcourse
        {
            path: '/manage/course/add',
            name: 'Addcourse',
            component: Addcourse
        },
         //removecourse
         {
            path: '/manage/course/del',
            name: 'Deletecourse',
            component: Deletecourse
        },
        //addstudent
        {
            path: '/manage/std/add',
            name: 'Addstudent',
            component: Addstudent,
            props: { cnumber: '' }
        },
        //help
        {
            path: '/help',
            name: 'Help',
            component: Help
        },
        //StudentStatus
        {
            path: '/checkin/status',
            name: 'Status',
            component: Status,
            props: { cnumber: String, cname:String }
        },
        //TStudentStatus
        {
            path: '/manage/student',
            name: 'MStudent',
            component: ManageStudent,
            props: { cnumber: String, cname:String }
        }
        
    ],mode:'history'
})