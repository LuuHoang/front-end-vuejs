<template>
  <div class="combo-main-content">
      <div class="select-options" v-if="checkNamePlaceHolderInput()===-1">
          <input type="text" v-model="textInputValue" :placeholder="placeholderValue" >
      </div>
      <div class="select-options" v-else-if="checkNamePlaceHolderInput()===0">
          <input type="number" v-model="textInputValue" >
      </div>
      <div class="select-options" v-else-if="checkNamePlaceHolderInput()===1">
          <input type="text" :placeholder="placeholderValue" :name="nameValue" v-model="textInputValue">
          <!--Nên viết 1 function để thực  -->
          <!-- <input type="text" v-else-if="nameValue!==null" :name="nameValue" > -->
          <!-- <input type="text" v-if="readonly==true" :readonly="true"> -->
          <!-- <input type="text" v-else > -->
      </div>
      <!-- <div class="select-options" v-else-if="nameValue!==''">
          <input type="text" >
      </div>
      <div class="select-options" v-else-if="textInput!==''">
          <input type="text" v-model="textInputValue">
      </div> -->
      <div class="select-options" v-else-if="checkNamePlaceHolderInput()===2">
          <input type="text" :placeholder="placeholderValue" :name="nameValue">
      </div>
      <div class="select-options" v-else-if="checkNamePlaceHolderInput()===9">
          <input type="text" v-model="textInputValue" :name="nameValue" :readonly="true">
      </div>
      <div class="select-options" v-else-if="checkNamePlaceHolderInput()===3">
          <input type="text" v-model="textInputValue" :name="nameValue">
      </div>
      <div class="select-options" v-else-if="checkNamePlaceHolderInput()===4">
          <input type="text" v-model="textInputValue" :name="nameValue">
      </div>
      <div class="select-options" v-else-if="checkNamePlaceHolderInput()===5">
          <input type="text" :placeholder="placeholderValue">
      </div>
      <div class="select-options" v-else-if="checkNamePlaceHolderInput()===6">
          <input type="text" v-model="textInputValue" :readonly="true">
      </div>
      <div class="select-options" v-else-if="checkNamePlaceHolderInput()===7">
          <input type="text" v-model="textInputValue" >
      </div>
      <div class="select-options" v-else>
          <input type="text"  v-model="textInputValue" :name="nameValue">
      </div>
      <div class="combo-actions" >
          <div class="btn-search" v-if="search==true">
              <div class="icon-search">

              </div>
          </div>
          <div class="btn-add" v-if="add==true">
              <div class="icon-add" v-on:click="functionOpenDialog(openDialogName)">

              </div>
          </div>
          <div class="btn-dropdown" v-if="dropdown==true">
              <div class="icon-dropdown">

              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        add:Boolean,
        dropdown:Boolean,
        search:Boolean,
        placeholder:{
            type:String,
            default:'',
        },
        name:{
            type:String,
            default:'',
        },
        focus:Boolean,
        textInput:{
            type:String,
            default:'',
        },
        readonly:Boolean,
        openDialog:{
            type:String,
            default:'',
        },
        typeData:{
            type:Boolean,
            default:false,
        },
        numberInput:{
            type:Number,
            default:0,
        },
    },
    data(){
        return {
            placeholderValue:this.placeholder,
            nameValue:this.name,
            textInputValue:this.textInput,
            readonlyValue:this.readonly,
            openDialogName:this.openDialog,
        }
    },
    methods :{
        checkNamePlaceHolderInput:function(){
            if(this.placeholderValue!=='' && this.textInputValue!==''){
                return -1;
            }else{
                    if(this.typeData==true){
                    return 0;
                }else{
                        if(this.placeholderValue!=='' && this.nameValue!=='' && this.textInputValue!==''){
                        return 1;
                    }else{
                        if(this.placeholderValue!=='' && this.nameValue!==''){
                            return 2;
                        }else{
                            if(this.textInputValue!=='' && this.nameValue!=='' && this.readonlyValue==true){
                                return 9;
                            }else {
                                if(this.textInputValue!=='' && this.nameValue!==''){
                                    return 3;
                                }else{
                                    if(this.textInputValue!=='' && this.placeholderValue!==''){
                                        return 4;
                                    }else{
                                        if(this.placeholderValue!==''){
                                            return 5;
                                        }else{
                                            if(this.textInputValue!=='' && this.readonlyValue==true){
                                                return 6;
                                            }else{
                                                if(this.textInputValue!==''){
                                                    return 7;
                                                }else{
                                                    // luc nào the input cung phải co tên
                                                    return 8;
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
        },
        functionOpenDialog:function(param) {
            this.$emit('openDialogName',param);
        },
        functionSendData:function(){
            this.$emit('sendData',this.textInputValue);
        },
    },
    watch:{
        textInputValue:function(){
            // alert(this.textInputValue);
            // this.$emit('data',this.textInputValue);
            this.functionSendData();
        },
    },
}
</script>

<style>
.combo-main-content {
    height: 30px;
    width: 100%;
    display: flex;
    border:1px solid #babec5;
}
.combo-main-content .select-options {
    display: flex;
    flex-basis: 100%;
    flex-grow: 1;
    flex-wrap: wrap;
}
.combo-main-content .select-options input {
    border: none;
    width: 100%;
    outline: none;
}
.combo-main-content .combo-actions {
        display: flex;
        background-color: #fff;
}
.combo-actions .btn-search {
    border-right: 1px solid #babec5;
    width: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.btn-search .icon-search {
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -992px -360px;
    height: 16px;
    width: 16px;
}
.combo-actions .btn-add {
    border-right: 1px solid #babec5;
    width: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.btn-add .icon-add {
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -32px -312px;
    height: 16px;
    width: 16px;
}
.combo-actions .btn-dropdown {
    width: 30px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.btn-dropdown .icon-dropdown {
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat -560px -359px;
    height: 16px;
    width: 16px;
}
</style>