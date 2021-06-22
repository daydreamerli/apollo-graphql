// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const Post= require('./models/Post.model');

const resolvers = {
    Query: {
        getAllPosts: async () =>{
           return await Post.find();
        },
        getPost: async(_parent,{id},_context,_info) =>{
            return await Post.findById(id);
        }
    },
        
    Mutation:{
        createPost: async (_parent,args,_context,_info) =>{
            const {title,description} = args.post;
            const post = new Post({title,description});
            await post.save();
            console.log(post)
            return post;
    },
    },
};


module.exports = resolvers;
