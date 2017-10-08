import gql from 'graphql-tag'

export const allJobsQuery = gql`query { allJobs { id city description, company } }`

export const userQuery = gql`
  query user($auth0UserId: String!) {
    User(auth0UserId: $auth0UserId) {
      firstName,
      lastName,
      personal
    }
  }
`
export const createUserQuery = gql`
  mutation createUserQuery($idToken: String!, $firstName: String!, $lastName: String!, $emailAddress: String!, $isPersonal: Boolean!){
    createUser(authProvider: { auth0: { idToken: $idToken} }, firstName: $firstName, lastName: $lastName, emailAddress: $emailAddress, personal: $isPersonal) {
      id
    }
  }
`
