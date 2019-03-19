<template>
  <div id="settings-view">
    <input id="bottoken" type="text" size="59" maxlength="59" name="bottoken" placeholder="Bot token">
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

#bottoken {
  border-style: solid;
  border-width: 1px;
  margin: 16px;
}

</style>