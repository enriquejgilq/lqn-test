import {gql} from '@apollo/client'
const GET_CHARACTERS = gql`
query AllPeople {
    allPeople {
      edges {
        cursor
        node {
          birthYear
          created
          edited
          eyeColor
          gender
          hairColor
          height
          id
          mass
          name
          skinColor
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      people {
        birthYear
        created
        edited
        eyeColor
        filmConnection {
          totalCount
        }
        gender
        hairColor
        height
        id
        mass
        name
        skinColor
      }
      totalCount
    }
  }
`

export default GET_CHARACTERS