import {IRouteItem} from '@steroidsjs/core/ui/nav/Router/Router';
import IndexPage from './IndexPage';
import userRoutes from './users/userRoutes';

export const ROUTE_ROOT = 'root';
export const ROUTE_USERS = 'users';

const baseUrl = '/admin';

export default {
    id: ROUTE_ROOT,
    exact: true,
    path: '/(admin)?',
    component: IndexPage,
    label: __('Admin index page'),
    items: {
        [ROUTE_USERS]: {
            path: baseUrl + '/users',
            exact: true,
            label: __('Пользователи'),
            redirectTo: true,
            models: 'app.user.models.User',
            items: [
                userRoutes,
            ]
        },
    }
} as IRouteItem;
