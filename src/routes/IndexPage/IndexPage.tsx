import React from 'react';
import useBem from '@steroidsjs/core/hooks/useBem';

import './IndexPage.scss';

export default function IndexPage() {
    const bem = useBem('IndexPage');

    return (
        <div className={bem.block()}>
            Admin Index Page
        </div>
    );
}
