<template>
    <div class="app">
        <!--<router-view> 组件是一个 functional 组件，渲染路径匹配到的视图组件。通过导航到达其它页面-->
        <router-view></router-view>

    </div>
</template>

<style type="text/css">
  .app{
      /* vw 把宽分成100小格,一小份为vw
         1vw等于视口宽度的1%。
      */
      width: 100vw;
      height: 100vh;
  }

</style>
