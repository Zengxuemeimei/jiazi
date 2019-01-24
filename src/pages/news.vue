<template>
    <div class="content">
        <el-container>
            <el-header><Header/></el-header>
            <el-main>
                  <div class="main">
                     <div class="title-bj">
                        <div class="about-words">
                            <p>News Center</p>
                            <h1>新闻中心</h1>
                        </div>
                    </div>
                    <!-- 用心做产品 -->
                    <div class="care-box">
                        <div class="care">
                            <h2>用心做产品</h2>
                            <div class="line"></div>
                            <p class="care-word">
                                我们将以独有的超前设计思维、精湛的施工工艺和“诚实守信”的理念，
                                一如既往，与时俱进，再创辉煌
                            </p>
                        </div>
                    </div>
                    <!-- 新闻 -->
                    <div class="case-box">
                        <div class="case-table" id="allNews">
                            <p class="case-show" @click="clickJiazi">甲子动态</p>
                            <p @click="clickIndustry">行业资讯</p>
                        </div>
                        <div v-show="isJiazi">
                            <div class="all-news" v-for="(item,index) in jiaNews" :key="index">
                                <div class="wrap">
                                    <div class="news-box">
                                        <div class="news-img">
                                            <img v-lazy="item.thumbnail"/>
                                        </div>
                                        <section class="news-info">
                                            <h2>{{item.title}}</h2>
                                             <p>
                                                {{item.introduction}}  
                                            </p>
                                        </section>
                                        <div class="time">
                                            <h2>{{jiaTime[index]}}</h2>
                                            <p class="news-right" :data-id="item.id" @click="goDetails">
                                                <img class="right-gray" src="../../static/images/home/right.png" alt="加载失败">
                                                <img class="right-white" src="../../static/images/home/fx.png" alt="加载失败">
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 分页器 -->
                            <div class="paging-box">
                                <el-pagination class="paging"
                                    background
                                    layout="prev, pager, next"
                                    :page-count="totalJiazi"
                                    @current-change="currentJia"
                                    :current-page="currentJiazi"
                                    >
                                </el-pagination>
                            </div> 
                        </div>
                        <!-- 行业资讯 -->
                        <div v-show="isIndustry">
                            <div class="all-news" v-for="(item,index) in yeNews" :key="index">
                                <div class="wrap">
                                    <div class="news-box">
                                        <div class="news-img">
                                            <img v-lazy="item.thumbnail"/>
                                        </div>
                                        <section class="news-info">
                                            <h2>{{item.title}}</h2>
                                             <p>
                                                {{item.introduction}}
                                            </p>
                                        </section>
                                        <div class="time">
                                            <h2>{{yeTime[index]}}</h2>
                                            <p class="news-right" :data-id="item.id" @click="goDetails">
                                                <img class="right-gray" src="../../static/images/home/right.png" alt="加载失败">
                                                <img class="right-white" src="../../static/images/home/fx.png" alt="加载失败">
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- 分页器 -->
                            <div class="paging-box">
                                <el-pagination class="paging"
                                    background
                                    layout="prev, pager, next"
                                    :page-count="totalYe"
                                    @current-change="currentYee"
                                    :current-page="currentYe"
                                    >
                                </el-pagination>
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
        name:'News',
        inject: ['reload'],
        components: {
            Header,
            Footer
        },
          data(){
            return{
                isJiazi:true,
                isIndustry:false,
                total:1,
                totalPage:1,
                currentPage:1,
                totalJiazi:1,
                currentJiazi:1, 
                totalYe:1,
                currentYe:1,
                titleBj:" http://cdn.jiaziwenhua.cn/images/home/BJ.png",
                newsImg:"../../static/images/news/20170913153311f74b08.png",
                allNews:[],
                allTime:[],
                jiaNews:[],
                jiaTime:[],
                yeNews:[],
                yeTime:[]
            }
        },
        created(){
            let that = this
            if(localStorage.jiaNews){
                localStorage.removeItem("jiaNews")
            }
            that.$axios.get('http://47.99.157.23:8092/getPostList.php')
                .then(res => { 
                    let data = res.data.data       
                    let length = data.length
                    for(var i=0;i<length;i++){
                        if(data[i].class == "1"){
                            that.jiaNews.push(data[i])
                            that.jiaTime.push(data[i].created_at.slice(5,10))
                                    
                        }else{
                            that.yeNews.push(data[i])
                            that.yeTime.push(data[i].created_at.slice(5,10))  
        
                        }  
                    }
                       localStorage.jiaNews = JSON.stringify(that.jiaNews)      
                        localStorage.yeNews = JSON.stringify(that.yeNews) 
                        that.loadHtml()
                }).catch(error =>{
                    console.log(error)
                })           
        },
        mounted(){
              switch(this.$route.query.id){
                 case "0" : {
                     $('html,body').animate({scrollTop:$("#allNews").offset().top},'slow'); 
                 }break;
             } 
              
        },
        methods:{
            currentChange(number){
                //更新当前页
                this.currentPage = number;

                $('html,body').animate({scrollTop:$("#allNews").offset().top},'slow');
            },
            loadHtml(){
                let data = JSON.parse(localStorage.jiaNews)
                let length = data.length
                this.totalJiazi = Math.ceil(length  / 10)
                var starIndex = (this.currentJiazi - 1)* 10; //开始下标
                var endIndex  = this.currentJiazi == this.totalJiazi ? starIndex + length % 10 - 1 : starIndex + 9;; //结束下标   
                this.jiaTime = []
                this.jiaNews = []
                
                for(var i = starIndex; i <= endIndex;i++){
                    let time = data[i].created_at.slice(5,10);
                    this.jiaTime.push(time)
                    this.jiaNews.push(data[i])
                }
            },
            currentJia(num){
                this.currentJiazi = num
                let data = JSON.parse(localStorage.jiaNews)
                let length = data.length
                this.totalJiazi = Math.ceil(length / 10)
                var starIndex = (this.currentJiazi - 1)* 10; //开始下标
                var endIndex  = this.currentJiazi == this.totalJiazi ? starIndex + length % 10 - 1 : starIndex + 9;; //结束下标
                this.jiaTime = []
                this.jiaNews = []
                for(var i = starIndex; i <= endIndex;i++){
                    let time = data[i].created_at.slice(5,10);
                    this.jiaTime.push(time)
                    this.jiaNews.push(data[i])
                }
            },
            currentYee(num){
                this.currentJiazi = num
                let data = JSON.parse(localStorage.yeNews)
                let length = data.length
                this.totalYe = Math.ceil(length / 10)
                var starIndex = (this.currentYe - 1)* 10; //开始下标
                var endIndex  = this.currentYe == this.totalYe ? starIndex + length % 10 - 1 : starIndex + 9;; //结束下标
                this.yeTime = []
                this.yeNews = []
                for(var i = starIndex; i <= endIndex;i++){
                    let time = data[i].created_at.slice(5,10);
                    this.yeTime.push(time)
                    this.yeNews.push(data[i])
                }
            },
            clickAll(e){
                var $target = $(e.target);
                $target.addClass("case-show").siblings().removeClass("case-show");
                this.isAllNews = true;
                this.isJiazi = false;
                this.isIndustry = false;
            },
            clickJiazi(e){
                var $target = $(e.target);
                $target.addClass("case-show").siblings().removeClass("case-show");
                this.isAllNews = false;
                this.isJiazi = true;
                this.isIndustry = false;
                let data = JSON.parse(localStorage.jiaNews)
                let length = data.length
                this.totalJiazi = Math.ceil(length  / 10)
                var starIndex = (this.currentJiazi - 1)* 10; //开始下标
                var endIndex  = this.currentJiazi == this.totalJiazi ? starIndex + length % 10 - 1 : starIndex + 9;; //结束下标
                this.jiaTime = []
                this.jiaNews = []
                for(var i = starIndex; i <= endIndex;i++){
                    let time = data[i].created_at.slice(5,10);
                    this.jiaTime.push(time)
                    this.jiaNews.push(data[i])
                }
            },
            clickIndustry(e){
                var $target = $(e.target);
                $target.addClass("case-show").siblings().removeClass("case-show");
                this.isAllNews = false;
                this.isJiazi = false;
                this.isIndustry = true;
                let data = JSON.parse(localStorage.yeNews)
                let length = data.length
                this.totalYe = Math.ceil(length  / 10)
                var starIndex = (this.currentYe - 1)* 10; //开始下标
                var endIndex  = this.currentYe == this.totalYe ? starIndex + length % 10 - 1 : starIndex + 9;; //结束下标
                this.yeTime = []
                this.yeNews = []
                for(var i = starIndex; i <= endIndex;i++){
                    let time = data[i].created_at.slice(5,10);
                    this.yeTime.push(time)
                    this.yeNews.push(data[i])
                }
            },
            goDetails(e){
                let newsId = e.currentTarget.dataset.id
                let newsIndex = $(e.currentTarget).index()
                this.$router.push({path:"/newsdetail"})
                sessionStorage.newId =  newsId
            }
        }
    }
