const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
    input BookInput {
        authors: [
            String!
        ]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }
    type User {
        id: String!
        username: String!
        email: String!
        savedBooks: [
            Book
        ]
    }
    type Book {
        authors: [
            String!
        ]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }
    type GetSingleUserResponse {
        statusCode: Int
        user: User
    }
    type CreateUserResponse {
        token: String
        user: String
    }
    type Query {
        getSingleUser(id: String, userName: String):User
    }
    type SaveBookResponse {
        user: User
        statusCode: Int!
    }
    type DeleteBookResponse {
        user: User
        statusCode: Int!
    }
    type LoginResponse {
        user: User
        statusCode: Int!
        token: String
    }
    type Mutation {
        createUser(userName: String, email: String, password: String): CreateUserResponse!
        saveBook(book: BookInput!): SaveBookResponse!
        deleteBook(bookId: String!): DeleteBookResponse!
        login(username: String, email: String, password: String!): LoginResponse!
    }
`);

module.exports = schema;