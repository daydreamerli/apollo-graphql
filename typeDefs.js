const {gql} = require('apollo-server-express');

/*
A schema is a collection of type definitions (hence "typeDefs")
that together define the "shape" of queries that are executed against your data.
# This "Book" type defines the queryable fields for every book in our data source.
# The "Query" type is special: it lists all of the available queries that
# clients can execute, along with the return type for each. In this case
# the "books" query returns an array of zero or more Books (defined above).
*/
const typeDefs = gql`
    
  type Author{
    id:ID
    firstName: String
    lastName: String
    email:String
  }
  type Post{
    id:ID
    title: String
    description: String
  }
  
  type Query {
    getAllPosts: [Post]
    getPost(id:ID): Post
    getAllAuthors:[Author]
    getAuthor(id:ID):Author
  }

  input PostInput{
    title:String,
    description:String
  }
  input AuthorInput{
    firstName:String,
    lastName:String,
    email:String
  }

  type Mutation{
      createPost(post: PostInput):Post
      deletePost(id:ID):String
      updatePost(id:ID,post:PostInput):Post
      createAuthor(author:AuthorInput):Author
      updateAuthor(id:ID,author:AuthorInput):Author
      deleteAuthor(id:ID):String
  }
`;

module.exports = typeDefs;