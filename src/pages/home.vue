<template>
    <div class="content">
        <el-container>
            <!-- 导航开始 -->
            <el-header>
                <Header/> 
            </el-header>

            <!-- 导航结束 -->
            <el-main>
                <div class="main">
                    <div class="carousel-mask"></div>
                    <!-- 轮播图开始 -->
                    <el-carousel :interval="5000" height="" autoplay class="home-t" arrow="never" indicator-position="none" trigger="click">
                        <el-carousel-item>
                            <div class="carousel-t-box-t">
                                <section class="banner_content banner_one">
                                    <h1><span>快乐</span>运动</h1>
                                    <h2>绿色场馆</h2>
                                </section> 
                            </div>
                        </el-carousel-item>
                        <el-carousel-item>
                            <div class="carousel-t-box-c">
                                <section class="banner_content banner_two">
                                    <h1>运动场馆 <span>专业</span>服务商</h1>
                                    <h2>集研发、咨询、设计、生产、安装一体化服务</h2>
                                </section> 
                            </div>
                        </el-carousel-item>
                        <el-carousel-item>
                            <div class="carousel-t-box-b">
                                <section class="banner_content banner_three">
                                    <h1>选择我们的三大<span>优势</span></h1>
                                    <p>甲子专业设计团队</p>
                                    <p>多年业内专业经验</p>
                                    <p>服务模式先进尽心</p>
                                </section> 
                            </div>
                        </el-carousel-item>
                        <el-carousel-item>
                            <div class="carousel-t-box-cc">
                                <section class="banner_content banner_four">
                                    <h1>文化、旅游、体育<span>22年</span>行业领先</h1>
                                </section> 
                            </div>
                        </el-carousel-item>
                        <el-carousel-item>
                            <div class="carousel-t-box-bb">
                                  <section class="banner_content banner_five">
                                    <h1>全国<span>首家</span>木结构场馆创造者</h1>
                                </section> 
                            </div>
                        </el-carousel-item>
                    </el-carousel> 
                    <!-- 轮播图结束 -->
                    <!-- 团队优势开始 -->
                    <div class="introduce-just">
                        <div class="introduce-box" v-for="(item,index) in introduce" :key="index">                           
                            <div class="introduce">
                                <img v-lazy="item.inPic">
                                <h3>{{item.inTitle}}</h3>
                                <div class="line"></div>
                                <p>{{item.inDis}}</p>
                            </div>
                        </div>   
                    </div>   
                    <!-- 团队优势结束 -->
                    <!-- 产品服务 -->
                    <div class="products-title wrap" id="service">
                            <el-row type="flex" justify="space-between">
                                <el-col :span="5">
                                    <div class="products-service">
                                        <h2>产品服务<div class="products-line"></div></h2>                                       
                                        <p class="products-word">Product service</p>
                                    </div>
                                </el-col>
                                 <el-col :span="5">
                                    <div class="products-more">
                                        <p @click="gotoProduct">更多 <span> > </span></p>
                                    </div>
                                </el-col>
                            </el-row>
                            <!-- 大图 -->
                            <div class="lage-box">
                                <div @click="clickLeft" class="left-box">
                                    <img class="prev" :src="imgUrl.imgRight"/>
                                </div>
                                <div class="products-lg">      
                                    <img :src="lgImg" v-lazy="lgImg">
                                    <div class="lg-mask">
                                        <div class="lg-mask-text">
                                            <p>{{lgSlogan}}</p>
                                            <p class="lg-mask-more" @click="gotoProduct">了解更多</p>
                                        </div>
                                    </div> 
                                </div>
                                <div @click="clickRight" class="right-box">
                                    <img class="next" :src="imgUrl.imgRight"/>
                                </div>
                            </div>                           
                            <!-- 小图 -->
                            <el-row type="flex" justify="space-between" class="products-sm-box">
                                    <div  @click="changePic" class="products-sm" v-for="(item,index) in 6" :key="index">
                                        <img  class="products-sm-img" v-lazy="smUrl.smImg[index]"/>
                                        <div class="mask"></div>
                                        <div class="products-mask-img">
                                            <img v-lazy="smUrl.smSign[index]"/>
                                            <span>{{smUrl.smDis[index]}}</span>
                                        </div>                                        
                                    </div>                                 
                            </el-row>
                    </div>
                    <!-- 体验定制开始 -->
                    <div class="customized wrap" id="customized">
                        <el-row type="flex" justify="space-between">
                            <el-col :span="5">
                                <div class="products-service">
                                    <h2>体验定制<div class="products-line"></div></h2>                                       
                                    <p class="products-word">Customization</p>
                                </div>
                            </el-col>
                            <el-col  :span="5">
                                <div class="products-more">
                                    <p @click="gotoCase">更多 <span> > </span></p>
                                </div>
                            </el-col>
                        </el-row>
                        <div class="customized-box">
                            <div class="customized-l">
                                <ul class="style-list">
                                    <li><span>款式</span>可设计</li>
                                    <li><span>尺寸</span>可变化</li>
                                    <li><span>颜色</span>可选择</li>
                                    <li><span>预算</span>可高低</li>
                                </ul>
                                <div class="customized-img">
                                </div>
                                <div class="customized-design">
                                    <p><span>百变设计</span>一样的场馆,百变的样式</p>
                                </div>
                            </div>
                             <div class="customized-c">
                                 <div class="customized-lg-img">
                                 </div>
                                 <div class="customized-sm-img">
                                     <div @mousemove="moveImg" class="sm-img sm-img-gymnasium">
                                         
                                         <div class="sm-mask" data-index="0"></div>
                                         <p>网球馆</p>
                                     </div>
                                     <div @mousemove="moveImg" class="sm-img sm-img-stadium" data-index="1">
                                        
                                        <div class="sm-mask" data-index="1"></div>
                                        <p>幼儿园</p>
                                     </div>
                                     <div @mousemove="moveImg" class="sm-img sm-img-multifunctional" data-index="2">
                                        
                                        <div class="sm-mask" data-index="2"></div>
                                        <p>多功能馆</p>
                                     </div>
                                 </div>
                            </div>
                             <div class="customized-r">
                                 <ul class="details-list">
                                     <li>
                                         <div class="details-img">
                                             <img src="http://cdn.jiaziwenhua.cn/image/home/tiyu.png" alt="加载失败">
                                         </div>
                                         <section class="details-describe">
                                             <p class="describe-title">广安新城体育馆</p>
                                             <p class="describe-content imitate_ellipsis">
                                                 设计人性化：设计计突出以人为本的理念，彰显人性化的技术表现、
                                                实现代科技信息的使用功效、 达成既有共性又有个性综合性公共使   
                                                用空间；办公高效化：提供舒适有效的运动空同，庄重，典雅、大气
                                                的甚享空同，行成舒适的室内交通流线，适应未来发势趋势；文化感：
                                                体现现代化低碳综合性建筑空间形象，简洁、大气、稳重的室内空间、
                                                装饰手法融合绿色低碳文化特性和当今流行趋势。
                                             </p>
                                             <p class="describe-more" data-id="1" @click="gotoDetail">更多</p>
                                         </section>
                                    </li>
                                    <li>
                                         <div class="details-img">
                                             <img src="http://cdn.jiaziwenhua.cn/hkbwg.png" alt="加载失败">
                                         </div>
                                         <section class="details-describe">
                                             <p class="describe-title">阜康博物馆</p>
                                             <p class="describe-content imitate_ellipsis">
                                               突破国内传统博物馆思路，通过对阜康的历史文化、风土人文等方面的研究，
                                               获取了“灵山圣水、人杰地灵、物阜民康”的设计主题，将“灵山圣水、物阜民
                                               康”作为展示核心，突出阜康人杰地灵的城市形象，展现了阜康从古至今一轴
                                               淡远、疏朗、秾丽的画卷。
                                             </p>
                                             <p class="describe-more" data-id="2" @click="gotoDetail">更多</p>
                                         </section>
                                    </li>
                                    <li>
                                         <div class="details-img">
                                             <img src="http://cdn.jiaziwenhua.cn/ybgz.jpg" alt="加载失败">
                                         </div>
                                         <section class="details-describe">
                                             <p class="describe-title">泸州尧坝古镇</p>
                                             <p class="describe-content imitate_ellipsis">
                                                原生态民俗文化体验为特色的生态人文休闲小镇;活着的古镇，
                                                心灵的家园;南方丝绸之路上的古驿站 总体布局 ：一轴、一镇、
                                                三区【一轴】旅游发展轴，以384乡道为东西走向的旅游发展轴，
                                                联系三个旅游发展片区，形成旅游经济延伸轴。
                                             </p>
                                             <p class="describe-more" data-id="3" @click="gotoDetail">更多</p>
                                         </section>
                                    </li>
                                 </ul>
                            </div>
                        </div>
                    </div>
                    <!-- 体验定制结束 -->
                    <!-- 甲子案例 -->
                    <div class="case-t" id="case">
                        <div class="products-title wrap">
                            <el-row type="flex" justify="space-between">
                                <el-col :span="5">
                                    <div class="products-service">
                                        <h2>甲子案例<div class="products-line"></div></h2>                                       
                                        <p class="products-word">Classic case</p>
                                    </div>
                                </el-col>
                                 <el-col :span="5" class="case-classify">
                                    <div @click="changeCase" class="case-design">
                                        <p>设计案例</p>
                                        <div class="case-line" v-show="isCaseShow"></div>
                                    </div>
                                    <div @click="changeCase" class="case-project">
                                        <p>工程案例</p>
                                        <div class="case-line" v-show="!isCaseShow"></div>
                                    </div>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                    <!-- 设计案例 -->
                    <div class="case-t">
                        <div class="products-title products-design  wrap" v-show="isCaseShow">
                                <div class="example-box" v-for="(item,index) in caseImg" :key="index">
                                    <div class="case-example">
                                        <div class="case-example-img">
                                            <img v-lazy="item"/>
                                            <p class="understand-more" @click="goCaseDetail" :data-id="caseId[index]">了解更多</p>
                                        </div>
                                        <div class="case-example-des">
                                            <div class="case-example-des-pos">
                                                <h3>{{caseTitle[index]}}</h3>
                                                <p>{{caseDes[index]}}</p>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <!-- 工程案例 -->
                    <div class="case-t">
                        <div class="products-title products-design wrap" v-show="!isCaseShow">
                                <div class="example-box" v-for="(item,index) in projectImg" :key="index">
                                    <div class="case-example">
                                        <div class="case-example-img">
                                            <img v-lazy="item"/>
                                            <p class="understand-more" @click="goCaseDetail" :data-id="projectId[index]">了解更多</p>
                                        </div>
                                        <div class="case-example-des">
                                            <div class="case-example-des-pos">
                                                <h3>{{projectTitle[index]}}</h3>
                                                <p>{{projectDes[index]}}</p>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div class="line-more">
                        <div class="line-more-pos" @click="gotoCase">
                            <p>MORE</p>
                            <p>
                                <img src="../../static/images/home/jr.png">
                            </p>                         
                        </div>
                    </div>            
                    <!-- 优势开始 -->
                    <div class="advantage wrap" id="advantage">
                        <el-row type="flex" justify="space-between">
                            <el-col :span="5">
                                <div class="products-service">
                                    <h2>甲子优势<div class="products-line"></div></h2>                                       
                                    <p class="products-word">Leading advantage</p>
                                </div>
                            </el-col>
                        
                        </el-row>
                        <ul class="advantage-list">
                            <li>
                                <div class="advantage-technology advantage-img">
                                </div>
                                <p class="advantage-title">技术优势</p>
                                <div class="advantage-line"></div>
                                <p class="advantage-text">
                                    行业的顶尖设计团队，木结构场馆专利技术，专业的资质认证
                                </p>
                            </li>
                              <li>
                                <div class="advantage-brand advantage-img">
                                </div>
                                <p class="advantage-title">品牌优势</p>
                                <div class="advantage-line"></div>
                                <p class="advantage-text">
                                    公司96年成立，22年运营经验，体育行业知名品牌，一直保持行业领先地位
                                </p>
                            </li>
                              <li>
                                <div class="advantage-market advantage-img">
                                </div>
                                <p class="advantage-title">市场优势</p>
                                <div class="advantage-line"></div>
                                <p class="advantage-text">
                                    巨大市场前景，朝阳行业，民生行业潜力无限
                                </p>
                            </li>
                              <li>
                                <div class="advantage-service advantage-img">
                                </div>
                                <p class="advantage-title">服务优势</p>
                                <div class="advantage-line"></div>
                                <p class="advantage-text">
                                    打破流水作业，实现个性定制化一站式服务
                                </p>
                            </li>
                              <li>
                                <div class="advantage-pattern advantage-img">
                                </div>
                                <p class="advantage-title">模式优势</p>
                                <div class="advantage-line"></div>
                                <p class="advantage-text">
                                    是集研发、咨询、设计、生产、施工、售后服务为一体的综合性公司
                                </p>
                            </li>
                        </ul>
                    </div>
                    <!-- 优势结束 -->
                    <!-- 资质专利 -->
                    <div class="products-title wrap" id="patent">
                        <el-row type="flex" justify="space-between">
                            <el-col :span="5">
                                <div class="products-service">
                                    <h2>资质专利<div class="products-line"></div></h2>                                       
                                    <p class="products-word">Product service</p>
                                </div>
                            </el-col>
                            <el-col :span="5">
                                <div class="products-more">
                                    <p @click="gotoPatent">更多 <span> > </span></p>
                                </div>
                            </el-col>
                        </el-row>
                        <div class="honor-box">
                            <div class="honor-img honor-img-t">
                                <img src='http://cdn.jiaziwenhua.cn/images/certifications/csdsgcsjjj.jpg' alt="加载失败...">       
                            </div>
                            <div class="honor-img honor-img-c">
                                <img src="http://cdn.jiaziwenhua.cn/images/certifications/csdssgzzyj.jpg" alt="加载失败...">                                            
                            </div>
                            <div class="honor-img honor-img-cc">
                                <img src="http://cdn.jiaziwenhua.cn/images/certifications/zlclsjsg.jpg" alt="加载失败...">                                          
                            </div>
                            <div class="honor-img honor-img-b">
                                <img src="http://cdn.jiaziwenhua.cn/images/certifications/zlgc.jpg" alt="加载失败...">                                          
                            </div>
                        </div>
                    </div>
                    <!-- 新闻开始 -->
                    <div class="about-our news">
                        <el-row type="flex" justify="space-between">
                            <el-col :span="5">
                                <div class="products-service">
                                    <h2>新闻资讯<div class="products-line"></div></h2>                                       
                                    <p class="products-word">News information</p>
                                </div>
                            </el-col>
                            <el-col :span="5">
                                <div class="products-more">
                                    <p @click="gotoNews">更多 <span> > </span></p>
                                </div>
                            </el-col>
                        </el-row>
                        <div class="news-box">
                            <div class="news-left" :data-id="currentNews.id" @click="goNewsDetail">
                                <div class="news-left-img">
                                <img :src="currentNews.thumbnail" alt="加载失败...">
                                </div>
                                <div class="news-left-article">
                                <h3>{{currentNews.title}}</h3>
                                <p>{{currentNews.introduction}}</p>
                                </div>
                            </div>
                            <div class="news-right">
                                <ul class="news-list">
                                    <li v-for="(item,index) in news" :key="index" :data-id="item.id" @click="goNewsDetail">
                                        <div class="news-time">
                                        <p class="day">{{day[index]}}</p>
                                        <p class="month">{{year[index]}}</p>
                                        </div>
                                        <div class="news-article">
                                        <h3>{{item.title}}</h3>
                                        <p>{{item.introduction}}</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                      <div class="line-more news-more">
                        <div class="line-more-pos" @click="gotoNews">
                            <p>MORE</p>
                            <p>
                                <img src="../../static/images/home/jr.png">
                            </p>                         
                        </div>
                    </div> 
                    <!-- 新闻结束 -->
                    <!-- 合作伙伴 -->
                    <div class="partner-box" id="cooperation">
                            <div class="products-title wrap">
                                <el-row type="flex" justify="space-between">
                                    <el-col :span="5">
                                        <div class="products-service">
                                            <h2>合作伙伴<div class="products-line partner-line"></div></h2>                                       
                                            <p class="products-word partner-word">Product service</p>
                                        </div>
                                    </el-col>
                                </el-row>  
                                       
                            </div>
                             <!-- 轮播图 -->
                                <div class="partner-company wrap">
                                    <el-carousel :interval="5000" arrow="never" height="400px">
                                        <el-carousel-item >
                                            <ul class="partner-list">
                                                <li v-for="item in logoImgOne" :key="item">
                                                    <img v-lazy="item"/>
                                                </li>
                                            </ul>
                                        </el-carousel-item>
                                        <el-carousel-item>
                                            <ul class="partner-list">
                                                <li v-for="item in logoImgTwo" :key="item">
                                                    <img v-lazy="item"/>
                                                </li>
                                            </ul>
                                        </el-carousel-item>
                                        <el-carousel-item>
                                            <ul class="partner-list">
                                                <li v-for="item in logoImgThree" :key="item">
                                                    <img v-lazy="item"/>
                                                </li>
                                            </ul>
                                        </el-carousel-item>
                                    </el-carousel>
                                </div>
                    </div>       
                </div>              
            </el-main>
            <el-footer height="auto">
                <div class="footer">
                        <div class="join-us wrap">
                            <div class="join-box">
                                <h2>加入我们的大家庭</h2>
                                <img v-lazy="joinUs"/>
                                <p>加入我们<img class="join-right" src="../../static/images/home/jrzh.png" alt="加载失败"></p>
                            </div>
                        </div>
                        <div class="footer-box wrap">                         
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
                        </div>
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
        name:'Home',
        components: {
            Header,
            Footer
        },
        data(){
            return{
                name:"",
                phone:"",
                email:"",
                word:"",
                initial:"",
                currentNews:"",
                news:[],
                year:[],
                day:[],
                isCaseShow:true,
                imgIndex: 0,
                logoImgOne:[
                    "../../static/images/home/1.jpg",
                    "../../static/images/home/2.jpg",
                    "../../static/images/home/3.jpg",
                    "../../static/images/home/4.jpg",
                    "../../static/images/home/5.png",
                    "../../static/images/home/6.png",
                    "../../static/images/home/7.jpg",
                    "../../static/images/home/8.jpg",
                    "../../static/images/home/9.jpg",
                    "../../static/images/home/10.jpg",
                    "../../static/images/home/11.jpg",
                    "../../static/images/home/12.jpg",
                ],
                logoImgTwo:[
                    "../../static/images/home/13.jpg",
                    "../../static/images/home/14.jpg",
                    "../../static/images/home/15.jpg",
                    "../../static/images/home/16.png",
                    "../../static/images/home/17.png",
                    "../../static/images/home/18.jpg",
                    "../../static/images/home/19.png",
                    "../../static/images/home/20.png",
                    "../../static/images/home/21.jpg",
                    "../../static/images/home/22.jpg",
                    "../../static/images/home/23.jpg",
                    "../../static/images/home/24.jpg",                   
                ],
                logoImgThree:[
                    "../../static/images/home/25.jpg",
                    "../../static/images/home/26.jpg",
                    "../../static/images/home/27.jpg",
                    "../../static/images/home/28.png",
                    "../../static/images/home/29.png",
                    "../../static/images/home/30.jpg",
                    "../../static/images/home/31.jpg",
                    "../../static/images/home/32.jpg",
                    "../../static/images/home/33.jpg",
                    "../../static/images/home/34.jpg",
                    "../../static/images/home/35.jpg",
                    "../../static/images/home/36.jpg",
                ],
                lgSlogan:"体育馆、室外场地、体育公园设计、施工",
                lgMask:[
                    "体育馆、室外场地、体育公园设计、施工",
                    "博物馆、展览馆、科技馆、剧院、报告厅设计、施工",
                    "旅游景区规划设计",
                    "木结构幼儿园设计、施工",
                    "木结构体育馆设计、施工",
                    "体育馆、学校、体育公园智能化系统",
                ],
                joinUs:"../../static/images/home/lc.png",
                footerCode:"../../static/images/home/code.png",
                lgImg:"http://cdn.jiaziwenhua.cn/image/product/tu5.png",
                caseImg:[],
                caseId:[],
                caseTitle:[],
                caseDes:[],
                projectImg:[],
                projectId:[],
                projectTitle:[],
                projectDes:[],
                smUrl:{
                    smSign:[
                        "../../static/images/home/tyg.png",
                        "../../static/images/home/gdsbwg.png",
                        "../../static/images/home/ly.png",
                        "../../static/images/home/ty.png",
                        "../../static/images/home/yey.png",
                        "../../static/images/home/zn.png"
                    ],
                    smImg:[
                        "http://cdn.jiaziwenhua.cn/image/product/tu5.png",
                        "http://cdn.jiaziwenhua.cn/image/product/tu1.png",
                        "http://cdn.jiaziwenhua.cn/image/product/tu7.jpg",
                        "http://cdn.jiaziwenhua.cn/image/product/tu2.png",
                        "http://cdn.jiaziwenhua.cn/image/product/tu4.png",
                        "http://cdn.jiaziwenhua.cn/image/product/tu6.png"
                    ],
                    smDis:[
                        "体育",
                        "文化",
                        "旅游",
                        "教育",
                        "木结构",
                        "智能化"
                    ]

                },
                imgUrl:{
                    imgRight:"../../static/images/home/fx.png",
                },
                introduce:[
                    {
                       inPic:"../../static/images/home/fj.png",
                       inTitle:"北美进口木材",
                       inDis:"产品尺寸精准"
                    },
                    {
                       inPic:"../../static/images/home/td.png",
                       inTitle:"专业设计团队",
                       inDis:"良心定制，减少损耗"
                    },
                    {
                       inPic:"../../static/images/home/pz.png",
                       inTitle:"21年品质",
                       inDis:"国际认证，环保健康"
                    },
                    {
                       inPic:"../../static/images/home/txfw.png",
                       inTitle:"省心贴心",
                       inDis:"设计、生产、安装一站式服务"
                    }
                ]
            }

        },
        created(){
            let that = this
            that.caseImg = [],
            that.caseTitle = [],
            that.caseDes = [],
            that.projectImg = [],
            that.projectTitle = [],
            that.projectDes = [],
            
            $.ajax({
                type:"GET",
                url:"http://47.99.157.23:8092/getCaseList.php",
                data:{
                    "opt":"1"
                },
                dataType:"json",
                success:function(data){
                    let length = data.data.length
                    for(var i=0;i<length;i++){
                        if(data.data[i].class == 1){
                            that.caseImg.push(data.data[i].thumbnail)
                            that.caseTitle.push(data.data[i].title)
                            that.caseDes.push(data.data[i].introduction)
                            that.caseId.push(data.data[i].id)
                        }else{
                            that.projectImg.push(data.data[i].thumbnail)
                            that.projectTitle.push(data.data[i].title)
                            that.projectDes.push(data.data[i].introduction)
                            that.projectId.push(data.data[i].id)
                        }
                    }
                }
            })
            //新闻
            that.$axios.get('http://47.99.157.23:8092/getPostList.php')
                .then(res => {
                    let data = res.data.data       
                    for(var i=1;i<4;i++){
                        that.news.push(data[i])
                        that.year.push(data[i].created_at.slice(0,7 )) 
                        that.day.push(data[i].created_at.slice(8,10)) 
                    }
                    that.currentNews = data[0]
                    localStorage.allNews = JSON.stringify(data)
                    
                })            
        },
        mounted(){
   
            if(sessionStorage.home){
                var index = JSON.parse(sessionStorage.home)[0]
                switch(index){
                    case "0":{
                        $('html,body').animate({scrollTop:$("#service").offset().top},'slow');
                        sessionStorage.removeItem('home');                        
                    }break;
                    case "1":{
                        $('html,body').animate({scrollTop:$("#case").offset().top},'slow'); 
                        sessionStorage.removeItem('home');
                    }break;
                    case "2":{
                        $('html,body').animate({scrollTop:$("#customized").offset().top},'slow');
                        sessionStorage.removeItem('home');
                    }break;
                    case "3":{
                        $('html,body').animate({scrollTop:$("#advantage").offset().top},'slow'); 
                        sessionStorage.removeItem('home');
                    }break;
                    case "4":{
                        $('html,body').animate({scrollTop:$("#cooperation").offset().top},'slow'); 
                        sessionStorage.removeItem('home');
                    }break;
                    case "5":{
                        $('html,body').animate({scrollTop:$("#patent").offset().top},'slow'); 
                        sessionStorage.removeItem('home');
                    }break;
                }
            }

            if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                $(".home-t .el-carousel__container").css("height","600px")
                $(".carousel-t-box").css("height","600px" )
                $(".example-box").css("width","100%")
                $(".wrap").css("width","100%")
                $(".products-design").css("justify-content","space-around")
                $(".honor-box").css("justify-content","space-around")
            }else{
                this.initial = $(window).height() - 60;
                $(".home-t .el-carousel__container").css("height",this.initial)
                $(".carousel-t-box").css("height",this.initial)
                $(".carousel-mask").css("height",this.initial)
            }
             if(sessionStorage.products){
                   sessionStorage.removeItem("products")
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
            },
            goNewsDetail(e){
                let id = e.currentTarget.dataset.id
                sessionStorage.newId = id
                this.$router.push({ path: '/newsdetail'})
            },
            changePic(e){
                let index = $(e.currentTarget).index()
                this.imgIndex = index;
                let src = this.smUrl.smImg[index]
                this.lgSlogan = this.lgMask[index] 
                this.lgImg = src
                var productsArry = null;
                if(sessionStorage.products){
                    var productsArry = JSON.parse(sessionStorage.products)
                    productsArry[0] = index
                }else{
                    productsArry = []
                    productsArry.push(index)
                }              
                var jsonObj = JSON.stringify(productsArry);
                // 更新本地数据
                sessionStorage.products = jsonObj;
            },
            clickLeft(){
                
                let numLeft = this.imgIndex
                numLeft--;
                this.imgIndex = numLeft
                if(numLeft > 0 && numLeft < 5 || numLeft == 0){
                    this.lgImg = this.smUrl.smImg[numLeft]
                    this.lgSlogan = this.lgMask[numLeft] 
                       var productsArry = null;
                if(sessionStorage.products){
                    var productsArry = JSON.parse(sessionStorage.products)
                    productsArry[0] = numLeft
                }else{
                    productsArry = []
                    productsArry.push(numLeft)
                }              
                var jsonObj = JSON.stringify(productsArry);
                // 更新本地数据
                sessionStorage.products = jsonObj;
                }
                    if(this.imgIndex < 0){
                        this.imgIndex = 0;
                        this.lgImg = this.smUrl.smImg[0]
                        this.lgSlogan = this.lgMask[0] 
                    }
            },
            clickRight(){
                
                let numRight = this.imgIndex
                numRight++;
                this.imgIndex = numRight
              if(numRight < 5 || numRight == 5){      
                    this.lgImg = this.smUrl.smImg[numRight] 
                    this.lgSlogan = this.lgMask[numRight]    
                       var productsArry = null;
                if(sessionStorage.products){
                    var productsArry = JSON.parse(sessionStorage.products)
                    productsArry[0] = numRight
                }else{
                    productsArry = []
                    productsArry.push(numRight)
                }              
                var jsonObj = JSON.stringify(productsArry);
                // 更新本地数据
                sessionStorage.products = jsonObj;                        
              }             
                if(this.imgIndex > 5){
                    this.imgIndex = 5;
                    this.lgImg = this.smUrl.smImg[5]
                    this.lgSlogan = this.lgMask[5]                            
                }
            },
            clickPatent(e){
                let patentIndex = $(e.currentTarget).index()
                location.href = this.patentImg[patentIndex]
            },
            changeCase(e){
                this.isCaseShow = !this.isCaseShow;
            },
            moveImg(e){
                var index = e.target.dataset.index;
                switch(index){
                case "0":{
                    console.log(0)
                    $(".customized-lg-img").css({
                        "background":"url('http://cdn.jiaziwenhua.cn/bjwqg.png') center center no-repeat",
                        "backgroundSize":"cover"
                    })
                }break;
                case "1":{
                    $(".customized-lg-img").css({
                        "background":"url('http://cdn.jiaziwenhua.cn/xcyey.png') center center no-repeat",
                        "backgroundSize":"cover"
                    })
                }break;
                case "2":{
                    $(".customized-lg-img").css({
                        "background":"url('http://cdn.jiaziwenhua.cn/hbhwgzxjy.png') center center no-repeat",
                        "backgroundSize":"cover"
                    })
                }break;
                }
            },
            gotoProduct(){
                this.$router.push({ path: '/products',query:{ id:'0'}})
            },
            gotoPatent(){
                this.$router.push({ path: '/about',query:{ id:'0'}})
            },
            gotoCase(e){
                 sessionStorage.case = JSON.stringify("1")
                this.$router.push({ path: '/case'})         
            },
            gotoNews(){
                this.$router.push({ path: '/news',query:{ id:'0'}}) 
            },
            gotoDetail(e){
                let caseId = e.currentTarget.dataset.id
                console.log(caseId)
                switch(caseId){
                    case "1":{
                        sessionStorage.id = "45"
                    }break;
                    case "2":{
                        sessionStorage.id = "18"
                    }break;
                    case "3":{
                        sessionStorage.id = "46"
                    }break;
                }
                this.$router.push({ path: '/casedetail'})
            },
            goCaseDetail(e){
                let caseId = e.currentTarget.dataset.id
                sessionStorage.id = caseId
                this.$router.push({ path: '/casedetail'})
            }
        }
    }
