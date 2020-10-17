<template>
    <div class="recommend">
<!--       使用组件-->
<!--            冒号“：”是v-bind的缩写
           父组件传值给my-swiper子组件 参数在父组件 传给子组件
-->
        <my-swiper :swiper-list="swiperList"
                   :swiper-options="swiperOptions"
        />
<!--        通过v-bind 传递数据给子组件SongSheetList-->
        <song-sheet-list
                :hot-song="hotSong"

        />
    </div>
</template>

<script type="text/javascript">
  import MySwiper from '@/components/main/recommend/MySwiper'
  import SongSheetList from '@/components/main/recommend/SongSheetList'
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
              },
              hotSong:[],

          }
      },
      methods:{

      },
      //created ：处于loading结束后，还做一些初始化，实现函数自执行（data数据已经初始化，但是DOM结构渲染完成，组件没有加载）
      created() {
          //then()方法是异步执行,当.then()前的方法执行完后再执行then()内部的程序，这样就避免了数据没获取到的问题。
          axios.get('/api/recommend/banner').then(res=>{
              // console.log(res)
              //res 获取到的连接
              //data 连接里的数据保存在data里面
              this.swiperList = res.data.data.map(item => ({img: item.picUrl}))
              // console.log(this.swiperList.map(item => item.img))
          });

          axios.get('/api/recommend/playlist').then(res =>{
              console.log(res)
              this.hotSong =  res.data.data.list.map(item =>({
                  id: item.access_num,
                  img: item.cover_url_medium,
                  title: item.title,
                  info: item.access_num,
              }))
          })

      },
      //注册组件
      components:{
          MySwiper,
          SongSheetList
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
