<template>
    <div class="singer-category">
        <!--        循环遍历-->
        <div v-for="(value,key) of singerCategory" :key="key" class="px-3">
            <ul class="d-flex  text-gray2 text-xs flex-wrap">
                <li v-for="(category,index) of value"
                    :key="category.id"
                    class="p-1 m-2"
                    :class="{'singer-active':activeIndex[key]===index}"
                    @click="activeIndex[key]=index"

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
    created() {


    },
    watch:{

    }
}
</script>
