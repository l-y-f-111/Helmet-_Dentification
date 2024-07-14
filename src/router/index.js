import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/components/Home.vue";
import Recognize from "@/components/Recognize.vue";
import Safety_warning from "@/components/Safety_warning.vue";
import Detailed_data from "@/components/Detailed_data.vue";
import Helmet_type from "@/components/Hemlet_type.vue"
import Helmet from "@/components/Helmet.vue"
import Helmet_brand from "@/components/helmet_brand.vue";
import Helmet_standard from "@/components/helmet_standard.vue";
import Login from "@/components/Login.vue"
import ValidCode from "@/components/ValidCode.vue";
import Register from "@/components/Register.vue"
import Update_Psw from "@/components/Update_Psw.vue";
import Recognize_mp4 from "@/components/Recognize_mp4.vue"
import Recognize_mp4test from "@/components/Recognize_mp4test.vue"

const routes = [
    {
        path:'/',
        name:'login',
        component: Login
    },
    { path:'/validcode',
        name:'validcode',
        component: ValidCode
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/recognize',
        name: 'recognize',
        component: Recognize
    }, {
        path: '/safety_warning',
        name: 'safety_warning',
        component: Safety_warning
    }, {
        path: '/detailed_data',
        name: 'detailed_data',
        component: Detailed_data
    }, {
        path: '/helmet_type',
        name: 'helmet_type',
        component: Helmet_type
    }, {
        path: '/helmet',
        name: 'helmet',
        component: Helmet
    }, {
        path: '/helmet_brand',
        name: 'helmet_brand',
        component: Helmet_brand
    }, {
        path: '/helmet_standard',
        name: 'helmet_standard',
        component: Helmet_standard
    }, {
        path: '/register',
        name: 'register',
        component: Register
    }, {
        path: '/update_psw',
        name: 'update_psw',
        component: Update_Psw
    }
    , {
        path: '/recognize_mp4',
        name: 'recognize_mp4',
        component: Recognize_mp4
    }
    , {
        path: '/recognize_mp4test',
        name: 'recognize_mp4test',
        component: Recognize_mp4test
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;