</script>

<style scoped>
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
    background: url("http://cdn.jiaziwenhua.cn/images/home/BJ.png") center center no-repeat;
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
/*用心做产品*/
.care-box{
    width: 100%;
    height: 295px;
    position: relative;
}
.care{
    width: 549px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    text-align: center;
}
.line{
    width: 47px;
    border-top: 2px solid #E73838;
    margin: 25px  auto;
}
.care-word{
    color: #9F9F9F;
}
/*资讯*/
.case-box{
    background: #f1f1f1;
}
.case-table{
    width: 355px;
    padding: 57px 0 72px 0;
    margin: 0 auto;
}
.case-table p{
    width: 115px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    background: #999999;
    display: inline-block;
    text-align: center;
    cursor: pointer;
}
.case-show{
    background: #E73838 !important;
}

.all-news:hover{
    background: #E73838;
    box-shadow: 0 6px 20px #908f8f;
}
.all-news:hover .news-box{
    color: #fff;
}
.all-news:hover .news-right{
    border: 1px solid #fff;
}
.all-news:hover .right-gray{
    display: none;
}
.all-news:hover .right-white{
    display: block;
}
.right-white{
    display: none;
}
.news-box{
    display: flex;
    justify-content: space-between;
    color: #999999;
    padding: 60px 0;
    border-bottom: 1px solid #d0d0d0;
}
.news-box h2{
    margin: 40px 0;
}
.news-img{
    width: 330px;
    height: 210px;
    overflow: hidden;
}
.news-img img{
    width: 100%;
    height: 100%;
}
.news-info{
    width: 650px;
    padding: 0 20px;
}
.news-info p{
    font-size: 14px;
}
.time{
    width: 100px;
}
.news-right{
    width: 35px;
    height: 35px;
    border: 1px solid #999999;
    position: relative;
    margin: 0 auto;
    cursor: pointer;
}
.news-right img{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%)
}
/*分页器*/
.paging-box{
    height: 80px;
    position: relative;
}
.paging{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%)
}
@media (max-width: 1280px){
    .el-header, .el-main, .el-footer{
        width: 1280px
    }
}
</style>