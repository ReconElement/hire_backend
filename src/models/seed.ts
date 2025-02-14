import { PrismaClient } from "@prisma/client";
import { create } from "ts-node";
const db = new PrismaClient();

async function seedUsers(){
    let dateTime = new Date();
    await db.user.create({
        data: {
            id: 1,
            email: "testuser1@email.com",
            password: "testpasskey1",
            name: "Test User",
            role: "APPLICANT",
            // posts: {
            //     create: [
            //         {
            //             id: 1,
            //             title: "SDE-1 at Google (Alphabet Inc.)",
            //             createdAt: dateTime,
            //             updatedAt: dateTime,
            //             published: true,
            //             author: 
            //             authorId: 1,
            //         }
            //     ]
            // }
            posts: {}, ///post is left empty cos of a one-to-many relationship for user and posts
            profile: {} ///profile is one to one
        }
    });
}

async function seedProfile(){
    await db.profile.create({
        data: {
            id: 1,
            bio: "Test Applicant",
            company: "Test Inc."
            
        }
    })
}