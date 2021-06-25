// Resolvers define the technique for fetching the types defined in the
// schema. .
const Post= require('./models/Post.model');
const Author = require('./models/Author.model');

const resolvers = {
    Query: {
        getAllPosts: async () =>{
           return await Post.find();
        },
        getPost: async(_parent,{id},_context,_info) =>{
            return await Post.findById(id);
        },
        getAllAuthors: async () =>{
            return await Auhtor.find();
         },
         getAuthor: async(_parent,{id},_context,_info) =>{
            return await Author.findById(id);
        },
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
        createAuthor: async (_parent,args,_context,_info) =>{
            const {firstName,lastName,email} = args.author;
            const newAuthor = new Author({firstName,lastName,email});
            await newAuthor.save();
            console.log(newAuthor)
            return newAuthor;
        },
        deleteAuthor: async(_parent,{id},_context,_info) =>{
            await Author.findByIdAndDelete(id);
            return "Operation successful,Author deleted"
        },
        updateAuthor:async(_parent,args,_context,_info) =>{
            const {id} = args;
            const {firstName,lastName,email} = args.author;
            const updateAuthor = await Author.findByIdAndUpdate(id,{firstName,lastName,email},{new:true});
            return updateAuthor;
        },
    },
};


module.exports = resolvers;
