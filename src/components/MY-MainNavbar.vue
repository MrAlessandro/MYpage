<template>
  <header>
    <div class="MY:container">
      <div class="MY:main-navbar-link-box">
        <template v-for="item in routes" :key="item.path">
          <router-link class="MY:main-navbar-link MY:text-sm" :to="item.path">
            {{ item.name }}
          </router-link>
        </template>
      </div>
      <div class="MY:main-navbar-brand-logo" :class="{'MY\:scroll-top': isHomepageTop}"></div>
    </div>
  </header>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, PropType } from 'vue'
import { EscrollState } from '@/types/EscrollState'
import { RouteRecordRaw, useRoute, useRouter } from 'vue-router'

export default defineComponent({
  props: {
    homepageScrollTop: {
      type: Number as PropType<EscrollState>,
      required: true
    }
  },
  setup (props) {
    const router = useRouter()
    const route = useRoute()

    const isHomepageTop: ComputedRef<boolean> = computed(() => {
      return props.homepageScrollTop === EscrollState.TOP && route.path === '/'
    })

    const routes: ComputedRef<Array<RouteRecordRaw>> = computed(() => {
      return router.options.routes
    })

    return {
      isHomepageTop,
      routes
    }
  }
})
</script>

<style lang="scss">
@import "../assets/styles/variables";

$MY-main-navbar-vertical-padding: 1rem;

#MY\:main-navbar {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  background-color: $MY-color-dark;

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
        color: $MY-color-light;

        &:last-child {
          margin-right: 0;
        }

        &:hover {
          color: $MY-color-primary-accent;
        }
      }
    }

    .MY\:main-navbar-brand-logo {
      width: $MY-main-navbar-logo-width;
      height: $MY-main-navbar-logo-height;

      background-position: center;
      background-size: contain;
      background-image: url("../assets/illustrations/MYlogo.svg");
      background-repeat: no-repeat;

      transition: transform $MY-animations-duration-medium $MY-animations-style,
      transform-origin $MY-animations-duration-medium $MY-animations-style;

      transform-origin: 100% -22%;

      &.MY\:scroll-top {
        @media (min-width: $MY-xl) {
          pointer-events: none;
          transform: scale(10);
          transform-origin: 100% -22%;
        }
      }

    }

  }
}
</style>
