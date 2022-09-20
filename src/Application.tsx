import useApplication from '@steroidsjs/core/hooks/useApplication';
import HttpComponent from '@steroidsjs/core/components/HttpComponent';
import LocaleComponent from '@steroidsjs/core/components/LocaleComponent';

export default function Application() {
    const {renderApplication} = useApplication({
        reducers: require('@steroidsjs/core/reducers').default,
        routes: () => require('./routes').default,
        layoutView: () => require('./shared/Layout').default,
        layoutProps: {
            title: 'Boilerplate-Admin-12345 Admin Area',
            loginUrl: '/api/v1/admin/auth/login',
        },
        screen: true,
        components: {
            http: {
                className: HttpComponent,
                apiUrl: process.env.APP_BACKEND_URL,
            },
            locale: {
                className: LocaleComponent,
            },
            clientStorage: {
                domain: window.location.hostname,
            },
        },
        onInit: ({ui}) => {
            ui.addViews(require('./ui/bootstrap').default);
            ui.addFields(require('@steroidsjs/core/ui/form').default);
            ui.addFormatters(require('@steroidsjs/core/ui/format').default);
            ui.addIcons(require('./icons').default);
        },
    });

    return renderApplication();
}
