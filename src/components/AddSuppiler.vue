<template>
  <!-- <div class="popup-backgroud"></div> -->
  <div class="dialog dialog-supplier">
    <header class="dialog-header">
      <div class="dialog-title" style="flex-grow: 1">
        <div class="tilte-content" style="display: flex">
          <div class="title">Thông tin nhà cung cấp</div>
          <div class="gr-radio">
            <div class="radio">
              <input
                type="radio"
                name="abc"
                value="1"
                v-model="picked"
                checked
              />
              <div class="radio-name">Tổ chức</div>
            </div>
            <div class="radio">
              <input type="radio" value="2" v-model="picked" name="abc" />
              <div class="radio-name">Cá nhân</div>
            </div>
          </div>
          <div class="title-right">
            <input type="checkbox" v-model="isCus" />
            <div class="radio-name">Là khách hàng</div>
          </div>
        </div>
      </div>
      <div class="dialog-close">
        <div class="icon icon-help"></div>
        <div @click="btnCloseOnClick()" class="icon icon-close"></div>
      </div>
    </header>
    <div class="dialog-content">
      <div class="dialog-body">
        <Organization v-if="picked == '1'" />
        <Personal v-if="picked == '2'" />
        <SupplierTab />
        <div class="dialog-footer">
          <div class="divide"></div>
          <div class="btn-footer">
            <div class="btn-left">
              <button @click="btnCloseOnClick()">Hủy</button>
            </div>
            <div class="btn-right">
              <button>Cất</button>
              <button class="save-and-add">Cất và thêm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SupplierTab from "../components/SupplierTab";
import Organization from "../components/Organization";
import Personal from "../components/Personal";
export default {
  components: {
    SupplierTab,
    Organization,
    Personal,
  },
  data() {
    return {
      picked: "1",
      isCus: false,
      isClose: "closeSuppiler",
    };
  },
  methods: {
    btnCloseOnClick: function () {
      this.$emit("isCloseed", this.isClose);
    },
  },
  watch: {},
};
</script>

<style scoped>
.popup-backgroud {
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
.dialog.dialog-supplier {
  min-width: 900px;
  max-width: 900px;
  transition: all 0.2s;
  z-index: 5;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #fff;
  opacity: 1;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
  top: calc(-79%);
  left: calc(20%);
}

.gr-radio {
  display: flex;
  padding-left: 1rem !important;
  padding-right: 1rem !important;
  justify-content: center;
  align-items: center;
}
.radio {
  display: flex;
  margin-right: 20px;
}
.radio input {
  width: 18px;
  height: 18px;
  display: block;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #afafaf;
  z-index: 1;
  justify-content: center;
  margin-right: 10px;
}
.radio input:checked {
  border: 1px solid #2ca01c;
  background: #2ca01c;
}

.title-right input {
  width: 18px;
  height: 18px;
  margin-right: 10px;
  border: 1px solid #afafaf;
}
header.dialog-header {
  display: flex;
}
header .dialog-close {
  display: flex;
}
header .icon-help {
  background: url(/img/Sprites.bc13c6df.bc13c6df.svg) no-repeat -732px -31px;
  height: 24px;
  width: 24px;
  margin-top: 13px;
  margin-right: 9px;
}
header .icon-close {
  background: url(/img/Sprites.bc13c6df.bc13c6df.svg) no-repeat -144px -144px;
  height: 24px;
  width: 24px;
  margin-top: 13px;
  margin-right: 3px;
}
.btn-footer {
  display: flex;
}
.btn-footer .btn-left {
  height: 100%;
  flex-grow: 1;
}
</style>