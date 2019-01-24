<template>
      <div class="content">
        <el-container>
            <el-header><Header/></el-header>
            <el-main>
                <div class="main">
                    <!-- 背景图开始 -->
                    <div class="title-bj">
                        <div class="about-words">
                            <p>About us</p>
                            <h1>关于我们</h1>
                        </div>
                    </div>
                    <!-- 背景图结束 -->
                    <!-- 公司简介 -->
                    <div class="company-info" id="introduction">
                        <div class="wrap">
                                <div class="company-box">
                                    <el-col class="company-title-box company-title-t" :span="6">
                                        <div class="company-title">
                                            <h1>公司简介</h1>
                                            <div class="line"></div>
                                            <p>Company profile</p>
                                        </div>       
                                    </el-col>
                                    <el-col class="company-title-box company-title-b" :span="16">
                                        <section class="company-title company-section">
                                            <p>
                                                四川甲子文化体育工程有限公司成立于1996年，总部设立在中国成都，经过二十多年的发展，形以“文化产业为核心、集成化装配式建筑与智能为两翼”的现代化企业。旗下拥有多个子公司，在重庆、贵州、新疆等地设有分公司，在上海、北京等地设立办事处。公司主要从事：体育场馆、体育公园、影剧院、博物馆、规划展览馆、旅游景区、木结构酒店、幼儿园设计、幕墙设计、声学设计、智能化设计等，是集研发、设计、生产、施工、售后服务为一体的综合性公司。
                                            </p>
                                            <p>
                                                为了给客户提供更新颖的设计和产品，我们与美国PLH公司协同设计，研发了属于公司自己的品牌产品--集成化装配式建筑（木结构体育场馆）、建筑智能化系统。
                                            </p>
                                            <p>
                                                  公司与德国HUTTEMANN公司进行技术合作，采用北美进口木材料，引进德国威力公司高精设备，保证加工的产品尺寸精度和美观要求，确保每一个构件高质量高精准度，由专业施工队伍进行安装，打造出以绿色、节能、环保、健康、便捷为一体的绿色场馆，引领绿色环保体育产业的发展，不遗余力打造“甲子—绿色场馆缔造者”的品牌！
                                            </p>    
                                            <p>
                                                公司具备建筑装饰专业承包壹级资质、建筑幕墙工程专业承包壹级资质、展览陈列设计施工一体化一级资质，展览工程企业资质一级资质、建筑智能化系统设计专项乙级、钢结构工程专业承包贰级资质、建筑工程总承包贰级资质、市政公用工程总承包叁级资质。
                                            </p> 
                                            <p>
                                                项目策划咨询和设计、专业工程营建和完善的售后服务体系是公司对每位客户的承诺。多年来，我们成功为众多学校、医院和单位提供了高品质的设计和施工。
                                            </p>   
                                            <p>
                                                 公司组建以来始终以“信誉第一，顾客至上”为经营理念，以“团结、拼搏、开拓、敬业”为企业文化精神，以“抓制度、促管理，抓品牌、促发展，抓诚信、促互助，抓服务、促信誉” 24字准则为企业的工作方针，形成了一套科学而严谨的现代化企业经营构架，一步一个脚印的在竞争激烈的建筑装饰市场中逐渐发展壮大。时代在发展，社会在进步，我们将以独有的超前设计思维、精湛的施工工艺和“诚实守信”的理念，一如既往，与时俱进，再创辉煌。
                                            </p>          
                                        </section>
                                    </el-col>
                                </div>
                                <div class="company-sign">
                                    <el-row >
                                        <el-col class="sign-rep" :span="8">
                                            <img class="sign-img" src="../../static/images/home/xyd.png" alt="加载失败">
                                            <p>以“信誉第一，顾客至上”为经营理念</p>
                                        </el-col>
                                        <el-col class="sign-unite" :span="8">
                                            <img class="sign-img" src="../../static/images/home/wh.png" alt="加载失败">
                                            <p>以“团结、拼搏、开拓、敬业”为企业文化精神</p>
                                        </el-col>
                                        <el-col class="sign-sys" :span="8">
                                            <img class="sign-img" src="../../static/images/home/gzfz.png" alt="加载失败">
                                            <p>
                                                 以“抓制度、促管理，
                                            </p>
                                            <p>
                                                抓品牌、促发展，抓诚信、促互助，
                                            </p>
                                            <p>
                                                 抓服务、促信誉”24字准则为企业的工作方针
                                            </p>
                                        </el-col>
                                    </el-row>
                                </div>
                        </div>
                       
                    </div>
                    <!-- 企业文化开始 -->
                     <div class="company-culture" id="culture">
                    </div>
                    <!-- 企业文化结束 -->
                    <!-- 相关证书 -->
                    <div class="certificate-title" id="honor">
                        <h1>RELATED CERTIFICATES</h1>
                        <h3>相关证书</h3>
                        <div class="line certificate-line"></div>
                        <div class="certificate-tab">
                            <p class="certificate-tab-show" @click="changeCertificate">企业荣誉</p>
                            <p @click="changeCertificate">资质专利</p>
                        </div>
                    </div>
                    <!-- 证书轮播图 -->
                    <div class="certificate-title-b">
                        <div class="wrap">
                            <!-- 企业荣誉 -->
                            <el-carousel class="certificate-show" :autoplay="false" :interval="55000" height="750px" v-show="isCertificate">
                                <el-carousel-item class="certificate-carousel">
                                    <div class="certificateImg-box" v-for="(item,index) in certificateImgOne" :key="index">
                                        <img v-lazy="item"/>
                                    </div>
                                </el-carousel-item>
                                <el-carousel-item class="certificate-carousel">
                                    <div class="certificateImg-box" v-for="(item,index) in certificateImgTwo" :key="index">
                                        <img v-lazy="item"/>
                                    </div>
                                </el-carousel-item>
                            </el-carousel>
                            <el-carousel class="certificate-hidden" :autoplay="false" :interval="55000" height="500px" v-show="isCertificate">
                                <el-carousel-item class="certificate-carousel">
                                    <div class="certificateImg-box" v-for="(item,index) in certificateImgOne" :key="index">
                                        <img v-lazy="item"/>
                                    </div>
                                </el-carousel-item>
                                <el-carousel-item class="certificate-carousel">
                                    <div class="certificateImg-box" v-for="(item,index) in certificateImgTwo" :key="index">
                                        <img v-lazy="item"/>
                                    </div>
                                </el-carousel-item>
                            </el-carousel>
                            <!-- 资质专利 -->
                             <el-carousel :autoplay="false" :interval="55000" height="880px" v-show="!isCertificate">
                                <el-carousel-item class="certificate-carousel">
                                    <div class="patentImg-box" v-for="(item,index) in patentImgTwo" :key="index">
                                        <img v-lazy="item"/>
                                    </div>
                                </el-carousel-item>
                                <el-carousel-item class="certificate-carousel">
                                    <div class="patentImg-box" v-for="(item,index) in patentImgThree" :key="index">
                                        <img v-lazy="item"/>
                                    </div>
                                </el-carousel-item>
                                <el-carousel-item class="certificate-carousel">
                                    <div class="certificateImg-box" v-for="(item,index) in patentImgOne" :key="index">
                                        <img v-lazy="item"/>
                                    </div> 
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </div>
                    <!-- 慈善开始 -->
                    <div class="charitable wrap">
                        <h2 class="charitable-title">抗震救灾 我们万众一心</h2>
                        <p>
                            2008年5月12日，一个让我们永远记住的日子，汶川人民的灾难日，一场8级地震，
                            就在那一瞬间，就在接下来的2万多次余震中，无情的地震灾害夺走了我们千千万
                            万个同胞的生命，千千万万的家庭支离破碎！举国上下为死难的同胞们降半旗默哀！
                        </p>
                        <p>
                            地震无情人有情！抗震救灾，刻不容缓！人民子弟兵第一批响应国家的号召，赶往最
                            前线去支援灾区。接着全国上下都纷纷伸出自己的援手，做自己力所能及的事捐款捐物。
                        </p>
                        <p>
                            四川灾情紧紧牵动着四川甲子文化体育工程有限公司全体员工的心，不仅捐款捐物，
                            有的员工还到前线当了一名光荣的自愿者。在这个时候，大家都已经融入一种大爱的
                            境界里，默默地做着自己该做的事，默默地为灾区人民的祈祷，默默地为祖国祝福着！
                            而在大地震过去了四个月后，我们仍然心系灾区人民，我们来到四川德阳东汽中学，
                            看到他们的艰苦条件都感到心酸，我们为此捐建了东汽中学标准足球场，尽了一点绵薄之力。
                        </p>
                        <div class="charitable-img">
                            <img src="../../static/images/home/kangzhen01.jpg" alt="抗震救灾">
                        </div>
                    </div>
                    <!-- 慈善结束 -->
                    <!-- 客户名单开始 -->
                    <div class="customer wrap" id="directory">
                        <h2>集团、政企部分客户</h2>
                        <ul class="customer-list">
                            <li v-for="(item,index) in customer" :key="index">{{item}}</li>
                        </ul>
                        <h2>学校、医院部分客户</h2>
                        <ul class="customer-list ">
                            <li v-for="(item,index) in school" :key="index">{{item}}</li>
                        </ul>
                    </div>
                    <!-- 客户名单结束 -->
                         <!-- 售后服务 -->
                    <div class="customer-service" id="afterSale">
                        <div class="customer-service-title">
                            <h1>AFTER-SALE SERVICE</h1>
                            <h2>售后服务</h2>
                            <div class="line customer-service-line"></div>
                        </div>
                            <div class="wrap after-box">
                                <div class="service-box">
                                    <div class="service-left">
                                    </div>
                                    <section class="server-right">
                                        <ul class="server-right-list">
                                            <li>为客户免费提供场地规划、设计及安装服务，并可按用户的要求设计；</li>
                                            <li>
                                                质保期内，在正常使用及操作下，如果产品出现任何非人为造成的故障，
                                                影响使用，我公司负责免费维修；为客户免费提供场地规划、设计及安装服务，并可按用户的要求设计；
                                            </li>
                                            <li>
                                                保修期满后，所以产品终身成本维修；
                                            </li>
                                            <li>
                                                接到客户质量问题通知后，我公司人员必须在24小时之内给予回复，48小时到达现场；
                                            </li>
                                            <li>
                                                我们将定期对场地进行回访，随时解决对客户提供的场地维修问题。
                                            </li>
                                        </ul>
                                    </section>
                                </div>
                            </div>
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
        name:'About',
        components: {
            Header,
            Footer
        },
        data(){
            return{
                customer:[
                    "中国电信","中国移动","中国联通","中国石化","中国石油","中国网通","四川教育电视台","宜宾五粮液集团","省博物馆文物保护中心","重庆建设集团","重庆啤酒集团",
                    "四川省锦江大礼堂","新希望集团","双流体育中心","泸州体育中心","柳州体育中心","资阳体育中心","汉源体育中心","达州体育中心","西昌卫星发射中心","中铁二局",
                    "中铁二十三局","攀钢集团","成都建工集团","中国五冶集团","蓝光实业集团","华西集团","丰谷酒业","沱牌集团","省机场集团","东汽集团","绵阳九院","青羊区就业服务中心",
                    "华润集团","置信集团","国腾实业","西藏体育中心","绵阳长虹集团","四川教育电视台","成都军区","自贡军分区","德阳建设花园","四川天华股份","中海格林","拉萨市经济开发区",
                    "阜康体育中心","普什制药","阜康文体局","泸州市文体局","中航工业集团611所","中航工业集团131厂"
                ],
                school:[
                    "四川大学","西南财经大学","四川师范大学","成都大学","西南交通大学","四川文理学院","西华大学","电子科技大学","四川农业大学","成都中医药大学","西南民族大学",
                    "西华师范大学","成都师范大学","成都体育学院","四川音乐学院","四川理工大学","西昌学院","西南石油大学","重庆大学","成都理工大学","成都信息工程学院","成都军区幼儿园",
                    "新南桥小学","拉萨第七中学","拉萨第六中学","拉萨实验小学","东汽八一中学","成都七中","太平寺西区小学","米易县一小","成都业余体校","成都市第九幼儿园","成都贝多彩幼儿园",
                    "成都九中","宜宾一中","德阳五中","成都大华美容院","成都汉密尔顿医院","成都市儿童专科医院","绵阳中心医院","广元市中医医院","西藏灵芝地区人民医院","成都维多利亚女子医院"
                ],
                isCertificate:true,
                cultureImg:"../../static/images/about/企业文化.png",
                patentImgOne:[
                    "http://cdn.jiaziwenhua.cn/images/certifications/csdssgzzyj.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/csdsgcsjjj.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/sjzz1.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/zlgc.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/zlclsjsg.jpg",
                ],
                 patentImgTwo:[
                    "http://cdn.jiaziwenhua.cn/images/certifications/7rzzqg.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/dgngmydg1.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/dgngmydg2.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/jcsgmxtzqg.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/jcsmjglttjc.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/mjgjcszhxyyg.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/mjgyyg-v.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/ydxzhxdb.jpg",
                ],
                patentImgThree:[
                    "http://cdn.jiaziwenhua.cn/images/certifications/yzjcsmjglttjc.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/yzjcsmjgwqggmxt.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/yzmjgjcszhxyyg.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/yzmzwqg.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/yzvxjgyyg.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/yzydxzhxyddb.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/zcbzz.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/zzfb.jpg"
                ],
                certificateImgOne:[
                    "http://cdn.jiaziwenhua.cn/images/certifications/aaa.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/zlxhhy.png",
                    "http://cdn.jiaziwenhua.cn/images/certifications/zsxhhy.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/tyjssh.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/dsxhfhz.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/yzsj.jpg",
                ],
                certificateImgTwo:[
                    "http://cdn.jiaziwenhua.cn/images/certifications/sdjg.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/sjyj.jpg",
                    "http://cdn.jiaziwenhua.cn/images/certifications/sjtj.jpg"
                ]
            }
        },
        mounted(){
             if(sessionStorage.about){
                var index = JSON.parse(sessionStorage.about)[0]
                switch(index){
                    case "0":{
                        $('html,body').animate({scrollTop:$("#introduction").offset().top},'slow');
                        sessionStorage.removeItem('about');  
                    }break;
                    case "1":{
                        $('html,body').animate({scrollTop:$("#introduction").offset().top},'slow'); 
                        sessionStorage.removeItem('about');
                    }break;
                    case "2":{
                        $('html,body').animate({scrollTop:$("#honor").offset().top},'slow');
                        sessionStorage.removeItem('about');
                    }break;
                     case "3":{
                        $('html,body').animate({scrollTop:$("#directory").offset().top},'slow');
                        sessionStorage.removeItem('about');
                    }break;
                     case "4":{
                         $('html,body').animate({scrollTop:$("#afterSale").offset().top},'slow'); 
                        sessionStorage.removeItem('about');
                    }break;
                }
             }
              switch(this.$route.query.id){
                 case "0" : {
                     $('html,body').animate({scrollTop:$("#honor").offset().top},'slow'); 
                 }break;
             }
        },
        methods:{
            changeCertificate(e){
                let $target = $(e.currentTarget)
                $target.addClass("certificate-tab-show").siblings().removeClass("certificate-tab-show")
                this.isCertificate = !this.isCertificate;
            }
        }
    }
