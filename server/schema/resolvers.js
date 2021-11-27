const { getSingleUser, createUser, saveBook, deleteBook, login } = require('../controllers/user-controller');

const root = {
    Query: {
        getSingleUser: (_, { id, userName }, { user }) => {
            return getSingleUser({user, params: { id, userName }})
        }
    },
    Mutation: {
        createUser: (_, { userName, email, password }) => {
            return createUser({ body: { userName, email, password }})
        },
        saveBook: (_, { book }, { user }) => {
            return saveBook({user, body: book})
        },
        deleteBook: (_, { id }, { user }) => {
            return deleteBook({ user, params: { id } })
        },
        login: (_, { userName, email, password }) => {
            return login({ body: { userName, email, password }})
        }
    }
}

module.exports = root;