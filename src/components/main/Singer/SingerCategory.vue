<template>
    <div class="singer-category">
        <!--        循环遍历-->
        <div v-for="(value,key) of singerCategory" :key="key" class="px-3">
            <ul class="d-flex  text-gray2 text-xs flex-wrap">
                <li v-for="(category,index) of value"
                    :key="category.id"
                    class="p-1 m-2"
                    :class="{'singer-active':activeIndex[key]===index}"
                    @click="categoryClick(key,index)"
                >
                    {{category.name}}
                </li>
            </ul>

        </div>
    </div>

</template>

<script type="text/javascript">
export default {
    //子组件设置props接受数据
    props: {
        singerCategory: {
            type: Object,
            required: true
        }
    },
    data(){
        return{
            activeIndex:{
                area:0,
                genre:0,
                index:0,
                sex:0
            },
        }
    },
    methods:{
        //点击时,不止样式发生变化,而且要派发事件给父组件,告诉父组件数据需要重新获取
        categoryClick(key,index){
            this.activeIndex[key]=index
            const params = {}
            for (let key in this.activeIndex){
                params[key] = this.singerCategory[key][this.activeIndex[key]].id
            }
            console.log(params)
            //派发事件,并把对应的活动index也派发出去
            // this.$emit('category-click',)

        },

    },
    created() {
        console.log(this.singerCategory )

    },
    watch:{

    }
}
</script>
