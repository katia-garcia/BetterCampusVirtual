<template>
  <div id="app">
    <b-navbar toggleable="lg" class="bluebg">

      <b-navbar-brand href="#">
        <img src="https://www.eim.ub.edu/img/ub-theme/images/logo_ub_negre.png" width="130px"
             class="d-inline-block align-top" alt="ub-logo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown size="lg" right variant="link" toggle-class="text-decoration-none" no-caret
                               style="margin-left: 5px">
            <template #button-content>
              <a style="color: #f4f8f8"> Nombre Apellido </a>
              <b-avatar :src="avatarState" size="40px"></b-avatar>
            </template>
            <b-dropdown-item>Perfil</b-dropdown-item>
            <b-dropdown-item>Xat</b-dropdown-item>
            <b-dropdown-item>Canviar a Professor</b-dropdown-item>
            <b-dropdown-item>Tancar Sessió</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!--MENU LATERAL -->

  </div>
</template>

<style scoped>
@import '../assets/styles.css';
</style>

<script>
export default {
  data () {
    return {
      message: 'My first component',
      tickets_bought: 0,
      money_avaliable: 300
    }
  },
  methods: {
    buyTicket () {
      this.tickets_bought += 1
    },
    returnTicket () {
      this.tickets_bought -= 1
    }
  }
}

</script>
