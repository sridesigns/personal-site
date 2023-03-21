import { gql } from 'graphql-request'
import { graphQLClient } from '../../services/hygraphcms'

export async function GetWork() {
  const query = gql`
    query Work {
        caseStudies {
        title
        slug
        description
        }
        archives {
        title
        slug
        description
        }
    }
  `
return await graphQLClient.request(query);
}