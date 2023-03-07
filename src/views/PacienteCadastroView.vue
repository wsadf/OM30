<template>
  <div>
    <img :src="form.foto" height="50">
    <div class="container">
    <br><input class="input" type="text" v-model="form.nome" placeholder="Nome">
    <br><input type="text" v-model="form.nome_mae" placeholder="Nome da mãe">
    <br><input type="text" v-model="form.data_nascimento" placeholder="Data de nascimento">
    <br><input type="text" v-model="form.cpf" placeholder="CPF" v-mask="'###.###.###-##'">
    <br><input type="text" v-model="form.cns" placeholder="CNS" v-mask="'### #### #### ####'">
    <br><input type="text" v-model="form.cep" placeholder="CEP">
    <br><input type="text" v-model="form.logradouro" placeholder="Logradouro">
    <br><input type="text" v-model="form.numero" placeholder="Número">
    <br><input type="text" v-model="form.complemento" placeholder="Complemento">
    <br><input type="text" v-model="form.bairro" placeholder="Bairro">
    <br><input type="text" v-model="form.cidade" placeholder="Cidade">
    <br><input type="text" v-model="form.uf" placeholder="UF">
    <br><input type="button" value="Salvar" @click="salvar">
  </div>
  </div>
</template>

<script>
import { mask } from 'vue-the-mask'
import apiPacientes from '@/api/pacientes'

export default {
  name: 'PacienteCadastroView',

  props: {
    id: {
      type: String,
      default: ''
    }
  },

  directives: { mask },

  data: () => ({
    form: {
      foto: '',
      cpf: '',
      nome: '',
      nome_mae: '',
      data_nascimento: '',
      cns: '',
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: ''
    }
  }),

  async created () {
    if (this.id) {
      this.form = await apiPacientes.busca(this.id)
    }
  },

  methods: {
    async salvar () {
      if (this.id) {
        await apiPacientes.atualiza(this.id, this.form)
      } else {
        await apiPacientes.inclui(this.form)
      }
    }
  }
}
</script>
<style scoped>
.container {
    max-width: 700px;
    width: 100%;
    background: #fff;
    padding: 25px 30px;
    border-radius: 5px;
    margin: 0 auto;
}
input[type=text]{
    height: 45px;
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 15px;
    font-size: 16px;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
    margin-bottom: 20px;

}
input[type=button] {
    height: 100%;
    width: 100%;
    outline: none;
    color: #fff;
    border: none;
    font-size: 18px;
    font-weight: 500;
    border-radius: 5px;
    letter-spacing: 1px;
    background: linear-gradient(123deg, #71b8e7,#9b59b6);
}
</style>
