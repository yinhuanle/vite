<script setup lang="ts">
defineProps({
  msg: {
    type: String,
    default: ''
  }
})

const count = ref<number>(0)
type Obj = {
  o: number
}

const obj: Obj = {
  o: 2
}
count.value++
console.log(obj, count.value)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code>
      to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>
    , the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  https://vuejs.org/guide/quick-start.html#local
  https://vuejs.org/guide/quick-start.html#localhttps://vuejs.org/guide/quick-start.html#localhttps://vuejs.org/guide/quick-start.html#local
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