</script>

<style scoped>
.footer-b p a{
    text-decoration: none;
    color: #000;
}
.carousel-mask{
    width: 100%;
    height: 300px;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    z-index: 99;
}
.lage-box-mask{
    width: 100%;
    height: 100%;
    background: #96969670;
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
}
.carousel-t-box-c{
    position: relative;
}
.banner_content{
    display: block;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    color: #fff;
    background: #00000075;
    padding: 40px;
}
@keyframes changeSeating {
    0%{
        transform: translateX(200px) translateY(-50%);
        opacity: 0;
    }
    50%{
        transform: translateX(-50%) translateY(-50%);
        opacity: 1;
    }
    100%{
        transform: translateX(-100%) translateY(-50%);
        opacity: 0;
    }
}
@keyframes changeTop {
    0%{
        transform: translateX(-50%) translateY(-300px);
        opacity: 0;
    }
    50%{
        transform: translateX(-50%) translateY(-50%);
        opacity: 1;
    }
    100%{
        transform: translateX(-50%) translateY(200px);
        opacity: 0;
    }
}
@keyframes zoom {
    0%{
        left: 20%;
        top: 20%;
        opacity: 0;
    }
    50%{
       left:50%;
       top: 40%;
       opacity: 1;
    }
    100%{
       left:80%;
       top: 80%;
       opacity: 0;
    }
}
.banner_one{
    width: 300px;
    height: 300px;
    text-align: center;
    padding-top: 100px;
    box-sizing: border-box;
    border-radius: 50%;
    position: absolute;
    left: 20%;
    top: 20%;
    animation: zoom 5s ease-in infinite;
    transform-origin: center center;
}
.banner_two{
    animation: changeTop 5s ease-in 5s infinite;
    transform-origin: center center;
}
.banner_three{
    animation: changeSeating 5s ease-in  10s infinite;
}
.banner_four{
    animation: changeTop 5s ease-in  15s infinite;       
}
.banner_five{
    animation: changeSeating 5s ease-in  20s infinite;       
}
@font-face {
    font-family: "bole";
    src: url("../../static/fonts/bole.ttf");
}
.banner_content{
  font-family: "bole";
}
.banner_content h1{
    font-size: 50px;
}
.banner_content h2{
    font-size: 32px;
    margin-top: 20px;
}
.banner_content p{
    font-size: 32px;
    margin-top: 20px;
    text-align: center;
}
.banner_content span{
    color: #F85959;
    font-weight: bolder;
}
.Four-list li:nth-child(10){
    height: 80px;
    background: url("../../static/images/home/46.png") center center no-repeat;
    background-size: contain;
}
.Four-list li:nth-child(11){
    height: 80px;
    background: url("../../static/images/home/47.jpg") center center no-repeat;
    background-size: contain;
}
.Four-list li:nth-child(12){
    height: 80px;
    background: url("../../static/images/home/48.png") center center no-repeat;
    background-size: contain;
}
.prev-box{
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 0;
}
/*新闻开始*/
.news-more{
    background: #fff !important;
}
.about-our{
  width: 1230px;
  margin: 60px auto;
  box-sizing: border-box;
}
.news-box{
  display: flex;
  justify-content: space-between;
}
.news-left{
  width: 40%;
  height: 300px; 
  margin-top: 10px;
  box-sizing: border-box;
  cursor: pointer;
}
.news-right{
  width: 55%;
  height: 300px;
  cursor: pointer;
}
.news-left-img{
  width: 100%;
  height: 200px;
  overflow: hidden;
}
.news-left-img img{
    width: 100%;
    height: 100%;
}
.news-left-article{
  margin-top: 10px;
}
.news-left-article p{
  text-indent: 2em;
  margin-top: 10px;
  overflow: hidden;
  position: relative;
  height: 42px;
}
.news-left-article p::after{
    content: "..."; 
    position: absolute; 
    bottom: 0; 
    right: 0; 
    padding-left: 40px;
    background: -webkit-linear-gradient(left, transparent, #fff 55%);
    background: -o-linear-gradient(right, transparent, #fff 55%);
    background: -moz-linear-gradient(right, transparent, #fff 55%);
    background: linear-gradient(to right, transparent, #fff 55%);
}
.news-list li{
  border-bottom: 1px dashed #c1c1c1;
  padding: 20px 0;
  display: flex;
  justify-content: space-around;
}
.news-time{
  width: 80px;
  height: 60px;
  border: 1px solid #c1c1c1;
  text-align: center;
  position: relative;
  display: inline-block;
  vertical-align: top;

}
.look-more{
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background: #9a9999;
  color: #fff;
  margin-top: 30px;
  cursor: pointer;
}

.month{
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
}
.day{
  font-size: 30px;
  font-weight: bold;
  color: #424141;
}
.news-article{
  width: 80%;
  margin-left: 20px;
  display: inline-block;
  vertical-align: top;
}
.news-article h3{
  font-size: 16px;
  font-weight: normal;
}
.news-article p{
  text-indent: 2em;
  margin-top: 5px;
  overflow: hidden;
  position: relative;
  height: 42px;
  font-size: 14px;
}
.news-article p::after{
    content: "..."; 
    position: absolute; 
    bottom: 0; 
    right: 0; 
    padding-left: 40px;
    background: -webkit-linear-gradient(left, transparent, #fff 55%);
    background: -o-linear-gradient(right, transparent, #fff 55%);
    background: -moz-linear-gradient(right, transparent, #fff 55%);
    background: linear-gradient(to right, transparent, #fff 55%);
}
/*领先优势开始*/
.advantage{
    padding-top: 60px;
}
.advantage-list{
    margin-top: 60px;
    text-align: center;
    display: flex;
    justify-content: space-between;
}
.advantage-list li{
    width: 200px;
}
.advantage-title{
    width: 80px;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 18px;
    line-height: 35px;
    border-bottom: 2px solid #F85959;
}
.advantage-text{
    font-size: 14px;
}
.advantage-img{
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 50%;
}
.advantage-technology{
    background: url("http://cdn.jiaziwenhua.cn/image/home/ylyyg.jpg") center center no-repeat;
    background-size: cover;
}
.advantage-brand{
    background: url("http://cdn.jiaziwenhua.cn/hbhwgtsg.png") center center no-repeat;
    background-size: cover;
}
.advantage-market{
    background: url("http://cdn.jiaziwenhua.cn/zhjz.jpg") center center no-repeat;
    background-size: cover;
}
.advantage-service{
    background: url("http://cdn.jiaziwenhua.cn/image/home/Handshake.png") center center no-repeat;
    background-size: cover;
}
.advantage-pattern{
    background: url("http://cdn.jiaziwenhua.cn/moshi.jpg") center center no-repeat;
    background-size: cover;
}
/*领先优势结束*/
/*体验定制*/
.customized{
    padding: 60px 0;
}
.customized-box{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
.customized-l{
    width: 20%;
}
.customized-c{
    width: 48%;
}
.customized-r{
    width: 30%;
}
.style-list li{
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    margin-bottom: 5px;
    background: #f1f1f1;
    font-size: 18px;
}
.style-list li span{
    color: #F85959;
    font-weight: bolder;
}
.customized-img{
    width: 100%;
    height: 250px;
    background: url("http://cdn.jiaziwenhua.cn/mjgwqg.png") center center no-repeat;
    background-size: cover;
}
.customized-design p{
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #f1f1f1;
    margin-top: 5px;
    font-size: 14px;
}
.customized-design span{
    color: #22adf3;
    font-weight: bolder;
    font-size: 20px;
    margin-right: 5px;
}
.customized-lg-img{
    width: 100%;
    height: 386px;
    margin-bottom: 14px;
    background: url("http://cdn.jiaziwenhua.cn/bjwqg.png") center center no-repeat;
    background-size: cover;
}
.customized-sm-img{
    display: flex;
    justify-content: space-between;
}
.sm-img{
    width: 33%;
    height: 174px;
    position: relative;
}
.sm-img-gymnasium{
    background: url("http://cdn.jiaziwenhua.cn/bjwqg.png") center center no-repeat;
    background-size: cover;
}
.sm-img-stadium{
    background: url("http://cdn.jiaziwenhua.cn/xcyey.png") center center no-repeat;
    background-size: cover;
}
.sm-img-multifunctional{
    background: url("http://cdn.jiaziwenhua.cn/hbhwgzxjy.png") center center no-repeat;
    background-size: cover;
}
.sm-img p{
    width: 100%;
    text-align: center;
    color: #fff;
    position: absolute;
    bottom: 20px;
    left: 0;
}
.sm-mask{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: #1b1b1bb3;
}
.sm-mask:hover{
    background:transparent;
}
.details-list{
    background: #f1f1f1;
    padding: 10px;
    height: 575px;
    box-sizing: border-box;
}
.details-list li{
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    background: #fff;
    padding: 10px;
}
.details-img{
    width: 160px;
    height: 128px;
}
.details-img img{
    width: 100%;
    height: 100%;
}
.details-describe{
    width: 200px;
    height: 128px;
    overflow: hidden;
    margin-left: 5px;
}
.describe-title{
    color: #22adf3
}
.describe-content{
    overflow : hidden;
    height: 57px;
    margin-top: 5px;
    font-size: 14px;
    position: relative;
}
.describe-content::after{
    content: "..."; 
    position: absolute; 
    bottom: 0; 
    right: 0; 
    padding-left: 40px;
    background: -webkit-linear-gradient(left, transparent, #fff 55%);
    background: -o-linear-gradient(right, transparent, #fff 55%);
    background: -moz-linear-gradient(right, transparent, #fff 55%);
    background: linear-gradient(to right, transparent, #fff 55%);

}
.describe-more{
    text-align: right;
    margin-top: 5px;
    padding-right: 8px;
    cursor: pointer;
}
/*体验定制结束*/
.el-header,.el-footer,.el-main{
  padding: 0;
}
.main{
    position: relative;
}
.carousel-t{
    width: 100%;
    height: 100%;
}
.carousel-t-box-t{
    width: 100%;
    height: 100%;
    /* background: url("http://cdn.jiaziwenhua.cn/images/home/banner1.png") center center no-repeat; */
     background: url("http://cdn.jiaziwenhua.cn/image/product/tu5.png") center center no-repeat;
    background-size: cover;
}
.carousel-t-box-c{
    width: 100%;
    height: 100%;
    background: url("http://cdn.jiaziwenhua.cn/image/home/banner2.png") center center no-repeat;
    background-size: cover;
}
.carousel-t-box-b{
    width: 100%;
    height: 100%;
    background: url("http://cdn.jiaziwenhua.cn/image/home/banner3.png") center center no-repeat;
    background-size: cover;
}
.carousel-t-box-cc{
    width: 100%;
    height: 100%;
    background: url("http://cdn.jiaziwenhua.cn/image/home/banner4.jpg") center center no-repeat;
    background-size: cover;
}
.carousel-t-box-bb{
    width: 100%;
    height: 100%;
    /* background: url("http://cdn.jiaziwenhua.cn/image/home/banner5.jpg") center center no-repeat; */
    background: url("../../static/images/home/banner05.jpg") center center no-repeat;
    background-size: cover;
}
.introduce-box{
    box-sizing: border-box;
    height: 188px;
    text-align: center;
    background:linear-gradient(#2E3243,#1A1A1C);
    color: #fff;
    border-left: 1px solid #403a3a;
    position: relative;
    transition: all 1s;
}
.introduce{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
}
.introduce h3{
    margin: 10px 0;
}
.introduce p{
    font-size: 12px;
}
.line{
    width: 25px;
    border-top: 1px solid #fff;
    margin: 20px auto;
}
.introduce-just{
    display: flex;
    justify-content: space-between;
}
.introduce-box{
    width: 25%;
}
.introduce-box:hover{
    background: linear-gradient(#F85959,#E73838);
}
/*产品服务*/
.wrap{
    width: 1280px;
    margin: 0 auto
}
.products-title{
    padding: 50px 0;
}
.products-design{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.example-box{
    width: 370px;
    margin-bottom: 20px;
}
.products-service{
    width: 140px;
    text-align: left;
}
.products-more{
    text-align: right;
    line-height: 78px;
    color: #1A1A1C;
    cursor: pointer;
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
.products-word{
    font-size: 14px;
    line-height: 35px;
    color: #9c9c9c;
}
.lage-box{
    margin-top: 60px;
    position: relative;
}
.left-box,.right-box{
    width: 40px;
    height: 40px;
    margin: 0 auto;
    background: #dedede78;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    display: none;
    transition: all .5s;
    z-index: 6;
}
.left-box{
    left: 5px;
}
.right-box{
    right: 5px;
}
.left-box:hover{
    background: #E73838;
}
.right-box:hover{
    background: #E73838;
}
.lage-box:hover .left-box{
    display: block;
}
.lage-box:hover .lg-mask{
    display: block;
}
.lage-box:hover .right-box{
    display: block;
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
.products-lg{
    height: 600px;
    position: relative;
    overflow: hidden;
}
.lg-mask{
     width: 100%;
     height: 100%;
     background: #0009;
     position: absolute;
     top: 0;
     left: 0;
     color: #fff;
     display: none;
}
.lg-mask-text{
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.lg-mask-more{
    width: 75px;
    line-height: 25px;
    border-radius: 15px;
    font-size: 12px;
    background: #E73838;
    margin: 30px auto;
    cursor: pointer;
}
.products-lg img{
     transition: all .5s linear;
}
.products-sm-box{
    display: flex;
    justify-content: space-between;
}
.products-sm{
    width: 200px;
    height: 120px;
    margin-top: 50px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
}
.products-sm-img{
    width: 100%;
    height: 100%;
}
.mask{
    width: 100%;
    height: 100%;
    background: rgba(77, 77, 78, 0.521);
    position: absolute;
    top: 0;
    left: 0;
}
.products-mask-img{
    width: 120px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
}
.products-mask-img img{
    vertical-align: middle;
}
.products-mask-img span{
    font-size: 14px;
    color: #fff;
    vertical-align: middle;
    margin-left: 5%;
}
/*甲子案例*/
.case-t{
    background: #f1f1f1;
}
.case-design,.case-project{
    display: inline-block;
    height: 78px;
    cursor: pointer;
}
.case-classify{
    width: 240px;
}
.case-project{
    margin-left: 90px;
}
.case-line{
    width: 20px;
    border-top: 2px solid #E73838;
    margin: 10px auto;
}
.case-example{
    overflow: hidden;
    transition: all .8s;
}
.case-example-img{
    height: 244px;
    overflow: hidden;
    position: relative;
}
.case-example-img img{
    width: 100%;
    height: 100%;
}
.understand-more{
    width: 100%;
    line-height: 35px;
    background: #E73838;
    text-align: center;
    color: #fff;
    font-size: 12px;
    cursor: pointer;
    position: absolute;
    bottom: 0;
    left: 0;
    display: none;
    transition: all .8s;
}
.case-example:hover .understand-more{
    display: block;
}
.case-example-des{
    height: 240px;
    text-align: center;
    border: 1px solid #f1f1f1;
    position: relative;
    transition: all .8s;
}
.case-example-des-pos{
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);   
    overflow: hidden; 
}
.case-example-des-pos p{
    font-size: 14px;
    margin-top: 10px;
    color: #a1a1a1;
    text-indent: 2em;
    text-align: left;
}
.case-example:hover .case-example-des{
    background: #fff;
    
}
.case-example:hover{
    box-shadow: 0 0 20px #8e8686;
}
.line-more{
    width: 100%;
    border-top: 1px solid #b1b1b1;
    display: flex;
    justify-content: center;
    background: #f1f1f1;
}
.line-more-pos{
    width: 80px;
    transform: translateY(-60%);
    background: #f1f1f1;
    text-align: center;
    cursor: pointer;
}
.line-more-pos p{
    line-height: 35px;
    display: inline-block;
    color: #626262;
    font-size: 12px;
}
.patent-img{
    width: 300px;
    height: 375px;
    margin-top: 60px;
    cursor: pointer;
    position: relative;
}
.patent-img > img{
    width: 100%;
    height: 100%;
}
.patent-imgBox{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.patent-mask{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #e73838cc;
    display: none;
    transition: all .5s;

}
.search-patent{
    position: absolute;
    top:50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    transition: all .5s;
}
.patent-img:hover .patent-mask{
    display: block;
}
.partner-box{
    width: 100%;
    height: 782px;
    position: relative;
    overflow: hidden;
    color: #fff;
    background: url("http://cdn.jiaziwenhua.cn/images/home/500513110.png") center center no-repeat;
    background-size: cover;
}
.partner-bj{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}
.partner-word,.partner-more{
    color: #fff;
}
.partner-box h2{
    border-bottom: 3px solid #fff;
}
.partner-company{
    /* width: 80%; */
    position: absolute;
    bottom: 12px;
    left: 50%;
    transform: translateX(-50%) translateY(-50%)
}
.partner-list{
    width: 95%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
}
.partner-list li{
    width: 16%;
    height: 180px;
    background: #fff;
    font-size: 14px;
    margin-top: 10px;
}
.partner-list li img{
    width: 100%;
    height: 100%;
}
.partner-list li span{
    vertical-align: middle;
}
.honor-box{
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.honor-img{
    width: 300px;
    height: 200px;
    border: 4px solid transparent;
}
.honor-img img{
    width: 100%;
    height: 100%;
}
/*加入我们*/
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
    transform: translateY(-165px)
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
/*尾部*/
.footer{
    padding-top: 0;
    position: relative;
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
.footer-b-wrap{
    display: flex;
    justify-content: center;
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
@media (max-width: 1280px){
    .el-header, .el-main, .el-footer{
        width: 1280px
    }
}
</style>