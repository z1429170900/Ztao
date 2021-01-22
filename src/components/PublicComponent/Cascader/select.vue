<template>
    <div class="select_all_box">
        <div class="select_list" v-for="(data, index) in showList" :key="index">
            <div class="overflow">
                <div class="select_item" v-for="item in data" :key="item.value" @click="checkItem(item, index)">
                    <div class="select_title">{{ item.label }}</div>                    
                    <span v-if="item.children && item.children.length" class="iconfont icon-arrow-right"></span>
                </div>
            </div>
        </div>        
    </div>
    
</template>

<style lang="less" scoped>
    .select_all_box {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        height: auto;
        padding-top: 10px;
        z-index: 20;
        display: flex;
    }
    .select_list {
        background: #fff;
        border-radius: 4px;
        box-shadow: 0 2px 8px rgba(0,0,0,.15);
        min-width: 150px;
        width: auto;
        height: 200px;
        padding: 4px 0;
        
        .overflow {
            width: 100%;
            height: 100%;
            overflow: auto;
        }
        .select_item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 12px;
            .select_title {
                color: rgba(0,0,0,.65);
                transition: background .3s ease;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
            }     
        }
        .select_item:hover {
            background: #e6f7ff;
        }
    }
</style>

<script>
import { ref, watch } from "vue";

export default {
    name: "vselect",
    props: ["data"],
    setup(props, context) {


        const showList = ref([]);

        function checkItem(item, index) {
            if (item.children && item.children.length) {
                // 展开子集
                if (showList.value[index + 1] && showList.value[index + 1][0].label === item.children[0].label) {
                    // 重复点击直接选中
                    context.emit("check", item);
                } else {
                    showList.value[index + 1] = item.children;
                    showList.value = showList.value.slice(0, index + 2); // index+1后面的去掉
                }
                
            } else {
                context.emit("check", item);
            }
        }

        watch(
            props.data,
            (data, prevData) => {
                showList.value = [];
                showList.value.push(props.data);
            },
            {immediate:true}
        )

        return {
            showList,
            checkItem
        }
    }
}
</script>