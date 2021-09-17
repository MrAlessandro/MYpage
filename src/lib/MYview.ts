import MYvue from '@/lib/MYvue'
import { Prop, Watch } from 'vue-property-decorator'

export default class MYview extends MYvue {
  @Prop() private navbarPlaceholderHeight!: number
  private navbarPlaceholder!: HTMLElement

  private static createPlaceholder (): HTMLElement {
    const placeholder = document.createElement('div')
    placeholder.setAttribute('id', 'MY:main-navbar-placeholder')
    placeholder.style.width = '100%'
    return placeholder
  }

  mounted (): void {
    this.navbarPlaceholder = MYview.createPlaceholder()
    this.navbarPlaceholder.style.height = this.navbarPlaceholderHeight + 'px'
    this.$el.prepend(this.navbarPlaceholder)
    super.mounted()
  }

  @Watch('navbarPlaceholderHeight', { immediate: true })
  setNavbarPlaceholder (): void {
    if (this.$el) {
      this.navbarPlaceholder.style.height = this.navbarPlaceholderHeight + 'px'
    }
  }
}
