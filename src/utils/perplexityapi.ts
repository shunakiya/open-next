"use server";

const PPLX_KEY = process.env.PPLX_KEY;

export async function getPerplexityPrediction(prompt: string): Promise<string> {
  if (!PPLX_KEY) {
    throw new Error("PPLX_KEY is not defined in environment variables");
  }

  try {
    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${PPLX_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "sonar-pro",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();

    return data.choices[0].message.content;
  } catch (error) {
    console.log("API error:", error);
    throw error;
  }
}
