<template>
  <div class="header">
    <div class="left">
      <div class="header-branch">
        <div class="icon-menu">
        </div>
        <div class="tooltip-content">
          <div class="branch-name" v-if="this.nameCompany===''"><b>Công ty TNHH HIK</b></div>
          <div class="branch-name" v-else><b>{{this.nameCompany}}</b></div>
        </div>
      </div>
      <div class="tooltip">
        <div class="data" >
          <router-link to="/app/databasemanagement" style="display:flex;text-decoration: none;">
            <div class="icon-header"></div>
            <div class="header-current">Demo thông tư 200</div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="component-add">
      <div class="search-component">
        <div class="search">
          <!-- <div class="input-label"><input type="text" placeholder="Nhập từ khóa tìm kiếm">
          </div> -->
          <ComboMainContent v-bind:placeholder="this.text" :search="true" :name="this.nameTagSearch"/>
          <!-- <div class="icon-search"></div> -->
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
        <div class="user-name" v-if="this.nameUser==''"><b>Lưu Văn Hoàng</b></div>
        <div class="user-name" v-else><b>{{ this.nameUser }}</b></div>
        <div class="icon-down" v-on:click="isShow = !isShow">
           <div class="con-ms-dropdown" v-if="isShow" >
              <div class=""></div>
              <div class=""></div>
              <div class="" style="cursor:pointer;" v-on:click="logout()">
                  <div class="">
                    <button style="height: 36px;width: 160px;padding: 8px 20px;cursor:pointer;"  >
                      <div style="font-weight: 600;cursor:pointer;" >Đăng xuất</div>
                    </button>
                  </div>
              </div> 
           </div>
        </div>
      </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import ComboMainContent from '../components/ComboMainContent'
import axios from 'axios';
export default {
    name:'vue-header',
    computed:{
        result(){
          return this.$store.state.result
        }
    },
    components:{
      ComboMainContent,
    },
    data(){
      return {
        text:"Nhập từ khóa tìm kiếm",
        nameTagSearch:"txt_Search",
        isShow:false,
        nameCompany:'',
        nameUser:'',
      }
    },
    created() {
      // Get the access token from the auth wrapper
      const token =  this.$store.state.token;
      // Use Axios to make a call to the API
      axios
        .get("http://localhost:8000/api/auth/user/info", {
          headers: {
          Authorization: `Bearer ${token}`    // send the access token through the 'Authorization' header
         },
        })
        .then(
          (response) => (
            (this.nameCompany = response.data.company_name),
            this.nameUser=response.data.name
          )
        );
        
    },
    methods:{
        logout(){
            this.$store.commit("savetoken", null)
            this.$router.push('/login');
        }
    },
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
    border: 1px solid #ebedf0;
    border-radius: 40px;
    display: flex;
    height: 65%;
    width: 72%;
    margin-top: 5px;
    cursor: pointer;
}
.data .icon-header {
    width: 8px;
    height: 8px;
    background-color: #4ea344;
    border-radius: 50%;
    border: 1px solid #fff;
    margin-top: 10px;
    margin-left: 8px;
}
.data .header-current {
      padding-left: 7px;
    max-width: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
     transition: all .2s ease; 
    color: #212121;
    padding-top: 8px;
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
  /* border: 1px solid #ebedf0; */
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

/* .search-component .search .icon-search {
    width: 22px;
    height: 22px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -620px -31px;
    margin-top: 6px;
} */
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
.right .account-info .icon-down {
    width: 14px;
    height: 14px;
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -1076px -32px;
    margin-top: 15px;
    cursor: pointer;
    margin-left: 10px;
}
.right .account-info .icon-down .con-ms-dropdown {
        padding-top: 30px;
        position: absolute;
        height: auto;
        width: auto;
        z-index: 9990;
       
}
</style>