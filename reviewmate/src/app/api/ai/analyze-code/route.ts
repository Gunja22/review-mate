import { NextResponse } from "next/server"
import OpenAI from "openai"

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: Request) {
  try {
    const { code, language } = await request.json()

    if (!code) {
      return NextResponse.json({ success: false, message: "No code provided" }, { status: 400 })
    }

    // Call OpenAI API to analyze the code
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a code review assistant. Analyze the following ${language} code and provide constructive feedback. Focus on:
          1. Code quality and best practices
          2. Potential bugs or edge cases
          3. Security concerns
          4. Performance optimizations
          5. Readability and maintainability
          
          Format your response as a concise, bullet-point list of observations and suggestions.`,
        },
        {
          role: "user",
          content: code,
        },
      ],
      max_tokens: 1000,
    })

    return NextResponse.json({
      success: true,
      analysis: response.choices[0].message.content,
    })
  } catch (error) {
    console.error("Error analyzing code:", error)
    return NextResponse.json({ success: false, message: "Failed to analyze code" }, { status: 500 })
  }
}