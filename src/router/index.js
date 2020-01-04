import Vue from 'vue'
import Router from 'vue-router'
import Myproject from '@/components/Myproject'
import Hivue from '@/components/Hivue'
import Params from '@/components/Params'
import Regsiter from '@/components/Regsiter'
import Product from '@/components/Product'
import pro_one from '@/components/pro_one'
import pro_two from '@/components/Pro_two'
import User from '@/components/User'
import Vip from '@/components/Vip'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/myproject',
      name:'Home',
      component: Myproject
    },
    {
      path:'/hi',
      name:'hi',
      component:Hivue
        
    },
    {
      path:'/login',
      nameL:'login',
      component:Login
    },
    {
      path:'/params/:newsId/:newsPro',
      name:'Params',
      component:Params
    },
    {
      path:'/Regsiter',
      name:'Regsiter',
      component:Regsiter
    },
    {
      path:'/Product',
      component:Product,
      children:[
        {path:'pro_one',name:'pro1',component:pro_one},
        {path:'pro_two',name:'pro2',component:pro_two}
      ]
    },
    {
      path:'/User',
      component:User,
    },
    {
      path:'/User/:id',
      name:'Vip',
      component:Vip,
      
      beforeEnter(to,from,next){
        console.log(to);
        next();
      }
    },
  ]
})
