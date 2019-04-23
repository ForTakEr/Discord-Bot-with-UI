<template>
  <div id="settings-view">
    <div id="instructions">
      <h1>Instructions</h1><br/>
      <p>1. Go to <a id="link" href="https://discordapp.com/developers/applications/">https://discordapp.com/developers/applications/</a></p>
      <p>2. Navigate to bot </p>
      <p>3. Paste bot id into bot token field</p>
    </div>
    <div id="setting-fields">
      <label for="bot-token">Bot token</label>
      <input id="bot-token" type="text" size="59" maxlength="59" name="bottoken">
    </div>
    
  </div>
</template>
<script>
  export default {
    data () {
      return {
      }
    }
  }
</script>

<style>
#settings-view {
  background-color: #23272A;
  margin: 12px;
  animation: slide-right 0.55s ease;
  }

  @keyframes slide-right {
    0% {
        opacity: 0;
        transform: translateX(-400px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
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
  color: #DADADA;
}

#instructions {
  margin: 12px;
  background-color: #23272A;
  padding: 24px;
}

label {
  color: #DADADA;
  padding-left: 24px;
}

</style>