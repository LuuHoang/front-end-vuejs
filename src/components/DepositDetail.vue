<template>
  <div id="dialog-view-detail">
    <!-- Modal -->
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <div class="top-header">
            <div class="align-center"></div>
            <div class="modal-title">Ủy nhiệm thu</div>
            <div class="header-detail-input">
              <div class="combo-editor">
                <ComboMainContent  :textInput="txt_name" v-bind:dropdown="true" :readonly="true"/>
              </div>
              <div class="combo-edit">
                
              </div>
            </div>
            <div class="header-detail-buttom">
              <div class="guide-tour">
                <div class="icon-suport"></div>
                <div class="tour-label">Hướng dẫn</div>
              </div>
              <div class="ms-tooltip">
                <div class="icon-setting"></div>
              </div>
              <div class="ms-tooltip">
                <div class="icon-helping"></div>
              </div>
              <div class="ms-tooltip">
                <router-link to='/BA/BADepositWithdraw'>
                    <div class="icon-close"></div>
                </router-link>
              </div>
            </div>
          </div> 
        </div>
        <div class="modal-body">
          <div class="body-layout-top">
            <div class="main-3-4">
              <div class="main-4-5">
                <div class="row-input">
                  <div class="left-row-input">
                    <div class="label"><b>Đối tượng</b></div>
                    <div class="input" v-if="idPaymentOrReceipt !==undefined">
                      <ComboMainContent
                        v-bind:dropdown="true"
                        v-bind:add="true"
                        :name="this.txt_object"
                        :textInput="getData.object"
                        :openDialog="nameDialogSuppiler"
                        @openDialogName="isShow = $event"
                        @sendData="dataInsert.object = $event"
                      />
                    </div>
                    <div class="input" v-else>
                      <ComboMainContent
                        v-bind:dropdown="true"
                        v-bind:add="true"
                        :name="txt_recipientAccount"
                        :textInput="datafake"
                        @sendData="dataInsert.object = $event"
                      />
                    </div>
                  </div>
                  <div class="right-row-input">
                    <div class="label"><b>Địa chỉ</b></div>
                    <div class="input" v-if="idPaymentOrReceipt !==undefined">
                    <ComboMainContent
                        :name="txt_address" 
                        :textInput="getData.address"
                        @sendData="dataInsert.address = $event"
                    /></div>
                    <div class="input"  v-else>
                    <ComboMainContent
                        :name="txt_address" 
                        :textInput="datafake"
                        @sendData="dataInsert.address = $event"
                    /></div>
                  </div>
                </div>
                <div class="row-input">
                  <div class="left-row-input">
                    <div class="label"><b>Nộp vào tài khoản</b></div>
                    <div class="input" v-if="idPaymentOrReceipt !==undefined">
                      <ComboMainContent
                        v-bind:dropdown="true"
                        v-bind:add="true"
                        :name="txt_recipientAccount"
                        :textInput="getData.account_get"
                        @sendData="dataInsert.account_get = $event"

                      />
                    </div>
                    <div class="input"  v-else>
                      <ComboMainContent
                        v-bind:dropdown="true"
                        v-bind:add="true"
                        :name="txt_recipientAccount"
                        :textInput="datafake"
                        @sendData="dataInsert.account_get = $event"
                      />
                    </div>
                  </div>
                  <div class="right-row-input">
                    <div class="label"><b>Mô tả</b></div>
                    <div class="input" v-if="idPaymentOrReceipt !==undefined">
                      <ComboMainContent 
                        :textInput="getData.description"
                          @sendData="dataInsert.description = $event"
                      />
                    </div>
                    <div class="input"  v-else>
                      <ComboMainContent
                        :name='txt_description'
                        :textInput="datafake"
                        @sendData="dataInsert.description = $event"
                     />
                     </div>
                  </div>
                </div>
                <div class="row-input">
                  <div class="all-row-input">
                    <div class="label"><b>Lý do thu</b></div>
                    <div class="input" v-if="idPaymentOrReceipt !==undefined">
                      <ComboMainContent
                        :name='txt_description'
                        :textInput="getData.reason"
                        @sendData="dataInsert.reason = $event"
                     />
                     </div>
                     <div class="input"  v-else>
                      <ComboMainContent
                        :name='txt_description'
                        :textInput="datafake"
                        @sendData="dataInsert.reason = $event"
                     />
                     </div>
                  </div>
                </div>
                <div class="row-input">
                  <div class="left-row-input">
                    <div class="label"><b>Nhân viên thu nợ</b></div>
                    <div class="input" v-if="idPaymentOrReceipt !==undefined">
                      <ComboMainContent
                        v-bind:dropdown="true"
                        v-bind:add="true"
                        :textInput="getData.employee"
                        @sendData="dataInsert.employee = $event"
                      />
                    </div>
                    <div class="input"  v-else>
                      <ComboMainContent
                        v-bind:dropdown="true"
                        v-bind:add="true"
                        :textInput="datafake"
                        @sendData="dataInsert.employee = $event"
                      />
                    </div>
                  </div>
                  <div class="right-row-input">
                    <div class="label"><b>Số tiền</b></div>
                    <div class="input" v-if="idPaymentOrReceipt !==undefined">
                      <ComboMainContent 
                        :textInput="getData.amount_of_money"
                          :typeData="true"
                          @sendData="dataInsert.amount_of_money = $event"
                      />
                    </div>
                    <div class="input"  v-else>
                      <ComboMainContent
                        :name='txt_description'
                        :textInput="datafake"
                        :typeData="true"
                        @sendData="dataInsert.amount_of_money = $event"
                     />
                     </div>
                  </div>
                </div>
              </div>
              <div class="main-1-5">
                <div class="row-input-right">
                  <div class="label"><b>Ngày hạch toán</b></div>
                  <div style="height:30px;">
                    <input type="date" v-if="idPaymentOrReceipt !==undefined" v-model="getData.accounting_date" style="height:100%;width:100%;"/>
                    <input type="date" v-else v-model="dataInsert.accounting_date" style="height:100%;width:100%;"/>
                    </div>
                </div>
                <div class="row-input-right">
                  <div class="label"><b>Ngày chứng từ</b></div>
                  <div style="height:30px;">
                    <input type="date"  v-if="idPaymentOrReceipt !==undefined" v-model="getData.day_voucher" style="height:100%;width:100%;border"/>
                    <input type="date"  v-else  v-model="dataInsert.day_voucher" style="height:100%;width:100%;border"/>
                  </div>
                </div>
                <div class="row-input-right">
                  <div class="label"><b>Số chứng từ</b></div>
                  <div v-if="idPaymentOrReceipt !==undefined">
                    <ComboMainContent 
                        :textInput="getData.voucher_code"
                        
                        @sendData="dataInsert.voucher_code = $event"
                        
                    />
                  </div>
                  <div v-else><ComboMainContent 
                        :textInput="datafake"
                        @sendData="dataInsert.voucher_code = $event"
                  /></div>
                </div>
              </div>
            </div>
            <div class="main-1-4">
              <div class="summary-info">
                <p>Tổng tiền</p>
              </div>
              <h1 v-if="idPaymentOrReceipt !==undefined">{{getData.amount_of_money}}</h1>
              <h1 v-else>{{dataInsert.amount_of_money}}</h1>
            </div>
          </div>
          <div class="body-layout-bottom">
            <grid-tab-and-control :totalMoney="parseInt(dataInsert.amount_of_money)"/>
          </div>
        </div> 
        <div class="modal-footer">
          <div class="left">
            <button
              class="btn_cancel"
            >
              Hủy
            </button>
          </div>
          <div class="right">
            <button
              class="btn_cancel"
            >
              Cất
            </button>
            <button 
              class="btn_saveAndAdd" 
              v-on:click="methodInsertOrUpdate()"
            >
              Cất và thêm
            </button>
          </div>
        </div>
      </div>
    </div>
    <add-suppiler @isCloseed="isShow = $event" v-if="this.isShow==='suppiler'"/>
      <div class="alert" v-if="isSuccess==='success'">
          <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
          <strong>Success </strong> Nghiệp vụ của bạn đã thành công
      </div>
  </div>
