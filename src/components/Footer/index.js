import React from 'react'
import metadata from './../../../metadata'
import Icons from './../Icons'

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
