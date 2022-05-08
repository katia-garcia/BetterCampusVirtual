<template>
  <div>
    <NavBar class="sticky-top"></NavBar>
    <div class="parent-container d-flex" style="height: calc(100vh - 72px);">
      <!-- sidebar-->
      <div class="container custom-sidebar float-left shadow">
        <div class="row align-items-center margins-sidebar nav-sidebar" onclick="location.href='#/assignatura'"
             style="background-color: #accbee">
          <div class="col text-center">
            <b-icon-easel-fill font-scale="1.8"></b-icon-easel-fill>
          </div>
          <div class="col-10 d-none d-lg-block custom-text-title"><b>Introducció</b>
          </div>
        </div>
        <div class="row align-items-center margins-sidebar nav-sidebar" onclick="location.href='#/qualificacions'">
          <div class="col text-center">
            <b-icon-clipboard-check font-scale="1.8"></b-icon-clipboard-check>
          </div>
          <div class="col-10 d-none d-lg-block custom-text-title">Qualificacions
          </div>
        </div>
        <div class="row align-items-center margins-sidebar nav-sidebar" onclick="location.href='#/assignatura/teoria'">
          <div class="col text-center">
            <b-icon-book font-scale="1.8"></b-icon-book>
          </div>
          <div class="col-10 d-none d-lg-block custom-text-title">Teoria
          </div>
        </div>
        <div class="row align-items-center margins-sidebar nav-sidebar" onclick="location.href='#/assignatura/practicas'">
          <div class="col text-center">
            <b-icon-laptop font-scale="1.8"></b-icon-laptop>
          </div>
          <div class="col-10 d-none d-lg-block custom-text-title">Pràctiques
          </div>
        </div>
        <div class="row align-items-center margins-sidebar nav-sidebar">
          <div class="col text-center">
            <b-icon-megaphone font-scale="1.8"></b-icon-megaphone>
          </div>
          <div class="col-10 d-none d-lg-block custom-text-title ">Fòrum Avisos
          </div>
        </div>
        <div class="row align-items-center margins-sidebar nav-sidebar">
          <div class="col text-center">
            <b-icon-question-circle font-scale="1.8"></b-icon-question-circle>
          </div>
          <div class="col-10 d-none d-lg-block custom-text-title ">Fòrum Dubtes
          </div>
        </div>
        <div class="row align-items-center margins-sidebar nav-sidebar">
          <div class="col text-center">
            <b-icon-globe font-scale="1.8"></b-icon-globe>
          </div>
          <div class="col-10 d-none d-lg-block custom-text-title">Tauler del Curs
          </div>
        </div>
      </div>
      <!-- END sidebar-->
      <div class="container custom-no-sidebar" style="height: 100%">
        <!-- barra titulo asignatura -->
        <div class="row align-items-center">
          <div class="col-1 text-center" style="font-size: 26px;">
            <b-icon-caret-left-fill></b-icon-caret-left-fill>
          </div>
          <div class="col custom-text-title" style="font-size: 30px">
            Factors Humans
          </div>
        </div> <!-- END barra titulo asignatura -->
        <!-- barra navegacion -->
        <div class="row shadow-sm" style="margin-top: 15px; background-color: #f8f8f8;
        margin-bottom: 20px; padding: 12px 5px 12px 5px;">
          <div class="col">
            <a>Factors Humans</a>
            <b-icon-arrow-right></b-icon-arrow-right>
            <a>Introducció</a>
          </div>
        </div> <!-- END barra navegacion -->
      </div>
    </div>
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
  padding-top: 15px;
  padding-bottom: 15px;
}

.nav-sidebar:hover {
  background-color: #accbee;
}

.row {
  width: 100%;
  margin: 0
}

.custom-sidebar {
  min-width: 350px;
  max-width: 350px;
  background-color: #D3E0EA;
  height: 100%;
  margin: 0;
  padding: 0;
  position: fixed;
  z-index: 999;
}

@media (max-width: 992px) {
  .custom-sidebar {
    min-width: 100px;
    max-width: 100px;
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
