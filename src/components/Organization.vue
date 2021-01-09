<template>
    <div class="body-info">
         <div class="w-1-2 body-left">
            <div class="row-input" style="display:flex;">
                <div class="w-2-5" style="width:40%;">
                    <div class="label"><label>Mã số thuế</label></div>
                    <ComboMainContent  />
                </div>
                
                <div class="w-3-5" style="width:60%;">
                    <div class="label"><label>Mã nhà cung cấp</label></div>
                    
                    <ComboMainContent  />
                </div>
            </div>
            <div class="row-input" style="width:96%;">
                <div class="label" style="margin-bottom: 7px;"><label>Tên nhà cung cấp</label></div>
                <ComboMainContent 
                
                :name="nameEmployee"/>
            </div>
            <div class="row-input" style="padding-bottom: 15px; width:96%;">
                 <div class="label" style="margin-bottom: 7px;"><label>Địa chỉ</label></div>
                <ComboMainContent />
            </div>
        </div>
        <div class="w-1-2" >
            <div class="row-input w-2-5" style="width: 94%;">
                <div class="w-2-5" style="width: 50%;">
                    <div class="label"><label>Điện Thoại</label></div>
                   
                    <ComboMainContent />
                </div>
                <div class="w-3-5" style="width: 50%;">
                    <div class="label" ><label>Website</label></div>
                    
                    <ComboMainContent />
                </div>
            </div>
            <div class="row-input" style="width: 92%;">
            <div class="label" style="margin-bottom: 7px;"><label>Nhóm nhà cung cấp</label></div>
                    
                    <ComboMainContent 
                    :dropdown="true"
                    :add="true"
                    :name="groupCustomer"
                    />
            </div>
            <div class="row-input" style="width: 92%;">
                <div class="label" style="margin-bottom: 7px;"><label>Nhân viên mua hàng</label></div>
                <ComboMainContent 
                :dropdown="true"
                :name="nameEmployee"
                :add="true"
                />
            </div>
        </div>
    </div>
</template>

<script>
import ComboMainContent from '../components/ComboMainContent.vue'
    export default {
        components:{
            ComboMainContent,
        },
        data(){
            return {
                nameEmployee:'txt_employee',
                nameCustomer:'txt_customer',
                groupCustomer:'txt_group_customer',
            }
        }
        
    }
</script>

<style >
.body-info {
    display: flex;
}
.w-1-2 {
    width: 50%;
}
.body-info .row-input {
    padding-left: 10px;
    padding-top: 15px;
}
.w-2-5 {
    padding-right: 10px;
}
.w-2-5 .row-input {
    display: flex;
}
.w-2-5.row-input {
    display: flex;
}
.w-2-5 .label {
  margin-bottom: 7px;
}
.w-3-5 .label {
  margin-bottom: 7px;
}
.label label {
    font-size: 12px;
    font-weight: 700;
    color: #212121;
}
</style>