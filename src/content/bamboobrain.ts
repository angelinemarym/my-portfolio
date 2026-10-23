// Product narrative and architecture drawn from the owner-supplied Canva pitch.
export const bambooLinks = {
  github: "https://github.com/bamboo-brain",
  deck: "https://canva.link/vuj7351pvj8f9sh",
  demo: "https://youtu.be/eXM5jrowVHU",
  pitch: "https://youtu.be/aJ4x7yjRNes",
};

export const bambooGoals = [
  {
    title: "Learn from your own world",
    description:
      "Turn Chinese documents, videos, and audio into a personal curriculum built around the materials you actually want to understand.",
  },
  {
    title: "Practice with context",
    description:
      "Connect vocabulary, explanations, quizzes, and conversation so that new words become part of meaningful Mandarin practice.",
  },
  {
    title: "Adapt as life changes",
    description:
      "Build a study path around a learner’s HSK target, available time, and progress, then adjust the plan when practice falls behind.",
  },
];

export const bambooBenefits = [
  {
    title: "More relevant learning",
    description:
      "Your uploaded materials become the starting point for vocabulary, practice, and questions, connecting study with real interests and everyday needs.",
  },
  {
    title: "A clearer next step",
    description:
      "A personal schedule, due reviews, and progress feedback help turn a broad goal—learn Mandarin—into something actionable today.",
  },
  {
    title: "Practice beyond reading",
    description:
      "Speaking sessions, pronunciation feedback, listening activities, and retrieval-based explanations support different parts of the learning journey.",
  },
];

export const bambooWorkflow = [
  {
    title: "Bring your material",
    description:
      "Upload Chinese PDFs, presentations, audio, or video. Extraction services prepare the content for vocabulary discovery and document-based study.",
  },
  {
    title: "Make it learnable",
    description:
      "GPT-4o identifies Hanzi, Pinyin, meanings, and HSK levels. Learners can create flashcards and quizzes from the material or ask questions about it.",
  },
  {
    title: "Practice in context",
    description:
      "Review vocabulary with SM-2 spaced repetition, test understanding with quizzes, and speak with Master Ling for conversational and pronunciation practice.",
  },
  {
    title: "Plan, monitor, adapt",
    description:
      "A Goal Agent builds a study schedule. A Monitor Agent checks recent activity, and an Adapt Agent revises upcoming tasks when the learner needs a different pace.",
  },
];

export const bambooStack = [
  {
    layer: "01 / PRODUCT & ACCESS",
    title: "Next.js & .NET",
    tags: ["Next.js 16", ".NET 8", "NextAuth.js", "Microsoft Entra"],
    description:
      "The web application connects to a .NET backend. The pitch describes Microsoft and Google SSO alongside form-based account access, with Microsoft Entra and OAuth 2.0 supporting authentication.",
  },
  {
    layer: "02 / AGENTIC STUDY",
    title: "Agents with a shared purpose",
    tags: ["Microsoft Agent Framework", "Semantic Kernel", "GPT-4o"],
    description:
      "Goal, Monitor, and Adapt agents form the planning loop, while a Study Advisor helps interpret learning behavior. GPT-4o generates learning content, explanations, quiz feedback, and conversational responses.",
  },
  {
    layer: "03 / CONTENT EXTRACTION",
    title: "From files to vocabulary",
    tags: ["Document Intelligence", "Video Indexer", "Azure Speech"],
    description:
      "Document, video, and speech services process uploaded materials. Extracted text is enriched with vocabulary information such as characters, pronunciation, meanings, and HSK level.",
  },
  {
    layer: "04 / GROUNDED ASSISTANCE",
    title: "Retrieval & conversation",
    tags: [
      "Azure AI Search",
      "Vector + semantic search",
      "Content Safety",
      "Speech STT / TTS",
    ],
    description:
      "A retrieval-augmented chatbot searches uploaded content and can show source citations. Content Safety filters inputs. Speech-to-text, text-to-speech, and pronunciation analysis support the Speaking Studio.",
  },
  {
    layer: "05 / LEARNING & DATA",
    title: "Personal progress, retained",
    tags: ["Cosmos DB", "Blob Storage", "SM-2"],
    description:
      "Cosmos DB stores learning records, vocabulary, plans, and practice sessions, with user-based partitioning described in the architecture. Blob Storage holds files and media; SM-2 calculates flashcard review intervals.",
  },
  {
    layer: "06 / DELIVERY & UPDATES",
    title: "Connected through Azure",
    tags: ["Azure App Service", "Azure SignalR", "Azure AI Foundry"],
    description:
      "The project deck places the frontend and backend on Azure App Service, model access in AI Foundry, and real-time notifications in SignalR so processing and planning updates can reach the learner.",
  },
];

export const bambooScreens = [
  {
    file: "02-dashboard.jpg",
    title: "Learner dashboard",
    group: "Your workspace",
    description:
      "A home for HSK progress, recent uploads, today’s tasks, and study activity.",
    width: 1920,
    height: 2556,
  },
  {
    file: "03-library.jpg",
    title: "Personal library",
    group: "Your workspace",
    description:
      "Keep uploaded learning materials together and return to the resources you want to study.",
    width: 1920,
    height: 1884,
  },
  {
    file: "04-extracted-resource.jpg",
    title: "Extracted resource",
    group: "From content to learning",
    description:
      "Read Chinese text with vocabulary support and a document-specific learning context.",
    width: 1920,
    height: 915,
  },
  {
    file: "05-study-center.jpg",
    title: "Study Center",
    group: "From content to learning",
    description:
      "Find flashcard decks, due reviews, and study progress in one place.",
    width: 1920,
    height: 1810,
  },
  {
    file: "08-flashcard.jpg",
    title: "Flashcard review",
    group: "Practice & planning",
    description:
      "Reveal the answer and rate recall to guide the next spaced-repetition review.",
    width: 1920,
    height: 982,
  },
  {
    file: "07-speaking.jpg",
    title: "Speaking Studio",
    group: "Practice & planning",
    description:
      "Practice a Mandarin conversation with Master Ling using a microphone and contextual prompts.",
    width: 1920,
    height: 1138,
  },
  {
    file: "06-study-planner.jpg",
    title: "Study Planner",
    group: "Practice & planning",
    description:
      "See planned study activities and the path toward a personal learning goal.",
    width: 1920,
    height: 1179,
  },
  {
    file: "01-login.jpg",
    title: "Sign in",
    group: "Account access",
    description:
      "Enter the BambooBrain learning workspace through the account sign-in screen.",
    width: 1920,
    height: 912,
  },
];
