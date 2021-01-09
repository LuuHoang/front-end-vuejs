<template>
  <div id="table">
<table class="table">
  <thead class="thead-light">
    <tr>
      <th class="border-right" scope="col"><input type="checkbox" class="height20"/></th>
      <th class="border-right" scope="col">NGÀY THU TIỀN</th>
      <th class="border-right" scope="col">SỐ CHỨNG TỪ</th>
      <th class="border-right" scope="col">DIỄN GIẢI</th>
      <th class="border-right" scope="col">SỐ TIỀN</th>
      <th class="border-right" scope="col">ĐỐI TƯỢNG</th>
      <th class="border-right" scope="col">LÝ DO THU CHI</th>
      <th class="border-right" scope="col">LOẠI CHỨNG TỪ</th>
      <th class="border-bottom" scope="col">CHỨC NĂNG</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in items" :key="item.id" v-on:dblclick="showId(item.id,receipt_type)">
      <td class="border-top-right"><input type="checkbox" class="height20"/></td>
      <td class="border-full center">{{item.accounting_date }}</td>
      <td class="border-full link" v-on:click="showId(item.id,item.receipt_type)">{{item.voucher_code }}</td>
      <td class="border-full ">{{item.description }}</td> 
      <td class="border-full end">{{ formatNumber(item.amount_of_money) }}</td> 
      <td class="border-full">{{item.object }}</td> 
      <td class="border-full">{{item.reason }}</td> 
      <td class="border-full" v-if="item.receipt_type==0"> Ủy nhiệm chi</td> 
      <td class="border-full" v-else> Ủy nhiệm thu</td> 
      <td class="border-top center link" v-on:click="deleteData(item.id)" ><a style="color: #0075c0;">Xóa</a></td> 
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td ></td>
      <td ><b>Tổng</b></td>
      <td ></td>
      <td ></td> 
      <td class=" end"><b>{{totalMoney}}</b></td> 
      <td ></td> 
      <td ></td> 
      <td ></td> 
      <td ></td>
    </tr>
  </tfoot>
