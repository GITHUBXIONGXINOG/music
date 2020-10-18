<template>
    <div class="song-sheet-list">
<!--        子组件接受-->
       <ul class="pt-3 px-4">
           <li v-for="item of hotSong"
               :key="item.id"
               class="d-flex pb-3"
           >
<!-- 属性绑定v-bind，它的作用就是让vue知道这是标签的一个属性，所以解析的时候就会变成我们所需要的链接-->
               <img :src="item.img" width="60">
                <div class="right d-flex flex-wrap pl-3 ai-center" >
                    <span class="title w100">{{item.title}}</span>
                    <span class="info text-gray2">收藏:{{item.info}}</span>
                </div>
           </li>
       </ul>
    </div>
</template>

<script type="text/javascript">

    export default {
      //props 定义接收属性
        props:{
            hotSong:{
                type:Array,
                required:true
            }
        }
    }
</script>
