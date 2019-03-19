<template>
  <div id="top-bar">
    <CommandsButton></CommandsButton>
    <BotButton></BotButton>
    <SettingsButton></SettingsButton>
  </div>
</template>

<script>
  import SettingsButton from './SettingsButton'
  import CommandsButton from './CommandsButton'
  import BotButton from './BotButton'

  export default {
    name: 'top-bar',
    components: { SettingsButton, BotButton, CommandsButton }
  }
</script>

<style scoped>
  #top-bar {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px black;
  }
</style>
