<template>
  <div>
    <NavBar class="sticky-top"></NavBar>
    <div class="parent-container d-flex" style="height: calc(100vh - 72px);">
      <!-- sidebar-->
      <div class="container custom-sidebar float-left shadow" >
        <div class="row align-items-center margins-sidebar nav-sidebar" onclick="location.href='#/qualificacions'">
          <div class="col text-center">
            <b-icon-clipboard-check font-scale="1.8"></b-icon-clipboard-check>
          </div>
          <div class="col-10 d-none d-lg-block custom-text-title">Qualificacions
          </div>
        </div>
        <div class="row align-items-center margins-sidebar nav-sidebar">
          <div class="col text-center">
            <b-icon-megaphone font-scale="1.8"></b-icon-megaphone>
          </div>
          <div class="col-10 d-none d-lg-block custom-text-title">Fòrum de la Facultat
          </div>
        </div>
        <div class="row align-items-center margins-sidebar nav-sidebar">
          <div class="col text-center">
            <b-icon-chat-dots font-scale="1.8"></b-icon-chat-dots>
          </div>
          <div class="col-10 d-none d-lg-block custom-text-title">Xat
          </div>
        </div>
        <div class="row align-items-center margins-sidebar nav-sidebar">
          <div class="col text-center">
            <b-icon-calendar-event font-scale="1.8"></b-icon-calendar-event>
          </div>
          <div class="col-10 d-none d-lg-block custom-text-title">Calendari
          </div>
        </div>
        <div class="row align-items-center margins-sidebar">
          <div class="col">
            <b-calendar class="d-none d-lg-block" block></b-calendar>
          </div>
        </div>
      </div>
      <!-- END sidebar-->
      <div class="container custom-no-sidebar" style="height: 100%">
        <div class="row">
          <div class="col">
            <!-- for asignaturas -->
            <div class="row">
              <div class="col-lg-4 col-md-6 mb-4" v-for="(asignatura) in asignaturas" :key="asignatura">
                <div class="card custom-card-asignatura" onclick="location.href='#/assignatura'">
                  <div class="card-header" style="background-color: #d9d9d9">
                    <b-avatar></b-avatar>
                    <b-avatar></b-avatar>
                    <b-avatar></b-avatar>
                  </div>
                  <div class="card-body border" style="border-radius: 0">
                    <b-row><p class="custom-text-title custom-titol">{{ asignatura }}</p></b-row>
                    <b-row><p class="custom-text-body">Qualificació: 7.00</p></b-row>
                  </div>
                </div>
              </div>
            </div> <!-- END for asignaturas -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'Pruebas',
  components: {NavBar},
  data () {
    return {
      asignaturas: ['Lògica y Llenguatges', 'Factors Humans', 'Software Distribuït', 'Gràfics', 'Bases de Dades']
    }
  },
  methods: {
  }
}

</script>

<style scoped>
@import '../assets/styles.css';

.custom-titol {
  font-size: 20px;
  font-weight: bold;
}

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

.custom-margins-asignaturas {
  padding-top: 35px;
  padding-left: 55px;
  padding-right: 60px;
}

@media (max-width: 978px) {
  .custom-margins-asignaturas {
    padding-top: 35px;
    padding-left: 15px;
    padding-right: 15px;
  }
}

</style>
