<template>
  <div class="MY:main-navbar">
    <div class="MY:container">
      <div class="MY:main-navbar-link-box">
        <template v-for="item in routes" :key="item.path">
          <router-link class="MY:main-navbar-link" :to="item.path">{{ item.name }}</router-link>
        </template>
      </div>
      <div class="MY:main-navbar-brand-logo">

      </div>
    </div>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { RouteRecordRaw } from 'vue-router'

export default class MYapp extends Vue {
  get routes (): Array<RouteRecordRaw> {
    return this.$router.options.routes
  }
}
</script>

<style lang="scss">
$MY-main-navbar-vertical-padding: 1rem;

.MY\:main-navbar {
  @import "assets/styles/variables";
  padding-top: $MY-main-navbar-vertical-padding;
  padding-bottom: $MY-main-navbar-vertical-padding;

  .MY\:container {
    display: flex;
    justify-content: space-between;

    .MY\:main-navbar-link-box {
      display: flex;

      .MY\:main-navbar-link {
        display: block;
        margin-right: 1rem;
        text-decoration: none;
        color: $MY-primary-color;

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
      background-image: url("assets/illustrations/MYlogo.svg");
    }

  }
}
</style>