</table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name:"vue-table",
    props:{
        page:{
            type:Number,
            default:1,
        },
        numberpage:{
            type:Number,
            default:10,
        },
        getAll:{
            type:Number,
            default:0,
        },
        textSearch:{
          type:String,
          default:null,
        }
    },
    data(){
      return {
        showDialog:0,
        items:null,
      }
    },
    components: {
      // DialogViewDetail,
    },
    computed:{
        returnDespositWithdraw(){
          return this.$store.state.depositWithdrawList;
        },
        totalMoney: function(){
            let sum = 0;
            this.items.forEach(function(item) {
              sum += parseFloat(item.amount_of_money) ;
            });

          return sum;
        }
    },
    methods:{
      selectedRow:function(){

      },
      onRowClick:function(){
          alert(1);
      },
      formatNumber(number){
        return String(number).replace(/(.)(?=(\d{3})+$)/g,'$1.');
       },
      showId:function(id,receipt_type){
        // sua lai cho nay 
        //this.$emit('showDialoged',id);
        if(receipt_type==0){
          this.$router.push('/BA/BADepositWithdraw/BAWithdrawDetail/'+ id);
        }else{
          this.$router.push('/BA/BADepositWithdraw/BADepositDetail/'+ id);
        }
      },
      deleteData:function(id){
        // CALL API DELETE DATA
        const token =  this.$store.state.token;
            axios
            .delete("http://localhost:8000/api/auth/receipt/delete/"+id, {
              headers: {
              Authorization: `Bearer ${token}`   
            },
            });  
        // UPDATE DATA FOR TABLE
            axios
            .get("http://localhost:8000/api/auth/receipt/get/"+this.page+"/"+this.numberpage, {
              headers: {
              Authorization: `Bearer ${token}`   
            },
            })
            .then(
              (response) => (
              this.items=response.data.data
              )
            );
      },
    },
    created() {
      // Get the access token from the auth wrapper
      const token =  this.$store.state.token;
            axios
            .get("http://localhost:8000/api/auth/receipt/get/"+this.page+"/"+this.numberpage, {
              headers: {
              Authorization: `Bearer ${token}`   
            },
            })
            .then(
              (response) => (
              this.items=response.data.data
              )
            );
    },
    watch:{
        //#region watch param page
        page:function(){
          const token =  this.$store.state.token;
          if(this.getAll===0){
            // Use Axios to make a call to the API
            axios
              .get("http://localhost:8000/api/auth/receipt/get/"+this.page+"/"+this.numberpage, {
                headers: {
                Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
              },
              })
              .then(
                (response) => (
                this.items=response.data.data
                )
              );
          }else if(this.getAll===1){
                axios
                .get("http://localhost:8000/api/auth/receipt/get_receipt/"+this.page+"/"+this.numberpage, {
                  headers: {
                  Authorization: `Bearer ${token}`    
                },
                })
                .then(
                  (response) => (
                  this.items=response.data.data
                  )
                );
          }else{
               axios
                .get("http://localhost:8000/api/auth/receipt/get_payment/"+this.page+"/"+this.numberpage, {
                  headers: {
                  Authorization: `Bearer ${token}`    
                },
                })
                .then(
                  (response) => (
                  this.items=response.data.data
                  )
                );
          }
            
        },
        //#endregion
        //#region watch param numberpage
        numberpage:function(){
            const token =  this.$store.state.token;
          if(this.getAll===0){
            // Use Axios to make a call to the API
            axios
              .get("http://localhost:8000/api/auth/receipt/get/"+this.page+"/"+this.numberpage, {
                headers: {
                Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
              },
              })
              .then(
                (response) => (
                this.items=response.data.data
                )
              );
          }else if(this.getAll===1){
                axios
                .get("http://localhost:8000/api/auth/receipt/get_receipt/"+this.page+"/"+this.numberpage, {
                  headers: {
                  Authorization: `Bearer ${token}`    
                },
                })
                .then(
                  (response) => (
                  this.items=response.data.data
                  )
                );
          }else{
               axios
                .get("http://localhost:8000/api/auth/receipt/get_payment/"+this.page+"/"+this.numberpage, {
                  headers: {
                  Authorization: `Bearer ${token}`    
                },
                })
                .then(
                  (response) => (
                  this.items=response.data.data
                  )
                );
          }
        },
        //#endregion
        //#region watch param getAll
        getAll:function(){
          const token =  this.$store.state.token;
          if(this.getAll===0){
            // Use Axios to make a call to the API
            axios
              .get("http://localhost:8000/api/auth/receipt/get/"+this.page+"/"+this.numberpage, {
                headers: {
                Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
              },
              })
              .then(
                (response) => (
                this.items=response.data.data
                )
              );
          }else if(this.getAll===1){
                axios
                .get("http://localhost:8000/api/auth/receipt/get_receipt/"+this.page+"/"+this.numberpage, {
                  headers: {
                  Authorization: `Bearer ${token}`    
                },
                })
                .then(
                  (response) => (
                  this.items=response.data.data
                  )
                );
          }else{
               axios
                .get("http://localhost:8000/api/auth/receipt/get_payment/"+this.page+"/"+this.numberpage, {
                  headers: {
                  Authorization: `Bearer ${token}`    
                },
                })
                .then(
                  (response) => (
                  this.items=response.data.data
                  )
                );
          }
        },
        //#endregion
        //region watch param textSearch 
        textSearch:function(){
          // search by indexed columns
          const token =  this.$store.state.token;
          if(this.getAll===0){

            // Get All
            axios
              .get("http://localhost:8000/api/auth/receipt/search_by_string/"+this.textSearch, {
                headers: {
                Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
              },
              })
              .then(
                (response) => (
                this.items=response.data.data
                )
              );
          }else if(this.getAll===1){
                axios
                .get("http://localhost:8000/api/auth/receipt/search_by_string_receipt/"+this.textSearch, {
                  headers: {
                  Authorization: `Bearer ${token}`    
                },
                })
                .then(
                  (response) => (
                  this.items=response.data.data
                  )
                );
          }else{
               axios
                .get("http://localhost:8000/api/auth/receipt/search_by_string_payment/"+this.textSearch, {
                  headers: {
                  Authorization: `Bearer ${token}`    
                },
                })
                .then(
                  (response) => (
                  this.items=response.data.data
                  )
                );
          }
        }
    },

}
</script>

<style>
#table {
  height: 100%;
  width: 100%;
}
table {
   border-collapse: separate;
}
thead tr {
  height: 45px;
}
tbody td {
  height: 50px;
}
tbody td.center {
  text-align: center;
}
tbody td.end {
   text-align: end; 
}
tfoot td.end {
   text-align: end; 
}
tbody td.link {
  color: #0075c0;
}
tbody td.link:hover{
   text-decoration: underline;
   cursor: pointer;
}
.table {
  width: 100%;
  height: 100%;
}
table thead tr th.border-bottom {
  border-bottom: 1px solid #e0e0e0;
}
table thead tr th.border-right {
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
}
table tbody tr td.border-top-right {
    
    border-right: 1px dotted #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
}
input.height20 {
  height: 20px;
  width: 20px;
}
table tbody tr td.border-full {
  border-right: 1px dotted #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
}
table tbody tr td.border-top {
    border-bottom: 1px solid #e0e0e0;
}
tfoot ,tfoot tr,tfoot tr td{
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  background: #fff;
  z-index:4;
}

</style>