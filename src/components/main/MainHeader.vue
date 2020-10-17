<template>
    <div class="main-header">
        <div class="title text-primary text-lg text-weight-7 text-center">
    <!--双花括号:执行表达式,将表达式的结果 输出到当前调用的元素的innerHTML中-->
            {{title}}
        </div>
<!--          首页列表-->
        <div class="nav-list">
            <ul class="d-flex jc-around py-3 text-weight-7 text-gray2">
<!--                加了key(一定要具有唯一性) id的选择跟内容进行了一个关联
                    :class 给循环内添加活动样式
                    nav-active 就表示点击到,图标颜色改变
-->
                <li v-for="item in navList"
                    :key="item.name"
                    :class="{'nav-active':isActive(item.path)}"
                    @click="navClick(item.path)"
                >
                    {{item.name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/javascript">
  export default {
      //父组件通过 属性props向下传递数据给子组件
      //这里在Main.vue中引入了该组件,Main为它的子组件
      //props相当于设置一个属性title,接收type为String的字符串
      props:{
          title:{
              type:String,
              default: 'Function Music'
          }
      },
      //组件内的data需要return
      /*    不使用return包裹的数据会在项目的全局可见，会造成变量污染
          使用return包裹后数据中变量只在当前组件中生效，不会影响其他组件。*/
      data(){
          return{
              //首页列表
              navList:[
                  {path:'/recommend',name:'推荐'},
                  {path:'/singer',name:'歌手'},
                  {path:'/rank',name:'排行'},
                  {path:'/search',name:'搜索'}]
          }
      },
      //定义函数
      methods:{
          navClick(path){
              //子组件可以使用 $emit 触发父组件的自定义事件
              this.$emit('nav-click',path);
          },
          //this.$route.path 路由指向
          isActive(path){
              if (path === this.$route.path){
                  return true
              }
              //刚开始加载页面
              if (path === '/recommend' && this.$route.path ==='/'){
                  return true
              }
              return false
          }
      },

  }
</script>
