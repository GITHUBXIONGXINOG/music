<template>
    <div class="recommend">
<!--       使用组件-->
<!--            冒号“：”是v-bind的缩写
           父组件传值给my-swiper子组件 参数在父组件 传给子组件
-->
        <my-swiper :swiper-list="swiperList"
                   :swiper-options="swiperOptions"
        >


        </my-swiper>
    </div>
</template>

<script type="text/javascript">
  import MySwiper from '@/components/main/recommend/MySwiper'
  import axios from 'axios'
  export default {
      data(){
          return {
              swiperList:[],
              swiperOptions: {
                  pagination: {
                      el: '.swiper-pagination'
                  },
                  loop:true,
                  autoplay:true
              }
          }
      },
      methods:{

      },
      created() {
          axios.get('/api/recommend/banner').then(res=>{
                // console.log(res)
              //res 获取到的连接
              //data 连接里的数据保存在data里面
              // this.swiperList = res.data.data.map(item => ({img:item.picUrl}))
              this.swiperList = res.data.data.map(item => ({img: item.picUrl}))
              // console.log(this.swiperList.map(item => item.img))

          })
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
