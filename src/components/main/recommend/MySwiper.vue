<template>
    <div class="my-swiper">
<!--        v-if="swiperList.length"条件判断 当获取到数据后才会进行轮播-->
        <swiper ref="mySwiper" :options="swiperOptions" v-if="swiperList.length">
            <swiper-slide v-for="(item,index) of swiperList" :key="item.id">
<!--                 冒号 v-bind 指令用于设置HTML属性
                     @   v-on 指令用于绑定HTML事件
                     图片加载完后使用@load 绑定自定义imgLoad事件
-->
                <img :src="item.img" class="w100" @load="imgLoad">
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
      methods:{
        imgLoad(){
            //$emit 通过触发自定义事件，来给触发监听事件
            //这里图片加载完成后,会触发Recommend里面的img-load事件
            this.$emit('img-load')
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
