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
        name:"Casedetail",
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
        created(){
            
        },
        mounted(){
            $("#iframe1").load("http://47.99.157.23:8091/Detail/cases.html?id=" + sessionStorage.id)         
            let allCase = []
            if(localStorage.allCase){
                allCase = JSON.parse(localStorage.allCase)
            }else{
                $.ajax({
                    type:"GET",
                    url:"http://47.99.157.23:8092/getCaseList.php",
                    data:{
                        "opt":"2"
                    },
                    dataType:"json",
                    success:function(data){
                        localStorage.allCase = JSON.stringify(data.data)
                        allCase = JSON.parse(localStorage.allCase)
                    }
                })
            }
             let length = allCase.length
             this.length = allCase.length
             for(var i=0;i<length;i++){
                    if(sessionStorage.id == allCase[0].id){
                         this.nextTitle = allCase[0].title
                         this.isFirst = false
                     }
                      if(sessionStorage.id == allCase[length - 1].id){
                         this.preTitle = allCase[length - 1].title
                         this.isLast = false
                     }
                 if(sessionStorage.id == allCase[i].id){
                     this.title = allCase[i].title
                     this.time = allCase[i].created_at
                     if(i<length - 1 && i>0){
                        this.nextTitle = allCase[i+1].title
                        this.preTitle = allCase[i-1].title 
                     }
                                    
                 }
             }
        },
        methods:{
            next(){
                let prevNum = sessionStorage.id--
                  if(prevNum < JSON.parse(localStorage.allCase)[this.length - 1].id){
                    prevNum = JSON.parse(localStorage.allCase)[this.length - 1].id
                    sessionStorage.id = JSON.parse(localStorage.allCase)[this.length - 1].id
                }
                this.reload()
            },
            prev(){
                let nextNum = sessionStorage.id++
                if(nextNum > JSON.parse(localStorage.allCase)[0].id){
                    nextNum = JSON.parse(localStorage.allCase)[0].id 
                    sessionStorage.id = nextNum
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