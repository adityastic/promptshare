import { connectToDB } from "@/utils/database";
import Prompt from "@/models/prompt";
export const POST = async (req, res) => {
    const { userId, prompt, tag } = await req.json();
    console.log("req body", userId, prompt, tag )
    try {
        await connectToDB();
        const newPrompt = await Prompt.create({
            creator: userId,
            prompt,
            tag: tag.toLowerCase()
        })
        await newPrompt.save();
        return new Response(JSON.stringify(newPrompt), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify("Failed to create new prompt"), { status: 500 })
    }
}