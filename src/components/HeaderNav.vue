<template>
  <header class="w-full flex justify-center items-center p-4">
    <div :class="`menu-toggle relative z-50 ${menu_is_active ? 'is_active' : ''}`" @click="toggleMenu">
      <div class="hamburger">
        <svg v-show="!menu_is_active" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-show="menu_is_active" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>

    <h1 class="text-center text-2xl uppercase font-light tracking-widest">
      Sanity News
    </h1>
  </header>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();

    const toggleMenu = () => {
      store.dispatch('toggleMenu')
    }

    return {
      menu_is_active: computed(() => store.state.menu_is_active),
      toggleMenu
    }
  }
}
</script>

<style scoped>
.menu-toggle{
  cursor: pointer;
  position: absolute;
  left: 3%;
}
</style>