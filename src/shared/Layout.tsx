import * as React from 'react';
import {useBem, useComponents, useSelector} from '@steroidsjs/core/hooks';
import useLayout, {STATUS_OK, STATUS_LOADING} from '@steroidsjs/core/hooks/useLayout';
import {Header, Notifications} from '@steroidsjs/core/ui/layout';
import ModalPortal from '@steroidsjs/core/ui/modal/ModalPortal';
import {getRoute} from '@steroidsjs/core/reducers/router';
import Portal from '@steroidsjs/core/ui/layout/Portal';
import Tree from '@steroidsjs/core/ui/nav/Tree';

import './Layout.scss';

export default function Layout(props: React.PropsWithChildren<any>) {
    const bem = useBem('Layout');
    const components = useComponents();
    const isLoginRoute = useSelector(state => getRoute(state).role === 'login');

    const {status} = useLayout(() => components.http.post('/api/v1/init', {
        timestamp: Date.now(),
    }));

    if (status !== STATUS_OK) {
        return status !== STATUS_LOADING ? status : null;
    }

    if (isLoginRoute) {
        return (
            <div className={bem.block()}>
                <main role='main' className={bem.element('content', 'full-page')}>
                    {props.children}
                </main>
            </div>
        );
    }

    return (
        <div className={bem.block()}>
            <Header
                logo={{
                    title: props.title,
                }}
                className={bem.element('header')}
            />
            <div className={bem.element('main-container')}>
                <div className={bem(bem.element('wrapper'), 'container-fluid')}>
                    <div className='row'>
                        <nav
                            className={bem(
                                bem.element('sidebar'),
                                'col-md-3 col-lg-2 d-md-block bg-light sidebar collapse',
                            )}
                        >
                            <Tree items='root' />
                        </nav>
                        <main
                            className={bem(
                                bem.element('content'), 'col-md-10 ml-sm-auto px-md-4',
                            )}
                            role='main'
                        >
                            {props.children}
                        </main>
                    </div>
                </div>
                <ModalPortal />
                <Portal />
                <Notifications />
            </div>
        </div>
    );
}
