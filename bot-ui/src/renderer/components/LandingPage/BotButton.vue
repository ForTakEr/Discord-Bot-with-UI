<template>
  <div id="bot-button-wrapper">
    <button 
    v-on:click="botEnabledClick" 
    type="checkbox" 
    value="asdf" 
    id="bot-button"
    :class="{'disabled': !bot_button_enabled}"
    >{{ bot_button_text }}</button>
  </div>

</template>

<script>
export default {
  data () {
    return {
      bot_button_text: 'Enabled',
      bot_button_enabled: true
    }
  },
  methods: {
    botEnabledClick: function () {
      if (this.bot_button_text === 'Disabled') {
        this.bot_button_text = 'Enabled'
        this.bot_button_enabled = true
        return this.bot_button_text
      }
      if (this.bot_button_text === 'Enabled') {
        this.bot_button_text = 'Disabled'
        this.bot_button_enabled = false
        return this.bot_button_text
      }
    }
  },
  computed: {
    classname () {
      return this.bot_button_text.toLowerCase()
    }
  }
}
</script>

<style>
#bot-button-wrapper {
  flex: 1;
  margin-top: 16px;
  margin-left: 16px;
  width: 100%;
  height: 100%;
}

#bot-button-wrapper button {
  background-color: #2F7D41;
  border-radius: 50px;
  border: 1px solid black;
  padding: 8px;
}
#bot-button-wrapper button.disabled {
  background-color: #98555A;
}
</style>