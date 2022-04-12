<template>
  <aside ref="damn" :class="`fixed top-0 left-0 min-h-screen pt-16 z-40 w-full max-w-xs transform duration-300 bg-gray-800 ${menu_is_active ? 'translate-x-0': '-translate-x-full'}`">
  <div class="p-4">
    <h2 class="text-gray-500 text-sm font-bold uppercase mb-2 pl-4">
      Menu
    </h2>

    <MenuItems to="/">
      Home
    </MenuItems>

    <MenuItems to="/authors">
      Authors
    </MenuItems>
  </div>
  </aside>

</template>

<script>
import {computed} from 'vue'
import {useStore} from 'vuex'
import MenuItems from './MenuItems.vue'

export default {
  components: {
    MenuItems
  },
  setup() {
    const store = useStore();

    return{
      menu_is_active: computed(() => store.state.menu_is_active)
    }

  }
}
</script>