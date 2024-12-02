const typeDefs = `
type User {
    _id : ID!
    username: String!
    savedBooks: [Book]!
    email: String!
    password: String!
}
type Auth {
    token: ID!
    user: User
}

type Book {
    _id: ID!
    title: String!
    authors: [String!]!
    description: String
    image: String
    bookId: ID!
}

input BookInput {  
    title: String!
    authors: [String!]!
    description: String
    bookId: String!
    image: String
}



type Query { 
    user(userId: ID!): User
    me: User
}

type Mutation {
    newUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(book: BookInput!): User
    deleteBook(_id: ID!): User
}
`

module.exports = typeDefs