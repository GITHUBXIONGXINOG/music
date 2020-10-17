<template>
    <div class="recommend">
<!--       使用组件-->
        <my-swiper></my-swiper>
    </div>
</template>

<script type="text/javascript">
  import MySwiper from '@/components/main/recommend/MySwiper'
  export default {
      methods:{
        async fetchSwiperList(){
            // const res = await this.$http.get('/recommend/banner')
            // console.log(res.data)
            const res = await this.$http.get('/recommend/banner');
            this.swiperList = res.data.data.map(item => ({img: item.pic_info.url}))
        }
      },
      created() {
          this.fetchSwiperList()
      },
      //注册组件
      components:{
          MySwiper
      }
  }





</script>
<!--
在App.vue中使用router-view渲染路径匹配到的视图组件
在路由router.js里配置路由的路径(path)和映射的组件(component)
比如映射的Recommend.vue
const routes = [
    {
path: '/',
component: Main,
children:[
{path:'Recommend',component:Recommend}
        ]
    }
]
映射后可以显示Recommend里面的内容
再在Recommend里导入MySwiper
通过template里使用映射的组件来显示my-swiper的内容
-->
