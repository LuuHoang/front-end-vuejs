<template>
    <div class="body-info">
         <div class="w-1-2 body-left">
            <div class="row-input" style="display:flex;">
                <div class="w-3-5" style="width: 56%">
                    <div class="label"><label>Mã nhà cung cấp</label></div>
                    <ComboMainContent  />
                </div>
                <div class="w-2-5" style="width: 39%">
                    <div class="label"><label>Mã số thuế</label></div>
                    <ComboMainContent  />
                </div>
            </div>
            <div class="row-input" style="display:flex;">
                <div class="w-3-5" style="width: 29%">
                    <div class="label"><label>Tên nhà cung cấp</label></div>
                    <ComboMainContent 
                    :name="nameCustomer"
                     />
                </div>
                <div class="w-2-5" style="width: 70%">
                    <div class="label"><label>.</label></div>
                    <ComboMainContent  />
                </div>
            </div>
            <div class="row-input" style="padding-bottom: 15px; width: 96%">
                 <div class="label" style="margin-bottom: 7px;"><label>Địa chỉ</label></div>
                <ComboMainContent />
            </div>
        </div>
        <div class="w-1-2" >
            <div class="row-input" style="width: 92%;">
            <div class="label" style="margin-bottom: 7px;"><label>Nhóm nhà cung cấp</label></div>
                    
                    <ComboMainContent 
                    :dropdown="true"
                    :name="groupCustomer"
                    :add="true"
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
            return{
                options:[{value:'1',label:'Anh'},
                        {value:'2',label:'Chị'},
                        {value:'3',label:'Bạn'},
                        {value:'4',label:'Bà'},
                        {value:'5',label:'Miss'},
                        {value:'6',label:'Mr'},
                        {value:'7',label:'Mrs'},
                        {value:'8',label:'Ông'},
                ],
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
.w-3-5 {
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