<template>
  <div id="app" v-if="showDialog===0">
    <vue-sidebar />
    <router-view/>
    <!--
    <div class="content">
      <vue-header/>
      <div class="navigation-tabs">
        <div class="menu">
          <Dialog />
        </div>
        <div class="deposit-withdraw-list">
          <div class="header-list"></div>
    <div class="body">
      <div class="data-table">
         Nhận sự kiện từ Vue-Table rồi upload lại Trạng thái hiển thị  
        <vue-table @showDialoged="showDialog=$event" />
      </div>
      <div class="vue-footer">
        <vue-footer/>
      </div>
    </div>
        </div>
      </div>
    </div>
  </div>
  <div id="app" style="display: flex;height: 100vh;width: 100%;" v-else>
     Gửi Khóa chính đến Dialog View-Detail ,và nhận lại các trạng thái hiển thị 
    <dialog-view-detail v-bind:idPaymentOrReceipt="showDialog" @statusDialog="showDialog=$event" />-->
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
      /**
       * Hiển thị Dialog tùy từng trạng thái :
       * Author:LVHOANG (03/11/2020)
       */
      showDialog:0,
      /**
       * Khóa chính của bảng thanh toán ,hóa đơn:
       * Author:LVHOANG (03/11/2020)
       */
      idPaymentOrReceipt:'',
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
