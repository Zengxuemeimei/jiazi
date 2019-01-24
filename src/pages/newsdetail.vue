<template>
       <div>
        <Header/>
            <div class="content">   
                <div class="header">
                    <h2>{{title}}</h2>
                    <p class="time">发表时间：{{time}}</p>
                </div>       
                <div id="iframe1"></div>
                <div class="next-box">
                    <p v-show="isFirst" @click="prev">上一篇:{{preTitle}}</p>
                    <p v-show="isLast" @click="next">下一篇:{{nextTitle}}</p>    
                </div>
                
            </div>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
    export default {
        name:'Newsdetail',
        inject: ['reload'],
        components: {
            Header,
            Footer
        },
        data(){
            return{
                caseId:"",
                isFirst:true,
                isLast:true,
                title:"",
                time:"",
                nextTitle:"",
                preTitle:"",
                length:""
            }
        },
        mounted(){
            $("#iframe1").load("http://47.99.157.23:8091/Detail/news.html?id=" + sessionStorage.newId)
               let allNews = JSON.parse(localStorage.allNews)
             let length = allNews.length
             this.length = allNews.length
             for(var i=0;i<length;i++){
                    if(sessionStorage.newId == allNews[0].id){
                         this.nextTitle = allNews[0].title
                         this.isFirst = false
                     }
                      if(sessionStorage.newId == allNews[length - 1].id){
                         this.preTitle = allNews[length - 1].title
                         this.isLast = false
                     }
                 if(sessionStorage.newId == allNews[i].id){
                     this.title = allNews[i].title
                     this.time = allNews[i].created_at
                     if(i<length - 1 && i>0){
                        this.nextTitle = allNews[i+1].title
                        this.preTitle = allNews[i-1].title 
                     }                                   
                 }
             }
        },
        methods:{
            next(){
                let prevNum = sessionStorage.newId--
                  if(prevNum < JSON.parse(localStorage.allNews)[this.length - 1].id){
                    prevNum = JSON.parse(localStorage.allNews)[this.length - 1].id
                    sessionStorage.newId = JSON.parse(localStorage.allNews)[this.length - 1].id
                }
                this.reload()
            },
            prev(){
                let nextNum = sessionStorage.newId++
                if(nextNum > JSON.parse(localStorage.allNews)[0].id){
                    nextNum = JSON.parse(localStorage.allNews)[0].id 
                    sessionStorage.newId = nextNum
                }
                this.reload()
            }
        }
    }
</script>

<style scoped>
.header{
    text-align: center;
    margin-bottom: 20px;
}
.content{
    width: 1280px;
    margin: 20px auto;
    background: #fafafa;
    padding: 50px 20px;
}
.next-box{
    width: 100%;
    height: 25px;
    position: relative;
}
.next- p:first-child{
    width: 50%;
    position: absolute;
    left: 0;
    top: 0;
}
.next-box p:last-child{
    width: 50%;
    text-align: right;
    position: absolute;
    right: 0;
    top: 0;
}
.next-box p:hover{
    text-decoration: underline;
    cursor: pointer;
}
</style>