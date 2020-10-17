<template>
    <div class="my-swiper">
<!--        v-if="swiperList.length"条件判断 当获取到数据后才会进行轮播-->
        <swiper ref="mySwiper" :options="swiperOptions" v-if="swiperList.length">
            <swiper-slide v-for="(item,index) of swiperList" :key="item.id">
<!--                 冒号 v-bind -->
                <img :src="item.img" class="w100">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>


<script type="text/javascript">
//导入轮播样式
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'


  export default {
      //子组件通过prop确定类型并接收数据
    props:{
        swiperList:{
            type: Array,
            required: true
        },

        swiperOptions:{
            type:Object,
            required: true
        }
    },
      components: {
          Swiper,
          SwiperSlide
      },
      directives: {
          swiper: directive
      },
  }
</script>
