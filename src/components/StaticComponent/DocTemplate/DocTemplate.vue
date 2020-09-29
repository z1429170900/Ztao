<template>
    <div class="doc_template">
        <div class="first">
            <h1>{{ title }}</h1>
            <p>{{ message }}</p>
        </div>
        <div class="second">
            <div class="title">代码演示</div>
            <slot name="example"></slot>
        </div>
        <div class="thired">
            <div class="title">参数说明</div>
            <slot name="parameter"></slot>
        </div>
        <div class="thired">
            <div class="title">事件说明</div>
            <slot name="event"></slot>
        </div>
        <div class="partner">
            <div class="list">
                <div class="item" v-for="item in userList" :key="item.id">
                    <a :href="item.href">
                        <img :src="item.pictrue" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
    .doc_template {
        padding: 0 5%;
        box-sizing: border-box;
        .first {
            margin-bottom: 40px;
        }
        .second {
            .title {
                font-size: 24px;
                margin-bottom: 20px;
            }
            
        }
        .thired {
            .title {
                font-size: 24px;
                margin: 20px 0;
            }
        }
        .partner {
            margin: 40px 0 20px 0;
            a {
                display: block;
                width: 32px;
                height: 32px;
                border-radius: 50%;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }
        }
    }
</style>

<script>
import { onMounted, reactive } from 'vue';

export default {
    components: {
    },
    props: {
        title: {
            type: String,
            default: "组件名称"
        },
        message: {
            type: String,
            default: "组件描述"
        },
        userList: {
            type: Array,
            default: () => []
        }
    },
    setup() {
        onMounted(() => {

        });

        return {
        }
    }
}
</script>