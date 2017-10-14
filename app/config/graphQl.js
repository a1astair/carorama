import gql from 'graphql-tag'

export const allCarsQuery = gql`query { allCars { id title description price color } }`

export const createCarQuery = gql`
  mutation createCarQuery($title: String!, $description: String!, $price: String!, $color: String!){
    createCar(title: $title, description: $description, price: $price, color: $color) {
      id
    }
  }
`
