<template>
<!--    ref 被用来给DOM元素或子组件注册引用信息。引用信息会根据父组件的 $refs 对象进行注册。
如果在普通的DOM元素上使用，引用信息就是元素; 如果用在子组件上，引用信息就是组件实例
    注意：只要想要在Vue中直接操作DOM元素，就必须用ref属性进行注册
这里给该div添加了ref="wrapper",则在this.$refs上会添加一个wrapper
this.$refs.wrapper就等于定位到该div

-->
    <div class="wrapper" ref="wrapper">
<!--        子组件内使用特殊的<slot>元素就可以为这个子组件添加一个 slot (插槽)-->
        <slot></slot>
    </div>
</template>

<script type="text/javascript">
import BScroll from '@better-scroll/core'
  export default {
    props:{
      top:{
          type:Number,
          default:0
      },
      list:{
          type:Array,
          required:true
      }
    },
    methods:{
        initScroll(){
            this.$refs.wrapper.style.top=this.top+'px'
            this.scroll = new BScroll(this.$refs.wrapper)
        },
        //定义刷新子组件高度的方法,用于其它组件调用
        refresh(){
            this.scroll && this.scroll.refresh()
        }
    },
      mounted() {
        this.initScroll()
      },
      //watch监测Vue实例上的数据变动 这里监视list的数据变动
      watch:{
        list(){
            //Vue中的nextTick涉及到Vue中DOM的异步更新
            //Vue.nextTick用于延迟执行一段代码，它接受2个参数（回调函数和执行回调函数的上下文环境）
            // 如果没有提供回调函数，那么将返回promise对象。
            this.$nextTick(()=>{
                // this.scroll.refresh() 重新计算子组件的高度 是better-scroll里面定义的方法
                // this.scroll.refresh()
                this.refresh()
            })
        }
      }

  }
</script>

<style type="text/css">
  .wrapper{
      position: absolute;
      overflow: hidden;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
  }

</style>
<!--scroll开始不能滑动的原因
    刚开始歌单还没有获取到时scroll就构建完成,造成了高度固定
-->
