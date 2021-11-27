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
    }
    type CreateUserResponse {
        token: String
        user: String
    }
    type Query {
        getSingleUser(id: String, userName: String):User
    }
    type Mutation {
        createUser(userName: String, email: String, password: String):User
        saveBook(book: BookInput!):
        deleteBook(bookId: String!)
        login(username: String, email: String, password: String!)
    }
`);

module.exports = typeDefs;