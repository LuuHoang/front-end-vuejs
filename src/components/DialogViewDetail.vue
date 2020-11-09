<template>
  <div id="dialog-view-detail">
    <!-- Modal -->
    <div class="modal-dialog" role="document" v-if="show === 0">
      <div class="modal-content">
        <div class="modal-header">
          <div class="modal-title">
            <h3>Ủy nhiệm chi {{ idPaymentOrReceipt }} </h3>
          </div>
          <div class="header-detail-input">
            <div class="combo-header">
              <input type="text" v-bind:value= getData[0].particular />
            </div>
            <div class="combo-header">
              <div class="combo-header-text">
                <p>Phương thức thang toán</p>
              </div>
              <div class="input">
                <input type="text" v-bind:value= getData[0].paymentMethods />
              </div>
            </div>
          </div>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="hideDialog()"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="body-layout-top">
            <div class="main-3-4">
              <div class="main-4-5">
                <div class="row-input">
                  <div class="left-row-input">
                    <div class="label"><b>Tài khoản chi</b></div>
                    <div class="input"><input type="text" v-bind:value= getData[0].paymentAccount /></div>
                  </div>
                  <div class="right-row-input">
                    <div class="no-label"><input type="text" v-bind:value= getData[0].bank /></div>
                  </div>
                </div>
                <div class="row-input">
                  <div class="left-row-input">
                    <div class="label"><b>Đối tượng</b></div>
                    <div class="input"><input type="text" v-bind:value= getData[0].subjectName /></div>
                  </div>
                  <div class="right-row-input">
                    <div class="label"><b>Địa chỉ</b></div>
                    <div class="input"><input type="text" v-bind:value= getData[0].address /></div>
                  </div>
                </div>
                <div class="row-input">
                  <div class="left-row-input">
                    <div class="label"><b>Tài khoản nhận</b></div>
                    <div class="input"><input type="text" v-bind:value= getData[0].recipientAccount /></div>
                  </div>
                  <div class="right-row-input">
                    <div class="no-label"><input type="text" /></div>
                  </div>
                </div>
                <div class="row-input">
                  <div class="all-row-input">
                    <div class="label"><b>Nội dung thanh toán</b></div>
                    <div class="input"><input type="text" v-bind:value= getData[0].description /></div>
                  </div>
                </div>
                <div class="row-input">
                  <div class="left-row-input">
                    <div class="label"><b>Nhân viên</b></div>
                    <div class="input"><input type="text" v-bind:value= getData[0].subjectName /></div>
                  </div>
                </div>
              </div>
              <div class="main-1-5">
                <div class="row-input-right">
                  <div class="label"><b>Ngày hạch toán</b></div>
                  <div><input type="date" value="2012-03-23" /></div>
                </div>
                <div class="row-input-right"></div>
                <div class="row-input-right"></div>
              </div>
            </div>
            <div class="main-1-4">
              <div class="summary-info">
                <p>Tổng tiền</p>
              </div>
              <h1>{{ getData[0].totalAmount }}</h1>
            </div>
          </div>
          <div class="body-layout-bottom">
            <div class="account-entries">
              <table class="table table-bordered">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">DIỄN GIẢI</th>
                    <th scope="col">TK NỢ</th>
                    <th scope="col">TK CÓ</th>
                    <th scope="col">SỐ TIỀN</th>
                    <th scope="col">ĐỐI TƯỢNG</th>
                    <th scope="col">TÊN ĐỐI TƯỢNG</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                    <td >1</td>
                    <td >{{ getData[0].description }} </td>
                    <td ></td>
                    <td ></td>
                    <td > {{ getData[0].totalAmount }}</td>
                    <td ></td>
                    <td ></td>
                    <td ><span class="glyphicon glyphicon-trash"></span></td>
                    </tr>
                </tbody>
              </table>
            </div>
            <div></div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="left">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="hideDialog()"
            >
              Hủy
            </button>
          </div>
          <div class="right">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="showDialog()"
            >
              Cất
            </button>
            <button
              type="button"
              class="btn btn-success"
              style="margin-left: 7px"
            >
              Cất và thêm
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // idPaymentOrReceipt: {
    //   type: String,
    //   default: "",
    // },
  },
  data() {
    return {
      show: 0,
      idPaymentOrReceipt:this.$route.params.idPaymentOrReceipt
    };
  },
  methods: {
    showDialog: function () {
      if (this.show === 0) {
        this.show = 1;
      } else {
        this.show = 0;
      }
    },
    /**
     * Ẩn dialog và hiển dialog trước nên:
     * Author:LVHOANG(04/11/2020)
     */
    hideDialog: function () {
      var status = 0;
      this.$emit("statusDialog", status);
    },
  },
  computed :{
      getData(){
           return this.$store.getters.getDepositWithdrawListById(this.idPaymentOrReceipt);
      }
  },
};
</script>