</script>

<style scoped>
/*售后服务*/
.customer-service{
    width: 100%;
    height: 748px;
    background: #f1f1f1;
    padding: 100px 0;
}
.customer-service-title{
    width: 405px;
    text-align: left;
    margin: 0 auto;  
}
.customer-service-title h1{
    color: #999999;
    font-weight: normal;
    letter-spacing: 2px;
    font-size: 35px;
}
.customer-service-title h2{
    font-weight: normal;
    font-size: 30px;
    line-height: 60px;
    letter-spacing: 2px;
}
.customer-service-line{
    width: 47px;
    border-top: 2px solid #E73838;
    margin: 5px 0;
}
.service-box{
    height: 370px;
    background: #fff;
    margin-top: 40px;
    display: flex;
    justify-content: space-between;
    padding: 60px;
}
.service-left{
    width: 580px;
    height: 370px;
    background: url("../../static/images/home/ws.png") center center no-repeat;
    background-size: cover;
}
.service-left img{
    width: 100%;
    height: 100%;
}
.server-right{
    width: 42%;
    text-align: justify;
}
.server-right-list{
    list-style: disc !important;
}
.server-right-list li{
    margin-top: 8%;
}
.server-right-list li:first-child{
    margin: 0;
}
/*名录*/
.customer h2{
    width: 300px;
    text-align: center;
    margin: 0 auto;
    background: #fff;
    transform: translateY(32px)
}
.customer-list{
    margin: 20px 0;
    border: 1px solid #000;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 60px;
}
.customer-list li{
    width: 160px;
    line-height: 30px;
    display: inline-block;
    text-align: center;
}
/*慈善*/
.charitable{
    padding: 50px 0;
}
.charitable-title{
    text-align: center;
    margin-bottom: 10px;
}
.charitable p{
    line-height: 30px;
    text-indent: 2em;
}
.charitable-img{
    width: 619px;
    overflow: hidden;
    margin: 20px auto;
}
.company-box{
    display: flex;
    justify-content: space-between;
    height: 490px;
}
.certificate-hidden{
    display: none;
}
/*资质专利*/
.patentImg-box{
    width: 300px;
    height: 400px;
    margin-bottom: 10px;
}
.patentImg-box img{
    width: 100%;
    height: 100%;
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
    overflow: hidden;
    position: relative;
    background: url("http://cdn.jiaziwenhua.cn/images/home/aboutbanner.png") center center no-repeat;
    background-size: cover;
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
/*公司简介*/
.company-info{
    width: 100%;
    /* height: 300px; */
    margin-top: 40px;
}
.company-title-box{
    /* height: 353px; */
    position: relative;
}
.company-title{
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.company-title h1{
    font-weight: normal;
    letter-spacing: 4px;
    font-size: 30px;
}
.company-title p{
    color: #E73838;
    font-size: 14px;
}
.line{
    width: 47px;
    border-top: 2px solid #E73838;
    margin: 15px 0;
}
.company-section{
    width: 71%;
    font-size: 12px;
    text-align: justify;
    text-indent: 2em;
}
.company-section p{
    color: #000;
    margin-bottom: 20px;
}
.company-sign-box{
    height: 235px;
}
.company-sign{
    text-align: center;
    height: 235px;
    background: repeating-linear-gradient(-45deg,#F14F4F 0%,#F14F4F 2%,#F26B6B 2%,#F26B6B 4%);
    transform: translateY(50%);
}
.sign-rep,.sign-unite,.sign-sys{
    height: 235px;
    color: #fff;
}
.sign-rep{
    background: repeating-linear-gradient(-45deg,#F14F4F 0,#F14F4F 2px,#F26B6B 2px,#F26B6B 4px);
}
.sign-unite{
    background: repeating-linear-gradient(-45deg,#F67B6E 0,#F67B6E 2px,#F26B6B 2px,#F26B6B 4px);
}
.sign-sys{
    background: repeating-linear-gradient(-45deg,#F14F4F 0,#F14F4F 2px,#F26B6B 2px,#F26B6B 4px);
}
.sign-img{
    margin: 55px 0;
}
.sign-img:last-of-type{
    margin-top:55px;
    margin-bottom: 30px;
}
/*企业文化*/
.company-culture{
    width: 100%;
    height: 370px;
    overflow: hidden;
    /* margin-top: 160px; */
    background: url("../../static/images/home/qywh.png") center center no-repeat;
    background-size:cover;
}
.company-culture img{
    width: 100%;
    height: 100%;
}
/*相关证书*/
.certificate-title{
    width: 100%;
    height: 300px;
    text-align: center;
    padding-top: 85px;
    margin-bottom: 80px;
    box-sizing: border-box;
    position: relative;
    
}
.certificate-title-b{
    background: #e0dede;
    padding-top: 50px;
}
.certificate-title h1{
    color: #999999;
    font-weight: normal;
    letter-spacing: 4px;
}
.certificate-title h3{
    font-weight: normal;
    line-height: 60px;
    letter-spacing: 2px;
}
.certificate-line{
    margin: 5px auto;
    width: 37px;
}
.certificate-tab{
    width: 420px;
    height: 50px;
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}
.certificate-tab p{
    width: 210px;
    line-height: 50px;
    background: #999999;
    color: #fff;
    cursor: pointer;
}
.certificate-tab-show{
    background: #E73838 !important;
}
.certificate-carousel{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.certificateImg-box{
    width: 400px;
    height: 300px;
    overflow: hidden;
    border: 4px solid #fff;
}
.certificateImg-box img{
    width: 100%;
    height: 100%;
}
.el-carousel__arrow{
    top: 45%;  
    background-color: rgba(31, 45, 61, 0.25);
}
@media (max-width: 1280px){
    .el-header, .el-main, .el-footer{
        width: 1280px
    }
}
</style>