</template>

<script>
import ComboMainContent from "../components/ComboMainContent";
import GridTabAndControl from './GridTabAndControl.vue';
import AddSuppiler from './AddSuppiler.vue';
import axios from 'axios';
export default {
  props: {
    // idPaymentOrReceipt: {
    //   type: String,
    //   default: "",
    // },
  },
  data() {
    return {
      isSuccess:false,
      show: 0,
      isShow:'',
      nameDialogSuppiler:'suppiler',
      dropdown: false,
      add: false,
      key:1,
      // getData:[{object:null,voucher_code:null,description:null,amount_of_money:null,reason:null,receipt_type:1,employee:null,accounting_date:null,day_voucher:null,address:null,account_get:null}],
      getData:null,
      voucher_code:null,
      description:null,
      itemList:[
        {id:1,description:'Chi tiền cho',totalAmount:'220000000',subjectName:'Công ty Đại Dương',subject:'Đại dương',paymentAccount:'1121',recipientAccount:'131'},
      ],
      txt_name:'Thu khác',
      txt_defaultDescription:'Chi tiền cho',
      txt_paymentAccount:'txt_paymentAccount',
      txt_recipientAccount:'txt_recipientAccount',
      txt_address:'txt_address',
      txt_description:'txt_description',
      txt_nameEmployee:'txt_nameEmployee',
      txt_object:'txt_object',
      datafake:' ',
      idPaymentOrReceipt:this.$route.params.idPaymentOrReceipt,
      dataInsert:{object:null,voucher_code:null,description:null,amount_of_money:0,reason:null,receipt_type:1,employee:null,accounting_date:null,day_voucher:null,address:null,account_get:null},

    };
  },
  // computed :{
  //     getData(){
  //          return this.$store.getters.getDepositWithdrawListById(this.idPaymentOrReceipt);
  //     }
  // },
  created:function(){
      const idPaymentOrReceipt=this.$route.params.idPaymentOrReceipt;
      if(idPaymentOrReceipt !==undefined){
      const token =  this.$store.state.token;
      // Use Axios to make a call to the API
      axios
        .get("http://localhost:8000/api/auth/receipt/edit/"+idPaymentOrReceipt, {
          headers: {
          Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
         },
        })
        .then(
          (response) => (
           (
          this.getData=response.data,
          this.dataInsert=this.getData
           )
            
          )
        );
      }
  },
  components: {
    ComboMainContent,
    GridTabAndControl,
    AddSuppiler,
  },
  methods:{
    methodInsertOrUpdate(){
       const token =  this.$store.state.token;
      if(this.idPaymentOrReceipt!==undefined){
          console.log(this.dataInsert);
          // Use Axios to make a call to the API
          axios
            .put("http://localhost:8000/api/auth/receipt/update/"+this.idPaymentOrReceipt,
            {
                voucher_code: this.dataInsert.voucher_code,
                description: this.dataInsert.description,
                amount_of_money: this.dataInsert.amount_of_money,
                object: this.dataInsert.object,
                reason: this.dataInsert.reason,
                receipt_type: this.dataInsert.receipt_type,
                employee: this.dataInsert.employee,
                accounting_date: this.dataInsert.accounting_date,
                day_voucher: this.dataInsert.day_voucher,
                address: this.dataInsert.address,
                account_get: this.dataInsert.account_get,
              },
             {
              headers: {
                  Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
              },
            },).then(
              (response) => (
                    this.isSuccess=response.data
                )
            )
            ;
      }else{
          
          let number=parseInt(this.dataInsert.amount_of_money);
          this.dataInsert.amount_of_money=number;
          console.log(this.dataInsert); 
          //Use Axios to make a call to the API
           axios
            .post("http://localhost:8000/api/auth/receipt/create", 

            {
                voucher_code: this.dataInsert.voucher_code,
                description: this.dataInsert.description,
                amount_of_money: this.dataInsert.amount_of_money,
                object: this.dataInsert.object,
                reason: this.dataInsert.reason,
                receipt_type: this.dataInsert.receipt_type,
                employee: this.dataInsert.employee,
                accounting_date: this.dataInsert.accounting_date,
                day_voucher: this.dataInsert.day_voucher,
                address: this.dataInsert.address,
                account_get: this.dataInsert.account_get,
            },
            {
              headers: {
                 Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
              },
            },
            )
            .then(
              (response) => (
                    this.isSuccess=response.data
                    
                ),

            );
      }
    }
  },
  computed:{

  },
  watch:{
    isSuccess:function(){
        if(this.isSuccess==='success'){
          setTimeout(() => {  this.$router.push('/BA/BADepositWithdraw/'); }, 3000);
          
        }
    },
  }
};
</script>

