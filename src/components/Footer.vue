<template>
  <div class="footer">
      <div class="main-footer">
         <!-- <div class="lable-text">
             <div class="viewer-static"><b>Tổng</b></div>
             <div class="viewer-static-right"><b>78,210,233,650,00</b></div>
         </div> -->
         <div class="pagination">
             <div class="left-pagination">
                 <pre>Tổng số: <b> {{totalPage}} </b> bản ghi </pre>
             </div>
             <div class="right-pagination">
                 <div class="positon-pagingation">
                    <select  v-model="numberpage"  name="number_of_records"  style="height:28px;">
                        <option value=10 >10 bản ghi trên 1 trang</option>
                        <option value=15 >15 bản ghi trên 1 trang</option>
                        <option value=20>20 bản ghi trên 1 trang</option>
                        <option value=50>50 bản ghi trên 1 trang</option>
                    </select>
                    <!-- <combo-main-content v-bind:name="this.paramString" v-bind:dropdown="true" :textInput="this.textInput" v-bind:readonly="true"/> -->
                    <div class="cursor-pointer">
                        <div class="before-page" v-on:click="previousPage()">Trước</div>
                        <div class="number" >1</div>
                        <div class="number">2</div>
                        <div class="number">3</div>
                        <div class="next-page" v-on:click="nextPage()">Sau</div>
                    </div>
                 </div>
                <div>
                    
                </div>
             </div>
         </div>
      </div>
  </div>
</template>

<script>
// import ComboMainContent from './ComboMainContent.vue'
import axios from 'axios';
export default {
  components: {
    //    ComboMainContent 
  },
  props:{
        getAll:{
            type:Number,
            default:0,
        }
    },
    name:"vue-footer",
    data(){
        return {
            paramString:"phân trang",
            page:1,
            numberpage:10,
            totalPage:null,
            totalPageReceipt:null,
            totalPagePayment:null,
        }
    },
    watch:{
    page:function(){
        
        // this.$store.commit("savepage", this.page)
        this.$emit('page',this.page);
        this.$emit('numberpage',this.numberpage);
    },
    numberpage:function(){
        
        // this.$store.commit("savenumberpage", this.numberpage)
        this.$emit('page',this.page);
        this.$emit('numberpage',this.numberpage);
    },
    getAll:function(){
         const token =  this.$store.state.token;
        if(this.getAll===0){
            axios
            .get("http://localhost:8000/api/auth/receipt/total", {
              headers: {
              Authorization: `Bearer ${token}`   
            },
            })
            .then(
              (response) => (
              this.totalPage=response.data
              )
            );
        }else if(this.getAll===1){
            
            axios
            .get("http://localhost:8000/api/auth/receipt/total_page_receipt", {
              headers: {
              Authorization: `Bearer ${token}`   
            },
            })
            .then(
              (response) => (
              this.totalPage=response.data
              ),
            );
        }else {
            axios
            .get("http://localhost:8000/api/auth/receipt/total_page_payment", {
              headers: {
              Authorization: `Bearer ${token}`   
            },
            })
            .then(
              (response) => (
              this.totalPage=response.data
              )
            );
        }
    },
  },
  methods:{
    previousPage:function(){
        if(this.page>1){
           this.page--
        }
    },
    nextPage:function(){
        if(this.page<3){
           this.page++
        }
    },
  },
  created(){
      const token =  this.$store.state.token;
      axios
            .get("http://localhost:8000/api/auth/receipt/total", {
              headers: {
              Authorization: `Bearer ${token}`   
            },
            })
            .then(
              (response) => (
              this.totalPage=response.data
              )
            );
  },

}
</script>

<style>
body {
  font-family: Montserrat,Helvetica,Arial,sans-serif;
  font-size: 13px;
}
.footer {
    height: 61px;
    width: 100%;
    background-color: #fff;
    position: absolute;
    bottom: 0;
}
.footer .main-footer {
    height: 100%;
    width: 100%;
}
.main-footer .lable-text {
    height: 50%;
    width: 100%;
    display: flex;
}
.main-footer .lable-text .viewer-static {
    display: flex;
    padding-top: 11px;
    padding-left: 30px;
    flex-grow: 1;
}
.main-footer .lable-text .viewer-static-right {
    padding-top: 11px;
    padding-left: 30px;
    padding-right: 36px;
}
.main-footer .pagination {
    height: 50%;
    width: 100%;
    display: flex;
}
.main-footer .pagination .left-pagination {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
}
.main-footer .pagination .right-pagination {
    width: 50%;
    height: 100%;
    display: flex;
}
.right-pagination .positon-pagingation {
    display: flex;
        position: absolute;
    right: 34px;
}
.right-pagination .positon-pagingation .cursor-pointer {
    display: flex;
    align-items: center;
    padding-left: 12px;
}
.cursor-pointer .before-page {
    height: 20px;
    width: 36px;
    margin-right: 5px;
    cursor: pointer!important;
}
.cursor-pointer .number {
    border: 1px solid #e0e0e0;
    font-weight: 700;
    cursor: pointer!important;
    width: 14px;
    height: 17px;
}
.cursor-pointer .next-page {
    height: 20px;
    width: 36px;
    margin-left: 5px;
    cursor: pointer!important;
}
</style>