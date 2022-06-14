import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';
import useComponents from '@steroidsjs/core/hooks/useComponents';
import useLayout, {STATUS_LOADING, STATUS_OK} from '@steroidsjs/core/hooks/useLayout';
import {Header} from '@steroidsjs/core/ui/layout';

import './Layout.scss';

const Layout = (props: React.PropsWithChildren<any>) => {
    const bem = useBem('Layout');
    const components = useComponents();

    const {status} = useLayout(() => components.http.post('/api/v1/init'));

    if (status !== STATUS_OK) {
        return status !== STATUS_LOADING ? status : null;
    }

    return (
        <div className={bem.block()}>
            <Header
                logo={{
                    title: props.title,
                }}
            />
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default Layout;
