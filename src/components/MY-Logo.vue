<template>
  <div class="MY:brand-logo" :class="{'MY\:scroll-top': isHomepageTop}">
    <inline-svg class="MY:brand-logo:left-bracket" :src="require('../assets/illustrations/logo/MYlogoLeftBracket.svg')"/>
    <div class="MY:brand-logo:content">
      <inline-svg class="MY:brand-logo:content:bar-code" :src="require('../assets/illustrations/logo/MYlogoBarCode.svg')"/>
      <div class="MY:brand-logo:content:text">
        <inline-svg class="MY:brand-logo:content:text:web"
                    :src="require('../assets/illustrations/logo/MYlogoTextWeb.svg')"/>
        <inline-svg class="MY:brand-logo:content:text:done"
                    :src="require('../assets/illustrations/logo/MYlogoTextDone.svg')"/>
      </div>
    </div>
    <inline-svg class="MY:brand-logo:right-bracket" :src="require('../assets/illustrations/logo/MYlogoRightBracket.svg')"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import InlineSvg from 'vue-inline-svg';

export default defineComponent({
  components: {
    InlineSvg
  },
  props: {
    isHomepageTop: {
      type: Boolean,
      required: true
    },
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/mixins";

.MY\:brand-logo {
  width: 200px;
  display: flex;
  align-items: center;
  transform-origin: 100% -170%;
  transition: transform $MY-animations-duration-medium $MY-animations-style,
  transform-origin $MY-animations-duration-medium $MY-animations-style;

  .MY\:brand-logo\:left-bracket,
  .MY\:brand-logo\:right-bracket, {
    width: 6%;
    fill: $MY-color-primary;
  }

  .MY\:brand-logo\:content {
    width: 86%;

    .MY\:brand-logo\:content\:bar-code {
      fill: $MY-color-primary;
    }

    .MY\:brand-logo\:content\:text {
      display: flex;
      justify-content: space-between;
      padding-left: 3.72%;
      padding-right: 3.72%;
      padding-top: 1.8%;

      .MY\:brand-logo\:content\:text\:web {
        fill: $MY-color-primary;
        width: 26.04%;
      }
      .MY\:brand-logo\:content\:text\:done {
        fill: $MY-color-primary;
        width: 36.74%;
      }
    }
  }

  &.MY\:scroll-top {
    @media (min-width: $MY-xl) {
      @include MY\:hardware-accelerate(transform, transform-origin);
      pointer-events: none;
      transform: scale(3);
      transform-origin: 100% -170%;
    }
  }
}
</style>
