<template>
  <MY-main-navbar :homepage-scroll-top="homepageScrollState"></MY-main-navbar>
  <router-view id="MY:view-root" class="MY:view-space" v-on:mounted="initializeScrollbar()"
               v-on:[homepageScrollStateChangeEventName]="onHomePageScrollStateChange"/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import MYMainNavbar from '@/components/MY-MainNavbar.vue'
import { MYChangeScrollStateEvent, MYonChangeHomepageScrollStateEventName } from '@/lib/Events'
import { EscrollState } from '@/lib/interfaces/EscrollState'

@Options({
  components: {
    'MY-main-navbar': MYMainNavbar
  }
})
export default class MYApplication extends Vue {
  private homepageScrollStateChangeEventName = MYonChangeHomepageScrollStateEventName
  private homepageScrollState = EscrollState.UNSET
  private scrollbarShowTimer!: number

  onHomePageScrollStateChange (changeScrollStateEvent: MYChangeScrollStateEvent): void {
    this.homepageScrollState = changeScrollStateEvent.scrollState
  }
}
</script>

<style lang="scss">
@import "assets/styles/variables";

.MY\:view-space {
  position: relative;
  flex-grow: 1;
  overflow-y: auto;
}
</style>
