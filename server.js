const express = require('express');
const port = 4000;
const mongoose = require('mongoose')
const {ApolloServer} = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolver');
require('dotenv').config();

async function startServer (){
    const app = express();
    const apolloServer = new ApolloServer({ typeDefs, resolvers });
    await apolloServer.start();
    apolloServer.applyMiddleware({app:app}); // "/graphql" -> apollo server

    app.use((req,res) =>{
        res.send("Hello from Apollo-Express Server")
    })

    await mongoose.connect(process.env.DB_CONNECT,{
        useUnifiedTopology: true,
        useNewUrlParser:true
    })
    console.log('Mongoose connected to MongoDB Atlas')
    app.listen(port,() => console.log(`Apollo server is up and running on port: ${port}`))
}

startServer();