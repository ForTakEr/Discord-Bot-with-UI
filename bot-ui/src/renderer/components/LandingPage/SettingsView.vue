<template>
  <div id="settings-view">
    <webview id="devPortal" :src="devPortalUrl"></webview>
  </div>
</template>

<script>
  export default {
    data () {
      var id = 547006018182184960
      var devPortalUrl = 'https://discordapp.com/developers/applications/' + id + '/bots'
      return {
        devPortalUrl
      }
    }
  }
</script>

<style>
#devPortal {
  min-height: 250px;
  height: 500px;
  max-height: 500px;
}

</style>