<template>
  <div id="app">
    <b-navbar toggleable="lg" class="bluebg">
      <b-navbar-brand href="/">
        <img src="https://www.iqtc.ub.edu/wp-content/themes/css-grid/img/logo_ub.png" width="130px"
             class="d-inline-block align-top" alt="ub-logo">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <a style="color: #f4f8f8"> Nombre Apellido </a>
              <b-avatar size="40px"></b-avatar>
            </template>
            <b-dropdown-item>Perfil</b-dropdown-item>
            <b-dropdown-item>Canviar a Professor</b-dropdown-item>
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
