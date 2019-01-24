<template>
    <div class="content">
        <el-container>
            <el-header><Header/></el-header>
            <el-main>
                  <div class="main">
                     <div class="title-bj">
                        <div class="about-words">
                            <p>Success Case</p>
                            <h1>成功案例</h1>
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
                    <!-- 案例 -->
                    <div class="case-box">
                        <div class="case-table" id="allCase">
                            <p class="case-show" @click="clickDesign">设计案例</p>
                            <p @click="clickWork">工程案例</p>
                        </div>
                            <div class="wrap">
                                <!-- 设计 -->
                                <div class="case-flex"  v-show="isDesign">
                                    <div class="case-des" v-for="(item,index) in signCase" :key="index">
                                        <div class="case-img">
                                            <img :src="item.thumbnail"/>
                                        </div>
                                        <section class="case-text case-height">
                                            <h2>{{item.title}}</h2>
                                            <div class="line line-des"></div>
                                            <p>
                                               {{item.introduction}}
                                            </p>
                                        </section>
                                        <div class=" case-mask">
                                            <section class="case-text case-text-po">
                                                <h2>{{item.title}}</h2>
                                                <div class="line line-des case-more-line"></div>
                                                <p>
                                                    {{item.introduction}}
                                                </p>
                                                <p class="go-details" @click="goSign" :data-signcase="item.id">了解详情</p>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                                 <!-- 全部分页器 -->
                                <div class="paging-box" v-show="isDesign">
                                        <el-pagination class="paging"
                                            background
                                            layout="prev, pager, next"
                                            :page-count="totalDes"
                                            @current-change="currentDes"
                                            :current-page.sync="currentDespage"
                                            >
                                        </el-pagination>
                                </div> 
                                <!-- 工程 -->
                                <div class="case-flex" v-show="isWork">                                  
                                    <div class="case-des" v-for="(item,index) in workCase" :key="index">
                                        <div class="case-img">
                                            <img :src="item.thumbnail"/>
                                        </div>
                                        <section class="case-text case-height">
                                            <h2>{{item.title}}</h2>
                                            <div class="line line-des"></div>
                                            <p>
                                               {{item.introduction}}
                                            </p>
                                        </section>
                                        <div class=" case-mask">
                                            <section class="case-text case-text-po">
                                                <h2>{{item.title}}</h2>
                                                <div class="line line-des case-more-line"></div>
                                                <p>
                                                    {{item.introduction}}
                                                </p>
                                                <p class="go-details" @click="goWork" :data-workcase="item.id">了解详情</p>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                                <!-- 全部分页器 -->
                                <div class="paging-box" v-show="isWork">
                                        <el-pagination class="paging"
                                            background
                                            layout="prev, pager, next"
                                            :page-count="totalWork"
                                            @current-change="currentWork"
                                            :current-page.sync="currentWorkpage"
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
        name:'Case',
        components: {
            Header,
            Footer
        },
          data(){
            return{
                currentAllpage:1,
                totalAll:1,
                totalDes:1,
                currentDespage:1,
                totalWork:1,
                currentWorkpage:1,
                isDesign:true,
                isWork:false,
                allCases:[],
                workCase:[],
                signCase:[]
            }
        },
        created(){
            let that = this
            if(localStorage.signCase){
                localStorage.removeItem("signCase")
            }
            $.ajax({
                type:"GET",
                url:"http://47.99.157.23:8092/getCaseList.php",
                data:{
                    "opt":"2"
                },
                dataType:"json",
                success:function(data){
                    let length = data.data.length
                    localStorage.allCase = JSON.stringify(data.data)
                        for(var i=0;i<length;i++){
                            if(data.data[i].class == 1){  
                                that.signCase.push(data.data[i])  
                               }else{
                                that.workCase.push(data.data[i])
                            }
                        localStorage.signCase = JSON.stringify(that.signCase)
                        localStorage.workCase = JSON.stringify(that.workCase)
                        }
                   that.loadHtml()
                   that.loadWork()
                }
            })
             
        },
        mounted(){
            if(sessionStorage.case){
                var index = JSON.parse(sessionStorage.case)[0]
                $('.case-table p').eq(index).addClass("case-show").siblings().removeClass("case-show");
                switch(index){
                    case "0":{
                        $('html,body').animate({scrollTop:$("#allCase").offset().top},'slow'); 
                        sessionStorage.removeItem('case');
                            this.isAllCase = false
                            this.isDesign = true
                            this.isWork = false 
                    }break;
                    case "1":{
                        $('html,body').animate({scrollTop:$("#allCase").offset().top},'slow');
                        sessionStorage.removeItem('case');
                            this.isAllCase = false
                            this.isDesign = false
                            this.isWork = true 
                    }break;
                }
             }             
             switch(this.$route.query.id){
                 case "0" : {
                     $('html,body').animate({scrollTop:$("#allCase").offset().top},'slow'); 
                 }break;
             }
        },
        methods:{
            loadWork(){
                 let dataWork = JSON.parse(localStorage.workCase)
                    let lengthWork = dataWork.length
                    this.totalWork = Math.ceil(lengthWork / 9)
                    var starIndex = (this.currentWorkpage - 1)* 9; //开始下标
                    var endIndex  = this.currentWorkpage == this.totalWork ? starIndex + lengthWork % 9 - 1 : starIndex + 8;; //结束下标
                    this.workCase = []
                    for(var i = starIndex; i <= endIndex;i++){
                        this.workCase.push(dataWork[i])
                    }
            },
            loadHtml(){
                let data = JSON.parse(localStorage.signCase)
                let length = data.length
                this.totalDes = Math.ceil(length / 9)
                var starIndex = (this.currentDespage - 1)* 9; //开始下标
                var endIndex  = this.currentDespage == this.totalDes ? starIndex + length % 9 - 1 : starIndex + 8;; //结束下标
                this.signCase = []
                for(var i = starIndex; i <= endIndex;i++){
                    this.signCase.push(data[i])
                }
            },
            currentAll(num){
                this.currentAllpage = num
                this.loadHtml()
                $('html,body').animate({scrollTop:$("#allCase").offset().top},'slow');
            },
            currentDes(){
                let data = JSON.parse(localStorage.signCase)
                let length = data.length
                this.totalDes = Math.ceil(length / 9)
                var starIndex = (this.currentDespage - 1)* 9; //开始下标
                var endIndex  = this.currentDespage == this.totalDes ? starIndex + length % 9 - 1 : starIndex + 8;; //结束下标
                this.signCase = []
                for(var i = starIndex; i <= endIndex;i++){
                    this.signCase.push(data[i])
                }
                 $('html,body').animate({scrollTop:$("#allCase").offset().top},'slow');
            },
            currentWork(){
                let data = JSON.parse(localStorage.workCase)
                let length = data.length
                this.totalWork = Math.ceil(length / 9)
                var starIndex = (this.currentWorkpage - 1)* 9; //开始下标
                var endIndex  = this.currentWorkpage == this.totalWork ? starIndex + length % 9 - 1 : starIndex + 8;; //结束下标
                this.workCase = []
                for(var i = starIndex; i <= endIndex;i++){
                    this.workCase.push(data[i])
                }
                $('html,body').animate({scrollTop:$("#allCase").offset().top},'slow');
            },
            clickAll(e){
                var $target = $(e.target);
                $target.addClass("case-show").siblings().removeClass("case-show");
                this.isAllCase = true
                this.isDesign = false
                this.isWork = false
            },
            clickDesign(e){
                var $target = $(e.target);
                $target.addClass("case-show").siblings().removeClass("case-show");
                this.isAllCase = false
                this.isDesign = true
                this.isWork = false
                let data = JSON.parse(localStorage.signCase)
                let length = data.length
                this.totalDes = Math.ceil(length / 9)
                var starIndex = (this.currentDespage - 1)* 9; //开始下标
                var endIndex  = this.currentDespage == this.totalDes ? starIndex + length % 9 - 1 : starIndex + 8;; //结束下标
                this.signCase = []
                for(var i = starIndex; i <= endIndex;i++){
                    this.signCase.push(data[i])
                }
            },
            clickWork(e){
                var $target = $(e.target);
                $target.addClass("case-show").siblings().removeClass("case-show");
                this.isWork = true
                this.isAllCase = false
                this.isDesign = false
                let data = JSON.parse(localStorage.workCase)
                let length = data.length
                this.totalWork = Math.ceil(length / 9)
                var starIndex = (this.currentWorkpage - 1)* 9; //开始下标
                var endIndex  = this.currentWorkpage == this.totalWork ? starIndex + length % 9 - 1 : starIndex + 8;; //结束下标
                this.workCase = []
                for(var i = starIndex; i <= endIndex;i++){
                    this.workCase.push(data[i])
                }
            },
            goAll(e){
                let allId = e.currentTarget.dataset.allcase
                sessionStorage.id =  allId
                this.$router.push({ path: '/casedetail'}) 
                
            },
            goSign(e){
                let signId = e.currentTarget.dataset.signcase
                sessionStorage.id =  signId
                this.$router.push({ path: '/casedetail'}) 
            },
            goWork(e){
                let workId = e.currentTarget.dataset.workcase
                sessionStorage.id =  workId
                this.$router.push({ path: '/casedetail'}) 
            }
        }
    }
