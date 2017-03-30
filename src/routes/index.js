//import
import Home from '../components/Home.vue'
import Main from '../components/Main.vue'
import Login from '../components/Login.vue'
import page1 from '../components/dir1/page1.vue'
import page2 from '../components/dir1/page2.vue'
import page3 from '../components/dir2/page3.vue'
import page4 from '../components/dir2/page4.vue'
import page5 from '../components/dir3/page5.vue'
import page6 from '../components/dir3/page6.vue'
import page7 from '../components/dir4/page7.vue'
import page8 from '../components/dir4/page8.vue'

 //routes
 let routes = [
      {
          path: '/login',
          component: Login,
          name: 'Login',
          hidden: true
      },
      {
          path: '/',
          component: Home,
          name: '导航',
          iconCls: 'fa fa-id-card-o',
          children: [
              { path: '/main', component: Main, name: '主页', hidden: true },
              { path: '/Page1', component: page1, name: 'page1' },
              { path: '/Page2', component: page2, name: 'page2' },
          ]
      },
      {
          path: '/',
          component: Home,
          name: '导航',
          iconCls: 'fa fa-id-card-o',
          children: [
              { path: '/page3', component: page3, name: 'page3' },
              { path: '/page4', component: page4, name: 'page4' }
          ]
      },
      {
          path: '/',
          component: Home,
          name: '导航',
          iconCls: 'fa fa-id-card-o',
          children: [
              { path: '/page5', component: page5, name: 'page5' },
              { path: '/page6', component: page6, name: 'page6' }
          ]
      },
      {
          path: '/',
          component: Home,
          name: '导航',
          iconCls: 'fa fa-id-card-o',
          children: [
              { path: '/page7', component: page7, name: 'page7' },
              { path: '/page8', component: page8, name: 'page8' }
          ]
      },
     {
         path: '/',
         component: Home,
         name: '导航',
         iconCls: 'fa fa-id-card-o',
         children: [
             { path: '/page7', component: page7, name: 'page7' },
             { path: '/page8', component: page8, name: 'page8' }
         ]
     },
     {
         path: '/',
         component: Home,
         name: '导航',
         iconCls: 'fa fa-id-card-o',
         children: [
             { path: '/page7', component: page7, name: 'page7' },
             { path: '/page8', component: page8, name: 'page8' }
         ]
     },
     {
         path: '/',
         component: Home,
         name: '导航',
         iconCls: 'fa fa-id-card-o',
         children: [
             { path: '/page7', component: page7, name: 'page7' },
             { path: '/page8', component: page8, name: 'page8' }
         ]
     },
     {
         path: '/',
         component: Home,
         name: '导航',
         iconCls: 'fa fa-id-card-o',
         children: [
             { path: '/page7', component: page7, name: 'page7' },
             { path: '/page8', component: page8, name: 'page8' }
         ]
     }
  ];
export default routes;
