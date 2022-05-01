<template>
  <NavBar></NavBar>
</template>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  },
  data () {
    return {
      message: 'My first component',
      tickets_bought: 0,
      money_avaliable: 300
    }
  },
  methods: {
    buyTicket () {
      this.tickets_bought += 1
    },
    returnTicket () {
      this.tickets_bought -= 1
    }
  }
}

</script>
