<template>
    <div class="contact">
        <div class="w-1-2" style="padding-right: 26px;" >
            <label class="label-input">Người liên hệ</label>
            <div class="row-input" style="padding-bottom: 4px;">
               
            </div>
            <div class="row-input" style="padding-bottom: 4px;">
                
            </div>
            <div class="row-input" style="padding-bottom: 4px;">
                 <div class="w-1-2">
                     
                 </div>
            </div>
            <div class="row-input" style="padding-bottom: 4px;"  v-show="isCus">
                 
            </div>
        </div>
        <div class="w-1-2" v-show="!isCus">
            <div class="row-input" style="padding-bottom: 4px;">
                
            </div>
        </div>
        <div class="w-1-2" v-show="isCus">
            <label class="label-input">Người nhận hóa đơn điện tử</label>
            <div class="row-input" style="padding-bottom: 4px;">
                
            </div>
            <div class="row-input" style="padding-bottom: 4px;">
                
            </div>
            <div class="row-input" style="padding-bottom: 4px;">
                 <div class="w-1-2">
                     
                 </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components:{
            
        },
        data(){
            return{
                isCus:false,
                options:[{value:'1',label:'Anh'},
                        {value:'2',label:'Chị'},
                        {value:'3',label:'Bạn'},
                        {value:'4',label:'Bà'},
                        {value:'5',label:'Miss'},
                        {value:'6',label:'Mr'},
                        {value:'7',label:'Mrs'},
                        {value:'8',label:'Ông'},
                ]
            }
        },
        
        
    }
</script>

<style scoped>
.contact{
    display: flex;
}

</style>