import { gql } from 'graphql-request'
import { graphQLClient } from '../../services/hygraphcms'

export async function GetArchive(slug) {
  const query = gql`
  query Archive($slug: String!) {
    archives(where: { slug: $slug })  {
      id
      title
      slug
      description
      coverImage {
        url
        width
        height
      }
      content{
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

export async function GetArchiveSlug() {
  const query = gql`
  query {
    archives {
      slug 
    }
  }
  `
  return await graphQLClient.request(query);
}