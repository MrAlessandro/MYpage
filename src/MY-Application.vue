<template>
  <my-main-navbar id="MY:main-navbar" ref="mainNavbar" :homepage-scroll-top="homepageScrollState"></my-main-navbar>
  <div id="MY:main-navbar-placeholder" :style="{height: mainNavbarHeight + 'px'}"></div>
  <router-view id="MY:view-root" class="MY:view-space"/>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch, watchEffect } from 'vue'
import { EscrollState } from '@/types/EscrollState'
import MYmainNavbar from '@/components/MY-MainNavbar.vue'

export default defineComponent({
  components: {
    'my-main-navbar': MYmainNavbar
  },
  setup () {
    const mainNavbar = ref()
    const mainNavbarHeight = ref(0)
    const homepageScrollState = ref<EscrollState>(EscrollState.TOP)

    const isScrollTop: () => boolean = () => {
      return window.scrollY === 0
    }

    const onScroll: () => void = () => {
      homepageScrollState.value = isScrollTop() ? EscrollState.TOP : EscrollState.BELOW
    }

    onMounted(() => {
      document.addEventListener('scroll', onScroll)
      mainNavbarHeight.value = mainNavbar.value.$el.offsetHeight
    })


    return {
      mainNavbar,
      mainNavbarHeight,
      homepageScrollState
    }
  }
})

/* @Options({
  components: {
    'MY-main-navbar': MYMainNavbar
  }
})
export default class MYApplication extends Vue {
  private homepageScrollStateChangeEventName = MYonChangeHomepageScrollStateEventName
  private homepageScrollState = EscrollState.TOP
  private navbarHeight = 0

  mounted (): void {
    document.addEventListener('scroll', this.onScroll)
  }

  onNavbarMounted (navbar: HTMLElement): void {
    this.navbarHeight = navbar.offsetHeight
  }

  isScrollTop (): boolean {
    return window.scrollY === 0
  }

  onScroll (): void {
    this.homepageScrollState = this.isScrollTop() ? EscrollState.TOP : EscrollState.BELOW
  }
} */
</script>

<style lang="scss">
@import "assets/styles/variables";

#MY\:main-navbar-placeholder {
  width: 100%;
}

.MY\:view-space {
}
</style>
