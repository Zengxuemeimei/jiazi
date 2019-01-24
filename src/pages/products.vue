<template>
    <div class="content">
        <el-container>
            <el-header><Header/></el-header>
            <el-main>
                <div class="main">
                     <div class="title-bj">
                        <!-- <img v-lazy="titleBj"/> -->
                        <div class="about-words">
                            <p>Product Center</p>
                            <h1>产品中心</h1>
                        </div>
                    </div>
                    <!-- 介绍 -->
                        <div class="wrap" id="center">
                            <!-- 小图 -->
                                <div  class="products-sm-all">
                                        <div @click="clickSmImg" class="products-sm" v-for="(item,index) in smImg" :key="index">
                                            <div class="products-sm-img">
                                                <img :src="item.src" alt="加载失败">
                                            </div>
                                            <div class="products-sm-line"></div>
                                            <p>{{item.title}}</p>
                                            <p class="products-sm-eg">{{item.titleEg}}</p>
                                        </div>                               
                                </div>
                            <!-- 大图 -->
                            <div class="lage-box">
                                    <div @click="clickLeft" class="left-box">
                                        <img class="prev" :src="imgRight"/>
                                    </div>
                                     <div class="products-box" v-show="isGymnasium">
                                        <div @mousemove="moveProducts" class="products-pic" v-for="(item,index) in gymnasium" :key="index">
                                            <img  v-lazy="item"/>
                                            <div class="products-pic-mask">
                                                <div class="mask-text">
                                                    <h3>{{gymnasiumWordCh[index]}}</h3>
                                                    <div class="line"></div>
                                                    <p>{{gymnasiumWordEg[index]}}</p>
                                                </div>
                                            </div>
                                        </div> 
                                     </div>                                   
                                     <div class="products-box" v-show="isCulture">
                                        <div @mousemove="moveProducts" class="products-pic" v-for="(item,index) in culture" :key="index">
                                            <img  v-lazy="item"/>
                                            <div class="products-pic-mask">
                                                <div class="mask-text">
                                                    <h3>{{cultureWordCh[index]}}</h3>
                                                    <div class="line"></div>
                                                    <p>{{cultureWordEg[index]}}</p>
                                                </div>
                                            </div>
                                        </div>
                                     </div>                                   
                                     <div class="products-box" v-show="isTravel">
                                        <div @mousemove="moveProducts" class="products-pic" v-for="(item,index) in travel" :key="index">
                                            <img  v-lazy="item"/>
                                            <div class="products-pic-mask">
                                                <div class="mask-text">
                                                    <h3>{{travelWordCh[index]}}</h3>
                                                    <div class="line"></div>
                                                    <p>{{travelWordEg[index]}}</p>
                                                </div>
                                            </div>
                                        </div>
                                     </div>                                   
                                     <div class="products-box" v-show="isEducation">
                                        <div @mousemove="moveProducts" class="products-pic" v-for="(item,index) in education" :key="index">
                                            <img  v-lazy="item"/>
                                            <div class="products-pic-mask">
                                                <div class="mask-text">
                                                    <h3>{{educationwordCh[index]}}</h3>
                                                    <div class="line"></div>
                                                    <p>{{educationwordEg[index]}}</p>
                                                </div>
                                            </div>
                                        </div>
                                     </div>                                   
                                     <div class="products-box" v-show="isWood">
                                        <div @mousemove="moveProducts" class="products-pic" v-for="(item,index) in wood" :key="index">
                                            <img  v-lazy="item"/>
                                            <div class="products-pic-mask">
                                                <div class="mask-text">
                                                    <h3>{{woodWordCh[index]}}</h3>
                                                    <div class="line"></div>
                                                    <p>{{woodWordEg[index]}}</p>
                                                </div>
                                            </div>
                                        </div>
                                     </div>                                   
                                     <div class="products-box" v-show="isIntelligence">
                                        <div @mousemove="moveProducts" class="products-pic" v-for="(item,index) in Intelligentization" :key="index">
                                            <img  v-lazy="item"/>
                                            <div class="products-pic-mask">
                                                <div class="mask-text">
                                                    <h3>{{IntelligentizationCh[index]}}</h3>
                                                    <div class="line"></div>
                                                    <p>{{IntelligentizationEg[index]}}</p>
                                                </div>
                                            </div>
                                        </div>
                                     </div>                                   
                                    <div @click="clickRight" class="right-box">
                                        <img class="next" :src="imgRight"/>
                                    </div>
                            </div>
                            <!--木地板开始-->
                            <div class="material wrap" id="afterSale">
                                <el-row type="flex" justify="space-between">
                                    <el-col :span="5">
                                        <div class="products-service">
                                            <h2>木地板<div class="products-line"></div></h2>                                       
                                            <p class="products-word">Wood Flooring</p>
                                        </div>
                                    </el-col>
                                </el-row>
                                <ul class="material-list">
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/qita01.png" style="width:382px;height:292px" alt="">
                                        <p>空间吸气体</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/qita02.png" style="width:382px;height:292px" alt="">
                                        <p>槽孔吸音板</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/qita03.png" style="width:382px;height:292px" alt="">
                                        <p>穿孔吸音板</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/jianshen.jpg" style="width:382px;height:292px" alt="">
                                        <p>PU运动木板</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/wutai.jpg" style="width:382px;height:292px" alt="">
                                        <p>舞台木地板</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/cailiao01.jpg" style="width:382px;height:292px" alt="">
                                        <p>体育馆运动木地板</p>
                                    </li>
                                </ul>
                            </div>
                            <!--木地板结束-->
                             <!--文化旅游开始-->
                            <div class="material wrap">
                                <el-row type="flex" justify="space-between">
                                    <el-col :span="5">
                                        <div class="products-service">
                                            <h2>文化旅游<div class="products-line"></div></h2>                                       
                                            <p class="products-word">Cultural tourism</p>
                                        </div>
                                    </el-col>
                                </el-row>
                                <ul class="material-list">
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/dz.JPG" style="width:382px;height:292px" alt="">
                                        <p>灯罩</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/fgjz1.jpg" style="width:382px;height:292px" alt="">
                                        <p>仿古建筑</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/fgjz2.jpg" style="width:382px;height:292px" alt="">
                                        <p>仿古建筑</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/fgjz3.jpg" style="width:382px;height:292px" alt="">
                                        <p>仿古建筑</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/fgjz4.jpg" style="width:382px;height:292px" alt="">
                                        <p>仿古建筑</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/hl.JPG" style="width:382px;height:292px" alt="">
                                        <p>护栏</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/hx.JPG" style="width:382px;height:292px" alt="">
                                        <p>花箱</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/jdzx.JPG" style="width:382px;height:292px" alt="">
                                        <p>接待中心</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/jgt.JPG" style="width:382px;height:292px" alt="">
                                        <p>景观亭</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/lt.jpg" style="width:382px;height:292px" alt="">
                                        <p>露台</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/mzd.jpg" style="width:382px;height:292px" alt="">
                                        <p>木栈道</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/skt.png" style="width:382px;height:292px" alt="">
                                        <p>烧烤亭</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/xxt.JPG" style="width:382px;height:292px" alt="">
                                        <p>休闲亭</p>
                                    </li>
                                </ul>
                            </div>
                            <!--文化旅游结束-->
                            <!--体育公园开始-->
                            <div class="material wrap">
                                <el-row type="flex" justify="space-between">
                                    <el-col :span="5">
                                        <div class="products-service">
                                            <h2>体育公园<div class="products-line"></div></h2>                                       
                                            <p class="products-word">Sports Park</p>
                                        </div>
                                    </el-col>
                                </el-row>
                                <ul class="material-list">
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/image/product/hx1.jpg" style="width:382px;height:292px" alt="">
                                        <p>花箱</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/image/product/md1.jpg" style="width:382px;height:292px" alt="">
                                        <p>木凳</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/image/product/cl.jpg" style="width:382px;height:292px" alt="">
                                        <p>木凳</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/image/product/md4.jpg" style="width:382px;height:292px" alt="">
                                        <p>木椅</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/image/product/md2.JPG" style="width:382px;height:292px" alt="">
                                        <p>木椅</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/image/product/ljt.JPG" style="width:382px;height:292px" alt="">
                                        <p>木制垃圾桶</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/image/product/md3.JPG" style="width:382px;height:292px" alt="">
                                        <p>休息亭</p>
                                    </li>
                                    <li>
                                        <img src="http://cdn.jiaziwenhua.cn/image/product/xxt1.JPG" style="width:382px;height:292px" alt="">
                                        <p>长廊</p>
                                    </li>
                                </ul>
                            </div>
                            <!--体育公园结束-->
                        </div>
                </div>
            </el-main>
            <el-footer><Footer/></el-footer>
        </el-container>     
    </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
    export default {
        name:'Products',    
        components: {
            Header,
            Footer
        },
        data(){
            return{
                isGymnasium:true,
                isCulture:false,
                isTravel:false,
                isEducation:false,
                isWood:false,
                isIntelligence:false,
                index:0,
                handshake:"../../static/images/home/ws.png",
                gymnasiumWordCh:[
                    "篮球馆",
                    "羽毛球馆",
                    "游泳馆",
                    "网球馆",
                    "健身房",
                    "篮球馆",
                ],
                gymnasiumWordEg:[
                    "Basketball Gym",
                    "indoor badminton court",
                    "Natatorium",
                    "Tennis Hall",
                    "Multifunctional comprehensive gymnasium",
                    "Basketball Gym",
                ],
                cultureWordCh:[
                    "剧院",
                    "电影院",
                    "博物馆",
                    "剧院",
                    "博物馆",
                    "图书馆",
                ],
                cultureWordEg:[
                    "Central Theatre",
                    "Central cinema",
                    "Museum",
                    "Central Theatre",
                    "Museum",
                    "Central Theatre",
                    "Central Library",
                ],
                travelWordCh:[
                    "泸州尧坝古镇",
                    "西昌木结构仿古建筑",
                    "西昌邛海麓镇休闲亭",
                    "西昌木结构仿古建筑",
                    "西昌邛海麓镇接待中心",
                    "西昌邛海麓镇露台",
                ],
                travelWordEg:[
                    "Ancient town",
                    "Wooden structure antique building",
                    "Leisure Pavilion",
                    "Wooden structure antique building",
                    "Reception center",
                    "Terrace",
                ],
                educationwordCh:[
                    "成都温江麦豆豆幼儿园",
                    "成都金苹果幼儿园",
                    "西昌木结构幼儿园",
                    "西昌木结构幼儿园",
                    "西昌木结构幼儿园",
                    "西昌木结构幼儿园",
                ],
                educationwordEg:[
                    "Kindergarten",
                    "Kindergarten",
                    "Kindergarten",
                    "Kindergarten",
                    "Kindergarten",
                    "Kindergarten"
                ],
                woodWordCh:[
                    "木结构游泳馆",
                    "木结构足球馆",
                    "木结构足球馆",
                    "木结构网球馆",
                    "木结构网球馆",
                    "木结构田径馆",
                ],
                woodWordEg:[
                    "Wooden structure swimming pool",
                    "Wooden structure Football Hall",
                    "Wooden structure Football Hall",
                    "Wooden structure Tennis Hall",
                    "Wooden structure Tennis Hall",
                    "Wooden structure track and field hall",
                ],
                IntelligentizationCh:[
                    "智慧城市",
                    "智慧交通",
                    "智慧建筑",
                    "云平台",
                    "智慧医疗",
                    "平安城市",
                ],
                IntelligentizationEg:[
                    "Smart city",
                    "Intelligent traffic",
                    "Intelligent building",
                    "Cloud platform",
                    "Intelligent medical treatment",
                    "City of peace"
                ],
                gymnasium:[
                    "http://cdn.jiaziwenhua.cn/cdjqlqg.jpg",
                    "http://cdn.jiaziwenhua.cn/wlmqymq.png",
                    "http://cdn.jiaziwenhua.cn/ylyyg.jpg",
                    "http://cdn.jiaziwenhua.cn/bjwqg.png",
                    "http://cdn.jiaziwenhua.cn/wlmqjsf.png",
                    "http://cdn.jiaziwenhua.cn/cdjqlqg2.jpg"
                ],
                culture:[
                    "http://cdn.jiaziwenhua.cn/wlmqyy.jpg",
                    "http://cdn.jiaziwenhua.cn/hbhwgyy.png",
                    "http://cdn.jiaziwenhua.cn/hkbwg2.png",
                    "http://cdn.jiaziwenhua.cn/hbhwgzxjy.png",
                    "http://cdn.jiaziwenhua.cn/hkbwg1.png",
                    "http://cdn.jiaziwenhua.cn/hbhwgtsg.png",

                ],
                travel:[
                    "http://cdn.jiaziwenhua.cn/ybgz.jpg",
                    "http://cdn.jiaziwenhua.cn/xcmjg.jpg",
                    "http://cdn.jiaziwenhua.cn/xcqh4.JPG",
                    "http://cdn.jiaziwenhua.cn/xcmjg1.jpg",
                    "http://cdn.jiaziwenhua.cn/xcqh1.JPG",
                    "http://cdn.jiaziwenhua.cn/xcqh2.JPG",
                ],
                education:[
                    "http://cdn.jiaziwenhua.cn/cdwjmdd.jpg",
                    "http://cdn.jiaziwenhua.cn/cdjpgyey.jpg",
                    "http://cdn.jiaziwenhua.cn/xcyey.png",
                    "http://cdn.jiaziwenhua.cn/xcyey1.png",
                    "http://cdn.jiaziwenhua.cn/xcyey2.jpeg",
                    "http://cdn.jiaziwenhua.cn/xcyey3.jpeg",
                ],
                wood:[
                    "http://cdn.jiaziwenhua.cn/mjgyyg.jpg",
                    "http://cdn.jiaziwenhua.cn/mjgzqg5.jpg",
                    "http://cdn.jiaziwenhua.cn/mjgzqg7.JPG",
                    "http://cdn.jiaziwenhua.cn/mjgwqg.png",
                    "http://cdn.jiaziwenhua.cn/mjgspw.jpg",
                    "http://cdn.jiaziwenhua.cn/mjgtjc.jpg",
                ],
                Intelligentization:[
                    "http://cdn.jiaziwenhua.cn/zhcs.jpg",
                    "http://cdn.jiaziwenhua.cn/zhjt.jpg",
                    "http://cdn.jiaziwenhua.cn/zhjz.jpg",
                    "http://cdn.jiaziwenhua.cn/ypt.jpg",
                    "http://cdn.jiaziwenhua.cn/zhyl.jpg",
                    "http://cdn.jiaziwenhua.cn/pacs.jpg"
                ],
                imgRight:"../../static/images/home/fx.png",
                smImg:[
                    {
                        src :"../../static/images/home/ty2.png",
                        title:"体育馆",
                        titleEg:"Gymnasium"
                    },
                      {
                        src:"../../static/images/home/wh2.png",
                        title:"文化",
                        titleEg:"Culture"
                    },
                      {
                        src:"../../static/images/home/ly2.png",
                        title:"旅游",
                        titleEg:"Tourism"
                    },
                      {
                        src:"../../static/images/home/jy.png",
                        title:"教育",
                        titleEg:"Education"
                    },
                      {
                        src:"../../static/images/home/mjg.png",
                        title:"木结构",
                        titleEg:"Wood structure"
                    },
                      {
                        src:"../../static/images/home/zn2.png",
                        title:"智能化",
                        titleEg:"Intelligentization"
                    }
                ],
                titleBj:"http://cdn.jiaziwenhua.cn/images/home/zsbj1.png", 
            }
        },
        mounted(){
            $('.products-sm').eq(0).addClass('products-sm-show');
            $('.products-sm-line').eq(0).addClass('products-sm-line-show');
            $('.products-sm-img').eq(0).css("background","#E73838");
            if(sessionStorage.products){
                var index = JSON.parse(sessionStorage.products)[0]
                
                switch(index){
                    case "0":{
                        $('html,body').animate({scrollTop:$("#center").offset().top},'slow');
                        $(".products-sm").eq(0).addClass('products-sm-show').siblings().removeClass("products-sm-show");
                        $('.products-sm-line').css("border","1px solid #999999");
                        $('.products-sm-line').eq(0).css("border","1px solid #E73838");
                        $('.products-sm-img').css("background","#999999");                
                        $('.products-sm-img').eq(0).css("background","#E73838");
                        sessionStorage.removeItem('products');                        
                            this.isGymnasium = true,
                            this.isCulture   = false,
                            this.isTravel    = false,
                            this.isEducation = false,
                            this.isWood      = false,
                            this.isIntelligence = false
                            
                    }break;
                    case "1":{
                        $('html,body').animate({scrollTop:$("#center").offset().top},'slow');
                          $(".products-sm").eq(1).addClass('products-sm-show').siblings().removeClass("products-sm-show");
                        $('.products-sm-line').css("border","1px solid #999999");
                        $('.products-sm-line').eq(1).css("border","1px solid #E73838");
                        $('.products-sm-img').css("background","#999999");                
                        $('.products-sm-img').eq(1).css("background","#E73838");
                        sessionStorage.removeItem('products');  
                            this.isGymnasium = false,
                            this.isCulture   = true,
                            this.isTravel    = false,
                            this.isEducation = false,
                            this.isWood      = false,
                            this.isIntelligence = false
                    }break;
                    case "2":{
                        $('html,body').animate({scrollTop:$("#center").offset().top},'slow');
                          $(".products-sm").eq(2).addClass('products-sm-show').siblings().removeClass("products-sm-show");
                        $('.products-sm-line').css("border","1px solid #999999");
                        $('.products-sm-line').eq(2).css("border","1px solid #E73838");
                        $('.products-sm-img').css("background","#999999");                
                        $('.products-sm-img').eq(2).css("background","#E73838");
                        sessionStorage.removeItem('products'); 
                            this.isGymnasium = false,
                            this.isCulture   = false,
                            this.isTravel    = true,
                            this.isEducation = false,
                            this.isWood      = false,
                            this.isIntelligence = false 
                    }break;
                    case "3":{
                        $('html,body').animate({scrollTop:$("#center").offset().top},'slow');
                          $(".products-sm").eq(3).addClass('products-sm-show').siblings().removeClass("products-sm-show");
                        $('.products-sm-line').css("border","1px solid #999999");
                        $('.products-sm-line').eq(3).css("border","1px solid #E73838");
                        $('.products-sm-img').css("background","#999999");                
                        $('.products-sm-img').eq(3).css("background","#E73838");
                        sessionStorage.removeItem('products');
                            this.isGymnasium = false,
                            this.isCulture   = false,
                            this.isTravel    = false,
                            this.isEducation = true,
                            this.isWood      = false,
                            this.isIntelligence = false 
                    }break;
                    case "4":{
                        $('html,body').animate({scrollTop:$("#center").offset().top},'slow');
                          $(".products-sm").eq(4).addClass('products-sm-show').siblings().removeClass("products-sm-show");
                        $('.products-sm-line').css("border","1px solid #999999");
                        $('.products-sm-line').eq(4).css("border","1px solid #E73838");
                        $('.products-sm-img').css("background","#999999");                
                        $('.products-sm-img').eq(4).css("background","#E73838");
                        sessionStorage.removeItem('products');
                            this.isGymnasium = false,
                            this.isCulture   = false,
                            this.isTravel    = false,
                            this.isEducation = false,
                            this.isWood      = true,
                            this.isIntelligence = false  
                    }break;
                    case "5":{
                        $('html,body').animate({scrollTop:$("#center").offset().top},'slow');
                          $(".products-sm").eq(5).addClass('products-sm-show').siblings().removeClass("products-sm-show");
                        $('.products-sm-line').css("border","1px solid #999999");
                        $('.products-sm-line').eq(5).css("border","1px solid #E73838");
                        $('.products-sm-img').css("background","#999999");                
                        $('.products-sm-img').eq(5).css("background","#E73838");
                        sessionStorage.removeItem('products'); 
                            this.isGymnasium = false,
                            this.isCulture   = false,
                            this.isTravel    = false,
                            this.isEducation = false,
                            this.isWood      = false,
                            this.isIntelligence = true 
                    }break;
                    case "6":{
                        $('html,body').animate({scrollTop:$("#afterSale").offset().top},'slow'); 
                          $(".products-sm").eq(0).addClass('products-sm-show').siblings().removeClass("products-sm-show");
                        $('.products-sm-line').css("border","1px solid #999999");
                        $('.products-sm-line').eq(0).css("border","1px solid #E73838");
                        $('.products-sm-img').css("background","#999999");                
                        $('.products-sm-img').eq(0).css("background","#E73838");
                        sessionStorage.removeItem('products');
                          this.isGymnasium = true,
                            this.isCulture   = false,
                            this.isTravel    = false,
                            this.isEducation = false,
                            this.isWood      = false,
                            this.isIntelligence = false
                    }break;
                }
             }
            switch(this.$route.query.id){
                 case "0" : {
                     $('html,body').animate({scrollTop:$("#center").offset().top},'slow'); 
                 }break;
             }
            if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                $(".products-pic-mask").css("height","300px")
                $(".products-pic").css("height","300px")
            }
        },
        methods:{
            clickSmImg(e){
                let index = $(e.currentTarget).index();
                this.index = index;
                $(e.currentTarget).addClass('products-sm-show').siblings().removeClass("products-sm-show");
                // $('.products-sm-line').eq(index).addClass('products-sm-line-show');
                $('.products-sm-line').css("border","1px solid #999999");
                $('.products-sm-line').eq(index).css("border","1px solid #E73838");
                $('.products-sm-img').css("background","#999999");                
                $('.products-sm-img').eq(index).css("background","#E73838");
               switch(index){
                   case 0:{ this.isGymnasium = true,
                            this.isCulture   = false,
                            this.isTravel    = false,
                            this.isEducation = false,
                            this.isWood      = false,
                            this.isIntelligence = false
                            }break;
                   case 1:{ this.isGymnasium = false,
                            this.isCulture   = true,
                            this.isTravel    = false,
                            this.isEducation = false,
                            this.isWood      = false,
                            this.isIntelligence = false
                       }break;
                   case 2:{ this.isGymnasium = false,
                            this.isCulture   = false,
                            this.isTravel    = true,
                            this.isEducation = false,
                            this.isWood      = false,
                            this.isIntelligence = false
                        }break;
                   case 3:{ this.isGymnasium = false,
                            this.isCulture   = false,
                            this.isTravel    = false,
                            this.isEducation = true,
                            this.isWood      = false,
                            this.isIntelligence = false
                        }break;
                   case 4:{ this.isGymnasium = false,
                            this.isCulture   = false,
                            this.isTravel    = false,
                            this.isEducation = false,
                            this.isWood      = true,
                            this.isIntelligence = false
                        }break;
                   case 5:{ this.isGymnasium = false,
                            this.isCulture   = false,
                            this.isTravel    = false,
                            this.isEducation = false,
                            this.isWood      = false,
                            this.isIntelligence = true
                        }break;
               }
            },
            clickLeft(){
                var num = this.index;
                num--
                if(num >= 0){
                    $('.products-sm').eq(num).addClass('products-sm-show').siblings().removeClass("products-sm-show");
                    $('.products-sm-line').css("border","1px solid #999999");
                    $('.products-sm-line').eq(num).css("border","1px solid #E73838");
                    $('.products-sm-img').css("background","#999999");                
                    $('.products-sm-img').eq(num).css("background","#E73838");
                    this.index = num;
                }
                if(num < 0){
                    num = 0
                }
                switch(num){
                   case 0:{ this.isGymnasium = true,
                            this.isCulture   = false,
                            this.isTravel    = false,
                            this.isEducation = false,
                            this.isWood      = false,
                            this.isIntelligence = false                            
                            }break;
                   case 1:{ this.isGymnasium = false,
                            this.isCulture   = true,
                            this.isTravel    = false,
                            this.isEducation = false,
                            this.isWood      = false,
                            this.isIntelligence = false
                       }break;
                   case 2:{ this.isGymnasium = false,
                            this.isCulture   = false,
                            this.isTravel    = true,
                            this.isEducation = false,
                            this.isWood      = false,
                            this.isIntelligence = false
                        }break;
                   case 3:{ this.isGymnasium = false,
                            this.isCulture   = false,
                            this.isTravel    = false,
                            this.isEducation = true,
                            this.isWood      = false,
                            this.isIntelligence = false
                        }break;
                   case 4:{ this.isGymnasium = false,
                            this.isCulture   = false,
                            this.isTravel    = false,
                            this.isEducation = false,
                            this.isWood      = true,
                            this.isIntelligence = false
                        }break;
                   case 5:{ this.isGymnasium = false,
                            this.isCulture   = false,
                            this.isTravel    = false,
                            this.isEducation = false,
                            this.isWood      = false,
                            this.isIntelligence = true
                        }break;
               }
              
            },
            clickRight(){
                var num = this.index;
                num++
                if(num <= 5){
                    $('.products-sm').eq(num).addClass('products-sm-show').siblings().removeClass("products-sm-show");
                    $('.products-sm-line').css("border","1px solid #999999");
                    $('.products-sm-line').eq(num).css("border","1px solid #E73838");
                    $('.products-sm-img').css("background","#999999");                
                    $('.products-sm-img').eq(num).css("background","#E73838");
                    this.index = num;
                }
                if(num > 5){
                    num = 5
                }
                switch(num){
                   case 0:{ this.isGymnasium = true,
                            this.isCulture   = false,
                            this.isTravel    = false,
                            this.isEducation = false,
                            this.isWood      = false,
                            this.isIntelligence = false
                            }break;
                   case 1:{ this.isGymnasium = false,
                            this.isCulture   = true,
                            this.isTravel    = false,
                            this.isEducation = false,
                            this.isWood      = false,
                            this.isIntelligence = false
                       }break;
                   case 2:{ this.isGymnasium = false,
                            this.isCulture   = false,
                            this.isTravel    = true,
                            this.isEducation = false,
                            this.isWood      = false,
                            this.isIntelligence = false
                        }break;
                   case 3:{ this.isGymnasium = false,
                            this.isCulture   = false,
                            this.isTravel    = false,
                            this.isEducation = true,
                            this.isWood      = false,
                            this.isIntelligence = false
                        }break;
                   case 4:{ this.isGymnasium = false,
                            this.isCulture   = false,
                            this.isTravel    = false,
                            this.isEducation = false,
                            this.isWood      = true,
                            this.isIntelligence = false
                        }break;
                   case 5:{ this.isGymnasium = false,
                            this.isCulture   = false,
                            this.isTravel    = false,
                            this.isEducation = false,
                            this.isWood      = false,
                            this.isIntelligence = true
                        }break;
               }
            },
            moveProducts(e){
                let index = $(e.currentTarget).index();
            },

        }
    }
