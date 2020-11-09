<template>
  <div>
    <div class="header-list"></div>
    <div class="body">
      <div class="data-table">
        <vue-table/>
      </div>
      <div class="vue-footer">
        <vue-footer/>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  

};
</script>

<style>
.header-list {
  height: 80px;
  width: 100%;
  background-color: #f1f1f1;
}
.body {
  width: 100%;
  height: calc(100% - 80px);
}
.body .data-table {
  height: 100%;
  width: 100%;
}
</style>