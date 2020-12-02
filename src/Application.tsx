import React from 'react';
import {hot} from 'react-hot-loader';
import Router from '@steroidsjs/core/ui/nav/Router';
import {application} from '@steroidsjs/core/hoc';

import '@steroidsjs/admin/index.scss';
import {ILayoutProps} from '@steroidsjs/admin/shared/Layout/Layout';

@hot(module)
@application({
    onInit: ({ui}) => {
        ui.addViews(require('@steroidsjs/bootstrap').default);
        ui.addFields(require('@steroidsjs/core/ui/form').default);
        ui.addFormatters(require('@steroidsjs/core/ui/format').default);
        ui.addIcons(require('@steroidsjs/bootstrap/icon/fontawesome').default);
    },
})
export default class Application extends React.PureComponent {

    render() {
        return (
            <Router
                wrapperView={require('@steroidsjs/admin/shared/Layout').default}
                wrapperProps={{
                    title: 'Lovetravel Admin'
                } as ILayoutProps}
                routes={require('routes').default}
                defaultRoles={['admin']}
            />
        );
    }
}
