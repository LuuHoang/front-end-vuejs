// Define route Component
import HelloWorld from './components/HelloWorld.vue'
import ContentBanking from './components/ContentBanking'
import ContentProcess from './components/ContentProcess'
import DialogViewDetail from './components/DialogViewDetail'
export const routes = [
    { path: '/',name:'hello', component: ContentBanking },
    { path: '/user',name:'helloworld', component: HelloWorld },
    { path: '/process',name:'process', component:  ContentProcess },
    { path: '/dialogView/:idPaymentOrReceipt',name:'dialogview', component:  DialogViewDetail },
]