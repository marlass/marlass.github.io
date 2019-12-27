import React from 'react'

const Icons = props => (
  <React.Fragment>
    {props.dribbble && (
      <a
        className="footer-icon"
        href={`https://dribbble.com/${props.dribbble}`}
      >
        <i className="svg-icon dribbble"></i>
      </a>
    )}
    {props.email && (
      <a className="footer-icon" href={`mailto:${props.email}`}>
        <i className="svg-icon email"></i>
      </a>
    )}
    {props.facebook && (
      <a
        className="footer-icon"
        href={`https://www.facebook.com/${props.facebook}`}
      >
        <i className="svg-icon facebook"></i>
      </a>
    )}
    {props.flickr && (
      <a
        className="footer-icon"
        href={`https://www.flickr.com/${props.flickr}`}
      >
        <i className="svg-icon flickr"></i>
      </a>
    )}
    {props.github && (
      <a className="footer-icon" href={`https://github.com/${props.github}`}>
        <i className="svg-icon github"></i>
      </a>
    )}
    {props.instagram && (
      <a
        className="footer-icon"
        href={`https://instagram.com/${props.instagram}`}
      >
        <i className="svg-icon instagram"></i>
      </a>
    )}
    {props.linkedin && (
      <a
        className="footer-icon"
        href={`https://www.linkedin.com/in/${props.linkedin}`}
      >
        <i className="svg-icon linkedin"></i>
      </a>
    )}
    {props.pinterest && (
      <a
        className="footer-icon"
        href={`https://www.pinterest.com/${props.pinterest}`}
      >
        <i className="svg-icon pinterest"></i>
      </a>
    )}
    <a className="footer-icon" href="/feed.xml">
      <i className="svg-icon rss"></i>
    </a>
    {props.twitter && (
      <a
        className="footer-icon"
        href={`https://www.twitter.com/${props.twitter}`}
      >
        <i className="svg-icon twitter"></i>
      </a>
    )}
    {props.stackoverflow && (
      <a
        className="footer-icon"
        href={`http://stackoverflow.com/${props.stackoverflow}`}
      >
        <i className="svg-icon stackoverflow"></i>
      </a>
    )}
    {props.youtube && (
      <a className="footer-icon" href={`https://youtube.com/${props.youtube}`}>
        <i className="svg-icon youtube"></i>
      </a>
    )}
    {props.googleplus && (
      <a
        className="footer-icon"
        href={`https://plus.google.com/${props.googleplus}`}
      >
        <i className="svg-icon googleplus"></i>
      </a>
    )}
  </React.Fragment>
)

export default Icons
