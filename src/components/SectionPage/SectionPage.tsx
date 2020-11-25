import React from 'react';
import { Provider } from "react-redux";
import store from "../../redux/store";

import SectionPageHamper from './SectionPageHamper';
import SectionPageProducts from './SectionPageProducts';

const SectionPage = () => (
    <Provider store={store}>
        <div className="section-page">
            <SectionPageProducts />
            <SectionPageHamper />
        </div>
    </Provider>
);

export default SectionPage;