import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/',
    name: 'PacienteLista',
    component: () => import('../views/PacienteListaView.vue')
  },
  {
    path: '/paciente-cadastro/:id?',
    name: 'PacienteCadastro',
    component: () => import('../views/PacienteCadastroView.vue'),
    props: route => ({
      id: route.params.id
    })
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && localStorage.getItem('token') === null) {
    return next('/login')
  }

  return next()
})

export default router
