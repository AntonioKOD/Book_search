import {gql} from '@apollo/client'

export const QUERY_USER= gql`
query user($_id: ID!){
    user(_id: $_id){
        username
        email
    }
}
`

export const ME = gql`
    query me {
        me {
            _id 
            savedBooks {
                 _id 
                 title
                 authors
                 description
                 image
                 bookId
       }
        }
    }
`

