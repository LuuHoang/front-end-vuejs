<template>
  <div class="limiter">
    <div class="container-login100">
      <div class="wrap-login100">
        <div class="login100-pic">
          <img v-bind:src="image" style="height: 340px;"/>
        </div>

        <form @submit.prevent="submitForm" class="login100-form validate-form">
          <span class="login100-form-title"> Member Login </span>

          <div
            class="wrap-input100 validate-input"
            data-validate="Valid email is required: ex@abc.xyz"
          >
            <input
              class="input100"
              type="text"
              name="email"
              placeholder="Email"
              v-model="user.email"
            />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
          </div>

          <div
            class="wrap-input100 validate-input"
            data-validate="Password is required"
          >
            <input
              class="input100"
              type="password"
              name="pass"
              placeholder="Password"
              v-model="user.password"
            />
            <span class="focus-input100"></span>
            <span class="symbol-input100">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </span>
          </div>

          <div class="container-login100-form-btn">
            <button class="login100-form-btn">Login</button>
          </div>

          <div class="text-center p-t-12">
            <span class="txt1"> Forgot </span>
            <!-- <button class="login100-form-btn" v-on:click="seetoken()">
              Seee Token
            </button> -->
            <a class="txt2" href="#"> Username / Password? </a>
          </div>

          <div class="text-center p-t-136">
            <a class="txt2" href="#">
              Create your Account
              <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      token: "",
      image:'https://www.decalsaigon.com/upload/sanpham/3664-mau-dan-laptop-hoat-hinh-lthh-325.jpg',
    };
  },
  methods: {
    async submitForm() {
      axios
        .post("http://localhost:8000/api/auth/login", {
          email: this.user.email,
          password: this.user.password,
        })
        .then(
          (response) => (
            (this.token = response.data.access_token),
            this.$store.commit("savetoken", this.token)
          )
        );
    },
    seetoken() {
      console.log(this.$store.state.token);
    },
  },
  watch:{
    token:function(){
        this.$router.push('/BA/BAProcess');
    }
  },
};
</script>

<style>
.limiter {
  position: absolute;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  height: 100%;
}
.container-login100 {
  min-height: calc(97vh - 6px);
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #9053c7;
  background: -webkit-linear-gradient(-135deg, #c850c0, #4158d0);
  background: -o-linear-gradient(-135deg, #c850c0, #4158d0);
  background: -moz-linear-gradient(-135deg, #c850c0, #4158d0);
  background: linear-gradient(-135deg, #c850c0, #4158d0);
}
.wrap-login100 {
  width: 960px;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 177px 130px 33px 95px;
}
.login100-pic {
  width: 316px;
}
.login100-form-title {
  font-family: Arial, ui-sans-serif;
  font-size: 24px;
  color: #333333;
  line-height: 1.2;
  text-align: center;
  width: 100%;
  display: block;
  padding-bottom: 54px;
}
.wrap-input100 {
  width: 100%;
  z-index: 1;
  margin-bottom: 10px;
}
.input100 {
  font-family: Arial, ui-sans-serif;
  font-size: 15px;
  line-height: 1.5;
  color: #666666;
  display: block;
  width: auto;
  background: #e6e6e6;
  height: 50px;
  border-radius: 25px;
  padding: 0 30px 0 68px;
  outline: none;
  border: none;
}
.container-login100-form-btn {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 20px;
}
.login100-form-btn {
  font-family: Montserrat-Bold;
  font-size: 15px;
  line-height: 1.5;
  color: #fff;
  text-transform: uppercase;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background: #57b846 !important;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 25px;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;

  outline: none !important;
  border: none;
  background: transparent;
}
.text-center {
  text-align: center;
}
.p-t-12 {
  padding-top: 12px;
}
.p-t-136 {
  padding-top: 136px;
}
.login100-pic {
  width: 316px;
  display: block;
}
</style>