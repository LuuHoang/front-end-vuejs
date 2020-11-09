<template>
  <div id="dialog">
    <div class="dialog-a">
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        v-on:click="showDialog()"
      >
        Launch demo modal
      </button>
      <div class="popup-background" v-if="show === 1"></div>
      <div class="modal" tabindex="-1" role="dialog" v-if="show === 1">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-header-left">
                <div class="title-popup">
                  <h3 class="modal-title"><b>Thông tin nhà cung cấp</b></h3>
                </div>
                <div class="radio-data">
                  <input
                    class="modal-title"
                    type="radio"
                    name="group-subject"
                    checked="checked"
                    v-on:click="changeGroupSubject()"
                  />
                  <p>Tổ chức</p>
                  <input
                    class="modal-title"
                    type="radio"
                    name="group-subject"
                    v-on:click="changeGroupSubject()"
                  />
                  <p>Cá nhân</p>
                </div>
                <div class="con-ms-checkbox">
                  <input class="modal-title" type="checkbox" v-on:click="isCustomer=!isCustomer"/>
                  <p style="margin-top: 4px">Là khách hàng</p>
                </div>
              </div>
              <div class="modal-header-right">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  @click="showDialog()"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div class="modal-body">
              <div class="info-supplier">
                <div class="left-info-supplier">
                  <div class="input-code" v-if="groupSubject === 1">
                    <div class="tax-code">
                      <div class="name"><b>Mã số thuế</b></div>
                      <div class="input">
                        <input type="text" />
                      </div>
                    </div>
                    <div class="supplier">
                      <div class="name"><b>Mã nhà cung cấp</b></div>
                      <div class="input">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div class="input-code" v-else>
                    <div class="supplier" style="padding-right: 12px">
                      <div class="name"><b>Mã nhà cung cấp</b></div>
                      <div class="input">
                        <input type="text" />
                      </div>
                    </div>
                    <div class="tax-code" style="padding-right: 0px">
                      <div class="name"><b>Mã số thuế</b></div>
                      <div class="input">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div class="input-data">
                    <div class="name">
                      <b>Tên nhà cung cấp</b>
                    </div>
                    <div class="input" v-if="groupSubject === 1">
                      <input type="text" />
                    </div>
                    <div class="input" style="display: flex" v-else>
                      <div class="input-name" style="padding-right: 12px">
                        <input type="text" />
                      </div>
                      <div class="input-name" style="width: 70%">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div class="input-address">
                    <div class="name">
                      <b>Địa chỉ</b>
                    </div>
                    <div class="input">
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div class="right-info-supplier">
                  <div class="row-input" v-if="groupSubject === 1">
                    <div class="row-25">
                      <div class="name">
                        <b>Điện thoại</b>
                      </div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div class="row-35">
                      <div class="name"><b>Website</b></div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div class="full-input">
                    <div class="name"><b>Nhóm nhà cung cấp</b></div>
                    <div><input type="text" /></div>
                  </div>
                  <div class="full-input">
                    <div class="name"><b>Nhân viên mua hàng</b></div>
                    <div><input type="text" /></div>
                  </div>
                </div>
              </div>
              <div class="popup-tab">
                <div class="tab-header">
                  <div class="tab-label-header" v-on:click="tabinputed = 1">
                    <div class="name-label">Liên hệ</div>
                  </div>
                  <div class="tab-label-header" v-on:click="tabinputed = 2">
                    <div class="name-label">Điều khoản thanh toán</div>
                  </div>
                  <div class="tab-label-header" v-on:click="tabinputed = 3">
                    <div class="name-label">Tài khoản ngân hàng</div>
                  </div>
                  <div class="tab-label-header" v-on:click="tabinputed = 4">
                    <div class="name-label">Địa chỉ khác</div>
                  </div>
                  <div class="tab-label-header" v-on:click="tabinputed = 5">
                    <div class="name-label">Ghi chú</div>
                  </div>
                </div>
                <div class="con-slot-tabs" v-if="tabinputed === 1">
                  <div class="left-popup-tab">
                    <div class="contact" v-if="groupSubject === 1">
                      <div class="name-contact">
                        <div class="name"><b>Người liên hệ</b></div>
                        <div class="input">
                          <input type="text" />
                        </div>
                      </div>
                      <div class="input-name">
                        <input type="text" />
                      </div>
                    </div>
                    <div class="name" v-else>
                      <div class="name">
                        <b>Thông tin liên hệ</b>
                      </div>
                    </div>
                    <div></div>
                    <div class="email">
                      <div class="input-email">
                        <input type="text" />
                      </div>
                    </div>
                    <div class="phone">
                      <input type="text" />
                    </div>
                    <div class="phone">
                      <input type="text" />
                    </div>
                    <div class="phone" v-if="groupSubject === 2">
                      <div class="name">
                        <b>Đại diện theo PL</b>
                      </div>
                      <div class="input">
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div class="right-popup-tab" v-if="groupSubject === 1">
                    <div class="name">
                      <b>Đại diện theo PL</b>
                    </div>
                    <div class="input">
                      <input type="text" />
                    </div>
                  </div>
                  <div class="right-popup-tab" v-else>
                    <div class="name">
                      <b>Thông tin CMND/Thẻ căn cước</b>
                    </div>
                    <div class="row-input">
                      <input type="text" />
                    </div>
                    <div class="row-input">
                      <input type="text" />
                    </div>
                    <div class="input">
                      <input type="text" />
                    </div>
                  </div>
                </div>
                <div class="con-slot-tabs" style="display:block;" v-else-if="tabinputed === 2">
                  <div class="row-input">
                    <div class="combobox">
                      <div class="name"><b>Điều khoản thanh toán</b></div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div class="combobox">
                      <div class="name"><b>Số tiền được nợ</b></div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                    <div class="combobox">
                      <div class="name"><b>Số lượng tối đa</b></div>
                      <div>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                  <div class="row-input">
                    <div class="combobox" v-if="isCustomer ==true">
                        <div class="name"><b>Tài khoản công nợ phải thu</b></div>
                            <div>
                                <input type="text"/>
                            </div>
                        </div>
                    <div class="combobox">
                        <div class="name"><b>Tài khoản công nợ phải trả</b></div>
                        <div>
                            <input type="text"/>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="con-slot-tabs" v-else-if="tabinputed === 3">
                  <p>Giao dien 3</p>
                </div>
                <div class="con-slot-tabs" v-else-if="tabinputed === 4">
                  <div class="tab-content-address">
                    <div class="location">
                        <div class="location-tab"><b>Vị trí địa lý</b></div>
                        <div class="location-address">
                          <input name="cars" id="cars" placeholder="Quốc gia" value="">
                          <input name="cars" id="cars" placeholder="Tỉnh/Thành phố" class="right" autofocus="autofocus">
                        </div>
                        <div class="location-address">
                          <input name="cars" id="cars" placeholder="Quận/huyện" autofocus="autofocus" >
                         <input name="cars" id="cars" placeholder="Xã/Phường" class="right" autofocus="autofocus">
                        </div>
                    </div>
                    <div class="delivery-address">
                        <div class="top-grid">
                          <div class="name-top-grid"><b>Địa chỉ giao hàng</b></div>
                          <div class="checkbox-address"><input type="checkbox"> <p>Giống địa chỉ nhà cung cấp</p></div>
                          <div class="table-scroll"></div>
                        </div>
                        <div class="btn-grid-control">
                          <button type="button" class="btn btn-outline-secondary" >Thêm dòng mới </button>
                          <button type="button" class="btn btn-outline-secondary" >Xóa hết dòng </button>
                        </div>
                    </div>
                  </div>
                </div>
                <div
                  class="con-slot-tabs"
                  v-else-if="tabinputed === 5"
                  
                >
                  <input class="full-input" />
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <div class="button-cancel">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="showDialog()"
                >
                  Hủy
                </button>
              </div>
              <div class="button-add">
              <button
                type="button"
                class="btn btn-outline-secondary"
                @click="showDialog()"
              >
                Cất
              </button>
              <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
                @click="showDialog()"
              >
                Cất và thêm
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="info-call-api">
        {{ info }}
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null,
      show: 0,
      /**
       * Nhóm đối tượng 1 có nghĩa là Tổ chức kinh doanh
       * Nhóm đối tượng 2 có nghĩa là Cá nhân kinh doanh
       * Author: LVHOANG (02/11/2020)
       */
      groupSubject: 1,
      /**
       * Tab được chọn trong poup-tab
       * Liên hệ 1:
       * Điều khoản thanh toán 2:
       * Tài khoản ngân hàng 3:
       * Địa chỉ khác 4:
       * Ghi chú 5:
       * Author: LVHOANG (02/11/2020)
       */
      tabinputed: 1,
      /**
       * Checkbox kiểm tra là khách hàng hay không:
       * Default : false không là khách hàng :
       * là khách hàng giá trị là true:
       * Author: LVHOANG (02/11/2020)
       */
      isCustomer: false,
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response));
  },
  methods: {
    showDialog: function () {
      if (this.show === 0) {
        this.show = 1;
      } else {
        this.show = 0;
      }
    },
    changeGroupSubject: function () {
      if (this.groupSubject === 1) {
        this.groupSubject = 2;
      } else {
        this.groupSubject = 1;
      }
    },
  },
};
</script>

