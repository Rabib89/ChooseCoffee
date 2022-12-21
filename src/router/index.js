import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/*import router*/
// import AdminRouter from "./admin/AdminRouter";
import AuthRouter from "./auth/AuthRouter";
import UserRouter from "./user/UserRouter";

/*route route-list*/

const routes = [
    // ...AdminRouter,
    ...AuthRouter,
    ...UserRouter,
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

export default router