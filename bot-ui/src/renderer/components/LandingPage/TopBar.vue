<template>
  <div id="top-bar">
    <SettingsButton></SettingsButton>
  </div>
</template>

<script>
  import SettingsButton from './SettingsButton'

  export default {
    name: 'top-bar',
    components: { SettingsButton }
  }
</script>

<style scoped>
  #top-bar {
    display: flex;
  }
</style>
