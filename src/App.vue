<template>
  <div class="MY:main-navbar">
    <div class="MY:container">
      <template v-for="item in routes" :key="item.path">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </template>
    </div>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component'
import { RouteRecordRaw } from 'vue-router'

export default class App extends Vue {
  get routes (): Array<RouteRecordRaw> {
    return this.$router.options.routes
  }
}
</script>

<style lang="scss">
$MY-main-navbar-vertical-padding: 1rem;

.MY\:main-navbar {
  padding-top: $MY-main-navbar-vertical-padding;
  padding-bottom: $MY-main-navbar-vertical-padding;
}
</style>
