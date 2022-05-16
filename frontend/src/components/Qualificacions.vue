<template>
  <div>
    <NavBar></NavBar>
    <div class="banner">
      <h1> Qualificacions </h1>
      <div class="arrow" onclick="location.href='#/'">
        <b-icon-caret-left-fill></b-icon-caret-left-fill>
      </div>
      <!--Càlcul nota button-->
      <b-button id="popover-button-variant" class="calculator-button" variant="primary"  v-if="$professorView.state !== true">Càlcul nota</b-button>
      <b-popover placement="left" target="popover-button-variant" variant="primary" triggers="click" v-if="$professorView.state !== true">
        <div>
        <!--Form input-->
        <b-form-group
          label="Introdueix la nota desitgada"
          label-for="popover-input-1"
          label-cols="20"
          :state="input1state"
        >
          <b-form-input
            ref="input1"
            id="popover-input-1"
            placeholder="Px0.4 + T+0.6"
            v-model="input1"
            :state="input1state"
            size="sm"
          ></b-form-input>
        </b-form-group>
        <!--END Form input-->
        <!--Select Form input-->
        <b-form-group
          label="Assignatura"
          label-for="popover-input-2"
          label-cols="5"
          class="form-input"
          :state="input2state"
        >
          <b-form-select
            id="popover-input-2"
            v-model="input2"
            :state="input2state"
            :options="options"
            class="form-input"
            size="md"
          ></b-form-select>
        <!--END Select Form input-->
        </b-form-group>

      <div class="result-wrapper">
          <b-button @click="calculateMark" class="calcul-button" variant="primary">
            Càlcul
          </b-button>

          <b-form-group
          label="Nota:"
          label-for="popover-input-1"
          label-cols="5"
          :state="input3state"

        >
          <b-form-input
            ref="input3"
            id="popover-input-3"
            placeholder="Px0.4 + T+0.6"
            v-model="input3"
            :state="input3state"
            size="sm"
            class="result-output"
            :disabled="true"
          ></b-form-input>
          </b-form-group>

      </div>

        </div>
      </b-popover>

    </div>
    <!-- Flex horizontal Layout -->

    <div class="accordion-wrapper" v-if="$professorView.state === true">
      <!--AssignaturaProfessor accordion-->
      <div class="accordion" role="tablist" v-for="(assignatura, key) in assignaturesP" :key="key">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="key" class="accordion-button" variant="primary">{{assignatura}}</b-button>
          </b-card-header>
          <b-collapse :id="key" accordion="accordion" role="tabpanel">
            <b-card-body>
              <!--TaskProfessor accordion-->
              <div  class="accordion-task" role="tablist" v-for="(tasca, key) in tasques" :key="key">
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <div v-if="assignatura === 'Factors Humans' && tasca.nombre === 'Tasca 3'" block v-b-toggle="key" class="accordion-task-button" onclick="location.href='#/assignatura/practicas/tasca'" tag="button"> {{tasca.nombre}}</div>
                    <div v-else block v-b-toggle="key" class="accordion-task-button" tag="button"> {{tasca.nombre}}</div>
                  </b-card-header>
                </b-card>
              </div>
              <!--End TaskProfessor accordion-->
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
        <!--End AssignaturaProfessor accordion-->
    </div>

    <!--Alumno accordion-->
    <div class="accordion-wrapper" v-else>
      <!--AssignaturaAlumno accordion-->
      <div class="accordion" role="tablist" v-for="(assignatura, key) in assignaturesA" :key="key">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block v-b-toggle="key" class="accordion-button" variant="primary">{{assignatura}}</b-button>
          </b-card-header>
          <b-collapse :id="key" accordion="accordion" role="tabpanel">
            <b-card-body>
              <!--TaskAlumno accordion-->
              <div  class="accordion-task" role="tablist" v-for="(tasca, key) in tasques" :key="key">
                <b-card no-body class="mb-1">
                  <b-card-header header-tag="header" class="p-1" role="tab">
                    <div v-if="assignatura === 'Factors Humans' && tasca.nombre === 'Tasca 3'" block v-b-toggle="key" class="accordion-task-button" onclick="location.href='#/assignatura/practicas/tasca'" tag="button">
                      <div class="task-name">{{tasca.nombre}}</div>
                      <div class="task-comment">{{tasca.comentario}}</div>
                      <div class="task-mark">{{tasca.puntuacion}}</div>
                    </div>
                    <div v-else block v-b-toggle="key" class="accordion-task-button" tag="button">
                      <div class="task-name">{{tasca.nombre}}</div>
                      <div class="task-comment">{{tasca.comentario}}</div>
                      <div class="task-mark">{{tasca.puntuacion}}</div>
                    </div>
                  </b-card-header>
                </b-card>
              </div>
              <!--End TaskAlumno accordion-->
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
        <!--End AssignaturaAlumno accordion-->
    </div>
    <!--End Alumno accordion-->

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
      input1: '',
      input1state: null,
      input2: '',
      input2state: null,
      input3: '',
      input3state: null,
      input1Return: '',
      input2Return: '',
      options: [{'text': 'Lógica i Llenguatges', value: ''}, 'Software Distribuït', 'Factors Humans', 'Bases de Dades', 'Gràfics'],
      assignaturesA: {'accordion-1': 'Lógica i Llenguatges', 'accordion-2': 'Software Distribuït', 'accordion-3': 'Factors Humans', 'accordion-4': 'Bases de Dades', 'accordion-5': 'Gràfics'},
      assignaturesP: {'accordion-6': 'Factors Humans', 'accordion-7': 'Programació 2'},
      tasques: {'accordion-8': {'nombre': 'Tasca 1', 'puntuacion': 5, 'comentario': 'Lorem ipsum dolor sit amet consectetur...'},
        'accordion-9': {'nombre': 'Tasca 2', 'puntuacion': 3, 'comentario': 'Lorem ipsum dolor sit amet consectetur...'},
        'accordion-10': {'nombre': 'Tasca 3', 'puntuacion': 7, 'comentario': 'Lorem ipsum dolor sit amet consectetur...'},
        'accordion-11': {'nombre': 'Tasca 4', 'puntuacion': 8, 'comentario': 'Lorem ipsum dolor sit amet consectetur...'},
        'accordion-12': {'nombre': 'Tasca 5', 'puntuacion': 9, 'comentario': 'Lorem ipsum dolor sit amet consectetur...'}
      }
    }
  },
  methods: {
    calculateMark () {
      this.input3 = 4.5
    }
  }
}

</script>
