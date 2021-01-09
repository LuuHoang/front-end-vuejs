<template>
  <div class="content-banking">
    <vue-header />
    <div class="navigation-tabs">
      <MenuTabPositionTop/>
      <!-- <router-view/> -->
<!-- ở đây nên đặt 1 router view chính , trong router view đấy có 1 lớp view con bên trong  -->
      <div class="deposit-withdraw-list">
        <router-view/>
      </div>
      <!-- end router-view-->
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
 import MenuTabPositionTop from '../components/MenuTabPositionTop';
export default {
    components: {
    'vue-header':Header,
     MenuTabPositionTop,

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

/* -------- Css deposit-withdraw-list ----------*/
.deposit-withdraw-list {
  width: 100%;
  height: calc(100% - 64px);
  background-color: #fff;
}

</style>