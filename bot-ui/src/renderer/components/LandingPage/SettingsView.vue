<template>
  <div id="settings-view">
    <div id="setting-fields">
      <input id="bot-token" type="text" size="59" maxlength="59" name="bottoken" placeholder="Bot token">
    </div>
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
#setting-fields {
  background-color: #23272A;
  margin: 12px;
}

#devPortal {
  min-height: 250px;
  height: 500px;
  max-height: 500px;
}

#bot-token {
  border-style: solid;
  border-width: 1px;
  margin: 16px;
}
</style>