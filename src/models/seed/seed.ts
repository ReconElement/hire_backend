import Posts from "./Posts.js";
import Profile from "./Profile.js";
import Users from "./Users.js";
import { PrismaClient, Role } from "@prisma/client";


type User = {
    id: number,
    email: string,
    password: string,
    name: string,
    // role: Role,
    // posts: Post[],
    // profile: Profile | null
};

// enum Role{
    // RECRUITER,
    // APPLICANT,
    // ADMIN
// }

type Profile = {
    id: number,
    bio: string,
    company: string,
    // user: User,
    // userId: number
}
type Post = {
    id: number,
    createdAt: Date,
    updatedAt: Date,
    title: string,
    published: boolean,
    // author: User,
    // authorId: number
}
const db = new PrismaClient();
let users: User[] = Users();
let profiles: Profile[] = Profile();
let posts: Post[] = Posts();
async function seed(){
    //To seed users
    let currentDate = new Date();
    const user1 = await db.user.create({
        data: {
            name: users[0].name,
            id: users[0].id,
            email: users[0].email,
            password: users[0].password,
            role: Role.APPLICANT,
            posts: {
                // create: {
                    // id: posts[0].id,
                    // createdAt: posts[0].createdAt,
                    // updatedAt: undefined, //not giving any updatedDate since it is just being created now
                    // title: posts[0].title,
                    // published: posts[0].published,
                    // author: 
                // }
            },
            profile: {}
        }
    });
    const user2 = await db.user.create({
        data: {
            name: users[1].name,
            id: users[1].id,
            email: users[1].email,
            password: users[1].password,
            role: Role.APPLICANT,
            posts: {},
            profile: {}
        }
    });
}

seed().catch((e)=>{
    console.log(e);
}).finally(async ()=>{
    console.log("Successfully seeded database. Closing connection.");
    db.$disconnect();
})