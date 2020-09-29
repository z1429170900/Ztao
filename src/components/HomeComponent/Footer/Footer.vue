<template>
    <div class="home_footer">
        <div class="menu_list">
            <div class="list_first">
                <div class="title">
                    相关资料
                </div>
                <ul class="list_first_item">
                    <li>
                        <a href="">Vue.js</a>
                    </li>
                    <li>
                        <a href="">Vue CLI</a>
                    </li>
                    <li>
                        <a href="">Joke</a>
                    </li>
                    <li>
                        <a href="">Webpack CLI</a>
                    </li>
                </ul>
            </div>

            <div class="list_first">
                <div class="title">
                    社区
                </div>
                <ul class="list_first_item">
                    <li>
                        <a href="">知乎</a>
                    </li>
                    <li>
                        <a href="">掘金</a>
                    </li>
                    <li>
                        <a href="">CSDN</a>
                    </li>
                    <li>
                        <a href="">简书</a>
                    </li>
                </ul>
            </div>

            <div class="list_first">
                <div class="title">
                    帮助
                </div>
                <ul class="list_first_item">
                    <li>
                        <a href="">GitHub</a>
                    </li>
                    <li>
                        <a href="">更新日志</a>
                    </li>
                    <li>
                        <input type="color" v-model="themeColor" @change="colorChange">
                    </li>
                </ul>
            </div>
        </div>
        <div class="autograph">
            即追求生活的烟火，也不放弃生命的狂热。
            <span class="red">❤❤❤</span>
        </div>
    </div>
</template>

<style lang="less" scoped>
    @theme: hsla(0,0%,100%,.25);
    .home_footer {
        height: 300px;
        background: #000;
        padding: 40px;

        .menu_list {
            height: 300px;
            display: flex;
            justify-content: space-around;
            .title {
                color: #fff;
                margin-bottom: 10px;
            }
            .list_first {
            }
            .list_first_item {
                padding: 0;
                margin: 0;
                list-style: none;
                li {
                    padding: 10px 0;
                    input {
                        background: transparent;
                        cursor: pointer;
                        outline: 0;
                    }
                }
                a {
                    color: #fff;
                }
            }
        }
        .autograph {
            border-top: 1px solid @theme;
            color:@theme;
            text-align: center;
            padding-top: 10px;
            .red {
                color: red;
            }
        }
    }
</style>

<script>
import { ref } from 'vue'

export default {
    setup() {
        const themeColor = ref("#008dfe");

        function colorChange(e) {
            console.log(themeColor.value);
            document.body.style.setProperty('--themeColor', themeColor.value);
            document.body.style.setProperty('--themeBgColor', themeColor.value + "4d");
        }

        return {
            themeColor,
            colorChange
        }
    }
}
</script>