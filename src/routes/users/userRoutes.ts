import {generateCrud} from '@steroidsjs/core/ui/crud';
import AuthLogins from '@steroidsjs/admin/auth/AuthLogins';

export const ROUTE_USERS_USERS = 'users_users';

export default generateCrud(ROUTE_USERS_USERS, {
    label: __('Пользователи'),
    model: 'app.user.models.User',
    path: '/admin/users',
    restUrl: '/api/v1/admin/auth',
    searchModel: 'app.user.forms.UserAdminSearchForm',
    models: [
        'steroids.auth.models.AuthLogin',
        'steroids.auth.models.AuthConfirm',
    ],
    grid: {
        columns: [
            'id',
            'name',
            'email',
            'role',
            {
                attribute: 'createTime',
                sortable: true,
            },
            {
                attribute: 'lastLogin',
                sortable: true,
            },
        ],
        searchForm: {
            layout: 'table',
            fields: [
                'name',
            ],
        },
    },
    form: {
        fields: [
            'id',
            'role',
            'name',
            'email',
        ],
    },
    detail: {
        attributes: [
            'id',
            'role',
            'name',
            'email',
        ],
    },
    items: {
        logins: {
            label: __('Настройки доступа'),
            icon: 'key',
            component: AuthLogins,
        },
    },
});
