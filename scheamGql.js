import {gql} from "apollo-server";
const typeDefs=gql`
type Query{
    # user na query kia is name sa
    users:[User],
    user(id:ID!):User
    authers:[Auther]
    authersBook(id:ID!):[Auther]
    #user to users ki array return kenga
}
# yea us users array ke type ha
type User{
    id:ID
    name:String
    lastname:String
    email:String
    auther:[ Auther]
}
type Auther{
    book:String
    id:ID
}
type Mutation {
  signupuser(newUser:Inputnewusers):User
}
input Inputnewusers{
    name:String
    lastname:String
    email:String
}
`
export default typeDefs;