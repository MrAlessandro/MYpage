<template>
  <header class="MY:main-navbar">
    <div class="MY:container">
      <div class="MY:main-navbar-link-box">
        <template v-for="item in routes" :key="item.path">
          <router-link class="MY:main-navbar-link" :to="item.path">{{ item.name }}</router-link>
        </template>
      </div>
      <div class="MY:main-navbar-brand-logo" :class="{'MY\:scroll-top': isHomepageTop}"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { RouteRecordRaw } from 'vue-router'
import { Prop } from 'vue-property-decorator'
import { EscrollState } from '@/lib/interfaces/EscrollState'

export default class MYMainNavbar extends Vue {
  @Prop() readonly homepageScrollTop!: EscrollState

  get isHomepageTop (): boolean {
    return this.homepageScrollTop === EscrollState.TOP
  }

  get routes (): Array<RouteRecordRaw> {
    return this.$router.options.routes
  }
}
</script>

<style lang="scss">
@import "../assets/styles/variables";

$MY-main-navbar-vertical-padding: 1rem;

.MY\:main-navbar {
  .MY\:container {
    display: flex;
    justify-content: space-between;
    padding-top: $MY-main-navbar-vertical-padding;
    padding-bottom: $MY-main-navbar-vertical-padding;

    .MY\:main-navbar-link-box {
      display: flex;

      .MY\:main-navbar-link {
        display: block;
        margin-right: 1rem;
        text-decoration: none;
        color: $MY-black;

        &:last-child {
          margin-right: 0;
        }
      }
    }

    .MY\:main-navbar-brand-logo {
      width: 60px;
      height: 36px;

      background-position: center;
      background-size: contain;
      background-image: url("../assets/illustrations/MYlogo.svg");

      transition: transform $MY-animations-duration-medium $MY-animations-style,
      transform-origin $MY-animations-duration-medium $MY-animations-style;

      transform-origin: 100% -31%;

      &.MY\:scroll-top {
        @media (min-width: $MY-xl) {
          pointer-events: none;
          transform: scale(10);
          transform-origin: 100% -31%;
        }
      }

    }

  }
}
</style>
