<template>
  <div class="side-bar">
    <div class="logo">
      <div class="icon"></div>
      <div class="name">
        <img src="https://actappdc.misacdn.net/img/Logo_Module_TiengViet_White.66947422.svg" class="img-icon">
      </div>
    </div>
    <div class="menu-items-list">
      <div class="menu-item" >
         <!-- <router-link to="/sidebar">TỔNG QUAN </router-link>  -->
        <div class="icon"></div>
        <div class="name">Tổng quan</div>
      </div>
      <div class="menu-item">
        <!-- <router-link to="/about">link</router-link> -->
        <div class="icon-money"></div>
        <div class="name">Tiền mặt</div>
      </div>
      <div class="menu-item">
        <div class="icon-banking"></div>
        <div class="name">Tiền Gửi</div>
      </div>
      <div class="menu-item">
        <div class="icon-buying"></div>
        <div class="name">Mua hàng</div>
      </div>
      <div class="menu-item">
        <div class="icon-selling"></div>
        <div class="name">Bán hàng</div>
      </div>
      <div class="menu-item">
        <div class="icon-manage"></div>
        <div class="name">Quản lý hóa đơn</div>
      </div>
      <div class="menu-item">
        <div class="icon-store"></div>
        <div class="name">Kho</div>
      </div>
      <div class="menu-item">
        <div class="icon-tools"></div>
        <div class="name">Công cụ dụng cụ</div>
      </div>
      <div class="menu-item">
        <div class="icon-car"></div>
        <div class="name">Tài sản cố định</div>
      </div>
      <div class="menu-item">
        <div class="icon-tax"></div>
        <div class="name">Thuế</div>
      </div>
      <div class="menu-item">
        <div class="icon-price"></div>
        <div class="name">Giá thành</div>
      </div>
      <div class="menu-item">
        <div class="icon-data-synthesis"></div>
        <div class="name">Tổng hợp</div>
      </div>
      <div class="menu-item">
        <div class="icon-report"></div>
        <div class="name">Báo cáo</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'vue-sidebar',
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
    background: url(https://actappdc.misacdn.net/img/Sprites.bc13c6df.svg) no-repeat -424px -86px;
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
</style>