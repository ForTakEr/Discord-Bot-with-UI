<template>
  <div id="errors" v-if="display">
    <p id="messages">{{msg}}</p>
  </div>

</template>

<script>
  export default {
    mounted () {
      this.display = false
      this.msg = ''
    },
    data () {
      return {
        display: this.display,
        msg: this.msg
      }
    },
    methods: {
      setErrorMessage: function (msg) {
        this.msg = msg

        this.display = false
        if (this.msg.length === 0) {
          this.display = true
        }
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
    font-size: 18px;
    color: #bb0000;
  }

  #msg-header {
    padding: 24px;
    color: #bb0000;
  }  

</style>