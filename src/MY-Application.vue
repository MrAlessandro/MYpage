<template>
  <my-main-navbar id="MY:main-navbar" ref="mainNavbar" :homepage-scroll-top="homepageScrollState"></my-main-navbar>
  <div id="MY:main-navbar-placeholder" :style="{height: mainNavbarHeight + 'px'}"></div>
  <router-view id="MY:view-root" class="MY:view-space"/>
  <my-splash-welcome v-if="toAnimate" @splashed="onSplashEnd"></my-splash-welcome>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount, onMounted, ref} from 'vue'
import {EscrollState} from '@/types/EscrollState'
import MYmainNavbar from '@/components/MY-MainNavbar.vue'
import MYsplashWelcome from '@/components/MY-SplashWelcome.vue'

export default defineComponent({
  components: {
    'my-main-navbar': MYmainNavbar,
    'my-splash-welcome': MYsplashWelcome
  },
  setup() {
    const mainNavbar = ref()
    const mainNavbarHeight = ref(0)
    const homepageScrollState = ref<EscrollState>(EscrollState.TOP)
    const toAnimate = ref()
    const body = document.querySelector('body')

    const isScrollTop: () => boolean = () => {
      return window.scrollY === 0
    }

    const onScroll: () => void = () => {
      homepageScrollState.value = isScrollTop() ? EscrollState.TOP : EscrollState.BELOW
    }

    const onSplashEnd: () => void = () => {
      toAnimate.value = false
      body?.classList.remove('MY:scroll-disabled')
    }

    onBeforeMount(() => {
      body?.classList.add('MY:scroll-disabled')
      toAnimate.value = true
    })

    onMounted(() => {
      document.addEventListener('scroll', onScroll)
      mainNavbarHeight.value = mainNavbar.value.$el.offsetHeight
    })


    return {
      mainNavbar,
      mainNavbarHeight,
      homepageScrollState,
      onSplashEnd,
      toAnimate
    }
  }
})
</script>

<style lang="scss">
@import "assets/styles/variables";

#MY\:main-navbar-placeholder {
  width: 100%;
}

.MY\:view-space {
}
</style>
