import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini API client server-side
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || "",
  httpOptions: {
    headers: {
      "User-Agent": "aistudio-build",
    },
  },
});

// API Routes
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", app: "NoorVerse AI Quran Companion" });
});

// AI Verse Explanation Endpoint
app.post("/api/gemini/explain-verse", async (req, res) => {
  try {
    const { surahName, surahNumber, ayahNumber, arabicText, translation } = req.body;

    const prompt = `You are a respectful, knowledgeable Islamic scholar AI assistant.
Provide a clear, simple, and inspiring explanation of the following Quranic verse for a modern student of knowledge.

Surah: ${surahName} (${surahNumber}:${ayahNumber})
Arabic: ${arabicText}
Translation: "${translation}"

Please structure your response in clear sections:
1. Core Message & Background (1-2 paragraphs, accessible language)
2. Key Lessons & Practical Application for daily life (3 bullet points)
3. Reflection Question (1 sentence to ponder)

Keep the tone peaceful, reverent, and educational.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        systemInstruction: "You are an Islamic education assistant. Ensure all responses are deeply respectful, peaceful, accurate, and clearly labeled as educational AI insights.",
      },
    });

    res.json({ explanation: response.text });
  } catch (error: any) {
    console.error("Error in /api/gemini/explain-verse:", error);
    res.status(500).json({
      error: "Failed to generate AI verse explanation.",
      details: error.message,
    });
  }
});

// AI Vocabulary Breakdown Endpoint
app.post("/api/gemini/vocab-breakdown", async (req, res) => {
  try {
    const { arabicText, translation } = req.body;

    const prompt = `Analyze the key Arabic vocabulary words in this Quranic verse:
Arabic: "${arabicText}"
Translation: "${translation}"

Return a structured breakdown of up to 4 significant Arabic words in JSON format:
[
  {
    "arabic": "Word in Arabic",
    "transliteration": "English pronunciation",
    "root": "3-letter Arabic root",
    "meaning": "English translation",
    "grammarNote": "e.g., Noun, Verb (Past tense), Imperative, etc.",
    "contextualSignificance": "Brief note on why this word choice is beautiful"
  }
]`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const parsedData = JSON.parse(response.text || "[]");
    res.json({ vocab: parsedData });
  } catch (error: any) {
    console.error("Error in /api/gemini/vocab-breakdown:", error);
    res.status(500).json({ error: "Failed to break down vocabulary.", details: error.message });
  }
});

// AI Quiz Generator Endpoint
app.post("/api/gemini/quiz", async (req, res) => {
  try {
    const { topic, difficulty = "Intermediate" } = req.body;

    const prompt = `Create a 5-question multiple choice quiz on the topic: "${topic}".
Difficulty level: ${difficulty}.

Return JSON in this format:
{
  "quizTitle": "Title of Quiz",
  "questions": [
    {
      "id": 1,
      "question": "Question text here",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctIndex": 0,
      "explanation": "Brief explanation of the correct answer"
    }
  ]
}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
      },
    });

    const quizData = JSON.parse(response.text || "{}");
    res.json(quizData);
  } catch (error: any) {
    console.error("Error in /api/gemini/quiz:", error);
    res.status(500).json({ error: "Failed to generate AI quiz.", details: error.message });
  }
});

// AI Learning Tip Endpoint
app.post("/api/gemini/learning-tip", async (req, res) => {
  try {
    const { userLevel = "Beginner" } = req.body;

    const prompt = `Give a concise, practical 2-sentence Quran learning or Tajweed tip for a user at the ${userLevel} level. Focus on memorization, pronunciation, or spiritual focus during recitation.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
    });

    res.json({ tip: response.text });
  } catch (error: any) {
    console.error("Error in /api/gemini/learning-tip:", error);
    res.status(500).json({ error: "Failed to generate learning tip.", details: error.message });
  }
});

// AI Pronunciation & Mistake Analyzer Endpoint (Qaida & Quran)
app.post("/api/gemini/analyze-pronunciation", async (req, res) => {
  try {
    const { targetText, itemTitle, type = "quran", audioBase64, mimeType = "audio/webm" } = req.body;

    const contents: any[] = [];
    
    if (audioBase64) {
      contents.push({
        inlineData: {
          data: audioBase64,
          mimeType: mimeType,
        },
      });
    }

    const textPrompt = `You are a certified master Tajweed teacher and Qari AI assistant.
Analyze the user's recitation of the following ${type === 'qaida' ? 'Noorani Qaida lesson letter/word' : 'Quranic verse'}:
Title/Context: "${itemTitle || 'Recitation'}"
Target Arabic Text: "${targetText}"

${audioBase64 ? 'Listen to the provided audio recitation carefully and check for pronunciation mistakes, makhraj (articulation points), Madd elongation, Qalqalah, Ghunnah, and letter clarity.' : 'Perform an expert Tajweed diagnostic on common recitation pitfalls, makhraj points, and pronunciation guidance for this text.'}

Return JSON strictly in this format:
{
  "overallScore": 88,
  "accuracyRating": "Good / Excellent / Needs Practice",
  "makhrajScore": 90,
  "tajweedScore": 85,
  "detectedMistakes": [
    {
      "location": "Word/Letter reference",
      "letter": "Specific Arabic character",
      "mistakeType": "Makhraj Articulation / Vowel Length / Heavy-Light (Tafkhim) / Qalqalah / Ghunnah",
      "description": "Clear explanation of what went wrong and how to fix it.",
      "severity": "minor"
    }
  ],
  "strengths": [
    "Positive highlight 1",
    "Positive highlight 2"
  ],
  "makhrajGuide": "Clear anatomical instruction for the primary makhraj point (throat, tongue tip, lips, nasal cavity, empty space)",
  "aiCoachAdvice": "Encouraging 2-sentence Islamic guidance to improve recitation."
}`;

    contents.push(textPrompt);

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: contents,
      config: {
        responseMimeType: "application/json",
      },
    });

    const result = JSON.parse(response.text || "{}");
    res.json(result);
  } catch (error: any) {
    console.error("Error in /api/gemini/analyze-pronunciation:", error);
    res.status(500).json({
      error: "Failed to analyze pronunciation.",
      details: error.message,
    });
  }
});

// Vite Middleware & Production Server Setup
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`✨ NoorVerse Server running on http://localhost:${PORT}`);
  });
}

startServer();
