import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <Wrapper>
    <Header />

    <div>{children}</div>

    <Footer />
  </Wrapper>
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
