<template>
  <div>
    <header><NavBar></NavBar></header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md">
          Container Left
        </div>
        <div class="col-lg-6">
          Container Right
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/styles.css';
@import '../assets/sd.css';
</style>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  }

}
</script>
