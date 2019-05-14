<template>
  <div id="errors" v-if="msg != ''">
    <p id="messages">ERROR: {{msg}}</p>
  </div>

</template>

<script>
  export default {
    mounted () {
      this.msg = ''
    },
    data () {
      return {
        msg: this.msg
      }
    },
    methods: {
      setErrorMessage: function (msg) {
        this.msg = msg
      }
    }
  }
</script>

<style>
  #errors {
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

  #messages {
    padding: 24px;
    color: 	#c22933;
  }

</style>