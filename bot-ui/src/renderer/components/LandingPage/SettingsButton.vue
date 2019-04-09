<template>
  <div id="settings-button">
    <button v-on:click="settingsClick">Settings</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      settingsClick: function () {
        this.$parent.$parent.setCurView('SettingsView')
      }
    }
  }
</script>

<style>
  #settings-button {
    flex: 0;
    margin-right: 16px;
    margin-top: 16px;
  }

  #settings-button button {
    background-color: #7289DA;
    border-radius: 50px;
    border: 1px solid black;
    padding: 2px;
  }
</style>
