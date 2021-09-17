import { Vue } from 'vue-class-component'

export default class MYvue extends Vue {
  mounted (): void {
    this.$emit('mounted', this.$el)
  }
}
