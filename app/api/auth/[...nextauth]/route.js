import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { connectToDB } from "@/utils/database";
import User from "@/models/user";
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),
    ],
    callbacks: {
        async session({session}) {
            console.log("session", session );
            console.log("user email", session.user.email)
            const sessionUser = await User.findOne({
                email: session.user.email,
            });
            session.user.id = sessionUser._id.toString();
            return session;
        },
        async signIn({ profile }) {
            try {
                console.log("sign in called", profile)
                await connectToDB();
    
                //check if user is already in database
                const userExists = await User.findOne({
                    email: profile.email,
                });
                console.log("user exists", userExists)
                //if not create user
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture,
                    });
                }
                
                return true
            } catch (error) {
                console.log("Sign in error", error);
                return false
            }
            
        }
    },
    
});

export { handler as GET, handler as POST }