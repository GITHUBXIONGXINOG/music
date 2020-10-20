<template>
    <div class="singer-list">
         <ul v-for="singer of list" :key="singer.singer_id">
             <li class="d-flex ai-center px-5 py-3">
<!--                 显示图片-->
                 <img :src="singer.singer_pic" style="width: 60px;border-radius:50%">
<!--                 显示名字-->
                 <span class="pl-3 text-gray2">{{singer.singer_name}}</span>

             </li>
         </ul>
    </div>
</template>

<script type="text/javascript">
  export default {
      //singerList是singer的子组件,singer通过v-bind派发数据给singerList
      //singerList在props设置list来接收数据
      props:{
            list: {
                type:Array,
                required:true
            }
      }
  }
</script>
