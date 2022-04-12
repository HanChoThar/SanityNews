<template>
  <div class="bg-gray-700 min-h-screen text-white">
    <HeaderNav />
    <Sidebar />
    <router-view/>
  </div>
</template>

<script>
import HeaderNav from './components/HeaderNav.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    HeaderNav,
    Sidebar
  },
  watch: {
    '$route' () {
      this.$store.state.menu_is_active = false
    }
  }
}
</script>

<style>
.btn{
  background-color: #297819;
  color: white;
  padding: 10px;
  border-radius: 10px;
}
</style>
