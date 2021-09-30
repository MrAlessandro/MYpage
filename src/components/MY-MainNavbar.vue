<template>
  <header>
    <div class="MY:container">
      <div class="MY:main-navbar-link-box">
        <template v-for="item in routes" :key="item.path">
          <router-link class="MY:main-navbar-link MY:text-xs" :to="item.path">
            {{ item.name }}
          </router-link>
        </template>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {computed, ComputedRef, defineComponent, PropType} from 'vue'
import {MYscrollState} from '@/types/Enums'
import {RouteRecordRaw, useRoute, useRouter} from 'vue-router'


export default defineComponent({
  components: {
    //'my-logo': MYlogo
  },
  props: {
    homepageScrollTop: {
      type: Number as PropType<MYscrollState>,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const route = useRoute()

    const isHomepageTop: ComputedRef<boolean> = computed(() => {
      return props.homepageScrollTop === MYscrollState.TOP && route.path === '/'
    })

    const routes: ComputedRef<Array<RouteRecordRaw>> = computed(() => {
      return router.options.routes
    })

    return {
      isHomepageTop: isHomepageTop,
      routes
    }
  }
})
</script>

<style lang="scss">
@import "../assets/styles/variables";
@import "../assets/styles/mixins";

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
  }
}
</style>
