<template>
  <div class="content-banking">
    <vue-header />
    <div class="navigation-tabs">
      <div class="menu">
        <div class="tabs-position-top">
            <div class="active-item" ><router-link to="/process">Quy trình</router-link></div> 
            <div class="active-item" ><router-link to="/">Thu, chi tiền </router-link></div>
            <div class="active-item">Đối chiếu ngân hàng</div>
            <div class="active-item">Ngân hàng điện tử beta</div>
            <div class="active-item">Báo cáo</div>
        </div>
        <div class="connect-bank">
            <div class="connect-eb">
                <div class="icon"></div>
                <div class="label-connect">Kết nối ngân hàng điện tử</div>
            </div>
        </div>
      </div>
      <div class="deposit-withdraw-list">
        <div class="header-list">
            <Dialog />
        </div>
        <div class="body">
          <div class="data-table">  
            <vue-table @showDialoged="showDialog = $event" />
          </div>
            <vue-footer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import Table from "../components/Table";
import FooterVue from '../components/Footer';
import Dialog from '../components/Dialog';
export default {
    components: {
    "vue-header": Header,
    "vue-footer": FooterVue,
    "vue-table":Table,
     Dialog,

  },
  data(){
      return {
        showDialog:0,
      }
  },
  methods:{
    // openDialogViewDetail(){
    //   this.$router.push('/dialogView/'+showDialog);
    // }
  },
  watch:{
    showDialog: function () {
      this.$router.push('/dialogView/'+ this.showDialog);
    },
  },
};
</script>

<style >
.content-banking {
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
.menu {
  width: 100%;
  height: 62px;
  background: #f1f1f1;
  display: flex;
  border-bottom: 2px solid #ccc;
}
.menu .tabs-position-top {
    width: 70%;
    height: 100%;
    display: flex;
}
.tabs-position-top .active-item {
    text-align: center;
    padding-top: 33px;
    width: auto;
    padding-left: 24px;
    padding-right: 14px;
}
.tabs-position-top .active-item:hover {
    cursor: pointer;
}
.tabs-position-top .active-item a {
    color: #000;
    text-decoration: none;
}
.tabs-position-top .active-item a:hover {
    color: #2ca01c;
}
.menu .connect-bank {
    width: 30%;
    height: 100%;
    margin-right: 40px;
}
.connect-bank .connect-eb {
    width: 65%;
    height: 45%;
    display: flex;
    padding-top: 33px;
    float: right;
    color: #0075c0;
}
.connect-bank .connect-eb:hover {
  cursor: pointer;
}
.connect-bank .icon {
    width: 20px;
    height: 20px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -768px -900px;
}
.connect-bank .connect-eb .label-connect {
    padding-left: 10px;
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
  height: calc(88% - 80px);
}
.deposit-withdraw-list .body .data-table {
  height: 100%;
  width: 100%;
} 
/* -------- END Css deposit-withdraw-list ----------*/
</style>