</script>

<style scoped>
/*配套材料*/
.material-list{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0;
}
.material-list li{
    width: 382px;
    overflow: hidden;
    margin-top: 20px;
}
.material-list li p{
    text-align: center;
    line-height: 30px;
}
.material{
    padding: 20px 0;
}
.products-service{
    width: 160px;
    text-align: left;
}
.products-service h2{
    width: 96px;
    font-weight: normal;
    line-height: 40px;
    border-bottom: 3px solid #333;
    position: relative;
}
.products-line{
    width: 30px;
    border-top: 4px solid #E73838;
    position: absolute;
    bottom: -3px;
    right: -28px;
}
.products-more{
    text-align: right;
    line-height: 78px;
    color: #1A1A1C;
    cursor: pointer;
}
.products-word{
    font-size: 14px;
    line-height: 35px;
    color: #9c9c9c;
}
/*配套材料结束*/
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
    overflow: hidden;
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
/*介绍*/
.products-sm-all{
    width: 1000px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    color: #999999;
    padding: 50px 0;
    text-align: center;
}
.products-sm{
    width: 110px;
    cursor: pointer;
    margin-top: 10px;
}
.products-sm-eg{
    font-size: 12px;
}
.products-sm-img{
    width: 50px;
    height: 50px;
    overflow: hidden;
    background: #999999;
    border-radius: 50%;
    position: relative;
    margin: 0 auto;
    
}
.products-sm-img img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    
}
.products-sm-line{
    width: 25px;
    margin: 10px auto;
    border-bottom: 2px solid #999999;
}
.products-box{
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    position: relative;
}
.products-pic{
    width: 32%;
    height: 312px;
    overflow: hidden;
    margin-bottom: 12px;
    position: relative;
}
.products-pic-mask{
    width: 100%;
    height: 312px;
    overflow: hidden;
    background: rgba(231, 56, 56, 0.74);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
}
.products-pic-mask:hover{
    opacity: 1;
}
.mask-text{
    width: 300px;
    text-align: center;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.line{
    width: 30px;
    border: 1px solid #fff;
    margin: 15px auto;
}
.mask-text p{
    font-size: 12px;
}
.products-pic img{
    width: 100%;
    height: 100%;  
}
.left-box,.right-box{
    width: 40px;
    height: 40px;
    margin: 0 auto;
    background: #dedede;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    opacity: 0;
    transition: all .5s;
}
.left-box{
    left: 0;
}
.right-box{
    right: 0;
}
.left-box:hover{
    background: #E73838;
}
.right-box:hover{
    background: #E73838;
}
.lage-box{
    display: flex;
    justify-content: space-between;
    position: relative;
}
.lage-box:hover .left-box{
    opacity: 1;
}
.lage-box:hover .right-box{
    opacity: 1;
}
.next,.prev{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.prev{
    transform: translateX(-50%) translateY(-50%) rotateY(180deg);
}
.products-sm-show{
    color: #E73838 !important;
}
.products-sm-img-show{
    background: #E73838 !important;
}
.products-sm-line-show{
    border-bottom: 2px solid #E73838;
}

@media (max-width: 1280px){
    .el-header, .el-main, .el-footer{
        width: 1280px
    }
}
</style>