<style scoped>

#dialog {
  width: 100%;
  height: 100%;
  font-size: 12px;
}
p {
  margin-bottom: 0px;
}

input {
  font-size: 13px;
  height: 32px;
  color: inherit;
  position: relative;
  padding: 6px 10px;
  border-radius: 2px;
  border: 1px solid #babec5;
  box-sizing: border-box;
  width: 100%;
}
input:focus {
  border: 1px solid #248b15;
}
.dialog-a {
  height: calc(100% - 216px);
  width: 100%;
}
.info-call-api {
  height: 216px;
  width: 100%;
}
/**--------------------------modal------------------------- */
.modal {
  position: absolute;
  width: 900px !important;
  height: 666px !important;
  top: calc(40% - 234px);
  left: calc(50% - 465px);
  right: 0;
  bottom: 0;
  display: block;
  z-index: 1050;
  overflow: hidden;
  outline: 0;
  background-color: #fff;
}
.modal-dialog {
  min-width: 900px;
  max-width: 900px ;
  width: 900px ;
  position: relative;
  height: 585;
  margin: 0.5rem;
  pointer-events: none;
}
.popup-background {
  width: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  z-index: 98;
  transition: all 0.25s ease;
  opacity: 1;
}
.modal-header {
  background-color: #f1f1f1;
  height: 11%;
}
.modal-header .modal-header-left {
  width: 90%;
  height: 100%;
  display: flex;
}
.modal-header-left p {
  width: 63%;
  margin-top: 2px;
  font-size: 14px;
}
.modal-header-left .title-popup {
  height: 100%;
  width: 40%;
}
/**--------------radio-data-------------------- */
.modal-header-left .radio-data {
  height: 100%;
  width: 30%;
  margin-top: 13px;
  display: flex;
}

