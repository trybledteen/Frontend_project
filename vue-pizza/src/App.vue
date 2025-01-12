<script>
import Header from './components/Header.vue'
import Drawer from './components/Drawer.vue'

export default {
  name: 'AppLayout',
  components: {
    Header,
    Drawer
  },
  data() {
    return {
      drawerOpen: false
    }
  },
  methods: {
    openDrawer() {
      this.drawerOpen = true
    },
    closeDrawer() {
      this.drawerOpen = false
    }
  },
  provide() {
    return {
      cartActions: {
        closeDrawer: this.closeDrawer,
        openDrawer: this.openDrawer
      }
    }
  }
}
</script>

<template>
  <Drawer v-if="drawerOpen" @close="closeDrawer" />
  <div class="bg-neutral-400 w-4/5 m-auto rounded-xl shadow-xl mt-14">
    <Header @open-drawer="openDrawer" />
    <router-view></router-view>
  </div>
</template>