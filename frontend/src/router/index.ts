import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Ecommerce',
    component: () => import('../views/Ecommerce.vue'),
    meta: { title: 'eCommerce Dashboard', requiresAuth: true },
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../views/Categories/Index.vue'),
    meta: { title: 'Categories', requiresAuth: true },
  },
  {
    path: '/suppliers',
    name: 'Suppliers',
    component: () => import('../views/Suppliers/Index.vue'),
    meta: { title: 'Suppliers', requiresAuth: true },
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products/Index.vue'),
    meta: { title: 'Products', requiresAuth: true },
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: () => import('../views/Stocks/Index.vue'),
    meta: { title: 'Stocks', requiresAuth: true },
  },

  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import('../views/Others/Calendar.vue'),
    meta: { title: 'Calendar', requiresAuth: true },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Others/UserProfile.vue'),
    meta: { title: 'Profile', requiresAuth: true },
  },
  {
    path: '/form-elements',
    name: 'Form Elements',
    component: () => import('../views/Forms/FormElements.vue'),
    meta: { title: 'Form Elements', requiresAuth: true },
  },
  {
    path: '/basic-tables',
    name: 'Basic Tables',
    component: () => import('../views/Tables/BasicTables.vue'),
    meta: { title: 'Basic Tables', requiresAuth: true },
  },
  {
    path: '/line-chart',
    name: 'Line Chart',
    component: () => import('../views/Chart/LineChart/LineChart.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/bar-chart',
    name: 'Bar Chart',
    component: () => import('../views/Chart/BarChart/BarChart.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/alerts',
    name: 'Alerts',
    component: () => import('../views/UiElements/Alerts.vue'),
    meta: { title: 'Alerts', requiresAuth: true },
  },
  {
    path: '/avatars',
    name: 'Avatars',
    component: () => import('../views/UiElements/Avatars.vue'),
    meta: { title: 'Avatars', requiresAuth: true },
  },
  {
    path: '/badge',
    name: 'Badge',
    component: () => import('../views/UiElements/Badges.vue'),
    meta: { title: 'Badge', requiresAuth: true },
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: () => import('../views/UiElements/Buttons.vue'),
    meta: { title: 'Buttons', requiresAuth: true },
  },
  {
    path: '/images',
    name: 'Images',
    component: () => import('../views/UiElements/Images.vue'),
    meta: { title: 'Images', requiresAuth: true },
  },
  {
    path: '/videos',
    name: 'Videos',
    component: () => import('../views/UiElements/Videos.vue'),
    meta: { title: 'Videos', requiresAuth: true },
  },
  {
    path: '/blank',
    name: 'Blank',
    component: () => import('../views/Pages/BlankPage.vue'),
    meta: { title: 'Blank', requiresAuth: true },
  },
  {
    path: '/error-404',
    name: '404 Error',
    component: () => import('../views/Errors/FourZeroFour.vue'),
    meta: { title: '404 Error' },
  },
  {
    path: '/signin',
    name: 'Signin',
    component: () => import('../views/Auth/Signin.vue'),
    meta: { title: 'Signin' },
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Auth/Signup.vue'),
    meta: { title: 'Signup' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 }
  },
  routes,
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  if (!token && to.name !== 'Signin') {
    next({ name: 'Signin' })
  } else if (token && to.name === 'Signin') {
    next({ name: 'Ecommerce' })
  } else {
    next()
  }

  document.title = `Vue.js ${to.meta.title || ''} | TailAdmin - Vue.js Tailwind CSS Dashboard Template`
})

export default router
