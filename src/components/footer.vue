<template>
   <div class="footer">
        <el-row type="flex" justify="center">
            <el-col class="footer-box">
                <el-col :span="12" class="company-info">
                    <h3>四川甲子文化体育工程有限公司</h3>
                        <p>地址：成都市万科加州湾V派商务空间511-512</p>
                        <p>电话：028—87679397</p>
                        <p>手机：18981789397</p>
                        <p>邮箱：1621474590@qq.com</p>
                        <p class="footer-code">
                            <img v-lazy="footerCode"/>
                            <span>扫一扫关注</span>
                        </p>
                </el-col>
                <el-col :span="12" class="submit-info">
                    <form action="#">
                        <el-row class="info-name" type="flex" justify="space-between">
                            <input type="text" placeholder="姓名" @blur="getName">
                            <input type="text" placeholder="邮箱" @blur="getEmail">
                            <input type="text" placeholder="电话" @blur="getPhone">
                        </el-row>
                        <div class="info-content">
                            <input type="text" placeholder="内容" @blur="getWord">
                        </div>
                        <el-row>
                            <el-button class="submit-btn" @click="submitBtn">提交</el-button>
                        </el-row>
                                   
                    </form>
                </el-col>
            </el-col>
        </el-row>
           <div class="footer-b">
               <div class="footer-wrap">
                    <p>版权所有：四川甲子文化体育工程有限公司</p>
                   <p><a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action">备案号：蜀ICP备17018401号-1</a></p>
                    <p> <a href="http://www.xinkezhi.com">技术支持：馨科智科技</a></p> 
               </div>
            
            </div>
    </div>
</template>

<script>
    export default {
        name:'Footer',
        data(){
            return{
                footerCode:"../../static/images/home/code.png",
                name:"",
                phone:"",
                email:"",
                word:""
            }
        },

        methods:{
            getName(e){
                console.log(e.target.value)
                this.name = e.target.value
            },
            getPhone(e){
                console.log(e.target.value)
                this.phone = e.target.value
            },
            getEmail(e){
                console.log(e.target.value)
                this.email = e.target.value
            },
            getWord(e){
                console.log(e.target.value)
                this.word = e.target.value
            },
            submitBtn(){
                $.ajax({
                    url:"http://47.99.157.23:8092/PostCustomer",
                    type:"GET",
                    data:{
                        name:this.name,
                        phone:this.phone,
                        email:this.email,
                        word:this.word  
                    },
                    dataType:"json",
                    success:function(data){
                        this.name = ""
                        this.phone = ""
                        this.word = ""
                        this.email = ""
                    }
                })
            }
        }
    }
</script>

<style scoped>
.footer-wrap{
    width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
}
.footer{
    padding-top: 88px;
}
.company-info h3{
    line-height: 80px;
}
.company-info p{
    line-height: 40px;
}
.footer-box{
    display: flex;
    justify-content: space-between;
    width: 1280px;
    margin: 0 auto;
}
.footer-code img{
    vertical-align: middle;
    display: inline;
}
.footer-code span{
    display: inline-block;
    margin:0 auto;
    width:10px;
    line-height: 20px;
    vertical-align: middle;
    font-size: 12px;
    color: #535353;
}
.submit-info input{
    width: 25%;
    height: 40px;
    outline: none;
    border: none;
    border-bottom: 1px solid #e9e9e9;
}
.info-name{
    margin-top:20px;
}
.info-content{
    margin-top: 125px;
}
.info-content input{
    width: 100%;
}
.submit-btn{
    width: 160px;
    margin-top: 90px;
}
::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color:    #9e9e9e;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
   color:    #9e9e9e;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
   color:    #9e9e9e;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
   color:    #9e9e9e;
}
.footer-b{
    height: 50px;
    background: #F1F1F1;
    display: flex;
    justify-content: center;
    margin-top: 50px;
}
.footer-b p{
    line-height: 50px;
    margin-left: 20px;
    font-size: 12px;
}
.footer-b p a{
    text-decoration: none;
    color: #000;
}
.el-footer{
    padding: 0;
}
.record{
    color: #000;
    text-decoration: none;
}
.record:hover{
    text-decoration: underline;
}
</style>