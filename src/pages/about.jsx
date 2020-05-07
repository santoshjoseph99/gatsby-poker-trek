import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'About Page'} />
    <Header title="About Page">Just About Me...</Header>
    <Container center={center}>
      <h3>
       Just a blog about ME learning how to play poker. I might try teaching a little bit of it 
       when I get better :)
      </h3>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
