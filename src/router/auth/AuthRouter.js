import Login from '../../views/auth/Login.vue';
import Registration from '../../views/auth/Registration.vue';


export default [
    {
        path: '/login',
        name: 'MyLogin',
        component: Login,
        
    },
    {
        path: '/registration',
        name: 'RegistrationHere',
        component: Registration,
        
    },
   
]