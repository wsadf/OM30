<template>
  <div>
    <div class="table-title">
      <h2>Pacientes</h2>
      <router-link class="btn" to="/paciente-cadastro">+ Incluir novo</router-link>
    </div>
    <table class="">
      <tr>
        <th>Código</th>
        <th>CPF</th>
        <th>Nome</th>
        <th colspan="2">Ações</th>
      </tr>
      <tr v-for="paciente in pacientes" :key="paciente.id">
        <td>{{paciente.id}}</td>
        <td>{{paciente.cpf}}</td>
        <td>{{paciente.nome}}</td>
        <td>
          <router-link :to="`/paciente-cadastro/${paciente.id}`"><v-icon
          end
          icon="mdi-checkbox-marked-circle"
        ></v-icon>Editar</router-link>
        </td>
        <td>
          <a href="javascript: void(0)" @click="excluir(paciente.id)">Excluir</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import apiPacientes from '@/api/pacientes'

export default {
  name: 'PacienteListaView',

  data: () => ({
    pacientes: []
  }),

  async created () {
    this.pacientes = await apiPacientes.lista()
  },

  methods: {
    async excluir (id) {
      await apiPacientes.exclui(id)

      const index = this.pacientes.findIndex(paciente => paciente.id === id)

      this.pacientes.splice(index, 1)
    }
  }
}
</script>
