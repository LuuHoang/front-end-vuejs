<template>
  <div id="table">
<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">NGÀY THU TIỀN</th>
      <th scope="col">SỐ CHỨNG TỪ</th>
      <th scope="col">DIỄN GIẢI</th>
      <th scope="col">SỐ TIỀN</th>
      <th scope="col">ĐỐI TƯỢNG</th>
      <th scope="col">LÝ DO THU CHI</th>
      <th scope="col">LOẠI CHỨNG TỪ</th>
      <th scope="col">CHỨC NĂNG</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in returnDespositWithdraw" :key="item.id" v-on:click="showId(item.id)">
      <td>{{item.postedDate }}</td>
      <td>{{item.voucherNo }}</td>
      <td>{{item.description }}</td> 
      <td>{{item.totalAmount }}</td> 
      <td>{{item.subjectName }}</td> 
      <td>{{item.particular }}</td> 
      <td>{{item.voucherType }}</td> 
      <td>Xem</td> 
    </tr>
  </tbody>
</table>
  </div>
</template>

<script>
export default {
    name:"vue-table",
    data(){
      return {
        showDialog:0,
      }
    },
    components: {
      // DialogViewDetail,
    },
    computed:{
        returnDespositWithdraw(){
          return this.$store.state.depositWithdrawList;
        }
    },
    methods:{
      selectedRow:function(){

      },
      onRowClick:function(){
          alert(1);
      },
      showId:function(id){
        // this.showDialog=id;
        this.$emit('showDialoged',id);
      }
    }

}
</script>

<style>
#table {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
.table {
  width: 100%;
  height: 100%;
}

</style>