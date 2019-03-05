<template>
  <div id="wrapper">
    <TopBar></TopBar>
    <CommandsView></CommandsView>
    <SettingsView></SettingsView>
  </div>
</template>

<script>
  import TopBar from './LandingPage/TopBar'
  import CommandsView from './LandingPage/CommandsView'
  import SettingsView from './LandingPage/SettingsView'

  export default {
    name: 'landing-page',
    components: { TopBar, CommandsView, SettingsView }
  }
</script>

<style>
</style>
