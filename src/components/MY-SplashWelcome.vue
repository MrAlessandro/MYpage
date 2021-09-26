<template>
  <div id="MY:splash-welcome">
    <div ref="splashWelcomeBubble" id="MY:splash-welcome-bubble"></div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from "vue";

export default defineComponent({
  name: "MYSplashWelcome",
  setup(props, context) {
    const splashWelcomeBubble = ref()

    onMounted(() => {
      splashWelcomeBubble.value.classList.add('animate')
      splashWelcomeBubble.value.addEventListener('animationend', () => {
        context.emit('splashed')
      });
    })

    return {
      splashWelcomeBubble
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../assets/styles/variables";
@import "../assets/styles/mixins";

#MY\:splash-welcome {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &.hide {
    display: none;
  }

  #MY\:splash-welcome-bubble {
    background-color: $MY-color-primary;
    border-radius: 50%;
    width: max(100vh, 100vw);
    height: max(100vh, 100vw);

    &.animate {
      @include MY\:hardware-accelerate(transform);
      animation-name: MY\:bubble-animation;
      animation-duration: 1s;
      animation-fill-mode: forwards;
      animation-timing-function: ease-in;
    }
  }

  @keyframes MY\:bubble-animation {
    0% {
      transform: scale(2);
    }
    100% {
      transform: scale(0);
    }
  }
}
</style>
