// Define route Component
import HelloWorld from './components/HelloWorld.vue'
import ContentBanking from './components/ContentBanking'
import ContentProcess from './components/ContentProcess'
import DialogViewDetail from './components/DialogViewDetail'
import DepositDetail from './components/DepositDetail'
import WithdrawDetail from './components/WithdrawDetail'
import DepositWithdraw from './components/DepositWithdraw'
import Login from './components/Login'
// import MenuTabPositionTop from './components/MenuTabPositionTop'
export const routes = [
    { path: '/',name:'hello', component: ContentBanking },
    { path: '/user',name:'helloworld', component: HelloWorld },
    { path: '/BA',name:'banking', component:  ContentBanking ,children:[
        {
            path:'BAProcess',name:'process',component:ContentProcess,
            
        },
        {
            path:'BADepositWithdraw',name:'depositwithdraw',component:DepositWithdraw,
            
        },
        {
            path:'/app/databasemanagement',name:'databasemanagement',component:HelloWorld
        },
        
    ]
    },
    // {
    //     path: '/app',name:'banking', component:  ContentBanking ,children:[
    //     {
    //         path:'databasemanagement',name:'databasemanagement',component:HelloWorld
    //     },
    // ]
    // },
    { 
        path: '/dialogView/:idPaymentOrReceipt',name:'dialogview', component:  DialogViewDetail ,
    },
    { 
        path: '/BA/BADepositWithdraw/BADepositDetail',name:'deposit',component:DepositDetail,
        
    },
    { 
        path: '/BA/BADepositWithdraw/BADepositDetail/:idPaymentOrReceipt',name:'depositid',component:DepositDetail,
        
    },
    { 
        path: '/BA/BADepositWithdraw/BAWithdrawDetail',name:'withdraw', component:  WithdrawDetail ,
    },
    { 
        path: '/BA/BADepositWithdraw/BAWithdrawDetail/:idPaymentOrReceipt',name:'withdrawid', component:  WithdrawDetail ,
    },
    {
        path:'/login',name:'login',component:Login
    }
]


// router.beforeEach((to, from, next) => {
//     let routerAuthCheck = false;
//     if(this.$store.state.token!==null){
//         routerAuthCheck=true;
//     }else{
//         routerAuthCheck = false;
//     }
//     if (to.matched.some(record => record.meta.requiresAuth)) {
//       // this route requires auth, check if logged in
//       // if not, redirect to login page.
//       if (routerAuthCheck) {
//         // user is Authenticated 
//         next();
//       } else {
//           // user is not Authenticated 
//           router.replace('/login');
//       }
//     } else {
//       next() // make sure to always call next()!
//     }
//   })