import React from 'react';
import PropTypes from 'prop-types';

import PageNav from '../PageNav/PageNav';

const MainLayout = ({children}) => (
  <>
    <PageNav />
    <main>
      {children}
    </main>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
