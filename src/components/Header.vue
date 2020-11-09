<template>
  <div class="header">
    <div class="left">
      <div class="header-branch">
        <div class="icon-menu">
        </div>
        <div class="tooltip-content">
          <div class="branch-name"><b>Công ty TNHH HIK</b></div>
        </div>
      </div>
      <div class="tooltip">
        <div class="data">Demo Thông tư 200</div>
      </div>
    </div>
    <div class="right">
      <div class="component-add">
      <div class="search-component">
        <div class="search">
          <div class="input-label"><input type="text" placeholder="Nhập từ khóa tìm kiếm">
          </div>
          <div class="icon-search"></div>
        </div>
      </div>
      <div class="tooltip">
        <div class="icon-extend"></div>
      </div>
      <div class="tooltip">
        <div class="icon-setting"></div>
      </div>
      <div class="tooltip">
        <div class="icon-simple"></div>
      </div>
      <div class="tooltip">
        <div class="icon-help"></div>
      </div>
      <div class="tooltip">
        <div class="icon-notify"></div>
      </div>
      <div class="account-info">
        <div class="user-avar"></div>
        <div class="user-name"><b>Nguyễn Quang Minh</b></div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'vue-header',
    computed:{
        result(){
          return this.$store.state.result
        }
    }
}
</script>

<style>

body {
  font-family: Montserrat,Helvetica,Arial,sans-serif;
  font-size: 13px;
}
.header {
    height: 48px;
    width: 100%;
    background-color: #fff;
    top:0;
    left: 0;
    display: flex;
}
p {
  margin: 0;
}
.left {
    height: 100%;
    width: 35%;
    display: flex;
}
.left .header-branch {
  height: 100%;
  width: 50%;
  display: flex;
}
.left .header-branch .icon-menu {
    width: 16px;
    height: 14px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -847px -35px;
    margin-top: 16px;
    margin-left: 14px;
}
.header-branch .branch-name {
    margin-top: 13px;
    margin-left: 4px;
}
.left .tooltip {
  height: 100%;
  width: 50%;
  display: flex;
}
.tooltip .data {
    margin-top: 13px;
    margin-left: 4px;
}
.right {
    height: 100%;
    width: 65%;
}
.right .component-add {
  height: 100%;
  width: 100%;
  float: right;
  display: flex;
}
.right .search-component {
    width: 30%;
    height: 100%;
}
.search-component .search {
  width: 100%;
  height: 75%;
  display: flex;
  border: 1px solid #ebedf0;
  margin-top: 6px;
}
.search-component .search .input-label {
    width: calc(100% - 22px);
    height: 100%;
    margin-left: 7px;
}
.search-component .search .input-label input {
  background: #fff;
  border-radius: 3px;
  border: 0px;
  height: 90%;
}

.search-component .search .icon-search {
    width: 22px;
    height: 22px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -620px -31px;
    margin-top: 6px;
}
.right .tooltip {
  width: 4%;
  height: 100%;
  padding-left:10px;
}
.tooltip .icon-extend {
    width: 28px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -568px -30px;
    margin-top: 12px;
    margin-left: 2px;
}
.tooltip .icon-setting {
    width: 28px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -676px -30px;
    margin-top: 12px;
    margin-left: 2px;
}
.tooltip .icon-simple {
    width: 28px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -899px -30px;
    margin-top: 12px;
    margin-left: 2px;
}
.tooltip .icon-help {
    width: 28px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -732px -31px;
    margin-top: 12px;
    margin-left: 2px;
}
.tooltip .icon-notify {
    width: 28px;
    height: 24px;
    margin-right: 7px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -788px -30px;
    margin-top: 12px;
    margin-left: 2px;
}
.right .account-info {
  width: 30%;
  height: 100%;
  padding-left:10px;
  display: flex;
}
.right .account-info .user-avar {
    width: 32px;
    height: 32px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -352px -894px;
    border-radius: 50%;
    margin-top: 7px;
    margin-right: 6px;
}
.right .account-info .user-name {
  margin-top: 15px;
}
</style>