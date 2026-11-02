(() => {
  "use strict";

  const githubUrl = "https://github.com/JitendraDew009";
  const linkedinUrl = "https://www.linkedin.com/in/jitendradewangan/";
  const emailAddress = "dewanganjitendra725@gmail.com";
  const resumeUrl = "assets/Jitendra-Dewangan-Resume.pdf";

  const projects = [
    {
      id: "nutri-ninja",
      file: "nutri_ninja.py",
      name: "Nutri Ninja 5.0",
      repoUrl: "https://github.com/JitendraDew009/Nutri-Ninja-5.0",
      demoEmbedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7480121015457603584?compact=1",
      category: "AI Product · Food Intelligence · Computer Vision",
      description: "An AI-powered nutrition assistant with barcode-based food identification, OCR, and a FastAPI backend, built to turn food information into useful nutrition insights.",
      problem: "Nutrition labels can be difficult to scan quickly, and ingredient information is not always easy to compare.",
      solution: "A mobile-first AI nutrition assistant that combines barcode scanning, OCR, AI services, and REST APIs to present useful food information.",
      features: ["Barcode-based food identification", "OCR processing", "AI-powered nutrition assistance and recommendations", "FastAPI backend and REST API integration"],
      stack: ["OpenAI", "FastAPI", "OCR", "Barcode scanning", "React Native", "REST APIs"],
      architecture: "The résumé describes an application workflow integrating barcode/OCR processing, AI services, REST APIs, and a FastAPI backend. Detailed component boundaries and deployment architecture were not specified.",
      contribution: "Built an AI-powered nutrition assistant, integrating AI services, OCR/barcode processing, REST APIs, and a FastAPI backend in a product-oriented workflow.",
      challenges: "Specific implementation challenges and resolutions were not documented in the supplied résumé.",
      status: "Built; repository available",
      future: ["Document data sources and nutrition-data limitations", "Add verified implementation details", "Evaluate recommendations for clarity and safety"],
      keywords: "nutrition food barcode ingredients computer vision product"
    },
    {
      id: "enterprise-rag-assistant",
      file: "enterprise_rag_assistant.py",
      name: "Enterprise Knowledge AI Assistant",
      repoUrl: "https://github.com/JitendraDew009/Enterprise-Knowledge-AI-Assistant-",
      category: "Generative AI · RAG · Enterprise Applications",
      description: "An in-progress RAG knowledge assistant for querying enterprise documents with document processing, embeddings, semantic retrieval, and LLM-generated responses.",
      problem: "Finding a reliable answer across a large collection of internal documents can require time-consuming manual search.",
      solution: "A LangChain workflow retrieves relevant document context and uses an LLM to generate grounded responses.",
      features: ["Enterprise document processing", "Embeddings and semantic retrieval", "LangChain retrieval and response workflow", "FastAPI backend in development", "Exploring source-aware responses and retrieval evaluation"],
      stack: ["Python", "LangChain", "RAG", "Embeddings", "Vector database", "LLM", "FastAPI"],
      architecture: "The in-progress flow processes uploaded documents, creates embeddings, performs semantic retrieval, then provides relevant context to an LLM for response generation. FastAPI backend development and evaluation are ongoing.",
      contribution: "Developing document processing, embeddings, semantic retrieval, LangChain orchestration, and a FastAPI backend.",
      challenges: "Retrieval quality and source-aware responses are active areas of exploration; verified evaluation results have not yet been provided.",
      status: "In progress",
      future: ["Complete the FastAPI workflow", "Evaluate retrieval quality with a representative question set", "Document source attribution and observed limitations"],
      keywords: "enterprise knowledge rag retrieval augmented generation embeddings llm"
    },
    {
      id: "agentic-ai-weather",
      file: "agentic_ai_weather.py",
      name: "Agentic AI Weather Agent",
      repoUrl: "https://github.com/JitendraDew009/Agentic-AI-Weather-Agent-and-Coding-Agent-CLI-",
      category: "AI Agents · API Integration",
      description: "A weather-agent concept that interprets a user question, selects a suitable weather tool, and presents a useful response.",
      problem: "A natural-language weather question may require translating intent into a structured request to an external data source.",
      solution: "Use a bounded tool workflow that turns the question into a weather lookup and reports the result with clear error handling.",
      features: ["Tool selection and calling (proposed)", "Weather API integration (proposed)", "Agent workflow and response generation (proposed)", "Timeout and API error handling (proposed)", "Scenario-based evaluation (proposed)"],
      stack: ["Python", "LLM tool calling", "Weather API", "REST"],
      architecture: "Potential flow: question → intent and location extraction → validated API tool call → normalized weather data → concise response. No provider or deployed behavior is asserted.",
      contribution: "Project scope and individual implementation details have not been supplied; add verified contributions here.",
      challenges: "Document real edge cases, API failures, and design decisions once implementation evidence is available.",
      status: "Overview based on supplied project brief",
      future: ["Test ambiguous locations and units", "Add freshness and source attribution", "Evaluate tool selection and failure recovery"],
      keywords: "agent weather tool api integration"
    },
    {
      id: "coding-agent-cli",
      file: "coding_agent_cli.py",
      name: "Coding Agent CLI",
      repoUrl: "https://github.com/JitendraDew009/Agentic-AI-Weather-Agent-and-Coding-Agent-CLI-",
      category: "Developer Tools · AI Automation",
      description: "A command-line coding assistant concept for making AI-supported programming workflows easier to access and understand.",
      problem: "Developers need a predictable way to provide context to an AI coding workflow and review what it proposes.",
      solution: "Design a focused CLI around explicit prompts, understandable output, and safety boundaries for any file-related actions.",
      features: ["Command-line interface (proposed)", "Prompt and context handling (proposed)", "AI model integration (proposed)", "Explicit file-operation controls (proposed)", "Actionable errors and developer feedback (proposed)"],
      stack: ["Python", "CLI", "LLM APIs", "File-system controls"],
      architecture: "Potential workflow: parse explicit command → validate inputs and scope → prepare prompt → request model output → display or request confirmation before any changes.",
      contribution: "Project scope and individual implementation details have not been supplied; add verified contributions here.",
      challenges: "Document real reliability and safety decisions when the implementation is available for review.",
      status: "Overview based on supplied project brief",
      future: ["Define a narrow and auditable file scope", "Add preview-before-apply workflows", "Test malformed responses and permission failures"],
      keywords: "developer tools coding agent cli automation safety"
    },
    {
      id: "agent-chatbot",
      file: "agent_chatbot.py",
      name: "Agent ChatBot",
      repoUrl: "https://github.com/JitendraDew009/Agent-Chat-Bot",
      category: "Generative AI · LLM Applications",
      description: "A Python chatbot connecting user prompts to Google Gemini through a LangChain workflow for interactive, context-aware responses.",
      problem: "Provide an approachable conversational interface that connects user prompts to a language model.",
      solution: "A Python-based LangChain workflow integrates the Google Gemini API and conversation flow.",
      features: ["LangChain workflow", "Google Gemini API integration", "Prompt handling", "Interactive AI responses"],
      stack: ["Python", "LangChain", "Google Gemini API", "LLM"],
      architecture: "The résumé describes a Python workflow that connects user prompts with Google Gemini through LangChain. Specific memory, hosting, and evaluation details were not supplied.",
      contribution: "Built the chatbot workflow and applied prompt and conversation-flow concepts for context-aware AI interactions.",
      challenges: "Specific implementation challenges and evaluation results were not included in the supplied résumé.",
      status: "Built; repository available",
      future: ["Document conversation context behavior", "Add a small evaluation set and failure examples"],
      keywords: "agent chatbot langchain google gemini conversational ai"
    },
    {
      id: "yatra-agent",
      file: "yatra_agent.py",
      name: "Yatra Agent",
      repoUrl: "https://github.com/JitendraDew009/Yatra_Agent",
      liveUrl: "https://jitendradew009.github.io/Yatra_Agent/",
      demoEmbedUrl: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7522716989685993472?compact=1",
      category: "AI Agents · Travel",
      description: "Explore the Yatra Agent repository for project details and implementation.",
      problem: "Project-specific problem details are documented in the repository.",
      solution: "See the repository for the project workflow and implementation.",
      features: ["Project details available in the repository"],
      stack: [],
      architecture: "See the repository for architecture and implementation details.",
      contribution: "See the repository for project and contribution details.",
      challenges: "Project-specific challenges have not been supplied here.",
      status: "Repository available",
      future: ["Document project features and implementation details"],
      keywords: "yatra travel agent"
    },
    {
      id: "mobilenet-transfer-learning",
      file: "mobilenet_transfer_learning.py",
      name: "Computer Vision MobileNet Transfer Learning",
      category: "Machine Learning · Computer Vision",
      description: "A computer-vision classification project using MobileNet transfer learning, data preparation, model training, and evaluation.",
      problem: "Apply a pretrained visual model to a classification task using a deep-learning workflow.",
      solution: "Use MobileNet transfer learning with Python and TensorFlow for a computer-vision classification task.",
      features: ["MobileNet transfer learning", "Data preparation", "Model training", "Model evaluation"],
      stack: ["Python", "TensorFlow", "MobileNet", "Deep Learning", "Computer Vision"],
      architecture: "The résumé confirms a MobileNet transfer-learning workflow. Dataset, target classes, training configuration, and evaluation results were not supplied.",
      contribution: "Implemented transfer learning for a computer-vision classification task and applied data preparation, model training, and evaluation concepts.",
      challenges: "Dataset details, model configuration, and documented challenges were not included in the supplied résumé.",
      status: "Built; repository link and results not supplied",
      future: ["Add dataset and class details", "Document training setup and evaluation metrics", "Link the repository and verified results"],
      keywords: "computer vision mobilenet transfer learning tensorflow image classification"
    }
  ];

  const mlProjects = [
    { name: "Customer Transaction Prediction", repoUrl: "https://github.com/JitendraDew009/Customer_Transaction_Prediction", description: "Predicts whether a customer will make a future transaction using anonymized customer records.", keywords: "customer transaction prediction future anonymized records machine learning" },
    { name: "Flight Fare Prediction", repoUrl: "https://github.com/JitendraDew009/Flight_Price_Prediction", description: "Analyzes historical Indian flight fare data and predicts airfare using route, airline, schedule, and trip characteristics.", keywords: "flight fare prediction regression Indian airfare" },
    { name: "Skin Disorder Classification", repoUrl: "https://github.com/JitendraDew009/Skin-Disorder-Classification-and-Data-Analysis", description: "Classifies skin disorders from a dermatology dataset, using clinical and histopathological features to build a predictive model.", keywords: "skin disorder classification machine learning dermatology clinical histopathological features" },
    { name: "Rice Leaf Disease Classification using CNN", repoUrl: "https://github.com/JitendraDew009/RiceLeaf_disease_detection", description: "Classifies rice leaf diseases from images by distinguishing disease categories based on visual symptoms on the leaf surface.", keywords: "rice leaf disease classification cnn image visual symptoms" },
    { name: "Computer Vision MobileNet Transfer Learning", repoUrl: "https://github.com/JitendraDew009/Computer-Vision-MobileNet_Transfer-Learning", description: "A Jupyter Notebook demonstrating how to fine-tune MobileNet on a custom dataset and prepare a model for mobile deployment.", keywords: "computer vision mobilenet transfer learning tensorflow custom dataset mobile deployment jupyter notebook" }
  ];

  const skills = [
    { name: "Python", category: "Programming Languages", badgeUrl: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" },
    { name: "JavaScript", category: "Programming Languages", badgeUrl: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" },
    { name: "TypeScript", category: "Programming Languages", badgeUrl: "https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" },
    { name: "SQL", category: "Programming Languages", badgeUrl: "https://img.shields.io/badge/SQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
    { name: "LangChain", category: "AI & LLM Frameworks", badgeUrl: "https://img.shields.io/badge/LangChain-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white" },
    { name: "LangGraph", category: "AI & LLM Frameworks", badgeUrl: "https://img.shields.io/badge/LangGraph-1C3C3C?style=for-the-badge&logo=langchain&logoColor=white" },
    { name: "OpenAI", category: "AI & LLM Frameworks", badgeUrl: "https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" },
    { name: "Google Gemini", category: "AI & LLM Frameworks", badgeUrl: "https://img.shields.io/badge/Google%20Gemini-8F7EE7?style=for-the-badge&logo=google&logoColor=white" },
    { name: "RAG Systems", category: "AI & LLM Frameworks", badgeUrl: "https://img.shields.io/badge/RAG%20Systems-FF6B6B?style=for-the-badge&logoColor=white" },
    { name: "FastAPI", category: "Backend & API Development", badgeUrl: "https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white" },
    { name: "Flask", category: "Backend & API Development", badgeUrl: "https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" },
    { name: "Django", category: "Backend & API Development", badgeUrl: "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" },
    { name: "REST API", category: "Backend & API Development", badgeUrl: "https://img.shields.io/badge/REST%20API-02569B?style=for-the-badge&logo=fastapi&logoColor=white" },
    { name: "Node.js", category: "Backend & API Development", badgeUrl: "https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" },
    { name: "React Native", category: "Mobile Development", badgeUrl: "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" },
    { name: "Expo", category: "Mobile Development", badgeUrl: "https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" },
    { name: "MongoDB", category: "Databases & Vector Stores", badgeUrl: "https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" },
    { name: "PostgreSQL", category: "Databases & Vector Stores", badgeUrl: "https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white" },
    { name: "MySQL", category: "Databases & Vector Stores", badgeUrl: "https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" },
    { name: "Pinecone", category: "Databases & Vector Stores", badgeUrl: "https://img.shields.io/badge/Pinecone-000000?style=for-the-badge&logoColor=white" },
    { name: "NumPy", category: "Data Science & ML", badgeUrl: "https://img.shields.io/badge/NumPy-013243?style=for-the-badge&logo=numpy&logoColor=white" },
    { name: "Pandas", category: "Data Science & ML", badgeUrl: "https://img.shields.io/badge/Pandas-150458?style=for-the-badge&logo=pandas&logoColor=white" },
    { name: "Scikit-Learn", category: "Data Science & ML", badgeUrl: "https://img.shields.io/badge/Scikit--Learn-F7931E?style=for-the-badge&logo=scikitlearn&logoColor=white" },
    { name: "OpenCV", category: "Data Science & ML", badgeUrl: "https://img.shields.io/badge/OpenCV-5C3EE8?style=for-the-badge&logo=opencv&logoColor=white" },
    { name: "YOLOv8", category: "Data Science & ML", badgeUrl: "https://img.shields.io/badge/YOLOv8-00BFFF?style=for-the-badge&logoColor=white" },
    { name: "Git", category: "Tools & DevOps", badgeUrl: "https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" },
    { name: "GitHub", category: "Tools & DevOps", badgeUrl: "https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" },
    { name: "Docker", category: "Tools & DevOps", badgeUrl: "https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" },
    { name: "VS Code", category: "Tools & DevOps", badgeUrl: "https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" },
    { name: "Jupyter", category: "Tools & DevOps", badgeUrl: "https://img.shields.io/badge/Jupyter-FA0F00?style=for-the-badge&logo=jupyter&logoColor=white" },
    { name: "Power BI", category: "Analytics & Visualization", badgeUrl: "https://img.shields.io/badge/Power%20BI-F2C811?style=for-the-badge&logo=powerbi&logoColor=black" },
    { name: "Tableau", category: "Analytics & Visualization", badgeUrl: "https://img.shields.io/badge/Tableau-E97627?style=for-the-badge&logo=tableau&logoColor=white" }
  ];

  const fileGroups = [
    { folder: "portfolio", files: [
      { id: "about", name: "about.py", language: "Python" },
      { id: "career-goals", name: "career_goals.md", language: "Markdown" },
      { id: "skills", name: "skills.json", language: "JSON" },
      { id: "skills-dashboard", name: "skills_dashboard.md", language: "Markdown" },
      { id: "experience", name: "experience.md", language: "Markdown" },
      { id: "resume", name: "resume.md", language: "Markdown" }
    ] },
    { folder: "projects", files: [
      ...projects.map(project => ({ id: project.id, name: project.file, language: "Python" })),
      { id: "machine-learning", name: "machine_learning_projects.md", language: "Markdown" }
    ] },
    { folder: "research", files: [
      { id: "llm-engineering", name: "llm_engineering.md", language: "Markdown" },
      { id: "ai-product-ideas", name: "ai_product_ideas.md", language: "Markdown" }
    ] },
    { folder: "contact", files: [
      { id: "contact", name: "contact.json", language: "JSON" }
    ] },
    { folder: "", files: [
      { id: "readme", name: "README.md", language: "Markdown" },
      { id: "projects", name: "projects.md", language: "Markdown" },
      { id: "search", name: "search.md", language: "Markdown" },
      { id: "requirements", name: "requirements.txt", language: "Plain Text" },
      { id: "package", name: "package.json", language: "JSON" }
    ] }
  ];

  const filesById = new Map(fileGroups.flatMap(group => group.files.map(file => [file.id, { ...file, folder: group.folder }])));
  const state = {
    openTabs: ["readme"],
    activeFile: "readme",
    panel: "explorer",
    projectFilter: "All",
    skillFilter: "All Skills",
    searchQuery: "",
    paletteIndex: 0,
    paletteItems: [],
    terminalHistory: [],
    historyIndex: 0,
    repos: [],
    repoState: "loading",
    repoError: ""
  };
  const $ = selector => document.querySelector(selector);
  const editorContent = $("#editorContent");
  const sidebarBody = $("#sidebarBody");
  const terminalOutput = $("#terminalOutput");
  const paletteBackdrop = $("#paletteBackdrop");
  const paletteInput = $("#paletteInput");
  const paletteResults = $("#paletteResults");

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, char => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[char]);
  }

  function fileIcon(name) {
    const extension = name.split(".").pop().toLowerCase();
    const classes = { md: "icon-md", py: "icon-py", json: "icon-json", js: "icon-js", html: "icon-html", txt: "icon-txt" };
    const glyphs = { md: "M", py: "Py", json: "{ }", js: "JS", html: "5", txt: "≡" };
    return `<span class="file-icon ${classes[extension] || "icon-txt"}" aria-hidden="true">${glyphs[extension] || "•"}</span>`;
  }

  function renderExplorer() {
    $("#sidebarTitle").textContent = "EXPLORER";
    sidebarBody.innerHTML = `<button class="tree-root" type="button" aria-expanded="true" data-toggle-root><span class="chevron">⌄</span> JITENDRA-PORTFOLIO</button>` +
      fileGroups.map((group, index) => {
        if (!group.folder) return group.files.map(file => renderTreeFile(file)).join("");
        return `<div class="tree-group">
          <button class="tree-folder" type="button" aria-expanded="true" data-folder="${escapeHtml(group.folder)}"><span class="chevron">⌄</span><span class="tree-folder-icon">▰</span>${escapeHtml(group.folder)}</button>
          <div class="tree-children" data-children="${escapeHtml(group.folder)}">${group.files.map(file => renderTreeFile(file)).join("")}</div>
        </div>`;
      }).join("");
    updateSelectedTreeFile();
  }

  function renderTreeFile(file) {
    return `<button class="tree-file" type="button" data-open="${escapeHtml(file.id)}" aria-current="${file.id === state.activeFile ? "page" : "false"}">${fileIcon(file.name)}<span>${escapeHtml(file.name)}</span></button>`;
  }

  function updateSelectedTreeFile() {
    sidebarBody.querySelectorAll(".tree-file").forEach(button => {
      const selected = button.dataset.open === state.activeFile;
      button.classList.toggle("selected", selected);
      button.setAttribute("aria-current", selected ? "page" : "false");
    });
  }

  function renderTabs() {
    $("#tabs").innerHTML = state.openTabs.map(id => {
      const file = filesById.get(id);
      if (!file) return "";
      return `<div class="tab" role="tab" tabindex="0" aria-selected="${id === state.activeFile}" data-tab="${escapeHtml(id)}">${fileIcon(file.name)}<span class="tab-name">${escapeHtml(file.name)}</span><button class="tab-close" type="button" data-close="${escapeHtml(id)}" aria-label="Close ${escapeHtml(file.name)}">×</button></div>`;
    }).join("");
  }

  function openFile(id) {
    if (!filesById.has(id)) return;
    state.activeFile = id;
    if (!state.openTabs.includes(id)) state.openTabs.push(id);
    renderTabs();
    renderFile(id);
    updateSelectedTreeFile();
    updateStatus(id);
    document.querySelectorAll(".activity-button[data-panel]").forEach(button => {
      button.classList.toggle("active", button.dataset.panel === state.panel);
      button.setAttribute("aria-pressed", String(button.dataset.panel === state.panel));
    });
    $(".sidebar").classList.remove("mobile-open");
    $(".mobile-menu").setAttribute("aria-expanded", "false");
  }

  function closeTab(id) {
    if (state.openTabs.length <= 1) {
      toast("Keep at least one file open in the editor.");
      return;
    }
    const index = state.openTabs.indexOf(id);
    if (index < 0) return;
    state.openTabs.splice(index, 1);
    if (state.activeFile === id) state.activeFile = state.openTabs[Math.max(index - 1, 0)];
    renderTabs();
    renderFile(state.activeFile);
    updateSelectedTreeFile();
    updateStatus(state.activeFile);
  }

  function updateStatus(id) {
    const file = filesById.get(id);
    const path = file?.folder ? `${file.folder}/${file.name}` : file?.name || "README.md";
    $("#statusFile").textContent = file?.name || "README.md";
    $("#statusLanguage").textContent = file?.language || "Markdown";
    $(".status-section").textContent = file?.folder || (file?.id === "readme" ? "Home" : "Portfolio");
    $("#breadcrumb").innerHTML = `<span>JITENDRA-PORTFOLIO</span>${file?.folder ? `<span aria-hidden="true">›</span><span>${escapeHtml(file.folder)}</span>` : ""}<span aria-hidden="true">›</span><span class="crumb-current">${escapeHtml(file?.name || path)}</span>`;
  }

  function sectionHeader(title, eyebrow, intro = "") {
    return `<p class="eyebrow">${escapeHtml(eyebrow)}</p><h1 class="panel-heading">${escapeHtml(title)}</h1>${intro ? `<p class="panel-intro">${escapeHtml(intro)}</p>` : ""}`;
  }

  function renderFile(id) {
    const project = projects.find(item => item.id === id);
    if (project) {
      editorContent.innerHTML = renderProject(project);
    } else {
      const renderers = {
        readme: renderReadme,
        about: renderAbout,
        "career-goals": renderCareerGoals,
        skills: () => renderCode(renderJsonFile("skills"), "JSON"),
        "skills-dashboard": renderSkills,
        experience: renderExperience,
        resume: renderResume,
        projects: renderProjects,
        search: renderSearchPage,
        "machine-learning": renderMachineLearning,
        "llm-engineering": renderLlmEngineering,
        "ai-product-ideas": renderProductIdeas,
        contact: () => renderCode(renderJsonFile("contact"), "JSON"),
        requirements: renderRequirements,
        package: renderPackage
      };
      editorContent.innerHTML = (renderers[id] || renderReadme)();
    }
    $("#editorScroll").scrollTop = 0;
  }

  function renderReadme() {
    return `<div class="hero">
      <div class="hero-layout">
        <div class="hero-main">
          <p class="eyebrow">JITENDRA-PORTFOLIO / README.md</p>
          <h1>Hi, I'm <span class="accent">Jitendra Dewangan</span></h1>
          <h2>AI Engineer <span class="muted">|</span> GenAI <span class="muted">|</span> LLM · RAG · Agentic AI</h2>
          <div class="hero-copy">
            <p>I build practical AI applications that bring together Python, machine learning, LLMs, and thoughtful product design.</p>
            <p>From a barcode-powered nutrition assistant to an in-progress enterprise RAG system, I focus on turning AI capabilities into useful experiences.</p>
            <p><span class="hero-location">⌖ Bengaluru, India</span><span class="hero-separator">·</span><a href="mailto:${emailAddress}">${emailAddress}</a></p>
          </div>
        </div>
        <figure class="profile-figure">
          <img class="profile-photo" src="assets/jitendra-dewangan.jpg" alt="Portrait of Jitendra Dewangan in a navy blazer" width="768" height="1152" fetchpriority="high">
          <figcaption><span class="profile-presence" aria-hidden="true"></span>Jitendra Dewangan <span>· AI Engineer</span></figcaption>
        </figure>
      </div>
      <div class="hero-actions">
        <button class="button primary" type="button" data-panel="projects">Explore Projects <span aria-hidden="true">→</span></button>
        <a class="button" href="${githubUrl}" target="_blank" rel="noopener noreferrer">View GitHub ↗</a>
        <a class="button" href="${resumeUrl}" download="Jitendra-Dewangan-Resume.pdf">Download Resume ↓</a>
        <button class="button ghost" type="button" data-panel="contact">Contact Me</button>
      </div>
    </div>
    <section class="editor-section">
      <h2 class="section-heading">Current focus</h2>
      <div class="focus-grid">
        ${[
          ["01", "AI engineering & machine learning", "Building useful, evaluated AI applications."],
          ["02", "LLM applications & RAG", "Grounding model experiences with relevant information."],
          ["03", "AI agents & tool integration", "Designing bounded workflows with clear outcomes."],
          ["04", "APIs, backends & product development", "Connecting reliable software foundations to user needs."]
        ].map(([icon, title, copy]) => `<article class="focus-card"><span class="focus-icon">${icon}</span><div><strong>${title}</strong><small>${copy}</small></div></article>`).join("")}
      </div>
    </section>
    <section class="editor-section">
      <div class="section-topline"><h2 class="section-heading">Selected project briefs</h2><button class="text-link" type="button" data-panel="projects">Browse all →</button></div>
      <div class="project-grid">${projects.slice(0, 2).map(projectCard).join("")}</div>
    </section>`;
  }

  function projectCard(project) {
    const repoUrl = project.repoUrl || findRepo(project)?.html_url;
    return `<article class="project-card">
      <div class="project-top"><span class="project-category">${escapeHtml(project.category)}</span><span class="muted" aria-label="${escapeHtml(project.status)}">↗</span></div>
      <h3>${escapeHtml(project.name)}</h3>
      <p>${escapeHtml(project.description)}</p>
      <div class="tag-list">${project.stack.slice(0, 4).map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>
      <div class="card-links"><button class="button" type="button" data-open="${escapeHtml(project.id)}">Read project brief</button>${repoUrl ? `<a class="text-link" href="${escapeHtml(repoUrl)}" target="_blank" rel="noopener noreferrer">Repository ↗</a>` : ""}${project.liveUrl ? `<a class="text-link" href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>` : ""}</div>
    </article>`;
  }

  function renderProjects() {
    const categories = ["All", ...new Set(projects.map(project => project.category.split(" · ")[0]))];
    const filtered = state.projectFilter === "All" ? projects : projects.filter(project => project.category.startsWith(state.projectFilter));
    return `${sectionHeader("Projects", "WORKSPACE / PROJECTS", "Project briefs and areas of exploration. Proposed capabilities are labeled; unverified implementation details are not presented as completed work.")}
      <div class="filter-row" role="group" aria-label="Filter projects">${categories.map(category => `<button class="filter-chip" type="button" data-project-filter="${escapeHtml(category)}" aria-pressed="${state.projectFilter === category}">${escapeHtml(category)}</button>`).join("")}<button class="filter-chip" type="button" data-open="machine-learning">Machine Learning projects</button></div>
      <div class="project-grid">${filtered.map(projectCard).join("")}</div>
      <section class="editor-section"><h2 class="section-heading">GitHub repositories</h2>${renderRepositories()}</section>`;
  }

  function renderProject(project) {
    const repo = findRepo(project);
    const repoUrl = project.repoUrl || repo?.html_url;
    return `<article class="project-detail">
      <p class="eyebrow">PROJECTS / ${escapeHtml(project.file)}</p>
      <span class="project-category">${escapeHtml(project.category)}</span>
      <h1 class="project-title">${escapeHtml(project.name)}</h1>
      <p class="lead">${escapeHtml(project.description)}</p>
      <div class="button-row"><span class="tag">${escapeHtml(project.status)}</span>${repoUrl ? `<a class="button" href="${escapeHtml(repoUrl)}" target="_blank" rel="noopener noreferrer">GitHub repository ↗</a>` : `<span class="tag">Repository link not supplied</span>`}${project.liveUrl ? `<a class="button" href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer">Live demo ↗</a>` : ""}</div>
      ${project.demoEmbedUrl ? `<section class="editor-section"><h2 class="section-heading">Demo video</h2><div class="project-demo"><iframe src="${escapeHtml(project.demoEmbedUrl)}" width="504" height="399" loading="lazy" allowfullscreen title="${escapeHtml(project.name)} demo video"></iframe></div></section>` : ""}
      <div class="detail-grid">
        <section class="info-card"><h3>Problem</h3><p>${escapeHtml(project.problem)}</p></section>
        <section class="info-card"><h3>Proposed solution</h3><p>${escapeHtml(project.solution)}</p></section>
        <section class="info-card"><h3>Potential features</h3><ul>${project.features.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
        <section class="info-card"><h3>Technology areas</h3><div class="tag-list">${project.stack.map(tag => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div><p>Possible technologies from the project brief; actual implementation stack is to be confirmed.</p></section>
        <section class="info-card"><h3>Architecture overview</h3><p>${escapeHtml(project.architecture)}</p></section>
        <section class="info-card"><h3>My contribution</h3><p>${escapeHtml(project.contribution)}</p></section>
        <section class="info-card"><h3>Challenges & solutions</h3><p>${escapeHtml(project.challenges)}</p></section>
        <section class="info-card"><h3>Future improvements</h3><ul>${project.future.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul></section>
      </div>
      <section class="editor-section"><h2 class="section-heading">Related public repositories</h2>${repo ? renderRepoCard(repo) : repoUrl ? `<a class="text-link" href="${escapeHtml(repoUrl)}" target="_blank" rel="noopener noreferrer">Open ${escapeHtml(project.name)} on GitHub ↗</a>` : renderRepositories()}</section>
    </article>`;
  }

  function renderSkills() {
    const categories = [...new Set(skills.map(skill => skill.category))];
    const filters = ["All Skills", ...categories];
    const shown = state.skillFilter === "All Skills" ? skills : skills.filter(skill => skill.category === state.skillFilter);
    return `${sectionHeader("Skills explorer", "PORTFOLIO / SKILLS_DASHBOARD.MD", "An editable overview of technologies and concepts. These categories are not proficiency ratings or claims of production-level experience.")}
      <div class="filter-row" role="group" aria-label="Filter skills">${filters.map(category => `<button class="filter-chip" type="button" data-skill-filter="${escapeHtml(category)}" aria-pressed="${state.skillFilter === category}">${escapeHtml(category)}</button>`).join("")}</div>
      <div class="skill-badge-groups">${categories.filter(category => state.skillFilter === "All Skills" || category === state.skillFilter).map(category => `<section class="skill-badge-group"><h2 class="section-heading">${escapeHtml(category)}</h2><div class="skill-badge-list">${shown.filter(skill => skill.category === category).map((skill, index) => `<div class="skill-badge-item" style="--skill-index:${index}"><img src="${escapeHtml(skill.badgeUrl)}" alt="${escapeHtml(skill.name)}" loading="lazy"></div>`).join("")}</div></section>`).join("")}</div>`;
  }

  function aboutSource() {
    return [
      "# A practical builder working across AI and software.",
      "",
      "class JitendraDewangan:",
      "    \"\"\"AI Product Engineer focused on useful, responsible software.\"\"\"",
      "",
      "    def introduction(self):",
      "        return \"I explore how machine learning and language models can be shaped into clear, reliable product experiences.\"",
      "",
      "    def interests(self):",
      "        return [",
      "            \"AI engineering and machine learning\",",
      "            \"LLM applications, retrieval, and agent workflows\",",
      "            \"Production-minded APIs and thoughtful product design\",",
      "        ]",
      "",
      "    def engineering_philosophy(self):",
      "        return \"Start with the problem. Make assumptions visible. Measure what matters.\""
    ].join("\n");
  }

  function renderAbout() {
    const source = aboutSource();
    return `${sectionHeader("About me", "PORTFOLIO / ABOUT.PY", "A developer-style introduction focused on practical AI products, careful engineering, and continuous learning.")}
      <div class="button-row"><button class="button" type="button" data-copy-profile>Copy code</button></div>
      ${renderCode(source, "Python")}
      <section class="editor-section"><h2 class="section-heading">How I approach problems</h2><div class="info-card"><p>Understand the user and constraints first; choose the simplest approach that can be tested; make trade-offs explicit; then improve the system using evidence rather than assumptions.</p></div></section>`;
  }

  function renderCareerGoals() {
    return `${sectionHeader("Career goals", "PORTFOLIO / CAREER_GOALS.MD", "Building intelligent products with a strong foundation in software engineering.")}
      <div class="detail-grid">
        <article class="info-card"><h3>Direction</h3><p>Grow as an AI Product Engineer by contributing to practical AI applications from problem discovery and prototyping through evaluation and iteration.</p></article>
        <article class="info-card"><h3>Areas of interest</h3><ul><li>Machine learning applications</li><li>LLM systems and retrieval-augmented generation</li><li>Tool-using AI agents</li><li>Reliable APIs and user-centered software</li></ul></article>
        <article class="info-card"><h3>Engineering priorities</h3><ul><li>Clear problem framing and measurable evaluation</li><li>Transparent limitations and safe failure behavior</li><li>Maintainable, documented implementation</li></ul></article>
        <article class="info-card"><h3>Current focus</h3><p>Strengthening the end-to-end skills required to design, build, test, and improve useful AI products.</p></article>
      </div>`;
  }

  function renderExperience() {
    const entries = [
      ["AI Engineering Intern", "Rubixe AI Solution", "2026 – Present", "Built machine-learning workflows with Python, Pandas, NumPy, and Scikit-learn; performed exploratory analysis, preprocessing, and feature engineering; supported end-to-end model development; and created Power BI dashboards."],
      ["AI Engineering Training", "DataMites · AI Engineer program", "", ""],
      ["Master of Computer Applications (MCA)", "Atal Bihari Vajpayee University", "July 2026", ""],
      ["B.Sc. Mathematics", "Atal Bihari Vajpayee University", "April 2024", ""]
    ];
    return `${sectionHeader("Experience & education", "PORTFOLIO / EXPERIENCE.MD", "Internship, training, and education details transcribed from the supplied résumé.")}
      <div class="timeline">${entries.map(([role, org, dates, copy], index) => `<article class="timeline-card"><span class="timeline-meta">${index === 0 ? "INTERNSHIP" : index === 1 ? "TRAINING" : "EDUCATION"}${dates ? ` · ${escapeHtml(dates)}` : ""}</span><h3>${escapeHtml(role)}</h3><p>${escapeHtml(org)}</p>${copy ? `<p>${escapeHtml(copy)}</p>` : ""}</article>`).join("")}</div>
      <section class="editor-section"><h2 class="section-heading">Leadership & achievements</h2><div class="detail-grid">
        <article class="info-card"><h3>Team Leader · Smart India Hackathon 2025</h3></article>
        <article class="info-card"><h3>First Place · National Mathematics Day Speech Competition 2025</h3></article>
        <article class="info-card"><h3>AI research paper presentation · 2026</h3></article>
      </div></section>`;
  }

  function renderResume() {
    return `${sectionHeader("Resume", "PORTFOLIO / RESUME.MD")}
      <div class="resume-heading"><img src="assets/jitendra-dewangan.jpg" alt="" width="768" height="1152"><div><h2 class="section-heading">Jitendra Dewangan</h2><p><strong>GenAI / AI Engineer | LLM | RAG | Agentic AI | Python</strong></p><p>Bengaluru, Karnataka · <a href="mailto:${emailAddress}">${emailAddress}</a></p><p><a class="text-link" href="${githubUrl}" target="_blank" rel="noopener noreferrer">GitHub</a> · <a class="text-link" href="${linkedinUrl}" target="_blank" rel="noopener noreferrer">LinkedIn</a></p></div></div>
      <p class="lead">AI Engineer with hands-on experience in Python, machine learning, LangChain, Google Gemini API, FastAPI, SQL, REST APIs, and AI application development. Built LLM-powered applications including a LangChain + Gemini chatbot and an AI nutrition assistant, and currently developing a retrieval-augmented enterprise knowledge assistant.</p>
      <section class="editor-section"><h2 class="section-heading">Technical skills</h2><div class="tag-list">${["Python", "SQL", "JavaScript", "HTML", "CSS", "LangChain", "Google Gemini API", "OpenAI", "Agentic AI", "RAG", "Embeddings", "Vector Search", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "OCR", "FastAPI", "REST APIs", "MySQL", "PostgreSQL", "MongoDB", "Docker (Basic)", "AWS (Basic)", "Power BI", "Tableau"].map(tag => `<span class="tag">${tag}</span>`).join("")}</div></section>
      <section class="editor-section"><h2 class="section-heading">Selected projects</h2><div class="project-grid">${projects.map(projectCard).join("")}</div></section>
      <section class="editor-section">${renderExperience()}</section>
      <section class="editor-section"><h2 class="section-heading">Certifications & training</h2><div class="detail-grid">
        <article class="info-card"><h3>IBM Machine Learning</h3><p>2025</p></article>
        <article class="info-card"><h3>E&ICT Academy, IIT Kanpur</h3></article>
        <article class="info-card"><h3>DataMites AI Engineer</h3></article>
        <article class="info-card"><h3>IABAC Certified Data Scientist</h3></article>
      </div></section>
      <div class="button-row"><a class="button" href="${resumeUrl}" target="_blank" rel="noopener noreferrer">View Resume PDF ↗</a><a class="button primary" href="${resumeUrl}" download="Jitendra-Dewangan-Resume.pdf">Download PDF ↓</a><button class="button" type="button" data-copy-email>Copy Email</button></div>`;
  }

  function renderMachineLearning() {
    return `${sectionHeader("Machine learning projects", "PROJECTS / MACHINE_LEARNING_PROJECTS.MD")}
      <div class="project-grid">${mlProjects.map(item => `<article class="project-card"><span class="project-category">MACHINE LEARNING</span><h3>${escapeHtml(item.name)}</h3>${item.description ? `<p>${escapeHtml(item.description)}</p>` : ""}${item.repoUrl ? `<div class="card-links"><a class="text-link" href="${escapeHtml(item.repoUrl)}" target="_blank" rel="noopener noreferrer">Repository ↗</a></div>` : ""}</article>`).join("")}</div>`;
  }

  function renderLlmEngineering() {
    return `${sectionHeader("LLM engineering notes", "RESEARCH / LLM_ENGINEERING.MD", "A concise checklist for designing language-model features with measurable behavior.")}
      <div class="detail-grid">
        <article class="info-card"><h3>Grounding & retrieval</h3><p>Keep source data and citations visible; test retrieval separately from generation; make unsupported answers easier to detect.</p></article>
        <article class="info-card"><h3>Evaluation</h3><p>Use representative questions and expected evidence. Track answer relevance, groundedness, retrieval quality, and failure cases rather than relying only on subjective impressions.</p></article>
        <article class="info-card"><h3>Reliability</h3><p>Set explicit timeouts, validate tool inputs, handle provider errors, and provide useful fallback messaging without implying success.</p></article>
        <article class="info-card"><h3>Product design</h3><p>Communicate uncertainty and data freshness. Keep user goals and review workflows central to the experience.</p></article>
      </div>`;
  }

  function renderProductIdeas() {
    return `${sectionHeader("AI product ideas", "RESEARCH / AI_PRODUCT_IDEAS.MD", "Problem-first prompts for exploring useful AI products. These are directions to validate, not claims of built products.")}
      <div class="detail-grid">
        <article class="info-card"><h3>Make information easier to inspect</h3><p>How might AI help people understand complex content while retaining direct access to evidence and sources?</p></article>
        <article class="info-card"><h3>Keep people in control</h3><p>Where should an AI workflow suggest, explain, or prepare an action—and where should it ask for confirmation?</p></article>
        <article class="info-card"><h3>Measure product quality</h3><p>Define successful user outcomes and failure costs before selecting a model or building an agent.</p></article>
        <article class="info-card"><h3>Design for graceful failure</h3><p>Make uncertainty, unavailable data, and service errors understandable and recoverable.</p></article>
      </div>`;
  }

  function renderRequirements() {
    return `${sectionHeader("Requirements", "JITENDRA-PORTFOLIO / REQUIREMENTS.TXT", "This portfolio is a static site and does not require a package installation.")}
      <div class="code-card"><span class="line"><span class="code-line-no">1</span>Static HTML, CSS, and JavaScript</span><span class="line"><span class="code-line-no">2</span>No runtime dependencies</span><span class="line"><span class="code-line-no">3</span>Optional: static hosting provider</span></div>`;
  }

  function renderPackage() {
    const data = { name: "jitendra-portfolio", private: true, description: "Dependency-free static portfolio workspace", scripts: { serve: "Use any static file server or hosting provider" }, dependencies: {} };
    return `${sectionHeader("Package configuration", "JITENDRA-PORTFOLIO / PACKAGE.JSON", "Virtual project metadata; this site does not use a package manager or install dependencies.")}
      ${renderCode(JSON.stringify(data, null, 2), "JSON")}`;
  }

  function renderCode(source, language) {
    return `<div class="code-card" aria-label="${escapeHtml(language)} source code">${source.split("\n").map((line, index) => `<span class="line"><span class="code-line-no">${index + 1}</span>${highlightCode(line, language)}</span>`).join("")}</div>`;
  }

  function highlightCode(line, language) {
    const pattern = language === "JSON" ? /("(?:\\.|[^"\\])*"(?=\s*:)|"(?:\\.|[^"\\])*"|\b(?:true|false|null)\b|-?\b\d+(?:\.\d+)?\b)/g : /(#.*$|"[^"]*"|'[^']*'|\b(?:class|def|return|import|from|const|let|function|export|default|if|else|true|false|null)\b)/g;
    let result = "";
    let last = 0;
    for (const match of line.matchAll(pattern)) {
      result += escapeHtml(line.slice(last, match.index));
      const token = match[0];
      let cls = "code-value";
      if (token.startsWith("#")) cls = "code-comment";
      else if (token.startsWith('"') || token.startsWith("'")) cls = language === "JSON" && /^\s*:/.test(line.slice(match.index + token.length)) ? "code-function" : "code-string";
      else if (/^(true|false|null)$/.test(token)) cls = "code-keyword";
      result += `<span class="${cls}">${escapeHtml(token)}</span>`;
      last = match.index + token.length;
    }
    return result + escapeHtml(line.slice(last));
  }

  function renderContactJson() {
    return JSON.stringify({
      name: "Jitendra Dewangan",
      role: "AI Product Engineer",
      location: "Bengaluru, Karnataka, India",
      github: githubUrl,
      linkedin: linkedinUrl,
      email: emailAddress
    }, null, 2);
  }

  function renderJsonFile(id) {
    if (id === "skills") {
      return JSON.stringify(skills.reduce((result, skill) => {
        (result[skill.category] ||= []).push(skill.name);
        return result;
      }, {}), null, 2);
    }
    return renderContactJson();
  }

  function renderRepositories() {
    if (state.repoState === "loading") return `<div class="empty-state" role="status">Loading public GitHub repositories…</div>`;
    if (state.repos.length) return `<div class="repo-grid">${state.repos.slice(0, 12).map(renderRepoCard).join("")}</div>`;
    const reason = state.repoState === "error" ? `GitHub repositories could not be loaded${state.repoError ? `: ${escapeHtml(state.repoError)}` : "."}` : "No public repositories were returned.";
    return `<div class="empty-state">${reason}<br><a class="text-link" href="${githubUrl}" target="_blank" rel="noopener noreferrer">Open GitHub profile ↗</a></div>`;
  }

  function renderRepoCard(repo) {
    const updated = repo.updated_at ? new Date(repo.updated_at).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }) : "";
    return `<article class="repo-card"><h3><a href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(repo.name)} ↗</a></h3><p>${escapeHtml(repo.description || "No description provided.")}</p><div class="repo-meta"><span>${escapeHtml(repo.language || "Language not specified")}</span><span>★ ${Number.isFinite(repo.stargazers_count) ? repo.stargazers_count : 0}</span>${updated ? `<span>Updated ${escapeHtml(updated)}</span>` : ""}</div></article>`;
  }

  function findRepo(project) {
    const target = project.id.replaceAll("-", "").toLowerCase();
    return state.repos.find(repo => repo.name.replace(/[^a-z0-9]/gi, "").toLowerCase() === target);
  }

  async function loadRepositories() {
    try {
      const response = await fetch("https://api.github.com/users/JitendraDew009/repos?per_page=100&sort=updated", {
        headers: { Accept: "application/vnd.github+json" }
      });
      if (!response.ok) throw new Error(`GitHub returned HTTP ${response.status}`);
      const data = await response.json();
      if (!Array.isArray(data)) throw new Error("Unexpected repository response");
      state.repos = data.filter(repo => repo && !repo.fork && typeof repo.name === "string" && typeof repo.html_url === "string")
        .sort((a, b) => new Date(b.updated_at || 0) - new Date(a.updated_at || 0));
      state.repoState = "loaded";
    } catch (error) {
      state.repoState = "error";
      state.repoError = error instanceof Error ? error.message : "request failed";
    }
    if (state.activeFile === "readme" || state.activeFile === "resume" || state.activeFile === "machine-learning" || state.activeFile === "projects" || projects.some(project => project.id === state.activeFile)) {
      renderFile(state.activeFile);
    }
  }

  function renderSearchPage() {
    return `${sectionHeader("Search the portfolio", "WORKSPACE / SEARCH", "Search files, project briefs, skill categories, and page descriptions.")}
      <label class="sr-only" for="globalSearchInput">Search the portfolio</label><input class="search-input" id="globalSearchInput" type="search" value="${escapeHtml(state.searchQuery)}" placeholder="Try “RAG”, “Python”, or “weather”">
      <div class="search-results" id="searchResults">${searchResultsMarkup(state.searchQuery)}</div>`;
  }

  function searchIndex() {
    const fileEntries = [...filesById.values()].map(file => ({ id: file.id, title: file.name, detail: file.folder || "workspace root", text: `${file.name} ${file.folder} ${file.id}` }));
    const projectEntries = projects.map(project => ({ id: project.id, title: project.name, detail: project.category, text: `${project.name} ${project.description} ${project.keywords} ${project.stack.join(" ")}` }));
    const skillEntries = skills.map(skill => ({ id: "skills-dashboard", title: skill.name, detail: skill.category, text: `${skill.name} ${skill.category}` }));
    const pageEntries = [
      { id: "about", title: "About Jitendra", text: "professional introduction career goals interests engineering philosophy learning priorities practical AI machine learning software" },
      { id: "career-goals", title: "Career goals", text: "AI product engineer problem discovery prototyping evaluation iteration LLM retrieval agent workflows APIs reliable APIs user-centered software" },
      { id: "experience", title: "Experience and education", text: "AI Engineering Training DataMites Bangalore AI Data Science Internship Master of Computer Applications MCA dates institution projects" },
      { id: "resume", title: "Resume", text: "professional summary technical skills selected projects experience education certifications GitHub LinkedIn" },
      { id: "machine-learning", title: "Machine learning projects", text: mlProjects.map(item => `${item.name} ${item.keywords}`).join(" ") },
      { id: "llm-engineering", title: "LLM engineering notes", text: "retrieval grounded citations evaluation reliability timeout provider error product design uncertainty" },
      { id: "ai-product-ideas", title: "AI product ideas", text: "useful user problems evidence product quality graceful failure people control" },
    ].map(entry => ({ detail: "portfolio content", ...entry }));
    return [...projectEntries, ...skillEntries, ...pageEntries, ...fileEntries];
  }

  function searchResultsMarkup(query) {
    const normalized = query.trim().toLowerCase();
    const matches = normalized ? searchIndex().filter(item => item.text.toLowerCase().includes(normalized)).slice(0, 40) : [];
    if (!normalized) return `<div class="empty-state">Start typing to search project briefs, skills, and workspace files.</div>`;
    if (!matches.length) return `<div class="empty-state">No results found for “${escapeHtml(query)}”.</div>`;
    return matches.map(item => `<button class="search-result" type="button" data-open="${escapeHtml(item.id)}">${fileIcon(filesById.get(item.id)?.name || "txt")}<span>${escapeHtml(item.title)}<small>${escapeHtml(item.detail)}</small></span></button>`).join("");
  }

  function renderSidebarSearch() {
    $("#sidebarTitle").textContent = "SEARCH";
    sidebarBody.innerHTML = `<label class="sr-only" for="sidebarSearchInput">Search portfolio</label><input class="search-input" id="sidebarSearchInput" type="search" placeholder="Search portfolio…" value="${escapeHtml(state.searchQuery)}"><div class="search-results" id="sidebarSearchResults">${searchResultsMarkup(state.searchQuery)}</div>`;
  }

  function renderPanel(panel) {
    state.panel = panel;
    if (panel === "search") {
      renderSidebarSearch();
      openFile("search");
      $("#globalSearchInput")?.focus();
    } else {
      renderExplorer();
      const idByPanel = { explorer: state.activeFile, projects: "projects", skills: "skills-dashboard", experience: "experience", contact: "contact", resume: "resume" };
      if (idByPanel[panel]) openFile(idByPanel[panel]);
    }
    document.querySelectorAll(".activity-button[data-panel]").forEach(button => {
      button.classList.toggle("active", button.dataset.panel === panel);
      button.setAttribute("aria-pressed", String(button.dataset.panel === panel));
    });
  }

  function toast(message) {
    const node = document.createElement("div");
    node.className = "toast";
    node.setAttribute("role", "status");
    node.textContent = message;
    $("#toastRegion").append(node);
    window.setTimeout(() => node.remove(), 3600);
  }

  function toggleTheme() {
    const light = document.body.classList.toggle("light-theme");
    $(".theme-toggle").setAttribute("aria-label", light ? "Switch to dark theme" : "Switch to light theme");
    try {
      localStorage.setItem("portfolio-theme", light ? "light" : "dark");
    } catch (error) {
      toast("Theme changed, but this browser could not save the preference.");
    }
  }

  function restoreTheme() {
    try {
      if (localStorage.getItem("portfolio-theme") === "light") {
        document.body.classList.add("light-theme");
        $(".theme-toggle").setAttribute("aria-label", "Switch to dark theme");
      }
    } catch {
      // The default dark theme remains available when storage is disabled.
    }
  }

  const commands = [
    { label: "Go to Home", detail: "README.md", run: () => openFile("readme") },
    { label: "Open Projects", detail: "Browse project briefs", run: () => renderPanel("projects") },
    { label: "Open Skills", detail: "Skills explorer", run: () => renderPanel("skills") },
    { label: "Open Experience", detail: "Training & education", run: () => renderPanel("experience") },
    { label: "Open Resume", detail: "Resume summary", run: () => renderPanel("resume") },
    { label: "Open Contact", detail: "Contact form", run: () => renderPanel("contact") },
    { label: "Toggle Theme", detail: "Switch light / dark", run: toggleTheme },
    { label: "Open GitHub", detail: "github.com/JitendraDew009", run: () => window.open(githubUrl, "_blank", "noopener,noreferrer") },
    { label: "Open LinkedIn", detail: "LinkedIn profile", run: () => window.open(linkedinUrl, "_blank", "noopener,noreferrer") },
    ...[...filesById.values()].map(file => ({ label: `Open ${file.name}`, detail: file.folder || "workspace root", run: () => openFile(file.id), fileId: file.id }))
  ];

  function openPalette(query = "") {
    paletteBackdrop.hidden = false;
    paletteInput.value = query;
    state.paletteIndex = 0;
    renderPalette();
    paletteInput.focus();
  }

  function closePalette() {
    paletteBackdrop.hidden = true;
    $(".command-trigger").focus();
  }

  function renderPalette() {
    const query = paletteInput.value.trim().toLowerCase();
    state.paletteItems = commands.filter(command => `${command.label} ${command.detail}`.toLowerCase().includes(query));
    state.paletteIndex = Math.min(state.paletteIndex, Math.max(state.paletteItems.length - 1, 0));
    paletteResults.innerHTML = state.paletteItems.length ? state.paletteItems.map((command, index) => `<button class="palette-option" type="button" role="option" aria-selected="${index === state.paletteIndex}" data-command-index="${index}"><span>${command.fileId ? fileIcon(filesById.get(command.fileId).name) : "⌘"}</span><span>${escapeHtml(command.label)}</span><small>${escapeHtml(command.detail)}</small></button>`).join("") : `<div class="palette-empty">No matching commands.</div>`;
  }

  function executePaletteCommand(index) {
    const command = state.paletteItems[index];
    if (!command) return;
    closePalette();
    command.run();
  }

  const terminalHelp = "Available commands: help, about, whoami, skills, projects, experience, contact, github, linkedin, resume, clear, date";
  function writeTerminal(command, response) {
    const line = document.createElement("div");
    line.className = "terminal-line terminal-command";
    line.textContent = command;
    terminalOutput.append(line);
    if (response) {
      const output = document.createElement("div");
      output.className = "terminal-line terminal-response";
      output.textContent = response;
      terminalOutput.append(output);
    }
    $("#terminalBody").scrollTop = $("#terminalBody").scrollHeight;
  }

  function terminalCommand(raw) {
    const command = raw.trim().toLowerCase();
    const actions = {
      help: () => terminalHelp,
      whoami: () => "Jitendra Dewangan\nAI Product Engineer\nMachine Learning | LLMs | AI Applications",
      about: () => "Jitendra Dewangan (JABAAZ) — AI Product Engineer in India.\nFocused on useful AI products, machine learning, LLMs, and software engineering.",
      skills: () => skills.map(skill => skill.name).join(" · "),
      projects: () => `Available project briefs:\n${projects.map((project, index) => `${index + 1}. ${project.name}`).join("\n")}\nOpening the project explorer…`,
      experience: () => "Training: AI Engineering Training, DataMites, Bangalore (details to verify).\nInternship and MCA details are placeholders pending verified dates and information.",
      contact: () => "Open the Contact panel to view public contact details.\nLinkedIn: " + linkedinUrl,
      github: () => `GitHub: ${githubUrl}`,
      linkedin: () => `LinkedIn: ${linkedinUrl}`,
      resume: () => "Opening the supplied résumé PDF and portfolio summary…",
      date: () => new Date().toLocaleString(),
      clear: () => null
    };
    if (!command) return;
    writeTerminal(raw, Object.prototype.hasOwnProperty.call(actions, command) ? actions[command]() : `Command not found: ${raw}\nType "help" to see available portfolio commands.`);
    if (command === "clear") terminalOutput.replaceChildren();
    if (command === "projects") renderPanel("projects");
    if (command === "resume") toast("Open the Resume panel to view the PDF and summary.");
    if (command === "contact") renderPanel("contact");
    if (command === "resume") renderPanel("resume");
  }

  function switchProjectFilter(filter) {
    state.projectFilter = filter;
    editorContent.innerHTML = renderProjects();
  }

  function switchSkillFilter(filter) {
    state.skillFilter = filter;
    editorContent.innerHTML = renderSkills();
  }

  document.addEventListener("click", event => {
    const target = event.target instanceof Element ? event.target : null;
    if (!target) return;
    const open = target.closest("[data-open]");
    if (open) {
      openFile(open.dataset.open);
      return;
    }
    const panel = target.closest("[data-panel]");
    if (panel) {
      renderPanel(panel.dataset.panel);
      return;
    }
    const tabClose = target.closest("[data-close]");
    if (tabClose) {
      closeTab(tabClose.dataset.close);
      return;
    }
    const tab = target.closest("[data-tab]");
    if (tab) {
      openFile(tab.dataset.tab);
      return;
    }
    const folder = target.closest("[data-folder]");
    if (folder) {
      const isExpanded = folder.getAttribute("aria-expanded") === "true";
      folder.setAttribute("aria-expanded", String(!isExpanded));
      sidebarBody.querySelector(`[data-children="${CSS.escape(folder.dataset.folder)}"]`).hidden = isExpanded;
      return;
    }
    if (target.closest("[data-toggle-root]")) {
      const root = target.closest("[data-toggle-root]");
      const isExpanded = root.getAttribute("aria-expanded") === "true";
      root.setAttribute("aria-expanded", String(!isExpanded));
      sidebarBody.querySelectorAll(".tree-group, .tree-file").forEach(node => { node.hidden = isExpanded; });
      return;
    }
    const projectFilter = target.closest("[data-project-filter]");
    if (projectFilter) {
      switchProjectFilter(projectFilter.dataset.projectFilter);
      return;
    }
    const skillFilter = target.closest("[data-skill-filter]");
    if (skillFilter) {
      switchSkillFilter(skillFilter.dataset.skillFilter);
      return;
    }
    const paletteOption = target.closest("[data-command-index]");
    if (paletteOption) {
      executePaletteCommand(Number(paletteOption.dataset.commandIndex));
      return;
    }
    if (target.closest(".command-trigger")) {
      openPalette();
      return;
    }
    if (target.closest(".theme-toggle")) {
      toggleTheme();
      return;
    }
    if (target.closest(".terminal-collapse")) {
      const terminal = $(".terminal");
      const collapsed = terminal.classList.toggle("collapsed");
      target.closest(".terminal-collapse").setAttribute("aria-expanded", String(!collapsed));
      target.closest(".terminal-collapse").setAttribute("aria-label", collapsed ? "Expand terminal" : "Collapse terminal");
      target.closest(".terminal-collapse").textContent = collapsed ? "⌃" : "⌄";
      return;
    }
    if (target.closest(".terminal-clear")) {
      terminalOutput.replaceChildren();
      $("#terminalInput").focus();
      return;
    }
    if (target.closest(".mobile-menu")) {
      const sidebar = $(".sidebar");
      const openState = sidebar.classList.toggle("mobile-open");
      target.closest(".mobile-menu").setAttribute("aria-expanded", String(openState));
      return;
    }
    if (target.closest(".sidebar-close")) {
      $(".sidebar").classList.remove("mobile-open");
      $(".mobile-menu").setAttribute("aria-expanded", "false");
      return;
    }
    if (target.closest("[data-resume-notice]")) {
      toast("No résumé PDF has been uploaded yet; no download was started.");
      return;
    }
    if (target.closest("[data-copy-email]")) {
      if (!navigator.clipboard?.writeText) {
        toast(`Email: ${emailAddress}`);
        return;
      }
      navigator.clipboard.writeText(emailAddress)
        .then(() => toast("Email address copied to clipboard."))
        .catch(() => toast(`Clipboard access was unavailable. Email: ${emailAddress}`));
      return;
    }
    if (target.closest("[data-copy-profile]")) {
      if (!navigator.clipboard?.writeText) {
        toast("Clipboard access is unavailable in this browser. Select and copy the code manually.");
        return;
      }
      navigator.clipboard.writeText(aboutSource())
        .then(() => toast("Profile code copied to clipboard."))
        .catch(() => toast("Clipboard access was unavailable. Select and copy the code manually."));
    }
  });

  document.addEventListener("input", event => {
    const target = event.target;
    if (target.id === "paletteInput") renderPalette();
    if (target.id === "globalSearchInput") {
      state.searchQuery = target.value;
      $("#searchResults").innerHTML = searchResultsMarkup(state.searchQuery);
    }
    if (target.id === "sidebarSearchInput") {
      state.searchQuery = target.value;
      $("#sidebarSearchResults").innerHTML = searchResultsMarkup(state.searchQuery);
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !paletteBackdrop.hidden) {
      closePalette();
      return;
    }
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.key.toLowerCase() === "p") {
      event.preventDefault();
      openPalette();
      return;
    }
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "p") {
      event.preventDefault();
      openPalette();
      return;
    }
    if (!paletteBackdrop.hidden && state.paletteItems.length) {
      if (event.key === "ArrowDown" || event.key === "ArrowUp") {
        event.preventDefault();
        const direction = event.key === "ArrowDown" ? 1 : -1;
        state.paletteIndex = (state.paletteIndex + direction + state.paletteItems.length) % state.paletteItems.length;
        renderPalette();
      } else if (event.key === "Enter") {
        event.preventDefault();
        executePaletteCommand(state.paletteIndex);
      }
      return;
    }
    if (event.target instanceof Element && event.target.closest("[data-tab]") && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openFile(event.target.closest("[data-tab]").dataset.tab);
    }
  });

  $("#terminalForm").addEventListener("submit", event => {
    event.preventDefault();
    const input = $("#terminalInput");
    const value = input.value;
    const normalized = value.trim();
    if (normalized) {
      state.terminalHistory.push(value);
      state.historyIndex = state.terminalHistory.length;
      terminalCommand(value);
    }
    input.value = "";
  });

  $("#terminalInput").addEventListener("keydown", event => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (state.historyIndex > 0) state.historyIndex -= 1;
      event.currentTarget.value = state.terminalHistory[state.historyIndex] || "";
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      state.historyIndex = Math.min(state.historyIndex + 1, state.terminalHistory.length);
      event.currentTarget.value = state.terminalHistory[state.historyIndex] || "";
    }
  });

  $("#copyrightYear").textContent = new Date().getFullYear();
  restoreTheme();
  renderExplorer();
  renderTabs();
  renderFile("readme");
  updateStatus("readme");
  writeTerminal("help", terminalHelp);
  writeTerminal("whoami", "Jitendra Dewangan\nAI Product Engineer\nMachine Learning | LLMs | AI Applications");
  loadRepositories();
})();