.radio-data input {
  height: 20px;
  width: 22%;
  margin-top: 3px;
}
/**-------------- end radio-data-------------------- */
/**---------------- checkbox------------------------ */
.modal-header-left .con-ms-checkbox {
  height: 100%;
  width: 30%;
  margin-top: 12px;
  padding-left: 45px;
  display: flex;
}
.con-ms-checkbox input {
  height: 20px;
  width: 10%;
  margin-top: 5px;
  margin-left: 18px;
  margin-right: 10px;
}
/**---------------- end checkbox------------------------ */
.modal-header .modal-header-right {
  width: 10%;
  height: 100%;
  display: flex;
}
/**------------------ info-supplier--------------------- */
.info-supplier {
  height: 50%;
  width: 100%;
  display: flex;
  padding-bottom: 15px;
}

.left-info-supplier {
  height: 100%;
  width: 50%;
  padding-right: 26px;
  padding-left: 12px;
}
.left-info-supplier .input-code {
  display: flex;
  height: 30%;
  width: 100%;
}
.input-code .tax-code {
  height: 100%;
  width: 35%;
  padding-right: 12px;
}
.tax-code input {
  width: 100%;
}
.input-code .supplier {
  height: 100%;
  width: 65%;
}
.supplier input {
  width: 100%;
}
.left-info-supplier .input-data {
  height: 30%;
  width: 100%;
}
.input-data input {
  width: 100%;
}
.left-info-supplier .input-address {
  height: 40%;
  width: 100%;
}
.input-address input {
  width: 100%;
  height: 60px;
}
.info-supplier .right-info-supplier {
  height: 100%;
  width: 50%;
  padding-right: 12px;
}
.right-info-supplier .row-input {
  height: 30%;
  width: 100%;
  display: flex;
}
.row-input .row-25 {
  height: 100%;
  width: 40%;
  padding-right: 12px;
}
.row-input .row-35 {
  height: 100%;
  width: 60%;
}
.right-info-supplier .full-input {
  height: 30%;
  width: 100%;
}
/**--------------------- popup-tab---------------------- */
.popup-tab {
  height: 300px;
  width: 100%;
}
.popup-tab .tab-header {
  height: 32px;
  width: 100%;
  display: flex;
}
.popup-tab .tab-header {
  height: 32px;
  width: 100%;
  display: flex;
}
.popup-tab .tab-label-header {
  height: 100%;
  margin: 0 2px;
  border: 1px solid #c9ccd2;
  border-bottom: none;
  border-radius: 2px 2px 0 0;
  text-align: center;
}
.popup-tab .tab-label-header:hover {
  cursor: pointer;
  color: #2ca01c;
}
.tab-label-header .name-label {
  height: 80%;
  padding: 5px;
}
.popup-tab .con-slot-tabs {
  height: calc(100% - 32px);
  width: 100%;
  display: flex;
  border: 1px solid #c9ccd2;
}
.con-slot-tabs .left-popup-tab {
  height: 100%;
  width: 50%;
  padding-left: 12px;
}
.con-slot-tabs .right-popup-tab {
  height: 100%;
  width: 50%;
}
.con-slot-tabs .row-input {
  width: 100%;
  height: 33%;
  display: flex;
}
.con-slot-tabs .row-input .combobox {

    padding-left: 12px;
}
.right-popup-tab .row-input {
  width: 100%;
  height: 16%;
}
.right-popup-tab .row-input input {
  width: 50%;
}
.right-popup-tab .input input {
  width: 97%;
}
.left-popup-tab .contact {
  height: 22%;
  width: 100%;
  display: flex;
  margin-bottom: 5px;
}
.left-popup-tab .contact .name-contact {
  height: 100%;
  width: 30%;
  padding-right: 12px;
}

