export const kuracvGoals = [
  {
    title: "Bring the workflow together",
    description:
      "Keep job requirements, application links, candidate records, and hiring status in one recruiter workspace.",
  },
  {
    title: "Make CVs easier to review",
    description:
      "Turn a PDF into a structured overview of relevant skills, a match score, and a short explanation tied to the role.",
  },
  {
    title: "Move from review to outreach",
    description:
      "Help recruiters find a candidate, inspect the original CV, and prepare a personalized interview invitation.",
  },
];

export const kuracvBenefits = [
  {
    title: "Less repetitive review",
    description:
      "Skills and summaries give recruiters a starting point before reading the full CV, helping them navigate a larger applicant pool.",
  },
  {
    title: "Clearer hiring context",
    description:
      "Job-specific criteria, candidate categories, and application statistics keep the role and its applicants connected.",
  },
  {
    title: "A smoother next step",
    description:
      "A reusable candidate pool and editable email drafts help carry useful information from screening into the interview stage.",
  },
];

export const kuracvWorkflow = [
  {
    title: "Define the role",
    description:
      "Create a job with its department, employment type, work arrangement, and requirements. Manage it as Active, Draft, or Closed.",
  },
  {
    title: "Connect applications",
    description:
      "Link a Google Form to the job. Its webhook supplies applicant details and a Google Drive PDF reference to the Django service.",
  },
  {
    title: "Structure the CV",
    description:
      "PyPDF2 extracts text, then Gemini compares it with the job requirements. A Pydantic schema structures the score, status, skills, and summary before they are saved in Firestore.",
  },
  {
    title: "Review and reach out",
    description:
      "Browse ranked candidates and status filters, inspect the original CV, and generate an interview draft to copy or open in the recruiter’s email app.",
  },
];

export const kuracvStack = [
  {
    layer: "01 / INTERFACE",
    title: "Next.js & React",
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4"],
    description:
      "App Router pages provide the recruiter dashboard, job views, authentication screens, candidate tables, and detail modals. TypeScript models the client-side data; Tailwind handles the interface styling.",
  },
  {
    layer: "02 / APPLICATION API",
    title: "Python & Django",
    tags: ["Django 5.2", "Django REST Framework", "django-filter"],
    description:
      "REST endpoints manage jobs and accounts, serve applicant data and statistics, and handle the application webhook. Job lists support text search and filters for status, employment type, and work arrangement.",
  },
  {
    layer: "03 / INTELLIGENCE",
    title: "Gemini & structured output",
    tags: ["Google Gen AI SDK", "Pydantic", "PyPDF2"],
    description:
      "PDF text is compared with the role’s requirements. Schema-based responses return a match percentage, a review category, relevant skills, and a concise explanation. A separate generation flow drafts interview emails.",
  },
  {
    layer: "04 / DATA",
    title: "Firestore & Django ORM",
    tags: ["Cloud Firestore", "SQLite", "dj-database-url"],
    description:
      "Firestore stores candidate documents and AI analysis. Django models manage users and jobs in a relational database, with SQLite as the local default and environment-based database configuration for deployment.",
  },
  {
    layer: "05 / ACCESS & INTAKE",
    title: "Authentication & integrations",
    tags: ["Simple JWT", "Google OAuth", "Google Forms", "Google Drive"],
    description:
      "Email/password and Google sign-in connect to JWT authentication. Google Forms supplies application data through a webhook, while Drive provides the submitted CV file for extraction.",
  },
  {
    layer: "06 / DELIVERY",
    title: "Containerized services",
    tags: ["Docker", "Gunicorn", "WhiteNoise"],
    description:
      "The frontend and backend include Docker configurations. Gunicorn runs the Django service, with WhiteNoise available for serving its static assets.",
  },
];

export const kuracvScreens = [
  {
    file: "03-job-listings.png",
    title: "Job listings",
    group: "Job management",
    description:
      "A central view of open roles with job status, department, employment type, and work arrangement.",
    width: 2880,
    height: 2000,
  },
  {
    file: "04-job-filters.png",
    title: "Job filters",
    group: "Job management",
    description: "Narrow down roles by employment type and location model.",
    width: 2880,
    height: 2000,
  },
  {
    file: "05-job-listings-active-tab.png",
    title: "Active roles",
    group: "Job management",
    description:
      "Status tabs separate active hiring from draft and closed listings.",
    width: 2880,
    height: 2000,
  },
  {
    file: "06-create-job-modal.png",
    title: "Create a job",
    group: "Job management",
    description:
      "Capture the role and its requirements before connecting the application intake.",
    width: 2880,
    height: 2000,
  },
  {
    file: "11-job-details-requirements.png",
    title: "Role requirements",
    group: "Job management",
    description:
      "Maintain the requirements used for analysis alongside the application form link and webhook setup.",
    width: 2880,
    height: 2000,
  },
  {
    file: "07-job-details-candidates.png",
    title: "Job candidates",
    group: "CV screening",
    description:
      "Review applicant statistics and compare the candidates attached to a specific job.",
    width: 2880,
    height: 2600,
  },
  {
    file: "08-job-details-filtered.png",
    title: "Candidate filters",
    group: "CV screening",
    description:
      "Explore candidates by the analysis categories Meet Criteria, Considerable, and Failed.",
    width: 2880,
    height: 2600,
  },
  {
    file: "09-candidate-ai-summary.png",
    title: "AI candidate summary",
    group: "CV screening",
    description:
      "Inspect the match score, relevant skills, and explanation, with access to the original CV.",
    width: 2880,
    height: 1800,
  },
  {
    file: "12-candidate-pool.png",
    title: "Candidate pool",
    group: "Candidate pool",
    description:
      "Browse candidate records across roles in a shared recruiter workspace.",
    width: 3840,
    height: 2000,
  },
  {
    file: "13-candidate-pool-detail.png",
    title: "Candidate detail",
    group: "Candidate pool",
    description:
      "A side panel keeps the selected candidate’s profile and AI analysis beside the candidate list.",
    width: 3840,
    height: 2000,
  },
  {
    file: "10-generated-email.png",
    title: "Interview email draft",
    group: "Outreach",
    description:
      "Generate an invitation, review its content, then copy it or open it in an email app.",
    width: 2880,
    height: 1800,
  },
  {
    file: "14-candidate-pool-email.png",
    title: "Outreach from the pool",
    group: "Outreach",
    description:
      "Prepare an interview invitation directly from the candidate pool.",
    width: 3840,
    height: 2000,
  },
  {
    file: "01-login.png",
    title: "Sign in",
    group: "Account access",
    description:
      "Recruiters can sign in with email and password or continue with Google.",
    width: 2880,
    height: 1800,
  },
  {
    file: "02-register.png",
    title: "Create an account",
    group: "Account access",
    description:
      "The registration screen introduces the recruiter to the KuraCV workspace.",
    width: 2880,
    height: 1800,
  },
];
