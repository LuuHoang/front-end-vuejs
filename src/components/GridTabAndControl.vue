<template>
    <div class="body-grid-tab">
            <div class="account-entries">
              <div class="tab-detail">
                <div class="label">Hạch toán</div>
                <div class="grid-option">
                  <div class="label-option">Loại tiền</div>
                  <div class="combo-currency">
                    <ComboMainContent v-bind:dropdown="true" 
                    
                    :textInput="txt_style_money"
                    />
                  </div>
                </div>
            </div>
              <table class="">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">DIỄN GIẢI</th>
                    <th scope="col">TK NỢ</th>
                    <th scope="col">TK CÓ</th>
                    <th scope="col">SỐ TIỀN</th>
                    <th scope="col">ĐỐI TƯỢNG</th>
                    <th scope="col">TÊN ĐỐI TƯỢNG</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody v-for="item in itemList" :key="item.id">
                  <tr>
                    <td>{{ item.id }}</td>
                    <td><ComboMainContent  v-bind:textInput="item.description" /> </td>
                    <td><ComboMainContent  v-bind:textInput="item.paymentAccount" :dropdown="true"/></td>
                    <td><ComboMainContent  v-bind:textInput="item.recipientAccount" :dropdown="true"/></td>
                    <td><ComboMainContent  v-bind:textInput="item.totalAmount" @sendData="item.totalAmount = $event"/></td>
                    <td><ComboMainContent  v-bind:textInput="item.subject" :dropdown="true"/></td>
                    <td><ComboMainContent  v-bind:textInput="item.subjectName" /></td>
                    <td class="border-bottom" @click="dropItemList(item.id)"><div class="icon-delete"></div></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><b>{{ totalMoney }}</b></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class="grid-control-item">
              <div class="w3-4">
                <div class="btn-grid-control">
                  <button class="add-row" @click="addItemList()"><b>Thêm dòng</b></button>
                  <button class="delete-all-row" @click="dropAllItem()"><b>Xóa hết dòng</b></button>
                  
                </div>
                <div class="input-grid-control">
                  <div class="title-upload">
                    <div class="attach-text">
                      <div class="icon-file-input"></div>
                      <div><b>Đính kèm</b></div>
                    </div>
                    <div style="padding-left: 18px;"> Dung lượng tối đa 5MB</div>
                  </div>
                  <div class="input-upload">
                    <input type="file">
                    <span>Kéo/thả tệp vào đây hoặc bấm vào đây</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
import ComboMainContent from "../components/ComboMainContent";
export default {
    props: {
    description: {
      type: String,
      default: "",
    },
    totalMoney:{
      type:Number,
      default:0,
    }
  },
    data() {
    return {
      show: 0,
      dropdown: false,
      add: false,
      key:1,
      itemList:[
        {id:1,description:'Chi tiền cho',totalAmount:' ',subjectName:'Công ty Đại Dương',subject:'Đại dương',paymentAccount:'1121',recipientAccount:'131'},
      ],
      txt_defaultDescription:'Chi tiền cho',
      txt_paymentAccount:'txt_paymentAccount',
      txt_recipientAccount:'txt_recipientAccount',
      txt_address:'txt_address',
      txt_description:'txt_description',
      txt_nameEmployee:'txt_nameEmployee',
      txt_object:'txt_object',
      txt_style_money:'VND',
    };
  },
  methods: {
    showDialog: function () {
      if (this.show === 0) {
        this.show = 1;
      } else {
        this.show = 0;
      }
    },
    addItemList:function(){
        this.key+=1;
        this.itemList.push({id:this.key,description:'Chi tiền cho',totalAmount:' ',subjectName:'Công ty Đại Dương',subject:'Thu khác',paymentAccount:'1121',recipientAccount:'131'});
    },
    /**
     * Xóa đi 1 đối tượng trong 1 mang
     * Author LVHOANG(12/11/2020)
     */
    dropItemList:function(primaryKey){
        // xóa khỏi danh sách 
        this.itemList.splice(primaryKey-1,1);
        // đánh lại chỉ mục 
        // for(i=this.key-1;i<this.key-primaryKey;i--){
        //     this.itemList[i].id=i;
        // }
    },
    dropAllItem:function(){
      this.key=1;
      this.itemList =[{id:1,description:'Chi tiền cho',totalAmount:'0',subjectName:'Công ty Đại Dương',subject:'Thu khác',paymentAccount:'1121',recipientAccount:'131'},];
    },
    see:function(){
      alert(this.totalMoney); 
    },
  },
  computed: {},
  components: {
    ComboMainContent,
  },
  watch:{
    itemList:function(){
      // handler:function(itemList,totalMoney) {
      //     itemList.forEach(item =>  {
      //     console.log('item :',item.totalAmount);
      //     let number=parseInt(item.totalAmount.substr(1));
      //     console.log('item :' ,number);
      //     totalMoney =totalMoney + number;
      //   });
      //   console.log('sum :',totalMoney);
      // },
      // deep: true
    },
    
  },
}
</script>

