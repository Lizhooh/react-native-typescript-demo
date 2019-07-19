import React from 'react';
import { createAppContainer } from 'react-navigation';

import App from '@/routes';
import Router from '@/router';

const AppContainer = createAppContainer(App);

export default () => (
    <AppContainer ref={Router.update} />
);