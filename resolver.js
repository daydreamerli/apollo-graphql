// Resolvers define the technique for fetching the types defined in the
// schema. .
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
        deletePost: async(_parent,{id},_context,_info) =>{
            await Post.findByIdAndDelete(id);
            return "Operation successful,Post deleted"
        },
        updatePost:async(_parent,args,_context,_info) =>{
            const {id} = args;
            const {title,description} = args.post;
            const updatePost = await Post.findByIdAndUpdate(id,{title,description},{new:true});
            return updatePost;
        },
    },
};


module.exports = resolvers;
