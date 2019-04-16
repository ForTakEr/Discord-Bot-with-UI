<template>
    <div id="commands">
        <ul id="command-list">
            <li v-for="(command,index) in commands.commands" :key="command.id">
              <v-btn  v-on:click="commandEnabled(index)" :class="{'disabled': !command.enabled}" :value="command.enabled" :id="'cmdcheck' + command.id" class="command" type="checkbox">
                {{ command.desc }} 
              </v-btn>
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
    background-color: #23272A;
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

  .command {
    background-color: #2F7D41 !important;
    color: #D6CBCB !important;
  }

.disabled {
  background-color: #98555A !important;
}

  .cmdcheck-enabled:hover {
    background-color: #235B30;
  }

  .cmdcheck-disabled {
    background-color: #98555A;
  }

  .cmdcheck-disabled:hover {
    background-color: #75393D;
  }

</style>