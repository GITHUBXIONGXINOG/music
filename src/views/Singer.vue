<template>
<!--    使用组件
        : v-bind 绑定属性 传递singerCategory给子组件singer-category
         采用v-if会销毁组件并且重绘，这样就会重载组件
         ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。
         如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；
         如果用在子组件上，引用就指向组件实例：
-->
    <singer-category
        :singer-category="singerCategory"
        v-if="DestroyIncomeStatistics == true"

    />
</template>

<script type="text/javascript">
// 导入歌手页面
import SingerCategory from '@/components/main/Singer/SingerCategory'
import axios from 'axios'
  export default {

     data(){
         return{
             singerCategory:{},
             //子组件更新变量
             DestroyIncomeStatistics:Boolean
         }
     },
      methods:{

      },
      //vue生命周期
      // created ：处于loading结束后，还做一些初始化，实现函数自执行
      created() {
         //该子组件更新变量默认为false
         this.DestroyIncomeStatistics = false;
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
      },
      //映射组件
      components:{
          SingerCategory
      },
  }


</script>