<style>
.body-grid-tab {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.body-grid-tab .account-entries {
  height: 50%;
  width: 100%;
  overflow-y: scroll;
}
.body-grid-tab .tab-detail {
  display:flex;
}
.tab-detail .label {
  font-size: 24px;
  text-align: start;
  height: 100%;
  width: 20%;
  flex-grow: 1;
  padding-left:26px;
}
.tab-detail .grid-option {
  margin-right: 20px;
    display: flex;
}
.grid-option .label-option {
  margin-top: 9px;
    margin-right: 17px;
    font-size: 13px;
}
/**-------------------------Table------------------------*/
.body-grid-tab table {
  height: 0;
  width: 100%;
  text-align: center;
  padding-left: 16px;
}
tbody tr {
  height: 39px !important;
  font-size: 13px;
  font-weight: 400;
}
tbody tr td {
  border-right: 1px dotted #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
}
tbody tr td.border-bottom {
  border-right: none;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  width: 50px;
}
tbody tr td.border-bottom .icon-delete {
  background:  url(/img/Sprites.bc13c6df.bc13c6df.svg) no-repeat -464px -312px;
  height: 16px;
  width: 16px;
  margin-left: 18px;
}
/**-------------------- ENd Table------------------------*/
/**---------------- grid controller -item ---------------*/
.body-grid-tab .grid-control-item {
  height: 50%;
  width: 100%;
}
.grid-control-item .w3-4 {
  height: 100%;
  width: 75%;
  padding-left: 30px;
}
.w3-4 .btn-grid-control {
  padding-top:10px;
  padding-bottom: 32px;
}
.w3-4 .input-grid-control {
  height: 50%;
  width: 40%;
}
.input-grid-control ,.delete-all-row,.add-row{
    padding: 2px 20px;
    margin-right: 10px;
    
}
.input-grid-control .title-upload {
  display: flex;
}
.input-grid-control .title-upload .attach-text {
  display: flex;
}
.input-grid-control .title-upload .icon-file-input {
  background: url(/img/Sprites.bc13c6df.bc13c6df.svg) no-repeat -539px -203px;
  height: 18px;
  width: 18px;
  padding-right: 12px;
}
.input-grid-control .input-upload {
    /* height: 50px;
    width: 268px;
    border-radius: 2px;
    border: 1px solid #babec5; */
    background: #fff;
    padding: 16px 20px;
    box-sizing: border-box;
    border-radius: 2px;
    position: relative;
    border: 1px solid #babec5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    float: left;
    width: 100%;

}
.input-grid-control .input-upload input {
   position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    left: 0;
    top: 0;
    cursor: pointer;
}
.input-grid-control .input-upload span {
    min-width: 264px;
    display: block;
    text-align: center;
    margin: 0!important;
    padding: 0!important;
    width: 100%;
    color: #9e9e9e;
    font-style: italic;
}
/**---------------end grid controller -item -------------*/
/**----------------------end modal-body----------------- */
</style>