import React from 'react';
import StartPage from '../components/landingpage.js';
import SEO from '../components/seo';
import Content from '../components/landingpagecontent.js';

const IndexPage = () => (
  <div>
    <SEO title="Home "/>
    <StartPage />
    <Content />
  </div>
)

export default IndexPage;