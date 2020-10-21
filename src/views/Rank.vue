<template>
    <div  class="rank">
<!--3.引用组件
    scroll的子元素只运行是一个元素,用一个div包裹
-->
    <scroll :list="rankList" :top="83">
        <div class="scroll-wrapper" style="overflow: hidden">

            <div v-for="rank of rankList" :key="rank.topId" class="d-flex mx-4 my-3 shadow">
                <img :src="rank.picUrl" width="100" style="min-height: 100px">
                <!--       d-flex display:flex 设置为弹性盒
                            flex-wrap: wrap; 弹性盒在必要的时候换行
                            ai-center:align-item:center 居中
                     -->
                <ul class="d-flex flex-wrap ai-center pl-3 text-gray2 text-sm" >
                    <li v-for="(song,index) of rank.song" :key="index" class="w100">
                        <!--                    index显示0,1,2; ++index显示1,2,3-->
                        {{++index}}.{{song.title}}
                    </li>
                </ul>
            </div>

        </div>
    </scroll>
    </div>

</template>

<script type="text/javascript">
// 为了让头部固定,不默认滚动
// 1.引入滚动
import Scroll from "@/components/commond/Scroll";
     export default {
        data(){
            return{
                rankList:[]
            }
        },
        created() {
            this.fetchRankList()
        },
         methods:{
            async fetchRankList(){
                //{params:{showDetail:1}} 根据api的说明,传入此参数表示获取前3的歌曲
                const res =  await this.$http.get('/top/category',{params:{showDetail:1}})
                // console.log(res.data)
                //reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
                this.rankList = res.data.data.reduce((total,item)=>
                    total.concat(item.list),[]
                )
                // console.log(this.rankList)
            }
         },
     //    2.注册组件
         components:{
            Scroll
         }
     }

</script>
