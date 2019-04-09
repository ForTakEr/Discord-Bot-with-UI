<template>
    <div id="commands">
        <ul id="command-list">
            <li v-for="(command,index) in commands.commands" :key="command.id">
              <div class="cmdcheck cmdcheck-enabled" v-if="command.enabled" v-on:click="commandEnabled(index)">
                <input :value="command.enabled"  :id="'cmdcheck' + command.id" class="cmdcheck-enabled" type="checkbox">
                <label :for="'cmdcheck' + command.id">{{ command.desc }}</label>
              </div>
              <div class="cmdcheck cmdcheck-disabled" v-else v-on:click="commandEnabled(index)">
                <input :value="command.enabled" :id="'cmdcheck' + command.id" class="cmdcheck-disabled" type="checkbox">
                <label :for="'cmdcheck' + command.id">{{ command.desc }}</label>
              </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      commands: state => state.commands
    })
  },
  mounted () {
    console.log(this.$store)
  },
  data: function () {
    return {

    }
  },
  methods: {
    // Change boolean of the command.
    commandEnabled (index) {
      this.$store.dispatch('toggleCommandEnabled', index)
    }
  }

}
</script> 

<style>
  #commands {
    margin: 24px;
    background-color: #8cff1a;
  }

  #command-list {
    list-style-type: none;
    padding: 12px;
  }

  #command-list li {
    padding-bottom: 12px;
  }

  #command-list li:last-child {
    padding-bottom: 0px;
  }

  .cmdcheck input {
    visibility: hidden;
  }

  .cmdcheck-enabled {
    background-color: green;
  }

  .cmdcheck-enabled:hover {
    background-color: rebeccapurple;
  }

  .cmdcheck-disabled {
    background-color: red;
  }

  .cmdcheck-disabled:hover {
    background-color: fuchsia;
  }

</style>