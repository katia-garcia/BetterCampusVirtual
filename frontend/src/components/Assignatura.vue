<template>
  <div>
    <NavBar></NavBar>
    <!-- sidebar-->
    <div class="container custom-sidebar float-left shadow">
      <div class="row align-items-center margins-sidebar nav-sidebar">
        <div class="col text-center">
          <b-icon-clipboard-check font-scale="1.8"></b-icon-clipboard-check>
        </div>
        <div class="col-10 d-none d-lg-block custom-text-title">Introducció
        </div>
      </div>
      <div class="row align-items-center margins-sidebar nav-sidebar">
        <div class="col text-center">
          <b-icon-megaphone font-scale="1.8"></b-icon-megaphone>
        </div>
        <div class="col-10 d-none d-lg-block custom-text-title">Qualificacions
        </div>
      </div>
      <div class="row align-items-center margins-sidebar nav-sidebar">
        <div class="col text-center">
          <b-icon-chat-dots font-scale="1.8"></b-icon-chat-dots>
        </div>
        <div class="col-10 d-none d-lg-block custom-text-title">Teoria
        </div>
      </div>
      <div class="row align-items-center margins-sidebar nav-sidebar">
        <div class="col text-center">
          <b-icon-calendar-event font-scale="1.8"></b-icon-calendar-event>
        </div>
        <div class="col-10 d-none d-lg-block custom-text-title">Pràctiques
        </div>
      </div>
      <div class="row align-items-center margins-sidebar nav-sidebar">
        <div class="col text-center">
          <b-icon-calendar-event font-scale="1.8"></b-icon-calendar-event>
        </div>
        <div class="col-10 d-none d-lg-block custom-text-title">Tauler del Curs
        </div>
      </div>
    </div>
    <!-- END sidebar-->
  </div>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'Assignatura',
  components: {NavBar},
  data () {
    return {
      temas: ['blabla', 'alsdcas']
    }
  }
}
</script>

<style scoped>
@import '../assets/styles.css';

.custom-card-asignatura {
  max-width: 280px;
  min-width: 170px;
  max-height: 200px;
  min-height: 200px;
  padding: 0;
  margin: 0;
  border: none
}

.margins-sidebar {
  padding-top: 15px; padding-bottom: 15px;
}
.nav-sidebar:hover {
  background-color: #accbee;
}

.row {
  width: 100%; margin: 0
}

.custom-sidebar {
  min-width: 350px; max-width: 350px;
  background-color: #D3E0EA; height: 100%;
  margin: 0; padding: 0; position:fixed;z-index:999;
}
@media (max-width: 992px) {
  .custom-sidebar {
    min-width: 100px; max-width: 100px;
  }
}

.custom-no-sidebar {
  margin-left: 350px;
  margin-top: 30px
}
@media (max-width: 992px) {
  .custom-no-sidebar {
    margin-left: 100px;
  }
}
</style>
