<template>
<div class="deposit-withdraw-list">
<div class="header-list">
            <div class="title-list">Thu, chi tiền gửi</div>
            <div class="header-button">
                <div class="button-add">
                    <button class="button"><router-link to="/BA/BADepositWithdraw/BADepositDetail"><div class="button-text">Thêm thu tiền</div></router-link></button>
                    <button class="function-extend"><div class="line"></div><div class="icon-expand-more"></div></button>
                </div>
                <div class="button-add">
                    <button class="button"><router-link to="/BA/BADepositWithdraw/BAWithdrawDetail"><div class="button-text">Thêm chi tiền</div></router-link></button>
                    <button class="function-extend"><div class="line"></div><div class="icon-expand-more"></div></button>
                </div>
            </div>
        </div>
  <div class="body">
          <div class="data-table">
            <div class="overview">
              <div class="w1-3">
                <div class="first-overview">
                  <div class="data-number">({{ formatNumber(totalMoneyReceipt) }},00)  </div>
                  <div class="label-overview">Tổng thu đầu năm đến hiện tại</div>
                </div>
              </div>
              <div class="w1-3">
                <div class="second-overview">
                  <div class="data-number">({{ formatNumber(totalMoneyPayment) }},00)</div>
                  <div class="label-overview">Tổng chi đầu năm đến hiện tại</div>
                </div>
              </div>
              <div class="w1-3">
                <div class="third-overview">
                  <div class="data-number">({{ formatNumber(totalMoneyReceipt- totalMoneyPayment) }},00)</div>
                  <div class="label-overview">Số dư </div>
                </div>
              </div>
            </div>
            <div class="sticky">
              <div class="tab-fillter">
                <div class="all-fillter"  v-if="this.getAll==0" v-on:click="getAlls()">Tất cả</div>
                <div class="deposit-fillter"  v-else v-on:click="getAlls()">Tất cả</div>
                <div class="all-fillter" v-if="this.getAll==1" v-on:click="getReceipts()">Thu tiền</div>
                <div class="deposit-fillter" v-else v-on:click="getReceipts()">Thu tiền</div>
                <div class="all-fillter" v-if="this.getAll==2" v-on:click="getPayments()">Chi tiền</div>
                <div class="withdraw-fillter" v-else v-on:click="getPayments()">Chi tiền</div>
              </div>
              <div class="suport">
                <div class="logo-and-link">
                <div class="logo-suport"></div>
                <div>Hướng dẫn</div>
                </div>
              </div>
            </div>
            <div class="fillter-list-data">
                <div class="flex-grow">
                  <div class="check-all-arrow">
                      <div class="icon-arrow-check">
                        
                      </div>
                  </div>
                  <div class="check-all-dropdown">
                    <button class="dropdown-secondary">
                      <div class="button-fillter">
                        <span class="text">Thực hiện hàng loạt
                        </span>
                        <div class="arrow-down">
                        </div>
                      </div>
                    </button>
                  </div>
                  <div class="fillter">
                    <button class="dropdown-fillter">
                      <div class="button-fillter">
                        <span class="text">Lọc
                        </span>
                        <div class="arrow-down">
                        </div>
                      </div>
                    </button>
                  </div>
                  <div class="fillter-conditions">Đầu năm tới hiện nay</div>
                </div>
                <div class="flex">
                  <div class="search-wrapper">
                    <ComboMainContent v-bind:placeholder="this.text" :textInput="datafake" :search="true" @sendData="textSearch = $event" />
                  </div>
                  <div class="button-flex">
                    <div class="icon-excel"></div>
                    <div class="icon-setting"></div>
                  </div>
                </div>
            </div>
            <div class="table">
              <vue-table @showDialoged="showDialog = $event" :numberpage="numberpage" :page="page" :getAll="getAll" :textSearch="cutstring(textSearch)"/>
            </div>
          </div>
            <vue-footer @numberpage="numberpage=$event" @page="page=$event" :getAll="getAll" />
        </div>
        </div>
</template>

