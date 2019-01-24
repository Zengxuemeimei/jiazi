<template>
    <div class="content">
        <el-container>
            <el-header><Header/></el-header>
            <el-main>
                  <div class="main">
                     <div class="title-bj">
                        <div class="about-words">
                            <p>Product Center</p>
                            <h1>招商合作</h1>
                        </div>
                    </div>
                    <!-- 行业前景 -->
                    <div class="prospect" id="prospect">
                            <div class="prospect-box wrap">
                                <div class="empty"></div>
                                <div class="prospect-title">
                                    <h1>Industry outlook</h1>
                                    <p>行业前景</p>
                                    <div class="line"></div>
                                </div>
                                <div class="prospect-des">
                                    <div class="prospect-des-img">
                                        <img src="http://cdn.jiaziwenhua.cn/image/home/Handshake.png" alt="加载失败">
                                    </div>
                                    <section class="prospect-img-text">
                                        <p>
                                            随着社会经济的不断发展和人民生活水平的逐步提高，人们的物质生活日益改善，
                                            精神生活领域在不断拓宽，大量的闲暇时间和剩余的金钱使人们开始追求更高层次
                                            的精神生活。体育集健身、娱t乐、时尚为一体，逐渐成为人们消费的热点，各种
                                            体育活动极大地丰富了人们的精神生活。体育场馆作为休闲产业的重要组成部分，
                                            对于满足人们的休闲需求具有举足轻重的作用。
                                        </p>
                                        <p>
                                            时至21世纪，体育产业已经成为我国国民经济发展的一个新的经济增长点，而体育
                                            场馆是人们从事体育活动的重要场所，是体育产业发展的物质基础条件之一，因此，
                                            合理利用体育场馆资源有利于促进体育产业的发展。
                                        </p>
                                    </section>
                                </div>
                            </div>                     
                    </div>
                    <!-- 合作优势 -->
                    <div class="advantage" id="cooperativeAdvantage">
                        <div class="advantage-img">
                        </div>
                        <div class="advantage-title">
                            <h1>Cooperative advantage</h1>
                            <div class="line advantage-line"></div>
                            <p>合作优势</p>
                        </div>                       
                    </div>
                    <!-- 合作方式 -->
                    <div class="cooperation-way" id="way">
                            <div class="our-advantage wrap">
                                <el-row type="flex" justify="center">
                                    <el-col class="our-advantage-title" :span="4">
                                        <h3>市场优势</h3>
                                    </el-col>
                                      <el-col class="our-advantage-title" :span="4">
                                        <h3>品牌优势</h3>
                                    </el-col>
                                      <el-col class="our-advantage-title" :span="4">
                                        <h3>专家优势</h3>
                                    </el-col>
                                      <el-col class="our-advantage-title" :span="4">
                                        <h3>成本优势</h3>
                                    </el-col>
                                      <el-col class="our-advantage-title" :span="4">
                                        <h3>服务优势</h3>
                                    </el-col>
                                      <el-col class="our-advantage-title" :span="4">
                                        <h3>模式优势</h3>
                                    </el-col>
                                </el-row>
                                 <el-row type="flex" justify="center">
                                    <el-col class="our-advantage-text" :span="4">
                                        <section>
                                            <p>巨大市场前景，朝阳行业，民生行业潜力无限</p>
                                            <img src="../../static/images/home/yssc.png" alt="加载失败">
                                        </section>
                                    </el-col>
                                    <el-col class="our-advantage-text" :span="4">
                                        <section>
                                            <p>公司96年成立，21年运营经验，中国木结构建筑行业高端品牌“甲子文化”</p>
                                            <img src="../../static/images/home/yspp.png" alt="加载失败">
                                        </section>
                                    </el-col>
                                    <el-col class="our-advantage-text" :span="4">
                                        <section>
                                            <p>行业权威专家资源，亲临合作企业，帮助合作企业规避可能发生的经营风险</p>
                                            <img src="../../static/images/home/yszj.png" alt="加载失败">
                                        </section>
                                    </el-col>
                                    <el-col class="our-advantage-text" :span="4">
                                        <section>
                                            <p>切割成本、定向考评、厚利多销、提升利润</p>
                                            <img src="../../static/images/home/yscb.png" alt="加载失败">
                                        </section>
                                    </el-col>
                                    <el-col class="our-advantage-text" :span="4">
                                        <section>
                                            <p>打破流水作业，实现个性定制管家式服务</p>
                                            <img src="../../static/images/home/ysfw.png" alt="加载失败">
                                        </section>
                                    </el-col>
                                    <el-col class="our-advantage-text" :span="4">
                                        <section>
                                            <p>“是集研发、设计、生产、施工、售后服务为一体的综合性公司。”垂直管理模式</p>
                                            <img src="../../static/images/home/ysms.png" alt="加载失败">
                                        </section>
                                    </el-col>
                                 </el-row>
                            </div>
                        <div class="cooperation-title">
                            <h1>Mode of cooperation</h1>
                            <div class="line cooperation-line"></div>
                            <p>合作方式</p>
                        </div>
                            <div class="our-advantage wrap">
                                <ul class="way-list">
                                    <li>
                                        <div class="way-list-img">
                                            <img src="../../static/images/home/hzjxs.png" alt="加载失败">
                                        </div>
                                        <div class="way-list-text">
                                            <h3>经销商合作</h3>
                                            <div class="line way-list-line"></div>
                                            <p>
                                                代理公司产品，销售公司木结构场馆和配套产品，公司提供售后服务和技术支持
                                            </p>
                                        </div>
                                    </li>
                                     <li>
                                        <div class="way-list-img">
                                            <img src="../../static/images/home/hzxm.png" alt="加载失败">
                                        </div>
                                        <div class="way-list-text">
                                            <h3>项目合作</h3>
                                            <div class="line way-list-line"></div>
                                            <p>
                                                和公司合作项目，公司提供资质和技术服务
                                            </p>
                                        </div>
                                    </li>
                                     <li>
                                        <div class="way-list-img">
                                            <img src="../../static/images/home/hzfgs.png" alt="加载失败">
                                        </div>
                                        <div class="way-list-text">
                                            <h3>分公司合作</h3>
                                            <div class="line way-list-line"></div>
                                            <p>
                                                以总公司品牌进行，产品销售以及项目合作
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    <!-- 加入我们 -->
                    <div class="join-us-bj" id="join">
                    </div>
                </div>
            </el-main>
            <el-footer height="534px">
                   <div class="footer">
                        <div  class="join-us wrap">
                            <div class="join-box">
                                <h2>加入我们的大家庭</h2>
                                <img v-lazy="joinUs"/>
                                <p>加入我们<img class="join-right" src="../../static/images/home/jrzh.png" alt="加载失败"></p>
                            </div>
                        </div>
                    <el-row type="flex" justify="center">
                        <el-col class="footer-box wrap">
                             
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
                </div>
                    <div class="footer-b">
                    <div class="footer-b-wrap wrap">
                        <p>版权所有：四川甲子文化体育工程有限公司</p>
                        <p><a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action">备案号：蜀ICP备17018401号-1</a></p>
                        <p><a href="http://www.xinkezhi.com">技术支持：馨科智科技</a></p> 
                    </div>
                    
                </div>
            </el-footer>
        </el-container>     
    </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
    export default {
        name:'Cooperation',
        components: {
            Header,
            Footer
        },
          data(){
            return{
                titleBj:"http://cdn.jiaziwenhua.cn/images/home/zsbj1.png",
                joinUs:"../../static/images/home/lc.png",
                footerCode:"../../static/images/home/code.png",
                name:"",
                phone:"",
                email:"",
                word:""
            }
        },
        mounted(){
            if(sessionStorage.case){
                var index = JSON.parse(sessionStorage.case)[0]
                console.log(index)
                switch(index){
                    case "0":{
                       $('html,body').animate({scrollTop:$("#prospect").offset().top},'slow');
                        sessionStorage.removeItem('case');  
                    }break;
                    case "1":{
                        $('html,body').animate({scrollTop:$("#cooperativeAdvantage").offset().top},'slow'); 
                        sessionStorage.removeItem('case');
                    }break;
                    case "2":{
                        $('html,body').animate({scrollTop:$("#way").offset().top},'slow');
                        sessionStorage.removeItem('case');
                    }break;
                    case "3":{
                        $('html,body').animate({scrollTop:$("#join").offset().top},'slow');
                        sessionStorage.removeItem('case');
                    }break;
                }
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
.footer-b p a{
    text-decoration: none;
    color: #000;
}
.footer-b-wrap{
    display: flex;
    justify-content: center;
}
.wrap{
    width: 1280px;
    margin: 0 auto;
}
.el-header,.el-footer,.el-main{
  padding: 0;
}
.title-bj{
    width: 100%;
    height: 543px;
    color: #fff;
    position: relative;
    background: url("http://cdn.jiaziwenhua.cn/images/home/zsbj1.png") center center no-repeat;
    background-size: cover;
}
.title-bj img{
     width: 100%;
    height: 100%;
}
.about-words{
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.about-words p{
    margin-bottom: 30px;
    color: #E73838;
    font-size: 25px;
}
.about-words h1{
    font-size: 38px;
    font-weight: normal;
}
/*行业前景*/
.prospect{
    width:100%;
    height: 815px;
    background: #f1f1f1;
    padding: 90px 0;
    box-sizing: border-box;
}
.prospect-box{
    height: 815px;
    position: relative;
}
.empty{
    width: 50%;
    height: 330px;
    background: repeating-linear-gradient(-45deg,#d6d6d6 0,#d6d6d6 2px,#f1f1f1 2px,#f1f1f1 6px);
    display: inline-block;
}
.line{
    width: 60px;
    border-top: 2px solid #E73838;
    margin: 25px 0;
}
.prospect-title{
    width: 40%;
    display: inline-block;
    vertical-align: top;
    margin-left: 50px;
}
.prospect-title h1{
    color: #999999;
    text-transform: uppercase;
    font-size: 38px;
    font-weight: normal;
    margin-bottom: 15px;
}
.prospect-title p{
    font-size: 30px;
}
.prospect-des{
    width: 85%;
    /* height: 400px; */
    box-sizing: border-box;
    background: #fff;
    padding: 40px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 250px;
    right: 0;
}
.prospect-des-img{
    width: 440px;
    height: 305px;
    overflow: hidden;
}
.prospect-des-img img{
    width: 100%;
    height: 100%;
}
.prospect-img-text{
    width: 55%;
    text-indent: 2em;
    line-height: 30px;
    padding-left: 5px;
}
.prospect-img-text p:first-child{
    padding-bottom: 40px;
}
/*合作优势*/
.advantage{
    position: relative;
}
.advantage-img{
    width: 100%;
    height: 367px;
    /* overflow: hidden; */
    background: url("../../static/images/home/zs1.png") center center no-repeat;
    background-size: cover;
}
.advantage-img img{
    width: 100%;
    height: 100%;
}
.advantage-title{
    color: #fff;
    text-align: center;
    position: absolute;
    top:50%;
    left:50%;
    transform: translateX(-50%) translateY(-50%);
}
.advantage-title h1{
    font-size: 42px;
    font-weight: normal;
    color: #bfbfbf;
    text-transform: uppercase;
}
.advantage-title p{
    font-size: 30px;
}
.advantage-line{
    margin: 15px auto;
}
.our-advantage{
    transform: translateY(-90px);
}
.our-advantage-title{
    height: 90px;
    line-height: 90px;
    text-align: center;
    color: #fff;
}
.our-advantage-title:nth-child(odd){
    background: #E73838;
}
.our-advantage-title:nth-child(even){
    background: #E94E3D;
}
.our-advantage-text:nth-child(odd){
    background: #e6e6e6;
}
.our-advantage-text:nth-child(even){
    background: #f1f1f1;
}
.our-advantage-text{
    box-sizing: border-box;
    height: 205px;
    padding: 30px 20px;
    position: relative;
}
.our-advantage-text p{
    font-size: 14px;
}
.our-advantage-text img{
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
}
/*合作方式*/
.cooperation-way{
    position: relative;
}
.cooperation-title{
    width: 568px;
    margin: 0 auto;
}
.cooperation-title h1{
    text-transform: uppercase;
    color: #bfbfbf;
    font-size: 45px;
    font-weight: normal;
}
.cooperation-title p{
    text-align: center;
    font-size: 25px;
    color: #E73838;
}
.cooperation-line{
    margin: 15px auto;
}
.way-list{
    display: flex;
    justify-content: space-around;
    margin-top: 167px;
}
.way-list li{
    width: 20%;
    text-align: center;
}
.way-list-img{
    width: 188px;
    height: 188px;
    background: #c9c9c9;
    border-radius: 50%;
    position: relative;
    margin: 0 auto;
}
.way-list-img img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.way-list-line{
    width: 35px;
    margin: 15px auto;
    border: 1px solid #999999;
}
.way-list-text{
    margin-top: 30px;
    color: #999999;
}
.way-list-text h3{
    letter-spacing: 2px;
}
.way-list-text p{
    text-align: justify;
    font-size: 14px;
}
.join-us-bj{
    width: 100%;
    height: 367px;
    background: url("http://cdn.jiaziwenhua.cn/images/home/zsbj2.png") center center no-repeat;
    background-size: cover;
}
/*尾部*/
.footer{
    position: relative;
}
.join-box{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%)
}
.join-us{
    height: 490px;
    box-shadow: 0 19px 42px #c6c6c6;
    background: linear-gradient(#F85959,#E73838);
    color: #fff;
    text-align: center;
    position: absolute;
    top: -228px;
    left: 50%;
    transform: translateX(-50%)
}
.join-box h2{
    margin-bottom: 60px;
}
.join-box p{
    width: 140px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #fff;
    background: #fff;
    color: #1A1A1C;
    border-radius: 20px;
    margin: 0 auto;
    margin-top: 60px;
    cursor: pointer;
}
.join-right{
    margin-left: 10px;
    vertical-align: middle;
}
.footer{
    padding-top: 345px;
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
    width: 150px;
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
    background: #F1F1F1;
    margin-top: 50px;
}
.footer-b p{
    line-height: 50px;
    margin-left: 20px;
    font-size: 12px;
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
.way-list li:hover .way-list-img{
    background: #E73838;
}
@media (max-width: 1280px){
    .el-header, .el-main, .el-footer{
        width: 1280px
    }
}

</style>