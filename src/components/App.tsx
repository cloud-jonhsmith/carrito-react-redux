import React from 'react';

import HeaderMenu from './Header/HeaderMenu';
import SectionPage from './SectionPage/SectionPage';

import '../styles/main.scss';

export const App = () => (
    <div className='app'>
        <HeaderMenu />
        <SectionPage />
    </div>
);