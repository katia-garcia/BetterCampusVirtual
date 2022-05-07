<template>
  <div>
    <NavBar></NavBar>
    <div class="banner">
      <h1> Qualificacions </h1>
      <b-button class="multi-select" variant="primary">Selecció Multiple</b-button>
    </div>
    <!-- Flex horizontal Layout -->

    <div class="accordion-wrapper">
      <!--Assignatura accordion-->
      <div class="accordion" role="tablist" v-for="(assignatura, key) in assignatures" :key="key">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="key" class="accordion-button" variant="primary">{{assignatura}}</b-button>
          </b-card-header>
          <b-collapse :id="key" accordion="accordion" role="tabpanel">
            <b-card-body>
              <!--Task accordion-->
              <div class="accordion-task" role="tablist" v-for="(tasca, key) in tasques" :key="key">
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <b-button block v-b-toggle="key" class="accordion-task-button" variant="primary">{{tasca}}</b-button>
                  </b-card-header>
                  <b-collapse :id="key" accordion="accordion-task" role="tabpanel">
                    <b-card-body>
                      <!--Alumno accordion-->
                      <div class="accordion-alumno" role="tablist" v-for="(alumno, key) in alumnes" :key="key">
                      <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                          <b-button block v-b-toggle="key" class="accordion-alumno-button" variant="primary">{{alumno}}</b-button>
                        </b-card-header>
                        <b-collapse :id="key" accordion="accordion-alumno" role="tabpanel">
                          <b-card-body>
                          </b-card-body>
                        </b-collapse>
                      </b-card>
                    </div>
                    <!--End Alumno accordion-->
                    </b-card-body>
                  </b-collapse>
                </b-card>
              </div>
              <!--End Task accordion-->
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
        <!--End Assignatura accordion-->
    </div>
  </div>
</template>

<style scoped>
@import '../assets/qualificacions.css';
</style>

<script>
import NavBar from '@/components/NavBar'

export default {
  components: {
    NavBar
  },
  data () {
    return {
      text: `
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
        brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
        tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
        vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
        synth nesciunt you probably haven't heard of them accusamus labore VHS.
      `,
      assignatures: {'accordion-1': 'Lógica i Llenguatges', 'accordion-2': 'Software Distribuït', 'accordion-3': 'Factors Humans', 'accordion-4': 'Bases de Dades', 'accordion-5': 'Gràfics'},
      tasques: {'accordion-6': 'Tasca 1', 'accordion-7': 'Tasca 2', 'accordion-8': 'Tasca 3', 'accordion-9': 'Tasca 4', 'accordion-10': 'Tasca 5'},
      alumnes: {'accordion-11': 'Martí Perez', 'accordion-12': 'Sergi Fernández', 'accordion-13': 'Katia Garcia', 'accordion-14': 'Laia Vives', 'accordion-15': 'Richard Bobo'}
    }
  },
  methods: {}
}

</script>
