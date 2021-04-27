import { createRouter, createWebHistory } from 'vue-router'
import SignUp from '../views/signup.vue'
import SignIn from '../views/signin.vue'
import ForgotPassword from '../views/forgotpassword.vue'
import Data from '../views/data.vue'

const routes = [
  {
    path: '/',
    component: SignUp
  },
  {
    path: '/signin',
    component: SignIn
  },
  {
    path: '/forgotpassword',
    component: ForgotPassword
  },
  {
    path: '/data',
    name: 'Data',
    component: Data,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
