<template>
   <div class="menu">
        <div class="tabs-position-top">
            <div v-for="item in listMenuItem" :key="item.id" class="active-item" :class="{selected:item.id == selected}" @click="selected = item.id"  >
                <router-link :to="item.router">
                {{ item.name }}
                </router-link>
            </div>
            <!-- <div class="active-item selected"  >
                <router-link to="/BA/BAProcess">
                Quy trình
                </router-link>
            </div> 
            <div class="active-item"> <router-link to="/BA/BADepositWithdraw">Thu, chi tiền </router-link></div>
            <div class="active-item">Đối chiếu ngân hàng</div>
            <div class="active-item">Ngân hàng điện tử beta</div>
            <div class="active-item">Báo cáo</div> -->
        </div>
        <div class="connect-bank">
            <div class="connect-eb">
                <div class="icon"></div>
                <div class="label-connect">Kết nối ngân hàng điện tử</div>
            </div>
        </div>
      </div>
</template>

<script>
export default {
    data:()=>({
       listMenuItem:[
        {id:1,name:'Quy trình',router:'/BA/BAProcess'},
        {id:2,name:'Thu ,chi tiền',router:'/BA/BADepositWithdraw'},
        {id:3,name:'Đối chiều ngân hàng',router:'/BA/BAProcess'},
        {id:4,name:'Ngân hàng điện tử',router:'/BA/BAProcess'},
        {id:5,name:'Báo cáo',router:'/BA/BAProcess'}
        
      ],
      selected: undefined,
    }),
}
</script>

<style>
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
    color:#2ca01c;
}
.tabs-position-top .selected {
        border-bottom: 4px solid #2ca01c;
        
}
.tabs-position-top .selected a {
    color: #212121;
    font-weight: 700;
    font-size: 13px;
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
</style>