<style >

h3,h1 {
  margin: 0;
}
#dialog-view-detail {
  position: absolute;
  width: 100%;
  height: 100%;
  font-size: 12px;
  background-color: #626262;
}

.modal {
  width: 100%;
  height: 100%;
  position: absolute;
  top: calc(40% - 234px);
  left: calc(50% - 465px);
  right: 0;
  bottom: 0;
  display: block;
  z-index: 1050;
  overflow: hidden;
  outline: 0;
}
.modal-dialog {
  min-width: 100%;
  min-height: 100%;
  width: 100%;
  height: 100%;
  margin: 0;
  display: block;
}
.modal-content {
  display: block;
  height: 100%;
}
/**------------------modal-header---------- */
.modal-header {
  background-color: #f1f1f1;
  height: 8%;
  width: 100%;
  display: flex;
}
.modal-header .modal-title {
  width: 25%;
  height: 100%;
}
.modal-header .header-detail-input {
  display: flex;
  margin-top: 4px;
  padding-left: 47px;
}
.header-detail-input .combo-header {
  display: flex;
}
.combo-header .combo-header-text {
    padding-left: 10px;
    margin-top: 5px;
}
.combo-header .input {
      padding-left: 10px;
}
/**-----------------end modal-header------- */
.modal-footer {
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 7%;
  background-color: #212121;
}
.modal-footer .left {
  height: 80%;
  width: 70%;
  position: absolute;
  left: 12px;
  top: 5px;
}
.modal-footer .right {
  height: 100%;
  width: 20%;
}
/** -----------------------modal-body------------------- */
.modal-body {
  height: 85%;
  padding: 0;
}
.modal-body .body-layout-top {
  width: 100%;
  height: 50%;
  background-color: #f1f1f1;
  display: flex;
}
/** -------------------------Main 3-4 ----------------- */
.body-layout-top .main-3-4 {
  width: 75%;
  height: 100%;
  display: flex;
}
.main-3-4 .main-4-5 {
  width: 80%;
  height: 100%;
}
.main-3-4 .label {
  margin-bottom: 7px;
}
.main-4-5 .row-input {
  width: 100%;
  height: 20%;
  display: flex;
  margin-left: 28px;
}
.main-4-5 .row-input .left-row-input {
  width: 42%;
  height: 100%;
  padding-right: 12px;
}
.main-4-5 .row-input .right-row-input {
  width: 53%;
  height: 100%;
}
.main-4-5 .row-input .all-row-input {
  width: 100%;
  height: 100%;
}
.all-row-input input {
  width: 95%;
}
.right-row-input .no-label input {
  margin-top: 25px;
}
.main-3-4 .main-1-5 {
  width: 20%;
  height: 100%;
}
/** ----------------------End Main 3-4 ---------------- */
.body-layout-top .main-1-4 {
  width: 25%;
  height: 100%;
  text-align: end;
  padding-right: 16px;
}
.modal-body .body-layout-bottom {
  width: 100%;
  height: 50%;
  background-color: #fff;
}
.body-layout-bottom table {
  height: 100%;
  width: 100%;
  text-align: center;
}
/**----------------------end modal-body----------------- */
</style>