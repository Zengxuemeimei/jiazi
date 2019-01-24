<template>
    <div class="content">
        <el-container>
            <el-header><Header/></el-header>
            <el-main>
                  <div class="main">
                     <div class="title-bj">
                        <div class="about-words">
                            <p>Contact us</p>
                            <h1>联系我们</h1>
                        </div>
                    </div>
                    <!-- 联系方式 -->
                    <div class="way">
                            <div class="wrap">
                                <ul class="way-list">
                                    <li>
                                        <img src="../../static/images/home/kf.png" alt="加载失败">
                                        <h3>客服热线</h3>
                                        <p class="mailbox">028-87679397</p>
                                        <!-- <p>400-123-1234</p> -->
                                    </li>
                                     <li>
                                        <img src="../../static/images/home/yx.png" alt="加载失败">
                                        <h3>公司邮箱</h3>
                                        <p class="mailbox">1621474590@qq.com</p>
                                    </li>
                                     <li>
                                        <img src="../../static/images/home/dz.png" alt="加载失败">
                                        <h3>公司地址</h3>
                                        <p>成都市金牛区北一段</p>
                                        <p>万科加州湾V派商务空间511-512</p>
                                    </li>
                                     <li>
                                        <img src="../../static/images/home/cz.png" alt="加载失败">
                                        <h3>公司传真</h3>
                                        <p class="fax">028-87679397</p>
                                    </li>
                                </ul>
                            </div>
                    </div>
                    <div class="contacts">
                        <!-- 百度地图 -->
                        <div class="map">
                            <div class="wrap">
                                <div id="address">
                                </div>
                            </div>
                        </div>
                        <ul class="contacts-list">
                            <li>
                                <p>
                                    <span>四川甲子文化体育工程有限公司重庆分公司</span> 
                                    <span>13983385021</span>
                                </p>
                              
                            </li>
                            <li>
                                <p>
                                    <span>四川甲子文化体育工程有限公司新疆分公司</span>
                                    <span>18997937774</span>
                                </p>
                               
                            </li>
                            <li>
                                <p>
                                    <span>四川甲子文化体育工程有限公司贵州分公司</span>
                                    <span>13281218288</span>
                                </p>
                                
                            </li>
                        </ul>
                        <div class="code">
                            <div class="code-img">
                                <img src="../../static/images/home/code.png" alt="加载失败">
                            </div>
                            <p>扫一扫关注我们</p>
                        </div>
                    </div>
                </div>
            </el-main>
            <el-footer><Footer/></el-footer>
        </el-container>     
    </div>
</template>

<script>
import BMap from 'BMap'
import Header from '@/components/header'
import Footer from '@/components/footer'
    export default {
        name:'Contact',
        components: {
            Header,
            Footer
        },
        mounted(){
            this.getMap();
        },
        methods:{
              getMap(){
                var map = new BMap.Map("address");          // 创建地图实例  
                var point = new BMap.Point(104.051813,30.699824);  // 创建点坐标  
                map.centerAndZoom(point, 18); 
                var marker = new BMap.Marker(point);        // 创建标注    
                map.addOverlay(marker);  
                var opts = {    
                        width : 80,     // 信息窗口宽度    
                        height: 50,     // 信息窗口高度    
                        title : "甲子文化体育工程有限公司"  // 信息窗口标题   
                    }  
                var infoWindow = new BMap.InfoWindow("电话：028-87679397", opts);  // 创建信息窗口对象    
                map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口          
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
/*联系方式*/
.way{
    width: 100%;
    height: 553px;
}
.way-list{
    display: flex;
    justify-content: space-around;
    margin-top: 74px;
}
.way-list li{
    text-align: center
}
.way-list li img{
    width: 105px;
    height: 105px;
}
.way-list li h3{
    line-height: 40px;
    margin-top: 20px;
}
.way-list li p {
    line-height: 35px;
}
.mailbox,.fax{
    margin-top: 20px;
}
.contacts{
    background: #f1f1f1;
    width: 100%;
    height: 732px;
    position: relative;
}
.contacts-list{
    width: 1280px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    
}
.contacts-list li{
    width: 33%;
    height: 80px;
    border: 1px solid #999999;
    float: left;
    text-align: center;
    position: relative;
}
.contacts-list li:nth-child(2){
    border-top: 1px solid #999999;
    border-bottom: 1px solid #999999;
    border-right: none;
    border-left: none;
}
.contacts-list li p{
    width: 290px;
    font-size: 14px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
}
.code{
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
}
.code p{
    margin-top: 20px;
}
.code-img{
    width: 380px;
    height: 80px;
    border: 4px solid #E73838;
    position: relative;
}
.code-img img{
    width: 103px;
    height: 103px;
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
}
/*百度地图*/
.map{
    transform: translateY(-180px);
}
#address{
   width: 100%;
    height: 367px;
}
@media (max-width: 1280px){
    .el-header, .el-main, .el-footer{
        width: 1280px
    }
}
</style>