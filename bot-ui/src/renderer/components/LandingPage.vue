<template>
  <div id="wrapper">
    <TopBar></TopBar>
    <CommandsView></CommandsView>
  </div>
</template>

<script>
  import TopBar from './LandingPage/TopBar'
  import CommandsView from './LandingPage/CommandsView'

  export default {
    name: 'landing-page',
    components: { TopBar, CommandsView }
  }
</script>

<style>
</style>
