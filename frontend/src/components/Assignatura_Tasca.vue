<template>
  <div>
    <NavBar class="sticky-top"></NavBar>
    <div class="parent-container d-flex" style="height: calc(100vh - 72px);">
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
        <div class="row align-items-center margins-sidebar nav-sidebar">
          <div class="col text-center">
            <b-icon-book font-scale="1.8"></b-icon-book>
          </div>
          <div class="col-10 d-none d-lg-block custom-text-title">Teoria
          </div>
        </div>
        <div class="row align-items-center margins-sidebar nav-sidebar"
             onclick="location.href='#/assignatura/practicas'"
             style="background-color: #accbee">
          <div class="col text-center">
            <b-icon-laptop-fill font-scale="1.8"></b-icon-laptop-fill>
          </div>
          <div class="col-10 d-none d-lg-block custom-text-title "><b>Pràctiques</b>
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
        <div class="row align-items-center" onclick="location.href='#/'">
          <div class="col-1 text-center" style="font-size: 26px;">
            <b-icon-caret-left-fill ></b-icon-caret-left-fill>
          </div>
          <div class="col custom-text-title" style="font-size: 30px">
            Factors Humans
          </div>
        </div> <!-- END barra titulo asignatura -->
        <!-- barra navegacion -->
        <div class="row shadow-sm" style="margin-top: 15px; background-color: #f8f8f8;
        margin-bottom: 20px; padding: 12px 5px 12px 5px;">
          <div class="col">
            <a href="#/assignatura">Factors Humans</a>
            <b-icon-arrow-right></b-icon-arrow-right>
            <a href="#/assignatura/practicas">Pràctiques</a>
            <b-icon-arrow-right></b-icon-arrow-right>
            <a href="#/assignatura/practicas/tasca">Entrega Pràctica 3</a>
          </div>
        </div> <!-- END barra navegacion -->
        <!-- descripcion -->
        <div class="row row-margins" style="margin-top: 30px">
          <div class="col seccio-assignatura">Entrega Pràctica 3</div>
        </div>
        <div class="row row-margins" style="margin-top: 20px; font-size: 18px">
          <div class="col">Entrega un zip amb el codi i la memòria amb el nom: P3_NomCognom</div>
        </div>
        <br>
        <div class="row row-margins">
          <div class="col">
            <b-icon-clock></b-icon-clock>
            &nbsp;Data límit: <b-badge style="font-size: 14px">9 de maig de 2022, 23:55</b-badge>
          </div>
        </div>
        <div class="row row-margins" style="margin-top: 10px">
          <div class="col">
            <b-icon-hourglass></b-icon-hourglass>
            &nbsp;Temps restant: <b-badge style="font-size: 14px">3 dies 11 hores</b-badge>
          </div>
        </div>
        <!-- END descripcion -->
        <!-- entrega -->
        <div class="row shadow" style="margin-top: 35px; background-color: #f8f8f8;
        margin-bottom: 20px; margin-left: 15px; padding: 30px 5px 30px 5px;
        width: 60%; min-width: 300px">
          <div class="col">
            <div class="row">
              <div class="col" style="font-size: 18px">
                <b-avatar size="35px"></b-avatar>
                Nom Cognom
              </div>
            </div>
            <div class="row" style="margin-top: 20px">
              <div class="col">Estat de la Tramesa: Cap intent</div>
            </div>
            <div class="row">
              <div class="col">Estat de la Qualificació: Sense qualificació</div>
            </div>
            <div class="row align-items-center" style="margin-top: 20px">
              <div class="col text-center">
                <b-button variant="primary" v-b-modal.modal-center><b-icon-upload></b-icon-upload>
                  &nbsp;&nbsp;Afegir Tramesa</b-button>
                <b-modal id="modal-center" centered title="Entrega de la tasca">
                  <p class="my-4">Arrosega aqui la tasca</p>
                </b-modal>
              </div>
            </div>
          </div>
        </div>
        <!-- END entrega -->
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'

export default {
  name: 'Assignatura_Tasca.vue',
  components: {NavBar},
  data () {
    return {}
  }
}
</script>

<style scoped>
@import '../assets/styles.css';

.margins-sidebar {
  padding-top: 15px;
  padding-bottom: 15px;
}

.nav-sidebar:hover {
  background-color: #accbee;
}

.row {
  width: 100%;
  margin: 0;
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
  margin-top: 20px
}

@media (max-width: 992px) {
  .custom-no-sidebar {
    margin-left: 100px;
  }
}
</style>
