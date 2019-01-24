<template>
    <div class="header-box">
            <div class="header-nav">
                <ul class="nav-list">
                    <li>
                        <div class="logo-box">
                            <img class="logo" src="../../static/images/home/logo.png"/>
                        </div>
                    </li>
                    <!-- 一级导航栏开始 -->
                    <li> 
                        <ul class="header-list">         
                            <li class="head-home">
                                <router-link to="/" exact>首页</router-link>
                            </li>
                            <li class="head-home head-about">
                                <router-link to="/about">关于甲子</router-link>
                                 <!-- 二级导航栏 -->
                                <div class="home-list about-list" @click="gotoAbout">
                                    <p><a data-num="0" href="/#/about">公司简介</a></p>
                                    <p><a data-num="1" href="/#/about">企业文化</a></p>
                                    <p><a data-num="2" href="/#/about">企业荣誉</a></p>
                                    <p><a data-num="3" href="/#/about">客户名录</a></p>
                                    <p><a data-num="4" href="/#/about">售后服务</a></p>
                                </div>
                            </li>
                            <li class="head-home head-products">
                                <router-link to="/products">核心主业</router-link>
                                <!-- 二级导航栏 -->
                                <div class="home-list products-list" @click="gotoProducts">
                                    <p><a data-num="0" href="/#/products">体育</a></p>
                                    <p><a data-num="1" href="/#/products">文化</a></p>
                                    <p><a data-num="2" href="/#/products">旅游</a></p>
                                    <p><a data-num="3" href="/#/products">教育</a></p>
                                    <p><a data-num="4" href="/#/products">木结构</a></p>
                                    <p><a data-num="5" href="/#/products">智能化</a></p>
                                    <p><a data-num="6" href="/#/products">产品中心</a></p>
                                   
                                </div>
                            </li>
                            <li class="head-home head-case">
                                <router-link to="/case">甲子案例</router-link>
                                <!-- 二级导航栏 -->
                                <div class="home-list case-list" @click="gotoCase">
                                    <!-- <p><a data-num="0" href="/#/case">全部案例</a></p> -->
                                    <p><a data-num="0" href="/#/case">设计案例</a></p>
                                    <p><a data-num="1" href="/#/case">工程案例</a></p>
                                </div>
                            </li>
                            <li class="head-home head-cooperation">
                                <router-link to="/cooperation">招商合作</router-link>
                                <!-- 二级导航栏 -->
                                <div class="home-list cooperation-list" @click="gotoCooperation">
                                    <p><a data-num="0" href="/#/cooperation">行业前景</a></p>
                                    <p><a data-num="1" href="/#/cooperation">合作优势</a></p>
                                    <p><a data-num="2" href="/#/cooperation">合作方式</a></p>
                                    <p><a data-num="3" href="/#/cooperation">加入我们</a></p>
                                </div>
                            </li>
                            <li>
                                <router-link to="/news">新闻中心</router-link>
                            </li>
                            <li>
                                <router-link to="/contact">联系我们</router-link>
                            </li>
                        </ul>
                    </li>
                    <!-- 一级导航栏结束 -->
                    <li>
                        <div class="phone-box">
                            <img class="phone" v-lazy="imgUrl.phone"/>
                            <span class="phone-text">18981789397或028-87679397</span>
                        </div>
                        <div class="caidan" @click="showMenu">
                            <img src="../../static/images/home/cd.png" alt="加载失败">
                        </div>
                    </li>
                </ul>             
            </div>
        <div :class="isActive ? 'backTop':'hidden'" @click="toTop(step)">
            <img src="../../static/images/home/top.png" alt="加载失败">
        </div>
    </div>
</template>

