<template>
  <div class="MY:container" style="text-align: right">
    <div style="display: flex; justify-content: space-evenly; width: 100%; margin-bottom: 50px; margin-top: 50px">
      <div>
        <label for="barcodePulse-check">Barcode pulse</label>
        <input id="barcodePulse-check" type="checkbox" v-model="barcodePulse" style="">
      </div>
      <div>
        <label for="Ycollapse-check">Collapse vertically</label>
        <input id="Ycollapse-check" type="checkbox" v-model="Ycollapse" style="">
      </div>
      <div>
        <label for="Xcollapse-check">Collapse horizontally</label>
        <input id="Xcollapse-check" type="checkbox" v-model="Xcollapse" style="">
      </div>
      <div>
        <label for="shineText-check">Text shiny</label>
        <input id="shineText-check" type="checkbox" v-model="shineText" style="">
      </div>
    </div>

    <my-logo :collapse-y="Ycollapse" :barcode-pulse="barcodePulse" :text-shine="shineText" :collapse-X="Xcollapse" style="width: 100%"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, toRefs} from "vue";
import MYlogo from '@/components/MY-Logo/MY-Logo.vue'

export default defineComponent({
  components: {
    'my-logo': MYlogo
  },
  setup() {
    const state = reactive({
      Ycollapse: false,
      Xcollapse: false,
      barcodePulse: false,
      shineText: false
    })

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style scoped>

</style>
