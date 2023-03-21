import { gql } from 'graphql-request'
import { graphQLClient } from '../../services/hygraphcms'

export async function GetBlog(slug) {
  const query = gql`
  query BlogPost($slug: String!) {
    blogs(where: { slug: $slug })  {
      id
      title
      slug
      excerpt
      publishedAt
      coverImage {
        url
        width
        height
      }
      body{
        raw
        json
        html
      }
    }
  }
  `
  const variables = {
    slug,
  }

  return await graphQLClient.request(query, variables);
}

export async function GetBlogSlug() {
  const query = gql`
  query {
    blogs {
      slug 
    }
  }
  `
  return await graphQLClient.request(query);
}