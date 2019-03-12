<template>
  <div id="wrapper">
    <TopBar></TopBar>
    <CommandsView v-if="curView == 'CommandsView'"></CommandsView>
    <SettingsView v-if="curView == 'SettingsView'"></SettingsView>
  </div>
</template>

<script>
  import TopBar from './LandingPage/TopBar'
  import CommandsView from './LandingPage/CommandsView'
  import SettingsView from './LandingPage/SettingsView'

  export default {
    name: 'landing-page',
    components: { TopBar, CommandsView, SettingsView },
    data () {
      return {
        curView: this.curView
      }
    },
    events: {
      'setCurView': function (view) {
        alert(5)
        this.curView = view
      }
    }
  }
</script>

<style>
</style>