<style >
h3,
h1 {
  margin: 0;
}
#dialog-view-detail {
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 12px;
  background-color: #626262;
}

.modal {
  width: 100%;
  height: 100%;
  position: absolute;
  top: calc(40% - 234px);
  left: calc(50% - 465px);
  right: 0;
  bottom: 0;
  display: block;
  z-index: 1050;
  overflow: hidden;
  outline: 0;
}
.modal-dialog {
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  margin: 0;
  display: block;
}
.modal-content {
  display: block;
  height: 100%;
}
/**------------------modal-header---------- */
.modal-header {
  background-color: #f1f1f1;
  height: 8%;
  width: 100%;
  display: flex;
}
.modal-header .top-header {
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
}
.top-header .align-center {
  background: url(/img/Sprites.bc13c6df.bc13c6df.svg) no-repeat -648px -144px;
  height: 24px;
  width: 24px;
  margin-left: 20px;
}
.top-header .modal-title {
  font-weight: 700;
  font-size: 24px;
  top: -7px;
  left: 20px;
  padding: 0 0 0 16px;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
      margin-top: 46px;
      width: 284px;
          height: 94%;
}
.top-header .header-detail-input {
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 50px;
  flex: 1;
  min-width: 600px;
}
.header-detail-input .combo-edit {
  width:  50%;
  display: flex;
}
.combo-edit label {
  width: 50%;
  padding-top: 9px;
  padding-left: 10px;
  margin-right: 10px;
}
.combo-edit .combo-edit-select {
  width: 40%;
}
.header-detail-input .combo-editor {
  width: 350px;
}
.top-header .header-detail-buttom {
  align-items: center;
  right: 0;
  position: relative;
  display: flex;
  cursor: pointer;
}
.header-detail-buttom, .guide-tour {
  display: flex;
  margin-right: 20px;
}
.guide-tour .icon-suport {
   background: url(/img/Sprites.bc13c6df.bc13c6df.svg) no-repeat -984px -144px;
  height: 24px;
  width: 24px;
}
.guide-tour .tour-label {
  padding-left: 5px;
    color: #0075c0;
    font-size: 13px;
}
.header-detail-buttom .ms-tooltip {
  height: 100%;
  padding-left: 10px;
    padding-right: 10px;
}
.ms-tooltip .icon-setting {
  background: url(/img/Sprites.bc13c6df.bc13c6df.svg) no-repeat -676px -30px;
  height: 24px;
  width: 24px;
}
.ms-tooltip .icon-helping {
  background: url(/img/Sprites.bc13c6df.bc13c6df.svg) no-repeat -732px -31px;
  height: 24px;
  width: 24px;
}
.ms-tooltip .icon-close {
  background: url(/img/Sprites.bc13c6df.bc13c6df.svg) no-repeat -144px -144px;
  height: 24px;
  width: 24px;
  padding-right: 20px;
}
.header-detail-input .combo-header {
  display: flex;
}
.combo-header .combo-header-text {
  padding-left: 10px;
  margin-top: 5px;
}
.combo-header .input {
  padding-left: 10px;
}
/**-----------------end modal-header------- */
.modal-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 7%;
  background-color: #38393d;
}
.modal-footer .left {
  height: auto;
    width: auto;
    position: revert;
  left: auto;
  top: auto; 
  flex-grow: 1;
}
.btn_cancel {
  height: 34px;
  padding: 6px 20px;
  background-color: #38393d;
  border: 1px solid #6b6c72;
  color: #fff;
  background-color: transparent;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 3px;

}
.btn_saveAndAdd {
  height: 34px;
  padding: 6px 20px;
  background-color: #2ca01c;
  color: #fff;
  border: 1px solid #6b6c72;
  border-radius: 5px;
  border-radius: 3px;
}
.modal-footer .right {
  height: 100%;
  width:  auto;
}
/** -----------------------modal-body------------------- */
.modal-body {
  height: 85%;
  padding: 0;
}
.modal-body .body-layout-top {
  width: 100%;
  height: 43%;
  background-color: #f1f1f1;
  display: flex;
}
/** -------------------------Main 3-4 ----------------- */
.body-layout-top .main-3-4 {
  width: 75%;
  height: 100%;
  display: flex;
}
.main-3-4 .main-4-5 {
  width: 80%;
  height: 100%;
  padding-right: 20px;
}
.main-3-4 .label {
  margin-bottom: 3px;
}
.main-4-5 .row-input {
  width: 100%;
  height: 20%;
  display: flex;
  margin-left: 28px;
}
.main-4-5 .row-input .left-row-input {
  width: 42%;
  height: 100%;
  padding-right: 12px;
}
.main-4-5 .row-input .right-row-input {
  width: 53%;
  height: 100%;
}
.main-4-5 .row-input .all-row-input {
  width: 96.5%;
  height: 100%;
}
.all-row-input input {
  width: 95%;
}
.right-row-input .no-label input {
  margin-top: 25px;
}
.main-3-4 .main-1-5 {
  width: 20%;
  height: 100%;
}
.main-1-5 .row-input-right {
  border-left: 1px solid #babec5;
  padding-left: 20px;
  height: 20%;
}

/** ----------------------End Main 3-4 ---------------- */
.body-layout-top .main-1-4 {
  width: 25%;
  height: 100%;
  text-align: end;
  padding-right: 16px;
}
.main-1-4 h1 {
      font-family: inherit;
    color: #2c2c2c;
    font-size: 37px;
}
.modal-body .body-layout-bottom {
  width: 100%;
  height: 57%;
  background-color: #fff;
}
/**--------------------- MessageBox------------------------- */
.alert {
  padding: 20px;
  background-color: #4CAF50;
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 10px;
}

.closebtn {
  margin-left: 15px;
  color: white;
  font-weight: bold;
  float: right;
  font-size: 22px;
  line-height: 20px;
  cursor: pointer;
  transition: 0.3s;
}

.closebtn:hover {
  color: black;
}
</style>