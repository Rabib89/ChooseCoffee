import Dashboard from '../../views/user/Dashboard.vue';
import About from '../../views/user/About.vue';
import Account from '../../views/user/Account.vue';
import Cart from '../../views/user/Cart.vue'

export default [
    {
        path: '/dashboard',
        name: 'MyDashboard',
        component: Dashboard,
        
    },
    {
        path: '/about',
        name: 'AboutShop',
        component: About,
    },
    {
        path: '/account',
        name: 'ProfileAccount',
        component: Account,
    },
    {
        path: '/cart',
        name: 'ProductCart',
        component: Cart,
    }

]