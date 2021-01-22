export default {
  // 指令绑定元素挂载前
  beforeMount(el) {
      console.log(11111)
  },
  // 指令绑定元素挂载后
  mounted(el, binding) {},
  // 指令绑定元素因为数据修改触发修改前
  beforeUpdate(el) {},
  // 指令绑定元素因为数据修改触发修改后
  updated(el) {},
  // 指令绑定元素销毁前
  beforeUnmount(el) {},
  // 指令绑定元素销毁后
  unmounted(el) {}
}