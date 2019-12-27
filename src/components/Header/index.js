import React from 'react'
import Link from 'gatsby-link'
import metadata from './../../../metadata';

const Header = () => (
  <div className="wrapper-masthead">
    <div className="container">
      <header className="masthead clearfix">
        <div className="site-info">
          <h1 className="site-name"><a href="/">{ metadata.title }</a></h1>
          <p className="site-description">{ metadata.description }</p>
        </div>

        <nav>
          <a href="/">Blog</a>
          <a href="/daj-sie-poznac-2017/">Daj się poznać 2017</a>
        </nav>
      </header>
    </div>
  </div>
)

export default Header