.left-popup-tab .contact .input-name {
  height: 100%;
  width: 70%;
}
.contact .name-contact input {
  width: 100%;
}
.contact .input-name input {
  width: 91%;
  margin-top: 22px;
}
.left-popup-tab .email {
  height: 16%;
  width: 100%;
}
.email .input-email {
  width: 100%;
  height: 70%;
}
.email .input-email input {
  width: 94%;
}
.left-popup-tab .phone {
  height: 16%;
  width: 100%;
}
.phone input {
  width: 50%;
}
.phone .input input {
  width: 94%;
}
.name {
  margin-bottom: 4px;
}
/**------------------end  info-supplier----------------- */
/**---------------------- Other Address ---------------- */
.tab-content-address {
  height: 100%;
  width: 100%;
  margin: 11px 8px;
  display: flex;
}
.tab-content-address .location {
  height: 100%;
  width: 50%;
  padding-right: 12px;
}
.location .location-tab {
  height: 11%;
  width: 100%;
}
.location .location-address {
  height: 20%;
  width: 100%;
  display: flex;
}
.location .location-address input {
  height: 62%;
  width: 47%;
}
.location .location-address input.right {
  margin-left: 12px;
}
.tab-content-address .delivery-address {
  height: 100%;
  width: 50%;
}
.delivery-address .top-grid {
  height: 13%;
  width: 100%;
  max-height: 87%;
  display: flex;
}
.top-grid .name-top-grid {
  width: 55%;
  margin-right: 49px;
}
.top-grid .table-scroll {
  height: 0px;
  max-height: 400px;
  overflow-y: scroll;
}
.top-grid .checkbox-address {
  display: flex;
  height: 100%;
  width: 100%;
}
.checkbox-address input {
  height: 18px;
  width: 18px;
  margin-right: 14px;
}
.delivery-address .btn-grid-control {
   height: 13%;
   width: 100%;
}
/**----------------------- End Other Address-------------------- */
/**-----------------------------Note ----------------------------*/
.con-slot-tabs input.full-input{
    height: 92%;
    width: 97%;
    margin-left: 12px;
    margin-top: 10px;
}
/**---------------------------End Note ------------------------- */
/**-------------------------- End modal------------------------- */
/**---------------------------Footer   ------------------------- */
.button-cancel {
  position: absolute;
  left: 18px;
}
.button-add {
  position: absolute;
  right: 18px;
}
</style>