<script>
    export default {
        name:'Header',
          inject: ['reload'],
        data(){
            return{
                isActive:false,
                imgUrl:{
                    logo:"../../static/images/home/logo.png",
                    phone:"../../static/images/home/phone.png"
                },
                step:50,
            }
        },
        created(){
             var that = this;
            window.onscroll=function(){
                if (document.documentElement.scrollTop>60) {
                    that.isActive = true;
                }else {
                    that.isActive = false;
                }
            }
            if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                $(".nav-list").css("width","100%")
                $(".home-list").css("opacity","0")
            }
       
        },
        methods:{
            showMenu(){
                $(".header-list").css("display","block")
            },
            toTop(i){
                  //参数i表示间隔的幅度大小，以此来控制速度
                document.documentElement.scrollTop -= i;
                if (document.documentElement.scrollTop>0) {
                    var c=setTimeout(()=>this.toTop(i),16);
                }else {
                    clearTimeout(c);
                }
            },
            gotoAbout(e){
                var aboutIndex = e.target.dataset.num;
                var aboutArry = null;
                if(sessionStorage.about){
                    var aboutArry = JSON.parse(sessionStorage.about)
                    aboutArry[0] = aboutIndex
                }else{
                    aboutArry = []
                    aboutArry.push(aboutIndex)
                }               
                var jsonObj = JSON.stringify(aboutArry);
                // 更新本地数据
                sessionStorage.about = jsonObj;
                     if(sessionStorage.about){
                var index = JSON.parse(sessionStorage.about)[0]
                switch(index){
                    case "0":{
                        this.reload()
                    }break;
                    case "1":{
                        this.reload()
                    }break;
                    case "2":{
                        this.reload()
                    }break;
                     case "3":{
                        this.reload()
                    }break;
                     case "4":{
                        this.reload()
                    }break;
                }
             }
            },
            gotoProducts(e){
                 var productsIndex = e.target.dataset.num;
                var productsArry = null;
                if(sessionStorage.products){
                    var productsArry = JSON.parse(sessionStorage.products)
                    productsArry[0] = productsIndex
                }else{
                    productsArry = []
                    productsArry.push(productsIndex)
                }              
                var jsonObj = JSON.stringify(productsArry);
                // 更新本地数据
                sessionStorage.products = jsonObj;
                if(sessionStorage.products){
                var index = JSON.parse(sessionStorage.products)[0]
            
                switch(index){
                    case "0":{                 
                        this.reload()
                        $(".products-sm").eq(0).addClass('products-sm-show').siblings().removeClass("products-sm-show");
                        $('.products-sm-line').css("border","1px solid #999999");
                        $('.products-sm-line').eq(0).css("border","1px solid #E73838");
                        $('.products-sm-img').css("background","#999999");                
                        $('.products-sm-img').eq(0).css("background","#E73838");
                    }break;
                    case "1":{
                        this.reload()
                             $(".products-sm").eq(1).addClass('products-sm-show').siblings().removeClass("products-sm-show");
                        $('.products-sm-line').css("border","1px solid #999999");
                        $('.products-sm-line').eq(1).css("border","1px solid #E73838");
                        $('.products-sm-img').css("background","#999999");                
                        $('.products-sm-img').eq(1).css("background","#E73838");
                    }break;
                    case "2":{
                        this.reload()
                             $(".products-sm").eq(2).addClass('products-sm-show').siblings().removeClass("products-sm-show");
                        $('.products-sm-line').css("border","1px solid #999999");
                        $('.products-sm-line').eq(2).css("border","1px solid #E73838");
                        $('.products-sm-img').css("background","#999999");                
                        $('.products-sm-img').eq(2).css("background","#E73838");
                    }break;
                    case "3":{
                        this.reload()
                             $(".products-sm").eq(3).addClass('products-sm-show').siblings().removeClass("products-sm-show");
                        $('.products-sm-line').css("border","1px solid #999999");
                        $('.products-sm-line').eq(3).css("border","1px solid #E73838");
                        $('.products-sm-img').css("background","#999999");                
                        $('.products-sm-img').eq(3).css("background","#E73838");
                    }break;
                    case "4":{
                        this.reload()
                             $(".products-sm").eq(4).addClass('products-sm-show').siblings().removeClass("products-sm-show");
                        $('.products-sm-line').css("border","1px solid #999999");
                        $('.products-sm-line').eq(4).css("border","1px solid #E73838");
                        $('.products-sm-img').css("background","#999999");                
                        $('.products-sm-img').eq(4).css("background","#E73838");
                    }break;
                    case "5":{
                        this.reload()
                        $(".products-sm").eq(5).addClass('products-sm-show').siblings().removeClass("products-sm-show");
                        $('.products-sm-line').css("border","1px solid #999999");
                        $('.products-sm-line').eq(5).css("border","1px solid #E73838");
                        $('.products-sm-img').css("background","#999999");                
                        $('.products-sm-img').eq(5).css("background","#E73838");
                    }break;
                    case "6":{
                        this.reload()
                    }break;
                }
             }
            },
            gotoCase(e){

                var caseIndex = e.target.dataset.num;
                var caseArry = null;
                if(sessionStorage.case){
                    var caseArry = JSON.parse(sessionStorage.case)
                    caseArry[0] = caseIndex
                }else{
                    caseArry = []
                    caseArry.push(caseIndex)
                }
                
                var jsonObj = JSON.stringify(caseArry);
                // 更新本地数据
                sessionStorage.case = jsonObj;             
                     if(sessionStorage.case){
                var index = JSON.parse(sessionStorage.case)[0]
                $('.case-table p').eq(index).addClass("case-show").siblings().removeClass("case-show");
                switch(index){
                    case "0":{
                          this.reload()   
                    }break;
                    case "1":{
                        this.reload()       
                    }break;
                    case "2":{
                        this.reload() 
                    }break;
                }
             }
            },
            gotoCooperation(e){
                var caseIndex = e.target.dataset.num;
                var caseArry = null;
                if(sessionStorage.case){
                    var caseArry = JSON.parse(sessionStorage.case)
                    caseArry[0] = caseIndex
                }else{
                    caseArry = []
                    caseArry.push(caseIndex)
                }
                
                var jsonObj = JSON.stringify(caseArry);
                // 更新本地数据
                sessionStorage.case = jsonObj;
                      if(sessionStorage.case){
                var index = JSON.parse(sessionStorage.case)[0]
                console.log(index)
                switch(index){
                    case "0":{
                        this.reload()
                    }break;
                    case "1":{
                        this.reload()
                    }break;
                    case "2":{
                        this.reload()
                    }break;
                    case "3":{
                        this.reload()
                    }break;
                }
             }
            }
        }
    }
