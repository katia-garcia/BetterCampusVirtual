<template>
  <div>
    <NavBar></NavBar>
    <b-container fluid>
      <b-row style="height: 100%">
        <!-- sidebar -->
        <b-col cols="3" style="background-color:#f2f2f2; padding-top: 15px; padding-left: 20px; padding-right: 20px">
          <b-row>
            <b-link href="#qualificacions" class="custom-sidebar-text">
              <b-icon-clipboard-check></b-icon-clipboard-check>&nbsp;&nbsp;&nbsp;Qualificacions
            </b-link>
          </b-row>
          <b-row style="margin-top: 10px">
            <b-link class="custom-sidebar-text">
              <b-icon-megaphone></b-icon-megaphone>&nbsp;&nbsp;&nbsp;Fòrum de la Facultat
            </b-link>
          </b-row>
          <b-row style="margin-top: 10px">
            <b-link class="custom-sidebar-text">
              <b-icon-chat-dots></b-icon-chat-dots>&nbsp;&nbsp;&nbsp;Xat
            </b-link>
          </b-row>
          <b-row style="margin-top: 10px">
            <b-link class="custom-sidebar-text">
              <b-icon-calendar-event></b-icon-calendar-event>&nbsp;&nbsp;&nbsp;Calendari
            </b-link>
          </b-row>
          <b-calendar style="margin-top: 20px; " block
            nav-button-variant="primary"
          ></b-calendar>
        </b-col> <!-- END sidebar -->
        <b-col>
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4" v-for="(asignatura) in asignaturas" :key="asignatura">
              <b-card class="custom-card-asignatura" header="danger">
                <template #header style="align-items: center;">
                  <b-avatar></b-avatar>
                  <b-avatar></b-avatar>
                  <b-avatar></b-avatar>
                </template>
                <b-card-body>
                  <b-row><p class="custom-titol">{{ asignatura }}</p></b-row>
                  <b-row><p>Qualificació: 7.00</p></b-row>
                </b-card-body>
              </b-card>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
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
  },
  data () {
    return {
      asignaturas: ['Lògica y Llenguatges', 'Factors Humans', 'Software Distribuït', 'Gràfics', 'Bases de Dades']
    }
  },
  methods: {}
}

</script>