</script>

<style scoped>
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
    background: url("http://cdn.jiaziwenhua.cn/images/home/zsbj1.png") center center no-repeat;
    background-size: cover;
    position: relative;
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
/*案例展示*/
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
/*案例描述*/
.case-des{
    width: 409px;
    box-shadow: 0 0 20px #d8d7d7;
    margin-bottom: 40px;
    position: relative;
}
.case-flex{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.line-des{
    margin: 30px 0;
}
.case-img{
    width: 100%;
    height: 310px;
    overflow: hidden;
}
.case-img img{
    width: 100%;
    height: 100%;
}
.case-text{
    /* height: 169px; */
    padding: 30px 20px;
    background: #fff;
}
.case-text p{
    font-size: 14px;
    color: #999999;
}
.case-height{
    height: 195px;
}
.case-mask{
    width: 100%;
    height: 100%;
    background: #E73838;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
}
.case-mask:hover{
    opacity: 1;
}
.case-more-line{
    border-top: 2px solid #fff;
}
.case-mask p{
    color: #fff;
    text-indent: 2em;
}
.go-details{
    margin-top: 95px;
    cursor: pointer;
}
.case-text-po{
    width: 95%;
    padding: 0;
    background: #E73838;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
@media (max-width: 1280px){
    .el-header, .el-main, .el-footer{
        width: 1280px
    }
}
</style>