<script>
import Table from '../components/Table'
import Footer from '../components/Footer'
import ComboMainContent from '../components/ComboMainContent'
import axios from 'axios';
export default {
  components :{
    'vue-table':Table,
    'vue-footer':Footer,
    ComboMainContent,
  },
  data(){
    return {
      text:"Nhập từ khóa tìm kiếm",
      showDialog:0,
      getData:null,
      numberpage:10,
      page:1,
      getAll:0,
      totalMoneyReceipt:0,
      totalMoneyPayment:0,
      textSearch:' ',
      datafake:' ',
    }
  },
  //#region Watch
  watch:{
    showDialog: function () {
      const token =  this.$store.state.token;
      // Use Axios to make a call to the API
      axios
        .get("http://localhost:8000/api/auth/receipt/edit/"+this.showDialog, {
          headers: {
          Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
         },
        })
        .then(
          (response) => (
           this.getData=response.data

          ),(console.log(this.getData))
        );
      if(this.getData[0].receipt_type===1){
        this.$router.push('/BA/BADepositWithdraw/BADepositDetail/'+ this.getData[0].id);
      }else {
        this.$router.push('/BA/BADepositWithdraw/BAWithdrawDetail/'+ this.getData[0].id);
      }
      
    },
  },
  //#endregion
  //#region Method
  methods:{
    getAlls:function(){
       this.getAll=0
    },
    getReceipts:function(){
        this.getAll=1
    },
    getPayments:function(){
        this.getAll=2
    },
    formatNumber(number){
      return String(number).replace(/(.)(?=(\d{3})+$)/g,'$1.');
    },
    cutstring(string){
      return string.substring(1);
    }
  },
  //#endregion
  computed :{
      // getData(){
      //      return this.$store.getters.getDepositWithdrawListById(this.showDialog);
      // }
  },
  created:function(){
    const token =  this.$store.state.token;
      // Use Axios to make a call to the API
      //#region Get Total Money of Payment
      axios
        .get("http://localhost:8000/api/auth/receipt/total_money_payment/", {
          headers: {
          Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
         },
        })
        .then(
          (response) => (
           (
          this.totalMoneyPayment=response.data
           )
            
          )
        );
        //#endregion
      //#region Get Total Money of Receipt
        axios
        .get("http://localhost:8000/api/auth/receipt/total_money_receipt/", {
          headers: {
          Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
         },
        })
        .then(
          (response) => (
           (
          this.totalMoneyReceipt=response.data
           )
            
          )
        );
        //#endregion
  },
};
</script>

<style>
/* .header-list {
  height: 80px;
  width: 100%;
  background-color: #f1f1f1;
}
.body {
  width: 100%;
  height: calc(100% - 80px);
}
.body .data-table {
  height: 100%;
  width: 100%;
} */
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
  display: flex;
}
.header-list .title-list {
    padding-left: 10px;
    font-size: 24px;
    font-weight: 700;
    color: #212121;
    flex: 1;
    padding-top: 23px;
}
.header-list .header-button {
    margin-left: 10px;
    display: flex;
    align-items: center;
    padding-right: 40px;
} 
.header-list .header-button .button-add {
  height: 36px;
  width: 178px;
  display: flex;
  background-color:#2ca01c;
  border-radius: 41px;
  margin-right: 9px;
}
.header-list .header-button .button-add:hover {
  cursor: pointer;
}

