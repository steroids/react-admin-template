import {IRouteItem} from '@steroidsjs/core/ui/nav/Router/Router';
import Login from '@steroidsjs/admin/shared/Login';
import IndexPage from './IndexPage';
import userRoutes from './users/userRoutes';

export const ROUTE_ROOT = 'root';

const roles = ['admin'];
const baseUrl = '/admin';

export default {
    id: ROUTE_ROOT,
    roles,
    exact: true,
    path: '/(admin)?',
    component: IndexPage,
    label: __('Admin index page'),
    items: [
        userRoutes,
        {
            id: 'login',
            path: baseUrl + '/login',
            component: Login,
            componentProps: {
                loginUrl: '/api/v1/admin/auth/login',
            },
            role: 'login',
            roles: [null],
            layout: false,
            isNavVisible: false,
        },
    ],
} as IRouteItem;
