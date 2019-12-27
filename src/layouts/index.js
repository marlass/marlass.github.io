import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import metadata from './../../metadata'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './style.scss'

import 'prismjs/themes/prism-okaidia.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title={`${metadata.title} - ${metadata.description}`}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    ></Helmet>
    <Header />
    <div id="main" role="main" className="container">
      {children()}
    </div>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
