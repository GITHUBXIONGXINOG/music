<!--template: ‘<App/>’ 意思为替换挂载的元素为引入的组件-->
<template>
    <div class="main">
<!--     模板中使用组件：MainHeader   -->
<!--     在MainHeader中props定义了title       -->
        <main-header
                title='Function Music'
                @nav-click="toPath"
       />
         <router-view></router-view>



    </div>


</template>

<script type="text/javascript">
//@ 符号代表的是根目录，即 src 目录。
import MainHeader from '@/components/main/MainHeader'

//export default 导出一个模块 这里为匿名
//components: { App } 为引入组件
//使用 this.$router.push(location) 来修改 url，完成跳转
export default {
    methods:{
      toPath(path){
          this.$router.push(path)
      }
    },
    components:{
        MainHeader
    },


}
</script>
