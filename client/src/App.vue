<template>
  <div id="app">
    <!-- NAV -->
    <Navigation />
    <div style="padding-top: 60px;"></div>
    <router-view/>
  </div>
</template>
<script>
import Navigation from './components/Navigation';

export default {
  components: {
    Navigation
  }
}
</script>
<style lang="scss">

</style>
