<template>
    <div class="tab-order">
        <ul class="ul-header">
            <li class="li-header" v-bind:class="{active:thisTab==0}" @click="thisTab=0">Liên hệ</li>
            <li class="li-header" v-bind:class="{active:thisTab==1}" @click="thisTab=1">Điều khoản thanh toán</li>
            <li class="li-header" v-bind:class="{active:thisTab==2}" @click="thisTab=2">Tài khoản ngân hàng</li>
            <li class="li-header" v-bind:class="{active:thisTab==3}" @click="thisTab=3">Địa chỉ khác</li>
            <li class="li-header" v-bind:class="{active:thisTab==4}" @click="thisTab=4">Ghi chú</li>
        </ul>
        <div class="content-tab">
            <Contact v-show="thisTab == 0"/>
            <div class="note" v-show="thisTab == 4">
                <textarea tabindex="1"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
import Contact from '../components/contact'

    export default {
        components:{
            Contact,
            
        },
        data(){
            return{
                thisTab:0
            }
        }
    }
</script>

<style scoped>
.tab-order{
    width: 100%;
    overflow: visible;
}
.ul-header{
    margin: 0;
    width: 100%;
    height: 100%;
    padding-left: 0;
    position: relative;
    display: flex;
    z-index: 2;
    align-items: flex-end;
}
.li-header{
    height: 26px;
    margin: 0 1px;
    border: 1px solid #c9ccd2;
    border-bottom: none;
    border-radius: 2px 2px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0px 8px;
}
.li-header:hover{
    color: #2ca01c;
    cursor: pointer;
}
.li-header.active{
    background: #cce4f9;
    height: 32px;
}
.content-tab{
    border: 1px solid #c9ccd2;
    margin: 0 1px 1px;
    z-index: 1;
    margin-top: -1px;
    padding: 11px 8px;
    height: 195px;
}
.note{
    width: 100%;
    height: 100%;
}
.note textarea{
    border: 1px solid #ccc;
    height: 100%;
    width: 100%;
    outline: none;
}
.note textarea:focus{
    border-color: #2ca01c;
}
</style>