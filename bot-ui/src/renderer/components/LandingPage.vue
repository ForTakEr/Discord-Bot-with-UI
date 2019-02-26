<template>
  <div id="wrapper">
    <SettingsButton></SettingsButton>
    <CommandList></CommandList>
  </div>
</template>

<script>
  import CommandList from './LandingPage/CommandList'
  import SettingsButton from './LandingPage/SettingsButton'

  export default {
    name: 'landing-page',
    components: { CommandList, SettingsButton }
  }
</script>

<style>
</style>
