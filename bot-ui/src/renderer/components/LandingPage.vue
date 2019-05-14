<template>
  <div id="wrapper">
    <TopBar></TopBar>
    <CommandsView v-if="curView == 'CommandsView'"></CommandsView>
    <SettingsView v-if="curView == 'SettingsView'"></SettingsView>
    <StatusView></StatusView>
  </div>
</template>

<script>
  import TopBar from './LandingPage/TopBar'
  import CommandsView from './LandingPage/CommandsView'
  import SettingsView from './LandingPage/SettingsView'
  import StatusView from './LandingPage/StatusView'

  export default {
    name: 'landing-page',
    components: { TopBar, CommandsView, SettingsView, StatusView },
    data () {
      return {
        curView: this.curView
      }
    },
    mounted () {
      this.curView = 'CommandsView'
    },
    methods: {
      setCurView: function (view) {
        this.curView = view
      }
    }
  }
</script>

<style>
</style>
