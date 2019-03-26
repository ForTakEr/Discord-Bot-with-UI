<template>
  <div id="bot-button-wrapper">
    <button v-on:click="botEnabledClick" type="checkbox" value="asdf" id="bot-button">{{ bot_button_text }}</button>
  </div>

</template>

<script>
export default {
  data () {
    return {
      bot_button_text: 'Enabled'
    }
  },
  methods: {
    botEnabledClick: function () {
      if (this.bot_button_text === 'Disabled') {
        this.bot_button_text = 'Enabled'
        return this.bot_button_text
      }
      if (this.bot_button_text === 'Enabled') {
        this.bot_button_text = 'Disabled'
        return this.bot_button_text
      }
    }
  }
}
</script>

<style>
#bot-button-wrapper {
  flex: 1;
  background-color: rgb(90, 209, 170);
  margin-top: 16px;
  margin-left: 16px;
  width: 100%;
  height: 100%;
}

</style>