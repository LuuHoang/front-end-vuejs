<template>
        <div class="process">
            <div class="center-flex">
                <div class="process-and-utility">
                    <div class="process-title">
                        <div class="title">Nghiệp vụ tiền gửi</div>
                        <div class="content-img"></div>
                    </div>
                    <div class="dictionary">
                        <div class="dictionary4-15">
                            <div class="dictionary-content">
                                <div class="logo-bank-card"></div>
                                <div class="text">Tài khoản ngân hàng</div>
                            </div>
                        </div>
                        <div class="dictionary1-6">
                            <div class="dictionary-content">
                                <div class="logo-customer"></div>
                                <div class="text">Khách hàng</div>
                            </div>
                        </div>
                        <div class="dictionary1-5">
                            <div class="dictionary-content">
                                <div class="logo-provider"></div>
                                <div class="text">Nhà cung cấp</div>
                            </div>
                        </div>
                        <div class="dictionary1-6">
                            <div class="dictionary-content">
                                <div class="logo-employee"></div>
                                <div class="text">Nhân viên</div>
                            </div>
                        </div>
                        <div class="dictionary3-15">
                            <div class="dictionary-content">
                                <div class="logo-calculate"></div>
                                <div class="text">Tính tỷ giá xuất quỹ</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="report">
                    <div class="title">Báo cáo</div>
                    <div class="favorite">
                        <ul>
                            <li>Số tiền gửi ngân hàng</li>
                            <li>Bảng kê số dư ngân hàng</li>
                        </ul>
                    </div>
                    <div class="footer-report">Tất cả báo cáo</div>
                </div>
            </div>
        </div>
</template>

<script>

export default {

}
</script>

<style >

/* -------- Css deposit-withdraw-list ----------*/
.process {
    height: 100%;
    width: 100%;
    /* justify-content: center; */
    place-items: center;
    display: grid;
    place-items: center;
}
.process .center-flex {
    
        margin-left: 12px;
    display: flex;
    width: 900px;
    height: 450px;
}
.center-flex .process-and-utility {
    height: 460px;
    width: 70%;
}
.process-and-utility .process-title {
    height: 83%;
    width: 100%;
    border:1px solid #ccc;
}
.title {
    text-transform: uppercase;
    height: 34px;
    width: 100%;
    font-size: 16px;
    font-weight: 700;
    justify-content: center;
    text-align: center;
    align-items: center;
    border-bottom: 1px solid #ccc;
    padding-top: 18px;

}
.process-title .content-img {
    height: 88%;
    width: 100%;
    background-image: url('../assets/qt_TienGui.09015143.svg');
    background-repeat: no-repeat;
}
.process-and-utility .dictionary {
    height: 13%;
    width: 100%;
    display: flex;
    margin-top: 10px;
    border:1px solid #ccc ;
}
.dictionary .dictionary4-15 {
    height: 100%;
    width: 27%;
    border-right: 1px solid #ccc;
}
.dictionary .dictionary3-15 {
    height: 100%;
    width: 20%;

}
.dictionary .dictionary1-5 {
    height: 100%;
    width: 20%;
    border-right: 1px solid #ccc;

}
.dictionary .dictionary1-6 {
    height: 100%;
    width: 16%;
    border-right: 1px solid #ccc;
}
.dictionary1-5 .dictionary-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 18px;
}
.dictionary3-15 .dictionary-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 18px;
}
.dictionary4-15 .dictionary-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 18px;
}
.dictionary1-6 .dictionary-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 18px;
}
.dictionary .logo-bank-card {
    background: url('../assets/Sprites.bc13c6df.svg') no-repeat -1098px -205px;
	width: 20px;
	height: 14px;
}
.dictionary-content .logo-customer {
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat  -876px -202px;
	width: 16px;
	height: 20px;
}
.dictionary-content .logo-provider {
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat  -930px -202px;
	width: 20px;
	height: 20px;
}
.dictionary-content .logo-employee {
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat  -986px -202px;
	width: 20px;
	height: 20px;
}
.dictionary-content .logo-calculate {
    background: url(../assets/Sprites.bc13c6df.svg) no-repeat  -1378px -257px;
	width: 21px;
	height: 22px;
}
.center-flex .report {
    height: 454px;
    width: 30%;
    margin-left: 10px;
    border: 1px solid #ccc;
}
.report .favorite {
    height: calc(100% - 97px);
    width: 100%;
}
.favorite ul {
    padding-right:16px;
    margin-top: 0px;
}
.favorite ul li {
    display: flex;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid #e5e5e5;
    height: 41px;
}
.report .footer-report {
    height: 13px;
    width: 100%;
    background-color:#fff;
    text-align: center;
    color: #0075c0;
    border-top:1px solid #ccc;
    padding-top: 13px;
}
/* -------- END Css deposit-withdraw-list ----------*/
</style>