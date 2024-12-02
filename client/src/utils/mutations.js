import {gql} from '@apollo/client'

export const CREATE_USER = gql`
mutation newUser($username: String!, $email: String!, $password: String!){
    newUser(username: $username, email: $email, password: $password){
        token
        user {
            _id 
            username
        }
    }
}
`

export const LOGIN = gql`
mutation login($email: String!, $password: String!){
    login(email: $email, password: $password){
        token
        user{
            _id 
            username
        }
    }
}
`

export const SAVE_BOOK = gql`
mutation saveBook($book: BookInput!){
    saveBook(book: $book){
        _id
        username
        savedBooks {
            bookId
            title
            authors
            description
            image
        }
    }
}
`

export const DELETE_BOOK = gql`

mutation deleteBook($_id: ID!){
    deleteBook(_id: $_id){
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


