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
            <a href="#/assignatura">Factors Humans</a>
            <b-icon-arrow-right></b-icon-arrow-right>
            <a href="#/assignatura/practicas">Pràctiques</a>
            <b-icon-arrow-right></b-icon-arrow-right>
            <a>Entrega Pràctica 3</a>
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
            &nbsp;Data límit:
            <b-badge style="font-size: 14px">9 de maig de 2022, 23:55</b-badge>
          </div>
        </div>
        <div class="row row-margins" style="margin-top: 10px">
          <div class="col">
            <b-icon-hourglass></b-icon-hourglass>
            &nbsp;Temps restant:
            <b-badge style="font-size: 14px">3 dies 11 hores</b-badge>
          </div>
        </div>
        <!-- END descripcion -->
        <!--------------------------------------- entrega ALUMNES ------------------------------------------------->
        <div class="row shadow" v-if="$professorView.state === false"
             style="margin-top: 35px; background-color: #f8f8f8; margin-bottom: 20px; margin-left: 15px;
             padding: 30px 5px 30px 5px; width: 60%; min-width: 280px">
          <div class="col">
            <div class="row">
              <div class="col" style="font-size: 18px">
                <b-avatar size="35px" :src=image></b-avatar>
                &nbsp; Sara Pérez
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
                <b-button variant="primary" v-b-modal.modal-center>
                  <b-icon-upload></b-icon-upload>
                  &nbsp;&nbsp;Afegir Tramesa
                </b-button>
                <b-modal id="modal-center" centered title="Entrega de la tasca" @ok="showAlert">
                  <p class="my-4">Arrosega aqui la tasca</p>
                </b-modal>
              </div>
            </div>
            <b-alert
              :show="dismissCountDown"
              dismissible
              variant="success"
              @dismissed="dismissCountDown=0"
              @dismiss-count-down="countDownChanged"
              style="margin-top: 20px"
            >
              <p>La tramesa s'ha enviat correctament</p>
              <b-progress
                variant="success"
                :max="dismissSecs"
                :value="dismissCountDown"
                height="4px"
              ></b-progress>
            </b-alert>
          </div>
        </div>
        <!------------------------------------ END entrega ALUMNES ------------------------------------------------->
        <!------------------------------------- entrega PROFESSORS ------------------------------------------------->
        <div class="parent-container d-flex" v-if="$professorView.state === true">
          <!-------------------- parte tabla entregas ------------------------->
          <div class="shadow float-left"
               style="margin-top: 35px; background-color: #f8f8f8; margin-bottom: 20px; margin-left: 15px;
             width: 60%; min-width: 280px">
            <div class="row" style="background-color: #accbee; padding: 12px 5px 12px 5px">
              <div class="col-1 align-self-center" style="font-size: 18px; font-weight: bold">
                Entregues
              </div>
              <div class="col " style="text-align: right">
                <button type="button" class="btn btn-success btn-sm" style="margin-right: 3px">
                  <b-icon-download></b-icon-download>
                  Excel
                </button>
                <button type="button" class="btn btn-success btn-sm">
                  <b-icon-upload></b-icon-upload>
                  Excel
                </button>
              </div>
            </div>
            <div class="row bluesidebar" style="padding: 12px 5px 12px 5px">
              <div class="col">
                <label for="exampleDataList" class="form-label">Buscar...</label>
                <input class="form-control-sm" list="datalistOptions" id="exampleDataList"
                       placeholder="Type to search...">
                <datalist id="datalistOptions">
                  <option value="Sara Pérez"></option>
                  <option value="Gerard López"></option>
                  <option value="Sergi Fernández"></option>
                  <option value="Katia Garcia"></option>
                  <option value="Chicago"></option>
                </datalist>
              </div>
              <div class="col">
                Filtrar per...
                <select class="form-select-sm" aria-label="Default select example" style="width: 200px">
                  <option selected>Selecciona una opció</option>
                  <option value="1">grup de pràctiques</option>
                  <option value="2">grup de treball</option>
                </select>
              </div>
            </div>
            <!-- lista de alumnos -->
            <div class="overflow-auto" style=" max-height: 500px">
              <table class="table table-hover">
                <thead>
                <tr>
                  <th scope="col">
                    <b-icon-check2-square style="margin-left: 10px"></b-icon-check2-square>
                  </th>
                  <th scope="col">Nom</th>
                  <th scope="col">Cognoms</th>
                  <th scope="col">Entrega</th>
                  <th scope="col">Nota</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="(item) in items" :key="item">
                  <th scope="row">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"
                           style="margin-left: 10px">
                  </th>
                  <td>{{ item.nom }}</td>
                  <td>{{ item.cognoms }}</td>
                  <td>
                    <button type="button" class="btn btn-outline-secondary btn-sm" style="margin-left: 10px">
                      <b-icon-download></b-icon-download>
                    </button>
                  </td>
                  <td>{{ item.nota }}</td>
                </tr>
                </tbody>
              </table>
            </div>
            <!-- END lista de alumnos -->
          </div>
          <!-------------------- END parte tabla entregas ------------------------->
          <!-------------------- parte cualificar --------------------------------->
          <div class="shadow graybg d-none d-md-block"
               style="margin-top: 155px; margin-bottom: 20px; margin-left: 2%;
               width: 35%; min-width: 200px;">
            <div class="row" style="background-color: #accbee; padding: 12px 15px 12px 15px">
              <div class="col nomargins" style="font-size: 18px; font-weight: bold">
                Qualificar
              </div>
            </div>
            <div class="row bluesidebar" style="padding: 12px 15px 12px 15px">
              <div class="col nomargins">
                Modificant a: <span class="badge bg-primary">5</span> alumnes
              </div>
            </div>
            <!----  poner nota  ---->
            <div class="row" style="margin-bottom: 10px; margin-left: 12px; margin-top: 10px">
              <div class="col nomargins">
                Afegir o restar punts:
              </div>
            </div>
            <div class="row" style="margin-bottom: 25px; margin-left: 12px">
              <div class="col nomargins">
                <b-form-spinbutton style="width: 150px"
                                   id="sb-step"
                                   v-model="value"
                                   placeholder="0,00"
                                   min="-4"
                                   max="4"
                                   step="0.25"
                ></b-form-spinbutton>
              </div>
            </div>
            <div class="form-floating mb-3" style="margin: 0 12px 0 12px">
              <input type="number" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Nota</label>
            </div>
            <!--- END poner nota  --->
            <!-- poner comentario -->
            <div class="form-floating" style="margin: 0 12px 0 12px">
              <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2"
                        style="height: 100px"></textarea>
              <label for="floatingTextarea2">Comentaris:</label>
            </div>
            <!-- END poner comentario -->
            <div class="row" style="margin-top: 20px; margin-left: 12px">
              <div class="col nomargins">
                <button type="button" class="btn btn-secondary" style="margin-right: 10px">Cancelar</button>
                <button type="button" class="btn btn-primary">Publicar</button>
              </div>
            </div>
          </div>
          <!-------------------- END parte cualificar ----------------------------->
        </div>
        <!----------------------------------- END entrega PROFESSORS ----------------------------------------------->
        <br><br><br>
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
    return {
      image: 'https://i.pinimg.com/564x/f5/77/17/f57717126208e1b2fdb1459d5c7a313d.jpg',
      llistaalumnes: ['Sergi Fernández García', 'Katia Garcia Aguilera', 'Daniel Juárez Gutiérrez',
        'Quim Lagunas Rebollar', 'Gerard López Ruiz', 'Sara Pérez'],
      items: [
        {nom: 'Sara', cognoms: 'Pérez'},
        {nom: 'Gerard', cognoms: 'López'},
        {nom: 'Sergi', cognoms: 'Fernández'},
        {nom: 'Katia', cognoms: 'Garcia'},
        {nom: 'Daniel', cognoms: 'Juárez'},
        {nom: 'Quim', cognoms: 'Lagunas'},
        {nom: 'Víctor', cognoms: 'Serra'},
        {nom: 'Richard', cognoms: 'Sudario'},
        {nom: 'Óscar', cognoms: 'Herraiz'},
        {nom: 'James', cognoms: 'Franco'},
        {nom: 'Kirsten', cognoms: 'Dunst'},
        {nom: 'Tobey', cognoms: 'Maguire'},
        {nom: 'Dickerson', cognoms: 'Macdonald'},
        {nom: 'Larsen', cognoms: 'Shaw'},
        {nom: 'Geneva', cognoms: 'Wilson'},
        {nom: 'Jami', cognoms: 'Carney'}
      ],
      dismissSecs: 5,
      dismissCountDown: 0,
      options: [
        {value: null, text: 'Selecciona una opció'},
        {value: 'a', text: 'grup de pràctiques'},
        {value: 'b', text: 'grup de treball'},
        {value: {C: '3PO'}, text: 'This is an option with object value'},
        {value: 'd', text: 'This one is disabled', disabled: true}
      ]
    }
  },
  methods: {
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
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
</style>
