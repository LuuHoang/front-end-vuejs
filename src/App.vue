<template>
  <div id="app" >
    <vue-sidebar />
    <router-view/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Sidebar from "./components/Sidebar.vue";
// import Header from "./components/Header.vue";
// import Table from "./components/Table.vue";
// import FooterVue from './components/Footer.vue';
// import Dialog from './components/Dialog.vue';
// import DialogViewDetail from './components/DialogViewDetail.vue'
//import DepositWithdraw from "./components/DepositWithdraw.vue"

export default {
  name: "App",
  components: {
    //HelloWorld
    "vue-sidebar": Sidebar,
    // "vue-header": Header,
    // "vue-footer": FooterVue,
    // "vue-table":Table,
    // Dialog,
    // DialogViewDetail,
    //DepositWithdraw,
  },
  data(){
    return {
    }
  }
};
</script>

<style >
body {
  margin: 0;
  font-family: Montserrat,Helvetica,Arial,sans-serif;
}
#app {
  display: flex;
  height: 100vh;
  width: 100vh;
}
.content {
  width: calc(100% - 164px);
  height: 100%;
  position: absolute;
  right: 0;
  background-color: #f1f1f1;
}
.navigation-tabs {
  width: calc(100% - 15px);
  height: calc(100% - 48px);
  background-color: #f1f1f1;
  position: absolute;
  right: 0;
}
/* -------- Css deposit-withdraw-list ----------*/
.deposit-withdraw-list {
  width: 100%;
  height: calc(100% - 64px);
  background-color: #fff;
}
.header-list {
  height: 80px;
  width: 100%;
  background-color: #f1f1f1;
}
.deposit-withdraw-list .body {
  width: 100%;
  height: calc(100% - 80px);
}
.deposit-withdraw-list .body .data-table {
  height: 100%;
  width: 100%;
} 
/* -------- END Css deposit-withdraw-list ----------*/
</style>
