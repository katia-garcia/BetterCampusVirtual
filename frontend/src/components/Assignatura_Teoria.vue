<template>
  <div>
    <NavBar></NavBar>
    <!-- sidebar-->
    <div class="container custom-sidebar float-left shadow">
      <div class="row align-items-center margins-sidebar nav-sidebar" onclick="location.href='#/assignatura'">
        <div class="col text-center">
          <b-icon-easel font-scale="1.8"></b-icon-easel>
        </div>
        <div class="col-10 d-none d-lg-block custom-text-title">Introducció
        </div>
      </div>
      <div class="row align-items-center margins-sidebar nav-sidebar" onclick="location.href='#/qualificacions'">
        <div class="col text-center">
          <b-icon-clipboard-check font-scale="1.8"></b-icon-clipboard-check>
        </div>
        <div class="col-10 d-none d-lg-block custom-text-title">Qualificacions
        </div>
      </div>
      <div class="row align-items-center margins-sidebar nav-sidebar" style="background-color: #accbee" onclick="location.href='#/assignatura/Teoria'">
        <div class="col text-center">
          <b-icon-book font-scale="1.8"></b-icon-book>
        </div>
        <div class="col-10 d-none d-lg-block custom-text-title"><b>Teoría</b>
        </div>
      </div>
      <div class="row align-items-center margins-sidebar nav-sidebar" onclick="location.href='#/assignatura/Practicas'">
        <div class="col text-center">
          <b-icon-laptop font-scale="1.8"></b-icon-laptop>
        </div>
        <div class="col-10 d-none d-lg-block custom-text-title">Pràctiques
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
