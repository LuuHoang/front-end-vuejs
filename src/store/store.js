import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export const store =new Vuex.Store({
    state:{
        count:2,
        result:1,
        info:null,
        token:null,
        page:1,
        numberpage:10,
        depositWithdrawList:[
{id:'UNT100',employee:'Nguyễn Thị Thủy',paymentMethods:'Ủy nhiệm thu',address:'Thửa đất 865, Tờ bản đồ 12, ấp Tân Hóa, Xã Tân Vĩnh Hiệp, Thị xã Tân Uyên, Bình Dương, Việt Nam 123',bank:'Ngân hàng phát triển Nông nghiệp và nông thôn',paymentAccount:'0001232225412',recipientAccount:'0001254111223',postedDate:'19/10/2020',voucherNo:'PT001',description:'Thu tiền của công ty Đại Dương',totalAmount:'220000000',subjectName:'Công ty Đại Dương',particular:'Thu khác',voucherType:'Phiếu thu'},
{id:'UNC101',employee:'Lê Kim Trọng',paymentMethods:'Ủy nhiệm chi',address:'Số 9, Đại lộ Thống Nhất, Khu công nghiệp Sóng Thần II, Phường Dĩ An, Thành phố Dĩ An, Bình Dương, Việt Nam',bank:'Ngân hàng Dầu Khí Toàn Cầu',paymentAccount:'1900456055400',recipientAccount:'0001254111223',postedDate:'18/10/2020',voucherNo:'PC001',description:'Chi tiền tiếp khách',totalAmount:'100000000',subjectName:'Lê Văn Dương',particular:'Chi có hóa đơn',voucherType:'Phiếu chi'},
{id:'UNC102',employee:'Bùi Thanh Phong',paymentMethods:'Ủy nhiệm chi',address:'Số 67 Yên Hòa Cầu Giấy Hà Nội',bank:'Ngân hàng Đại Dương',paymentAccount:'1500203030922',recipientAccount:'175025345',postedDate:'17/10/2020',voucherNo:'PC002',description:'Chi tiền điện nước tháng 09',totalAmount:'25000000',subjectName:'Nguyễn thị Hà ',particular:'Chi có hóa đơn',voucherType:'Phiếu chi'},
{id:'UNT103',employee:'Lê Hồng Loan',paymentMethods:'Ủy nhiệm thu',address:'71 Hoa Lan Phường 2 Quận Phú Nhuận',bank:'Ngân hàng Á Châu',paymentAccount:'0254554781020',recipientAccount:'0001254111223',postedDate:'16/10/2020',voucherNo:'PT002',description:'Thu tiền bán hàng cho công ty FVN',totalAmount:'30000000',subjectName:'Hạnh kế toán ',particular:'Thu có hóa đơn',voucherType:'Phiếu thu'},
{id:'UNT104',employee:'Mạc Văn Dung',paymentMethods:'Ủy nhiệm thu',address:'Số 87 Lê Thanh Nghị Quận Hai Bà Trưng TP HÀ Nội',bank:'Ngân hàng thương mại cổ phần Phát triển Nhà Thành phố Hồ Chí Minh',paymentAccount:'0001232225412',recipientAccount:'175025345',postedDate:'15/10/2020',voucherNo:'PT003',description:'Thu tiền của công ty Thành Đô',totalAmount:'40000000',subjectName:'Hạnh kế toán',particular:'Thu có hóa đơn',voucherType:'Phiếu thu'},
{id:'UNC105',employee:'Từ Thứ',paymentMethods:'Ủy nhiệm chi',address:'71 Hoa Lan Phường 2 Quận Phú Nhuận',bank:'Sài Gòn Thương Tín',paymentAccount:'1545422021554',recipientAccount:'0254554781020',postedDate:'14/10/2020',voucherNo:'PC003',description:'Chi tiền điện cho điện lực miền tây',totalAmount:'50000000',subjectName:'Hạnh kế toán',particular:'Chi có hóa đơn',voucherType:'Phiếu chi'},
{id:'UNC106',employee:'La Quán Trung',paymentMethods:'Ủy nhiệm chi',address:'Thửa đất 865, Tờ bản đồ 12, ấp Tân Hóa, Xã Tân Vĩnh Hiệp, Thị xã Tân Uyên, Bình Dương, Việt Nam 123',bank:'Ngân hàng Dầu Khí Toàn Cầu',paymentAccount:'175025345',recipientAccount:'0254554781020',postedDate:'14/10/2020',voucherNo:'PC004',description:'Chi tiền Công ty Hoa sen',totalAmount:'70000000',subjectName:'Nguyễn thị Hà',particular:'Chi có hóa đơn',voucherType:'Phiếu chi'},
{id:'UNT107',employee:'Quách Hoài',paymentMethods:'Ủy nhiệm thu',address:'Số 87 Lê Thanh Nghị Quận Hai Bà Trưng TP HÀ Nội',bank:'Sài Gòn Thương Tín',paymentAccount:'2125458120202',recipientAccount:'1900456055400',postedDate:'12/10/2020',voucherNo:'PT004',description:'Thu tiền của công ty Đại Á',totalAmount:'90000000',subjectName:'Lê Văn Dương',particular:'Thu khác',voucherType:'Phiếu thu'},
{id:'UNC108',employee:'Rực Đức',paymentMethods:'Ủy nhiệm chi',address:'Số 67 Yên Hòa Cầu Giấy Hà Nội',bank:'Ngân hàng phát triển Nông nghiệp và nông thôn',paymentAccount:'0001232225412',recipientAccount:'0254554781020',postedDate:'11/10/2020',voucherNo:'PC005',description:'Gửi lương cho NV Lê bá Chí',totalAmount:'80000000',subjectName:'Nguyễn thị Hà ',particular:'Thu có hóa đơn',voucherType:'Phiếu chi'},
{id:'UNT109',employee:'Triển Chiêu',paymentMethods:'Ủy nhiệm thu',address:'71 Hoa Lan Phường 2 Quận Phú Nhuận',bank:'Ngân hàng Đại Dương',paymentAccount:'0001232225412',recipientAccount:'1900456055400',postedDate:'10/10/2020',voucherNo:'PT005',description:'Thu tiền đi muộn của nhân viên tháng 09',totalAmount:'60000000',subjectName:'Nguyễn thị Hà ',particular:'Thu khác',voucherType:'Phiếu thu'},
{id:'UNC110',employee:'Tào A Mang',paymentMethods:'Ủy nhiệm chi',address:'Số 87 Lê Thanh Nghị Quận Hai Bà Trưng TP HÀ Nội',bank:'Ngân hàng thương mại cổ phần Phát triển Nhà Thành phố Hồ Chí Minh',paymentAccount:'1900456055400',recipientAccount:'0001254111223',postedDate:'10/10/2020',voucherNo:'PC006',description:'Chi tiền cho nộp thuế doanh nghiệp',totalAmount:'420000000',subjectName:'Hạnh kế toán',particular:'Phiếu chi nộp thuế',voucherType:'Phiếu chi'},
{id:'UNT111',employee:'Củ Khoai Tây',paymentMethods:'Ủy nhiệm thu',address:'Số 9, Đại lộ Thống Nhất, Khu công nghiệp Sóng Thần II, Phường Dĩ An, Thành phố Dĩ An, Bình Dương, Việt Nam',bank:'Ngân hàng thương mại cổ phần Đông Á',paymentAccount:'175025345',recipientAccount:'0001254111223',postedDate:'19/09/2020',voucherNo:'PT006',description:'Thu tiền của công ty BIDV',totalAmount:'320000000',subjectName:'Hạnh kế toán',particular:'Thu có hóa đơn',voucherType:'Phiếu thu'},
{id:'UNC112',employee:'Tào Mạnh Đức',paymentMethods:'Ủy nhiệm chi',address:'Thửa đất 865, Tờ bản đồ 12, ấp Tân Hóa, Xã Tân Vĩnh Hiệp, Thị xã Tân Uyên, Bình Dương, Việt Nam 123',bank:'Ngân hàng Á Châu',paymentAccount:'0001232225412',recipientAccount:'175025345',postedDate:'18/09/2020',voucherNo:'PC007',description:'Chi tiền nước tháng 09 ',totalAmount:'120000000',subjectName:'Lê Văn Dương',particular:'Chi khác',voucherType:'Phiếu chi'},
{id:'UNT113',employee:'Cái Bánh',paymentMethods:'Ủy nhiệm thu',address:'Số 67 Yên Hòa Cầu Giấy Hà Nội',bank:'Ngân hàng phát triển Nông nghiệp và nông thôn',paymentAccount:'175025345',recipientAccount:'0254554781020',postedDate:'20/08/2020',voucherNo:'PT007',description:'Thu tiền của công ty Nam Á ',totalAmount:'280000000',subjectName:'Nguyễn thị Hà ',particular:'Thu có hóa đơn',voucherType:'Phiếu thu'},
{id:'UNT114',employee:'Lê Quí Phi',paymentMethods:'Ủy nhiệm thu',address:'Số 9, Đại lộ Thống Nhất, Khu công nghiệp Sóng Thần II, Phường Dĩ An, Thành phố Dĩ An, Bình Dương, Việt Nam',bank:'Ngân hàng thương mại cổ phần Đông Á',paymentAccount:'0001232225412',recipientAccount:'2125458120202',postedDate:'13/08/2020',voucherNo:'PT008',description:'Thu tiền của công ty Thành Đạt ',totalAmount:'1020000000',subjectName:'Lê Văn Dương',particular:'Thu khác',voucherType:'Phiếu thu'},
{id:'UNC115',employee:'Củ Cà Rốt',paymentMethods:'Ủy nhiệm chi',address:'Số 87 Lê Thanh Nghị Quận Hai Bà Trưng TP HÀ Nội',bank:'Ngân hàng thương mại cổ phần Phát triển Nhà Thành phố Hồ Chí Minh',paymentAccount:'1900456055400',recipientAccount:'0001254111223',postedDate:'10/10/2020',voucherNo:'PC006',description:'Chi tiền cho nộp thuế doanh nghiệp',totalAmount:'420000000',subjectName:'Hạnh kế toán',particular:'Phiếu chi nộp thuế',voucherType:'Phiếu chi'},
{id:'UNT116',employee:'Chim',paymentMethods:'Ủy nhiệm thu',address:'Số 9, Đại lộ Thống Nhất, Khu công nghiệp Sóng Thần II, Phường Dĩ An, Thành phố Dĩ An, Bình Dương, Việt Nam',bank:'Ngân hàng thương mại cổ phần Đông Á',paymentAccount:'175025345',recipientAccount:'0001254111223',postedDate:'19/09/2020',voucherNo:'PT006',description:'Thu tiền của công ty BIDV',totalAmount:'320000000',subjectName:'Hạnh kế toán',particular:'Thu có hóa đơn',voucherType:'Phiếu thu'},
{id:'UNC117',employee:'Cá',paymentMethods:'Ủy nhiệm chi',address:'Thửa đất 865, Tờ bản đồ 12, ấp Tân Hóa, Xã Tân Vĩnh Hiệp, Thị xã Tân Uyên, Bình Dương, Việt Nam 123',bank:'Ngân hàng Á Châu',paymentAccount:'0001232225412',recipientAccount:'175025345',postedDate:'18/09/2020',voucherNo:'PC007',description:'Chi tiền nước tháng 09 ',totalAmount:'120000000',subjectName:'Lê Văn Dương',particular:'Chi khác',voucherType:'Phiếu chi'},
{id:'UNT118',employee:'Đông Tà',paymentMethods:'Ủy nhiệm thu',address:'Số 67 Yên Hòa Cầu Giấy Hà Nội',bank:'Ngân hàng phát triển Nông nghiệp và nông thôn',paymentAccount:'175025345',recipientAccount:'0254554781020',postedDate:'20/08/2020',voucherNo:'PT007',description:'Thu tiền của công ty Nam Á ',totalAmount:'280000000',subjectName:'Nguyễn thị Hà ',particular:'Thu có hóa đơn',voucherType:'Phiếu thu'},
{id:'UNT119',employee:'Tây Động',paymentMethods:'Ủy nhiệm thu',address:'Số 9, Đại lộ Thống Nhất, Khu công nghiệp Sóng Thần II, Phường Dĩ An, Thành phố Dĩ An, Bình Dương, Việt Nam',bank:'Ngân hàng thương mại cổ phần Đông Á',paymentAccount:'0001232225412',recipientAccount:'2125458120202',postedDate:'13/08/2020',voucherNo:'PT008',description:'Thu tiền của công ty Thành Đạt ',totalAmount:'1020000000',subjectName:'Lê Văn Dương',particular:'Thu khác',voucherType:'Phiếu thu'},
{id:'UNT120',employee:'Nam Đế',paymentMethods:'Ủy nhiệm thu',address:'Số 67 Yên Hòa Cầu Giấy Hà Nội',bank:'Ngân hàng phát triển Nông nghiệp và nông thôn',paymentAccount:'175025345',recipientAccount:'0254554781020',postedDate:'20/08/2020',voucherNo:'PT007',description:'Thu tiền của công ty Nam Á ',totalAmount:'280000000',subjectName:'Nguyễn thị Hà ',particular:'Thu có hóa đơn',voucherType:'Phiếu thu'},
{id:'UNT121',employee:'Bắc Cái',paymentMethods:'Ủy nhiệm thu',address:'Số 9, Đại lộ Thống Nhất, Khu công nghiệp Sóng Thần II, Phường Dĩ An, Thành phố Dĩ An, Bình Dương, Việt Nam',bank:'Ngân hàng thương mại cổ phần Đông Á',paymentAccount:'0001232225412',recipientAccount:'2125458120202',postedDate:'13/08/2020',voucherNo:'PT008',description:'Thu tiền của công ty Thành Đạt ',totalAmount:'1020000000',subjectName:'Lê Văn Dương',particular:'Thu khác',voucherType:'Phiếu thu'},
{id:'UNC122',employee:'Bạch Vân Phong',paymentMethods:'Ủy nhiệm chi',address:'Số 87 Lê Thanh Nghị Quận Hai Bà Trưng TP HÀ Nội',bank:'Ngân hàng thương mại cổ phần Phát triển Nhà Thành phố Hồ Chí Minh',paymentAccount:'1900456055400',recipientAccount:'0001254111223',postedDate:'10/10/2020',voucherNo:'PC006',description:'Chi tiền cho nộp thuế doanh nghiệp',totalAmount:'420000000',subjectName:'Hạnh kế toán',particular:'Phiếu chi nộp thuế',voucherType:'Phiếu chi'},
{id:'UNT123',employee:'Tống Thanh Thư',paymentMethods:'Ủy nhiệm thu',address:'Số 9, Đại lộ Thống Nhất, Khu công nghiệp Sóng Thần II, Phường Dĩ An, Thành phố Dĩ An, Bình Dương, Việt Nam',bank:'Ngân hàng thương mại cổ phần Đông Á',paymentAccount:'175025345',recipientAccount:'0001254111223',postedDate:'19/09/2020',voucherNo:'PT006',description:'Thu tiền của công ty BIDV',totalAmount:'320000000',subjectName:'Hạnh kế toán',particular:'Thu có hóa đơn',voucherType:'Phiếu thu'},
{id:'UNC124',employee:'Bảo Bình',paymentMethods:'Ủy nhiệm chi',address:'Thửa đất 865, Tờ bản đồ 12, ấp Tân Hóa, Xã Tân Vĩnh Hiệp, Thị xã Tân Uyên, Bình Dương, Việt Nam 123',bank:'Ngân hàng Á Châu',paymentAccount:'0001232225412',recipientAccount:'175025345',postedDate:'18/09/2020',voucherNo:'PC007',description:'Chi tiền nước tháng 09 ',totalAmount:'120000000',subjectName:'Lê Văn Dương',particular:'Chi khác',voucherType:'Phiếu chi'},
{id:'UNT125',employee:'Nhật Long',paymentMethods:'Ủy nhiệm thu',address:'Số 67 Yên Hòa Cầu Giấy Hà Nội',bank:'Ngân hàng phát triển Nông nghiệp và nông thôn',paymentAccount:'175025345',recipientAccount:'0254554781020',postedDate:'20/08/2020',voucherNo:'PT007',description:'Thu tiền của công ty Nam Á ',totalAmount:'280000000',subjectName:'Nguyễn thị Hà ',particular:'Thu có hóa đơn',voucherType:'Phiếu thu'},
{id:'UNT126',employee:'Phi Hùng',paymentMethods:'Ủy nhiệm thu',address:'Số 9, Đại lộ Thống Nhất, Khu công nghiệp Sóng Thần II, Phường Dĩ An, Thành phố Dĩ An, Bình Dương, Việt Nam',bank:'Ngân hàng thương mại cổ phần Đông Á',paymentAccount:'0001232225412',recipientAccount:'2125458120202',postedDate:'13/08/2020',voucherNo:'PT008',description:'Thu tiền của công ty Thành Đạt ',totalAmount:'1020000000',subjectName:'Lê Văn Dương',particular:'Thu khác',voucherType:'Phiếu thu'}
        
        ],
    },
    getters: {
      /**
       * Lấy ra thông tin theo khóa chính:
       */
        getDepositWithdrawListById: (state) =>(id) =>{
             return state.depositWithdrawList.filter(i => i.id===id);
        },
        /**
         * Call API:
         */
        mounted:(state) =>{
          axios
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then((response) => (state.info = response));
        },
        /**
         * Login
         */
        // LoginUser:( state ) =>(user)=>
        //   {
        //     axios
        //     .post("http://localhost:8000/api/auth/login" ,{
        //       email:user.email,
        //       password:user.password,
        //     })
        //     // .then((response) =>  (console.log(response.data.access_token))
                
        //     // );
        //     .then((response) =>  (state.token=response.data.access_token)
                
        //     );
        //   }
        /**
         * Bearder Token
         */

      },
      mutations: {
        savetoken( state,token )
        {
            state.token=token;
        },
        savepage(state,page)
        {
          state.page=page;
        },
        savenumberpage(state,numberpage)
        {
          state.numberpage=numberpage;
        }
      },
      
    
})