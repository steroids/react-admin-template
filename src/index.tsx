import React from 'react';
import * as Sentry from '@sentry/react';
import {render} from 'react-dom';

import Application from './Application';
import 'style/index.scss';

if (process.env.APP_SENTRY_DSN) {
    Sentry.init({
        dsn: process.env.APP_SENTRY_DSN,
        environment: process.env.APP_ENV || 'dev',
    });
    // eslint-disable-next-line no-console
    console.log('Sentry initialized! 👌');
}

render(<Application />, document.getElementById('root'));
