import { gql } from 'graphql-request'
import { graphQLClient } from '../../services/hygraphcms'

export async function GetBlogList() {
  const query = gql`
  {
    blogs (orderBy: publishedAt_DESC) {
      id
      title
      slug
      excerpt
      publishedAt
      coverImage {
        width
        height
        url
      }
    }
  }
  `
  return await graphQLClient.request(query);
}