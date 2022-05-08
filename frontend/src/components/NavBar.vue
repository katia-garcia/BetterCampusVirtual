<template>
  <div id="app">
    <b-navbar toggleable="lg" class="bluebg">
      <b-navbar-brand href="#/">
        <img src="https://www.iqtc.ub.edu/wp-content/themes/css-grid/img/logo_ub.png" width="140px"
             class="d-inline-block align-top" alt="ub-logo" style="margin-left: 10px">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ms-auto" style="margin-right: 10px">
          <b-nav-item-dropdown right>
            <template #button-content>
              <a style="color: #f4f8f8"> {{ username }} </a>
              <b-avatar size="40px" :src=image>
              </b-avatar>
            </template>
            <b-dropdown-item>Perfil</b-dropdown-item>
            <b-dropdown-item @click="cambioVista">{{$buttonText.label}}</b-dropdown-item>
            <b-dropdown-item>Tancar Sessió</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
@import '../assets/styles.css';
</style>
<script>

export default {
  data () {
    return {
      buttonText: 'Canviar a Professor',
      username: 'Sara Pérez',
      image: 'https://i.pinimg.com/564x/f5/77/17/f57717126208e1b2fdb1459d5c7a313d.jpg'
    }
  },
  methods: {
    cambioVista: function () {
      console.log(this.$professorView.state)
      if (this.$professorView.state) {
        this.$buttonText.label = 'Canviar a Professor'
        this.$professorView.state = false
        this.username = 'Sara Pérez'
        this.image = 'https://i.pinimg.com/564x/f5/77/17/f57717126208e1b2fdb1459d5c7a313d.jpg'
      } else {
        this.$buttonText.label = 'Canviar a Alumne'
        this.$professorView.state = true
        this.username = 'Begoña Caballero'
        this.image = 'https://i.pinimg.com/564x/df/70/cf/df70cf8511ef8c1185986889218eba1d.jpg'
      }
    },
    getIdentity () {
      if (this.$professorView.state) {
        this.username = 'Begoña Caballero'
        this.image = 'https://i.pinimg.com/564x/df/70/cf/df70cf8511ef8c1185986889218eba1d.jpg'
      } else {
        this.username = 'Sara Pérez'
        this.image = 'https://i.pinimg.com/564x/f5/77/17/f57717126208e1b2fdb1459d5c7a313d.jpg'
      }
    }
  },
  created () {
    this.getIdentity()
  }
}
</script>
