import React from 'react';

import {bem} from '@steroidsjs/core/hoc';
import {IBemHocOutput} from '@steroidsjs/core/hoc/bem';

import './IndexPage.scss';

@bem('IndexPage')
export default class IndexPage extends React.PureComponent<IBemHocOutput> {

    render() {
        const bem = this.props.bem;
        return (
            <div className={bem.block()}>
                admin index page
            </div>
        );
    }

}
