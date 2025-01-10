import { connectToDB } from "@/utils/database"
import Prompt  from "@/models/prompt"
export const GET = async (req, {params}) => {
  try {
    await connectToDB()
    const parameters = await params;
    const prompts = await Prompt.find({
        creator: parameters.id
    }).populate("creator")
    return new Response(JSON.stringify(prompts), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify("Failed to get prompts"), { status: 500 })
  }
    
}