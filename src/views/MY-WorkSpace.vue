<template>
  <div class="MY:container" style="text-align: right">
    <input type="checkbox" v-model="collapse" style="margin-bottom: 50px">
    <my-logo :collapse="collapse" style="width: 100%"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";
import MYlogo from '@/components/MY-Logo.vue'

export default defineComponent({
  components: {
    'my-logo': MYlogo
  },
  setup() {
    const state = reactive({
      collapse: false
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped>

</style>
