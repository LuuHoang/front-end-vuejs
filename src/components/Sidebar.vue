<template>
  <div class="side-bar">
    <div class="logo">
      <div class="icon"></div>
      <div class="name">
        <img src="https://actappdc.misacdn.net/img/Logo_Module_TiengViet_White.66947422.svg" class="img-icon">
      </div>
    </div>
    <div class="menu-items-list">
      <div v-for="item in listMenuItem" :key="item.id" class="menu-item" :class="{selected:item.id == selected}" @click="selected = item.id"   >
        <router-link :to="item.router">
        <div v-bind:class="item.nameIcon"></div>
        <div class="name">{{ item.name }}</div>
        </router-link>
      </div>
      <!-- <div class="menu-item" >
        <router-link to="/BA">
        <div class="icon"></div>
        <div class="name">Tổng quan</div>
        </router-link>
      </div>
      <div class="menu-item">
        <router-link to="/CA/CAProcess">
        <div class="icon-money"></div>
        <div class="name">Tiền mặt</div>
        </router-link>
      </div>
      <div class="menu-item selected">
        <router-link to="/BA/BAProcess">
        <div class="icon-banking"></div>
        <div class="name">Tiền gửi</div></router-link>  
      </div>
      <div class="menu-item"><router-link to="/BA">
        <div class="icon-buying"></div>
        <div class="name">Mua hàng</div></router-link>
      </div>
      <div class="menu-item"><router-link to="/BA">
        <div class="icon-selling"></div>
        <div class="name">Bán hàng</div></router-link>
      </div>
      <div class="menu-item"><router-link to="/BA">
        <div class="icon-manage"></div>
        <div class="name">Quản lý hóa đơn</div></router-link>
      </div>
      <div class="menu-item"><router-link to="/BA">
        <div class="icon-store"></div>
        <div class="name">Kho</div></router-link>
      </div>
      <div class="menu-item"><router-link to="/BA">
        <div class="icon-tools"></div>
        <div class="name">Công cụ dụng cụ</div></router-link>
      </div>
      <div class="menu-item"><router-link to="/BA">
        <div class="icon-car"></div>
        <div class="name">Tài sản cố định</div></router-link>
      </div>
      <div class="menu-item"><router-link to="/BA">
        <div class="icon-tax"></div>
        <div class="name">Thuế</div></router-link>
      </div>
      <div class="menu-item"><router-link to="/BA">
        <div class="icon-price"></div>
        <div class="name">Giá thành</div></router-link>
      </div>
      <div class="menu-item"><router-link to="/BA">
        <div class="icon-data-synthesis"></div>
        <div class="name">Tổng hợp</div></router-link>
      </div>
      <div class="menu-item"><router-link to="/BA">
        <div class="icon-report"></div>
        <div class="name">Báo cáo</div></router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
    name:'vue-sidebar',
    data:()=>({
       listMenuItem:[
        {id:1,nameIcon:'icon',name:'Tổng quan',router:'/BA'},
        {id:2,nameIcon:'icon-money',name:'Tiền mặt',router:'/BA'},
        {id:3,nameIcon:'icon-banking',name:'Tiền gửi',router:'/BA/BAProcess'},
        {id:4,nameIcon:'icon-buying',name:'Mua hàng',router:'/BA'},
        {id:5,nameIcon:'icon-selling',name:'Bán hàng',router:'/BA'},
        {id:6,nameIcon:'icon-manage',name:'Quản lý hóa đơn',router:'/BA'},
        {id:7,nameIcon:'icon-store',name:'Kho',router:'/BA'},
        {id:8,nameIcon:'icon-tools',name:'Công cụ dụng cụ',router:'/BA'},
        {id:9,nameIcon:'icon-car',name:'Tài sản cố định',router:'/BA'},
        {id:10,nameIcon:'icon-tax',name:'Thuế',router:'/BA'},
        {id:11,nameIcon:'icon-price',name:'Giá thành',router:'/BA'},
        {id:12,nameIcon:'icon-data-synthesis',name:'Tổng hợp',router:'/BA'},
        {id:13,nameIcon:'icon-report',name:'Báo cáo',router:'/BA'}
      ],
      selected: undefined,
    }),
}
</script>

<style>
.side-bar {
    width: 164px;
    height: 100vh;
    background-color:#393a3d;
    font-size: 13px;
}
.logo {
  height: 48px;
  width: 100%;
  padding-left: 17px;
  padding-top: 12px;
  display: flex;
}
.logo .icon {
    width: 20px;
    height: 24px;
    margin-right: 10px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -424px -86px;
}
.logo .name {
  width: 80%;
  height: 100%;
  margin-top: -10px;
}
.name .img-icon {
  position: absolute;
  max-width: 96px;
  height: 49px;
}
.menu-items-list {
    width: 100%;
    padding-top: 4px;
}
.menu-items-list .menu-item {
  height: 42px;
  width: 100%;
  display: flex;
}