</script>

<style scoped>
.caidan{
    display: none;
}
.header-box{
    width: 100%;
    height: 60px;
}
.header-nav{
    margin: 0 auto;
}
.nav-list{
    width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    text-align: center;
}
.head-home{
    position: relative;
    z-index: 100;
}
.home-list{
    width: 80px;
    background: #fff;
    display: none;
}
.home-list p{
    height: 40px;
    line-height: 40px;
}
.home-list p:hover{
    background: red;
}
.home-list p:hover a{
    color: #fff;
}
.header-list li:hover .home-list{
    display: block;
}

.logo-box{
    width: 200px;
    height: 60px;
    position: relative;
}
.logo{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.phone-box{
    line-height: 60px;
    text-align: center;
}
.phone{
    vertical-align: middle;
}
.phone-text{
    color: #000;
    margin-left: 10px;
    vertical-align: middle;
}
.header-list{
    width: 750px;
    display: flex;
    justify-content: space-between;
}
.header-list li{
    display: inline-block;
    line-height: 60px;
    width: 80px;
}
.header-list li a{
    display: inline-block;
    width: 100%;
    height: auto;
    color: #000;
    text-decoration: none;
}
.router-link-active{
    color: red !important;
}
.backTop{
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    background: #8a8888;
    opacity: .5;
    cursor: pointer;
    z-index: 1;
}
.backTop:hover{
    opacity: .8;
}
.backTop img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.hidden{
    display: none;
}

</style>