.button-add .button {
    background-color:#2ca01c;
    color: #fff;
    border: 1px solid transparent;
    border-top-left-radius: 41px;
    border-bottom-left-radius: 41px;
    width: 70%;
}
.button-add .button:hover {
  background-color: #4CAF50;
  cursor: pointer;
}
.button-add .button a {
    color: #fff;
    text-decoration: none;
}
.button-add .function-extend {
    background-color:#2ca01c;
    border: 1px solid transparent;
    border-top-right-radius: 11px;
    border-bottom-right-radius: 11px;
}
.button-add .function-extend:hover {
   background-color: #4CAF50;
  cursor: pointer;
}
.function-extend .line {
    width: 3px;
    height: 16px;
    position: absolute;
    border: 1px solid transparent;
    border-left-color: #fff;
}
.function-extend .icon-expand-more {
  background: url(../assets/Sprites.bc13c6df.svg) no-repeat -848px -359px;
  width: 15px;
	height: 19px;
      margin-left: 12px;
}
/**------------------------Body-------------------------- */
.deposit-withdraw-list .body {
  width: 100%;
  height: calc(100% - 80px);
  overflow-y: scroll;
}
.deposit-withdraw-list .body .data-table {
  height: 100%;
  width: 100%;
}
.data-table .overview {
    width: 100%;
    height: 66px;
    color: #fff;
    margin-bottom: 24px;
    display: flex;
}
.data-table .overview .w1-3 {
  height: 100%;
  width: 33.333%;
}
.overview .w1-3 .first-overview {
  height: 84%;
  width: 96%;
  background-color: #00a9f2;
  padding-left: 10px;
  padding-top: 11px;
}
.overview .w1-3 .second-overview {
  height: 84%;
  width: 96%;
  background-color: #0075c0;
  padding-left: 10px;
  padding-top: 11px;
}
.overview .w1-3 .third-overview {
  height: 84%;
  width: 96%;
  background-color: #ff7f2c;
  padding-left: 10px;
  padding-top: 11px;
}
.w1-3 .data-number {
  height: 36px;
  width: 90%;
  font-size: 24px;
}
.w1-3 .label-overview {
  height: 19px;
  width: 90%;
  font-size:13px;
}
.data-table .sticky {
  width: 100%;
  height: 56px;
  display: flex;
}
.sticky .tab-fillter {
  height: 100%;
  display: flex;
  flex-grow: 1!important;
}
.sticky .tab-fillter .all-fillter {
  height: 27px;
  background: #ebedf0;
  color: #2ca01c;
  border-radius: 30px;
  width: 73px;
  text-align: center;
  padding-top: 12px;
  /* margin-right: 10px; */
  margin-left: 10px;
  font-weight: 700;
  cursor: pointer;
}
.sticky .tab-fillter .deposit-fillter {
  height: 27px;
  background: #ebedf0;
  border-radius: 30px;
      width: 73px;
      text-align: center;
    padding-top: 12px;    
    /* margin-right: 10px; */
    margin-left: 10px;
    cursor: pointer;
}
.sticky .tab-fillter .withdraw-fillter {
  height: 27px;
  background: #ebedf0;
  border-radius: 30px;
    width: 73px;
    text-align: center;
    padding-top: 12px;
    margin-left: 10px;
    cursor: pointer;
}
.sticky .suport {
  height: 100%;
  padding-right: 23px;
}
.sticky .logo-and-link {
  display: flex;
    width: 96px;
    padding-top: 17px;
    right: 34px;
}
.logo-and-link .logo-suport {
  background: url(../assets/Sprites.bc13c6df.svg) no-repeat -984px -145px;
  width: 23px;
	height: 22px;
  flex: 1;
  padding-right: 10px;
}
.data-table .fillter-list-data{
  width: 100%;
  height: 74px;
  display: flex;
}
.fillter-list-data .flex-grow {
  flex-grow: 1!important;
  display: flex;
}
.fillter-list-data .flex {
  display: flex;
}
.flex-grow .check-all-arrow {
  display: inline-block;
  padding: 13px 12px 0 12px;
}
.check-all-arrow .icon-arrow-check {
  background: url(../assets/Sprites.bc13c6df.svg) no-repeat -256px -143px;
    cursor: pointer;
    height: 24px;
    width: 24px;
}
button.dropdown-secondary {
  height: 36px;
  width: 180px;
  border-radius: 32px;
  border: 2px solid #ccc;
  background-color: #fff;
  cursor: pointer;
  margin-right: 13px;
}
.button-fillter {
    font-weight: 600;
    position: relative;
    color: inherit;
    display: flex;
    transition: all .25s ease;
    white-space: nowrap;
    font-size: 13px;
    line-height: 13px;
    justify-content: center;
}
.button-fillter span {
  padding-right: 8px;
}
.button-fillter .arrow-down {
  background: url(../assets/Sprites.bc13c6df.svg) no-repeat -560px -359px;
  height: 14px;
  width: 14px;
}
button.dropdown-fillter {
  height: 36px;
  width: 90px;
  border-radius: 32px;
  border: 2px solid #000;
  background-color: #fff;
  cursor: pointer;
}

.fillter-conditions {
  padding-top: 10px;
  padding-left: 19px;
}
/**----------------------------- */
.fillter-list-data .flex .search-wrapper {
  width: 192px;
  margin-right: 5px;
}
.flex .button-flex {
  display: flex;
}
.flex .button-flex .icon-excel {
  background: url(../assets/Sprites.bc13c6df.svg) no-repeat -704px -200px;
    cursor: pointer;
    height: 24px;
    width: 24px;
    margin-right: 10px;
}
.flex .button-flex .icon-setting {
  background: url(../assets/Sprites.bc13c6df.svg) no-repeat -88px -200px;
    cursor: pointer;
    height: 24px;
    width: 24px;
}
.data-table .table {
    width: 100%;
    height: calc(100% - 196px);
}
/**--------------------end Body-------------------------- */
</style>