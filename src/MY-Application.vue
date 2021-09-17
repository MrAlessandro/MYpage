<template>
  <MY-main-navbar @mounted="onNavbarMounted" :homepage-scroll-top="homepageScrollState"></MY-main-navbar>
  <router-view id="MY:view-root" class="MY:view-space" :navbar-placeholder-height="mainNavbarHeight"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MYMainNavbar from '@/components/MY-MainNavbar.vue'
import { MYonChangeHomepageScrollStateEventName } from '@/lib/Events'
import { EscrollState } from '@/lib/interfaces/EscrollState'

@Options({
  components: {
    'MY-main-navbar': MYMainNavbar
  }
})
export default class MYApplication extends Vue {
  private homepageScrollStateChangeEventName = MYonChangeHomepageScrollStateEventName
  private homepageScrollState = EscrollState.TOP
  private mainNavbarHeight = 0

  mounted (): void {
    document.addEventListener('scroll', this.onScroll)
  }

  onNavbarMounted (navbar: HTMLElement): void {
    this.mainNavbarHeight = navbar.offsetHeight
  }

  isScrollTop (): boolean {
    return window.scrollY === 0
  }

  onScroll (): void {
    this.homepageScrollState = this.isScrollTop() ? EscrollState.TOP : EscrollState.BELOW
  }
}
</script>

<style lang="scss">
@import "assets/styles/variables";

.MY\:view-space {
}
</style>