.menu-item a {
  display: flex;
    text-decoration: none;
}
.menu-items-list :hover {
  cursor: pointer;
  background-color: #626262;
}
.menu-item .icon {
    width: 20px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -30px -1628px;
    margin-left: 17px;
        margin-top: 7px;
}
.menu-item .icon-banking {
  width: 20px;
    height: 24px;
    margin-right: 10px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -117px -1632px;
    margin-left: 15px;
    margin-top: 11px;
}
.menu-item .icon-money {
    width: 20px;
    height: 24px;
    margin-right: 10px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -73px -1632px;
    margin-left: 15px;
    margin-top: 11px;

}
.menu-item .icon-buying {
    width: 20px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -165px -1632px;
    margin-left: 18px;
    margin-top: 11px;
} 
.menu-item .icon-selling {
    width: 20px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -206px -1631px;
    margin-left: 17px;
    margin-top: 11px;
}
.menu-item .icon-manage {
   width: 20px;
    height: 24px;
    margin-right: 6px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -254px -1632px;
    margin-left: 19px;
    margin-top: 11px;
}
.menu-item .icon-store {
   width: 20px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -294px -1632px;
    margin-left: 17px;
    margin-top: 11px;
}
.menu-item .icon-tools {
   width: 20px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -339px -1633px;
    margin-left: 17px;
    margin-top: 11px;
}
.menu-item .icon-car {
   width: 20px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -382px -1632px;
    margin-left: 17px;
    margin-top: 11px;
}
.menu-item .icon-tax {
   width: 20px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -427px -1632px;
    margin-left: 17px;
    margin-top: 11px;
}
.menu-item .icon-price {
   width: 20px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -471px -1632px;
    margin-left: 17px;
    margin-top: 11px;
}
.menu-item .icon-data-synthesis {
    width: 20px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -514px -1632px;
    margin-left: 17px;
    margin-top: 11px;
}
.menu-item .icon-report {
   width: 20px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -552px -1632px;
    margin-left: 17px;
   margin-top: 11px;
}
.menu-item .name {
  text-align: center;
  color: #fff;
  margin-top: 11px;
}
.menu-item.selected {
    border-left: 6px solid #2ca01c;
    font-weight: 600;
}
.menu-item.selected .icon {
    width: 20px;
    height: 24px;
    margin-right: 10px;
    background: url(/img/Sprites.bc13c6df.bc13c6df.svg) no-repeat -33px -1587px;
    margin-left: 13px;
    margin-top: 11px;
}
.menu-item.selected .icon-banking {
    width: 20px;
    height: 24px;
    margin-right: 10px;
    background: url(/img/Sprites.bc13c6df.bc13c6df.svg) no-repeat -121px -1590px;
    margin-left: 13px;
    margin-top: 11px;
}
.menu-item.selected .icon-money {
    width: 20px;
    height: 24px;
    margin-right: 10px;
    background: url(/img/Sprites.bc13c6df.bc13c6df.svg) no-repeat -78px -1588px;
    margin-left: 13px;
    margin-top: 11px;
}
.menu-item.selected .icon-buying {
    width: 20px;
    height: 24px;
    margin-right: 10px;
    background: url(/img/Sprites.bc13c6df.bc13c6df.svg) no-repeat -165px -1589px;
    margin-left: 13px;
    margin-top: 11px;
}
.menu-item.selected .icon-selling {
    width: 20px;
    height: 24px;
    margin-right: 10px;
    background: url(/img/Sprites.bc13c6df.bc13c6df.svg) no-repeat -206px -1588px;
    margin-left: 13px;
    margin-top: 11px;
}
.menu-item.selected .icon-manage {
   width: 20px;
    height: 24px;
    margin-right: 6px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -254px -1589px;
    margin-left: 13px;
    margin-top: 11px;
}
.menu-item.selected .icon-store {
   width: 20px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -294px -1589px;
    margin-left: 13px;
    margin-top: 11px;
}
.menu-item.selected .icon-tools {
   width: 20px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -339px -1590px;
    margin-left: 13px;
    margin-top: 11px;
}
.menu-item.selected .icon-car {
   width: 20px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -382px -1589px;
    margin-left: 13px;
    margin-top: 11px;
}
.menu-item.selected .icon-tax {
   width: 20px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -427px -1589px;
    margin-left: 13px;
    margin-top: 11px;
}
.menu-item.selected .icon-price {
   width: 20px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -471px -1589px;
    margin-left: 13px;
    margin-top: 11px;
}
.menu-item.selected .icon-data-synthesis {
    width: 20px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -514px -1589px;
    margin-left: 13px;
    margin-top: 11px;
}
.menu-item.selected .icon-report {
   width: 20px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -552px -1589px;
    margin-left: 13px;
   margin-top: 11px;
}
</style>