<template>
<!--    映射组件
        : v-bind 绑定属性 传递singerCategory给子组件singer-category
         采用v-if会销毁组件并且重绘，这样就会重载组件
         ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。
         如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；
         如果用在子组件上，引用就指向组件实例：
-->
    <div class="singer">
<!--        ref 添加引用,这里使用后会自动在this.$refs上添加scroll  -->
       <scroll :list="singerList" :top="83" ref="scroll">
           <div class="scroll-wrapper">
               <!--        歌手分类   @category-click="fetchSingerList()"-->
               <singer-category
                       :singer-category="singerCategory"
                       v-if="DestroyIncomeStatistics == true"
                        @category-click="fetchSingerList"
               />
               <!--        歌手列表
                           通过v-bind将歌手列表数据派发给子组件singer-list
               -->
               <singer-list
                       :list="singerList"
                       @category-click="fetchSingerList"
               />
           </div>
       </scroll>
    </div>

</template>

<script type="text/javascript">
// 导入歌手页面
import SingerCategory from '@/components/main/Singer/SingerCategory'
//导入歌手列表
import SingerList from '@/components/main/Singer/SingerList'
//导入滑动
import Scroll from "@/components/commond/Scroll";
import axios from 'axios'
  export default {

     data(){
         return{
             //歌手分类存储
             singerCategory:{},
             //子组件更新变量
             DestroyIncomeStatistics:Boolean,
             singerList:[]
         }
     },

      methods:{
         //
            async fetchSingerList(params){
                //每次选择时都要 清空一次
                this.singerList = []
                const res = await this.$http.get('/singer/list',{
                    params
                })
                this.singerList = res.data.data.list
            }

      },
      //vue生命周期
      // created ：处于loading结束后，还做一些初始化，实现函数自执行
      created() {
         //在loading结束后,调用歌手列表参数fetchSingerList
         this.fetchSingerList()
         //该子组件更新变量默认为false
         this.DestroyIncomeStatistics = false;
        // 获取歌手分类
        axios.get('/api/singer/category').then(res=>{
            // console.log(res.data)
            // console.log(Object.keys(res.data.data))
            //type存储类别
            let type = Object.keys(res.data.data)
                // console.log(type)
                // //查看属性
                // console.log(Object.getOwnPropertyNames(res.data.data));
            //for (变量 in 对象)
            for (type in res.data.data){
                    // debugger
                this.singerCategory[type] =  res.data.data[type]
            }
            // console.log(this.singerCategory)
            //nextTick涉及到Vue中DOM的异步更新
            //在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中
            //this.$nextTick()将回调延迟到下次 DOM 更新循环之后执行。
            //在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，
            //不同的是回调的 this 自动绑定到调用它的实例上。
            this.$nextTick(() => {
                //子组件更新变量设置为true
                this.DestroyIncomeStatistics = true;
            });
        })

      //    获取歌手列表
      //   axios.get('/api/singer/list').then(res=>{
      //         // console.log(res.data)
      //         this.singerList=res.data.data.list
      //         // console.log( this.singerList)
      //     })


      },
      //注册组件
      components:{
          SingerCategory,
          SingerList,
          Scroll,
      },
      watch:{
         //边界处理
          //防止歌曲分类的数据获取速度没有歌手列表快,使得滚动高度没有包含它
          //这样就会不能滑动到
         singerCategory(){
             //Vue.nectTick() 是在下次DOM更新循环结束之后执行延迟回调，
             // 在修改数据之后使用$nextTick，则可以在回调中获取更新后的DOM（dom的改变是发生在nextTick()之后）
             this.$nextTick(()=>{
                 //refresh()重新渲染
                 this.$refs.scroll.refresh()
             })
         }
      }
  }


</script>
