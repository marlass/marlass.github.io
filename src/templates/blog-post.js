import React from "react";
import Helmet from "react-helmet";
import ReactDisqusComments from 'react-disqus-comments';
import settings from './../../settings';

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <article className="post">
      <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
      <h1>{post.frontmatter.title}</h1>
      <div className="entry" dangerouslySetInnerHTML={{ __html: post.html }} />
      <div className="date">Opublikowano: {new Date(post.frontmatter.date).toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric'})}</div>
      <div className="comments">
        <ReactDisqusComments
          shortname={settings.disqus}
          title={`${post.frontmatter.title}`}
        />
      </div>
    </article>
  );
}

export const pageQuery = graphql`
query BlogPostByPath($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      path
      title
      date
    }
  }
}
`
;
