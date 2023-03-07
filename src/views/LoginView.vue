<template>
  <div>
    <div class="container">
      <div class="table-title mb-5">
      <h2>Sign In</h2>
    </div>
    <input type="text" v-model="usuario" placeholder="Usuário">
    <input type="text" v-model="senha" placeholder="Senha">
    <input type="button" value="Entrar" @click="logar">
    <span>{{erro}}</span>
  </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',

  data: () => ({
    usuario: '',
    senha: '',
    erro: ''
  }),

  methods: {
    logar () {
      if (this.usuario === 'admin' && this.senha === 'admin') {
        localStorage.setItem('token', 'token')
        this.$router.push('/')
      } else {
        this.erro = 'Usuário ou senha invalidos.'
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
