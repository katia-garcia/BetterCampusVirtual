<template>
  <div>
    <NavBar class="sticky-top"></NavBar>
    <div class="parent-container d-flex" style="height: calc(100vh - 72px);">
      <!-- sidebar-->
      <div class="container custom-sidebar float-left shadow">
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
      <!-------------------------------- ASSIGNATURES ALUMNE ------------------------------------------->
      <div class="container custom-no-sidebar" style="height: 100%" v-if="$professorView.state === false">
        <div class="row">
          <!-- assignatura -->
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card custom-card-asignatura shadow">
              <div class="card-header align-items-center text-center bgLogica"
                   style="padding: 16px 0 16px 0">
                <b-avatar size="36px" :src=i2></b-avatar>
                <b-avatar size="36px" :src=i3></b-avatar>
                <b-avatar size="36px" :src=i4></b-avatar>
              </div>
              <div class="card-body border graybg" style="border-radius: 0">
                <b-row><p class="custom-text-title custom-titol">Lògica y Llenguatges</p></b-row>
                <b-row><p class="custom-text-body">Qualificació:
                  <b-badge style="font-size: 14px">6.50</b-badge></p></b-row>
              </div>
            </div>
          </div>
          <!-- END assignatura -->
          <!-- assignatura -->
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card custom-card-asignatura shadow" onclick="location.href='#/assignatura'">
              <div class="card-header align-items-center text-center bgFactors"
                   style="padding: 16px 0 16px 0">
                <b-avatar size="36px" :src=imageProfe></b-avatar>
                <b-avatar size="36px" :src=i1></b-avatar>
              </div>
              <div class="card-body border graybg" style="border-radius: 0">
                <b-row><p class="custom-text-title custom-titol">Factors Humans</p></b-row>
                <b-row><p class="custom-text-body">Qualificació:
                  <b-badge style="font-size: 14px">7.00</b-badge></p></b-row>
              </div>
            </div>
          </div>
          <!-- END assignatura -->
          <!-- assignatura -->
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card custom-card-asignatura shadow">
              <div class="card-header align-items-center text-center bgSD"
                   style="padding: 16px 0 16px 0">
                <b-avatar size="36px" :src=i6></b-avatar>
                <b-avatar size="36px" :src=i7></b-avatar>
                <b-avatar size="36px" :src=i8></b-avatar>
                <b-avatar size="36px" :src=i9></b-avatar>
              </div>
              <div class="card-body border graybg" style="border-radius: 0">
                <b-row><p class="custom-text-title custom-titol">Software Distribuït</p></b-row>
                <b-row><p class="custom-text-body">Qualificació:
                  <b-badge style="font-size: 14px">9.18</b-badge></p></b-row>
              </div>
            </div>
          </div>
          <!-- END assignatura -->
          <!-- assignatura -->
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card custom-card-asignatura shadow">
              <div class="card-header align-items-center text-center bgGrafics"
                   style="padding: 16px 0 16px 0">
                <b-avatar size="36px" :src=i5></b-avatar>
              </div>
              <div class="card-body border graybg" style="border-radius: 0">
                <b-row><p class="custom-text-title custom-titol">Gràfics</p></b-row>
                <b-row><p class="custom-text-body">Qualificació:
                  <b-badge style="font-size: 14px">5.00</b-badge></p></b-row>
              </div>
            </div>
          </div>
          <!-- END assignatura -->
          <!-- assignatura -->
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card custom-card-asignatura shadow">
              <div class="card-header align-items-center text-center bgBD"
                   style="padding: 16px 0 16px 0">
                <b-avatar size="36px" :src=i11></b-avatar>
                <b-avatar size="36px" :src=i12></b-avatar>
              </div>
              <div class="card-body border graybg" style="border-radius: 0">
                <b-row><p class="custom-text-title custom-titol">Bases de Dades</p></b-row>
                <b-row><p class="custom-text-body">Qualificació:
                  <b-badge style="font-size: 14px">8.40</b-badge></p></b-row>
              </div>
            </div>
          </div>
          <!-- END assignatura -->
        </div>
      </div>
      <!-------------------------------- ASSIGNATURES ALUMNE ------------------------------------------->
      <!-------------------------------- ASSIGNATURES PROFESSOR  --------------------------------------->
      <div class="container custom-no-sidebar" style="height: 100%" v-if="$professorView.state === true">
        <div class="row">
          <!-- assignatura -->
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card custom-card-asignatura shadow" onclick="location.href='#/assignatura'">
              <div class="card-header align-items-center text-center bgFactors"
                   style="padding: 16px 0 16px 0">
                <b-avatar size="36px" :src=imageProfe></b-avatar>
                <b-avatar size="36px" :src=i1></b-avatar>
              </div>
              <div class="card-body border graybg" style="border-radius: 0">
                <b-row><p class="custom-text-title custom-titol">Factors Humans</p></b-row>
                <b-row><p class="custom-text-body">Qualificació: 7.00</p></b-row>
              </div>
            </div>
          </div>
          <!-- END assignatura -->
        </div>
      </div>
      <!-------------------------------- ASSIGNATURES PROFESSOR ---------------------------------------->
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
      asignaturas: ['Lògica y Llenguatges', 'Factors Humans', 'Software Distribuït', 'Gràfics', 'Bases de Dades'],
      imageProfe: 'https://i.pinimg.com/564x/df/70/cf/df70cf8511ef8c1185986889218eba1d.jpg',
      i1: 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQKdXf_BJwU2GgF6K4Qh-KLaxZgHahr73UIFktqgcXcVFyV-HMCNzOdpuzsmLFV',
      i2: 'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQwQFnyO5Lnnbm3ggQ0XHhck1mvX7dkC2Eb_2j4fxdJz2K3vEoVnnCxoSzERtp3',
      i3: 'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRpbXJfEGOShwid_hfw7LGM3Zz0EkEQB_-FM2LvPt7xAXXeOA765FGE-JK-VIti',
      i4: 'https://cineuropa.org/imgCache/2015/12/15/1450182178179_0800x0800_0x0x0x0_1573440057403.jpg',
      i5: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Emily_Browning_%28Cropped%29.jpg',
      i6: 'https://www.alohacriticon.com/wp-content/uploads/2012/08/james-caan.jpg',
      i7: 'https://images.mubicdn.net/images/cast_member/59162/cache-3074-1600882392/image-w856.jpg?size=800x',
      i8: 'https://img.a.transfermarkt.technology/portrait/big/125781-1643320574.jpg?lm=1',
      i9: 'https://img.a.transfermarkt.technology/portrait/big/28003-1631171950.jpg?lm=1',
      i10: 'https://mx.web.img3.acsta.net/c_310_420/medias/nmedia/18/35/30/03/19956155.jpg',
      i11: 'https://i.insider.com/5dadc2ae045a3137b6062517?width=811&format=jpeg',
      i12: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Pedro_Sánchez_in_2020.jpg'
    }
  },
  methods: {}
}
</script>

<style scoped>
@import '../assets/styles.css';
@import '../assets/backgrounds.css';

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
  margin-top: 10px;
  margin-bottom: 15px;
  margin-left: 0;
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
  padding: 0 0 0 2px;
  position: fixed;
  z-index: 999;
}

.custom-no-sidebar {
  margin-left: 350px;
  padding-left: 30px;
  margin-top: 30px
}

.custom-margins-asignaturas {
  padding-top: 35px;
  padding-left: 35px;
  padding-right: 35px;
  margin-top: 30px;
}

@media (max-width: 978px) {
  .custom-sidebar {
    min-width: 100px;
    max-width: 100px;
  }
  .custom-no-sidebar {
    margin-left: 100px;
  }
  .custom-margins-asignaturas {
    padding-top: 35px;
    padding-left: 35px;
    padding-right: 35px;
    margin-top: 5px;
  }
}

</style>
