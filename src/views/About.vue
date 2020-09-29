<template>
  <div class="about">
    <div class="left">
      <h1>代码转换工具</h1>
      <textarea id="codeGenerate" v-model="codeText" cols="30" rows="10"></textarea>
    </div>
    <div class="right">
      <h1>生成后的代码</h1>
      <div class="content">
        <pre><code>{{ formtCode }}</code></pre>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .about {
    width: 100%;
    height: 100%;
    display: flex;
    .left {
      width: 50%;
      padding: 10px;
      box-sizing: border-box;
      textarea {
        border: 1px solid #d3d3d3;
        width: 100%;
        height: 400px;
        outline: 0;
        padding: 10px;
        box-sizing: border-box;
        font-size: 14px;
        color: #444;
      }
    }
    .right {
      width: 50%;
      padding: 10px;
      box-sizing: border-box;
      .content {
        border: 1px solid #d3d3d3;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        min-height: 400px;
      }
    }
  }
</style>


<script>
import { reactive, ref, computed } from 'vue'

export default {
  filters: {
    codeFilter(val) {

    }
  },
  setup() {
    const codeText = ref("");
    const formtCode = computed(() => {
      let code;
      if (codeText.value) {
        code = codeText.value.replace(/</g, '&lt;').replace(/>/g, '&gt;');

      }
      return code
    })
    return {
      codeText,
      formtCode
    }
  }
}
</script>