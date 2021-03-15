import Home from './components/PageContent.vue'
import Orders from './components/Orders.vue'
import Modify from './components/Modify.vue'
import Dashboard from './components/Dashboard.vue'


export default [
  { name: "Home", path: '/', component: Home },
  { name: "Orders", path: '/orders', component: Orders },
  { name: "Modify", path: '/modify', component: Modify, props: true},
  { name: "Dashboard", path: '/dashboard', component: Dashboard }
]