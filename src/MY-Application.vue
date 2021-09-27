<template>
  <my-main-navbar id="MY:main-navbar" ref="MYmainNavbar" :homepage-scroll-top="MYhomepageScrollState"></my-main-navbar>
  <div id="MY:main-navbar-placeholder" :style="{height: MYmainNavbarHeight + 'px'}"></div>
  <router-view id="MY:view-root" class="MY:view-space"/>
  <my-splash-welcome v-if="MYanimatedFlag" @[MYsplashScreenAnimationEndEventName]="MYsplashAnimationEndHandler"></my-splash-welcome>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import MYmainNavbar from '@/components/MY-MainNavbar.vue'
import MYsplashWelcome from '@/components/MY-SplashWelcome.vue'
import {MYsplashScreenSetup} from "@/setup/MY-SplashScreenSetup";
import {MYhomepageScrollSetup} from "@/setup/MY-HomepageScrollSetup";

export default defineComponent({
  components: {
    'my-main-navbar': MYmainNavbar,
    'my-splash-welcome': MYsplashWelcome
  },
  setup() {
    return {
      ...MYhomepageScrollSetup(),
      ...MYsplashScreenSetup()
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
