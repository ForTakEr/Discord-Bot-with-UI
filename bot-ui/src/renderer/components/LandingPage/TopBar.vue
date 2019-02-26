<template>
  <div id="top-bar">
    <CommandsButton></CommandsButton>
    <SettingsButton></SettingsButton>
  </div>
</template>

<script>
  import SettingsButton from './SettingsButton'
  import CommandsButton from './CommandsButton'

  export default {
    name: 'top-bar',
    components: { SettingsButton, CommandsButton }
  }
</script>

<style scoped>
  #top-bar {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px black;
  }
</style>
