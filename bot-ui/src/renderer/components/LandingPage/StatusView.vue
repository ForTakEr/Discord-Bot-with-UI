<template>
  <div id="status">
    <p id="bot-status"><b>Bot status:</b> {{error}}</p>
    <p v-if="status != ''" id="errors"><b>Error:</b> {{status}}</p>
  </div>

</template>

<script>
  export default {
    mounted () {
      this.error = 'not running'
      this.status = ''
    },
    data () {
      return {
        error: this.error,
        status: this.status
      }
    },
    methods: {
      setErrorMessage: function (msg) {
        this.error = msg
      },
      setBotStatus: function (msg) {
        this.status = msg
      }
    }
  }
</script>

<style>
  #status {
    margin: 24px;
    background-color: #23272A;
    animation: slide-left 0.55s ease;
  }

  @keyframes slide-up {
    0% {
        opacity: 0;
        transform: translateY(400px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
  }

  #bot-status {
    padding: 24px;
    color: 	#7289DA;
  }

  #errors {
    padding: 24px;
    padding-top: 0px;
    color: 	#c22933;
  }

</style>