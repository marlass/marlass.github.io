import React from 'react'
import Link from 'gatsby-link'
import Icons from './../Icons'
import metadata from './../../../metadata'

const Footer = () => (
  <div className="wrapper-footer">
    <div className="container">
      <footer className="footer">
        <Icons
          github={metadata.contact.github}
          twitter={metadata.contact.twitter}
          email={metadata.contact.email}
        />
      </footer>
    </div>
  </div>
)

export default Footer
