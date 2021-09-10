<template>
  <div class="home">
    <h1>{{greetings}}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'

@Options({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  private greetings = 'ciao';
}
</script>
