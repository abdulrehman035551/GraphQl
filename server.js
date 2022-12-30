import {ApolloServer} from "apollo-server";
import {ApolloServerPluginLandingPageGraphQLPlayground} from "apollo-server-core"
import typeDefs from "./scheamGql.js"
import mongoose from 'mongoose';
mongoose.set("strictQuery", false);
const DB = "mongodb+srv://abdulrehman:Rehman1234567890@users.8ueu3ev.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(DB).then(() => {
    console.log("data base connected");
  }).catch((err) =>console.log ("connection fail"))
  import './models/User.js'
  import resolvers from "./resolvers.js";

const server=new ApolloServer(
    {
        typeDefs,
        resolvers,
        plugins:[
            ApolloServerPluginLandingPageGraphQLPlayground()
        ]
    }
)
server.listen().then(({url})=>
{
    console.log(`server is ${url}`)
}) 