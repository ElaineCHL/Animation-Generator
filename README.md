# 🎓 AI-Powered Animated Math Video Generator

## Final Year Project (FYP) — 2024-2025

**Author**			: Elaine Chung Hui Lin
**Supervisor**	: Prof. Ts. Liew Soung Yue
**Moderator**	 	: Ts Dr Tan Hung Khoon
**Institution**		: UTAR
**Degree**			: Bachelor of Computer Science (Honours)

---

## 📘 Overview

This project, titled **"The Development of LLM Tools for Generating Educational Animations to Enhance Learning in Mathematics"** is developed for academic purposes as part of a Final Year Project at UTAR.

This **AI-powered system** automatically generates **animated educational videos** from high-level textual prompts (e.g., _"Explain Kruskal's algorithm in 5 minutes"_). The system is designed for secondary school-level mathematics and mimics the engaging visual style of **3Blue1Brown** videos.

Users with minimal programming knowledge can interact with the system to produce high-quality animated math explanations, making it a powerful tool for educators and students alike.

---

## 🧠 Core Features

- 💬 **Natural Language Understanding**

  - Accepts prompts like "Explain the Fibonacci sequence" and breaks them into animation steps.
- 🎨 **Custom Animation Engine**
  Built in TypeScript and HTML5 Canvas, supporting:

  - Basic shapes: `Circle`, `Rectangle`, `Triangle`, `Text`
  - Transformations: `move`, `scale`, `fadeIn`, `fadeOut`, `setPosition`
  - Grouping: `Group` class for grouped animations like `scaleAndMove`, `scaleAndRotate`
  - Support for z-index and relative positioning
- 🧱 **Mini external DSL for Animation**

  - A custom domain-specific language designed to simplify the animation creation process and support LLM integration.
- 🔊 **Voice-over Generation**

  - Integrates with Google Text-to-Speech to produce synchronized narration.

---

## 🛠️ Technologies Used

- TypeScript
- React framework
- HTML5 Canvas
- Custom DSL and Parser using ANTLR4
- GTTS API
- OpenAI GPT (LLM integration)
- TailwindCSS (for styling)

---

## 🚀 How It Works

1. **User Input**: A prompt like _"Explain the Pythagorean Theorem"_
2. **LLM Breakdown**: The prompt is broken into logical animation steps.
3. **Script Generation**: A script in the custom DSL is generated.
4. **Rendering**: The script is executed using the TypeScript-based animation engine.
5. **Voiceover**: Optional narration is generated and synced.
6. **Output**: A rendered animation is displayed to the user.

---

## 📂 Project Structure

```
Math-Generator/
├── backend/                 # Node.js/TypeScript API
│   ├── src/                # Source code
│   ├── dist/               # Compiled output
│   ├── package.json
│   ├── tsconfig.json
│   └── .env               # Environment variables
├── frontend/               # React/Vite frontend
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   ├── package.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   └── index.html
├── .gitignore
└── README.md
```

## 🧪 Future Improvements

- Add support for **graphs and plots**
- Improve **voice sync** using animation markers
- Enhance **GUI animation editor**
- Explore **backend rendering** using Manim for higher fidelity
