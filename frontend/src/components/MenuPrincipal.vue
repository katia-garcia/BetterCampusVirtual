<template>
  <div>
    <NavBar></NavBar>
    <b-container fluid>
      <b-row fluid style="height: 100%">
        <!-- sidebar -->
        <b-col class="bluesidebar" cols="3" style="padding-top: 15px; padding-left: 20px; padding-right: 20px">
          <b-row>
            <b-link href="#qualificacions" class="custom-sidebar-text d-none d-md-block">
              <b-icon-clipboard-check></b-icon-clipboard-check>&nbsp;&nbsp;&nbsp;Qualificacions
            </b-link>
            <b-link class="custom-sidebar-text d-md-none" align="center">
              <b-icon-clipboard-check></b-icon-clipboard-check>
            </b-link>
          </b-row>
          <b-row style="margin-top: 10px">
            <b-link class="custom-sidebar-text d-none d-md-block">
              <b-icon-megaphone></b-icon-megaphone>&nbsp;&nbsp;&nbsp;Fòrum de la Facultat
            </b-link>
            <b-link class="custom-sidebar-text d-md-none" align="center">
              <b-icon-megaphone></b-icon-megaphone>
            </b-link>
          </b-row>
          <b-row style="margin-top: 10px">
            <b-link class="custom-sidebar-text d-none d-md-block">
              <b-icon-chat-dots></b-icon-chat-dots>&nbsp;&nbsp;&nbsp;Xat
            </b-link>
            <b-link class="custom-sidebar-text d-md-none" align="center">
              <b-icon-chat-dots></b-icon-chat-dots>
            </b-link>
          </b-row>
          <b-row style="margin-top: 10px">
            <b-link class="custom-sidebar-text d-none d-md-block">
              <b-icon-calendar-event></b-icon-calendar-event>&nbsp;&nbsp;&nbsp;Calendari
            </b-link>
            <b-link class="custom-sidebar-text d-md-none" align="center">
              <b-icon-calendar-event></b-icon-calendar-event>
            </b-link>
          </b-row>
          <b-calendar class="d-none d-xl-block" style="margin-top: 20px; " block
                      nav-button-variant="primary"
          ></b-calendar>
        </b-col> <!-- END sidebar -->
        <b-col class="custom-margins-asignaturas">
          <!-- for asignaturas -->
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4" v-for="(asignatura) in asignaturas" :key="asignatura">
              <div class="card custom-card-asignatura">
                <div class="card-header" style="background-color: #d9d9d9">
                  <b-avatar></b-avatar>
                  <b-avatar></b-avatar>
                  <b-avatar></b-avatar>
                </div>
                <div class="card-body border" style="border-radius: 0">
                  <b-row><p class="custom-titol">{{ asignatura }}</p></b-row>
                  <b-row><p>Qualificació: 7.00</p></b-row>
                </div>
              </div>
            </div>
          </div> <!-- END for asignaturas -->
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
