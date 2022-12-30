import {authers,users} from "./database/fakeDB.js"
import { v4 as uuidv4 } from 'uuid';
// is a function to reslove value for type

const resolvers={
    Query:{
      users:()=>users,
      authers:()=> authers,
      user:(_,{id})=>users.find(user=>user.id == id),
      authersBook:(_,{id})=>authers.filter(aut=>aut.id==id),
  
    },
    User:{
      auther:(ur)=>authers.filter(auther=>auther.id==ur.id),
  
    
    },
    Mutation:{
      signupuser:(_,{newUser})=>
      {
        let id=uuidv4();
        users.push({
          id,
         ...newUser
        })
        
      }
     
    }
  }
  export default resolvers;