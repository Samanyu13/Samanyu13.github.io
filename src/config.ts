export const siteConfig = {
  name: "Samanyu A Saji",
  title: "R&D Engineer, Android",
  description: "Portfolio website of Samanyu A Saji",
  accentColor: "#1d4ed8",
  social: {
    email: "samanyusaji18@gmail.com",
    linkedin: "https://linkedin.com/in/samanyu13",
    github: "https://github.com/Samanyu13",
  },
  aboutMe:
    "Android Engineer with 3+ years of experience building large-scale native Android systems and user-facing features for flagship Samsung devices. " +
    "Experienced in Kotlin and Java with strong expertise in Android frameworks, SystemUI, Jetpack components, and modern architectural patterns including MVVM and MVC. " +
    "Currently working at Samsung Research as an R&D Engineer, contributing to core platform development across SystemUI, Android XR, Samsung DeX, and AI-powered NowBrief. "+
    "Proven experience in designing modular architectures, implementing Runtime Resource Overlays, building notification systems, and optimizing UI performance for low-latency and memory efficiency. "+
    "Strong understanding of Android internals, lifecycle management, multithreading with coroutines, and system-level feature integration. " +
    "Comfortable working in large codebases, collaborating cross-functionally with global teams, and owning features end-to-end from design to production.",
  skills: ["Kotlin", "Java", "Android", "Jetpack Compose", "C++", "Python"],
  projects: [
    {
      name: "Android Starters",
      description:
        "A growing, curated collection of beginner-friendly Android projects designed to help developers learn modern Android development by exploring simple real-world examples.",
      link: "https://github.com/Samanyu13/android-starters",
      skills: ["Kotlin", "Jetpack Compose", "Auth", "Navigation", "DB", "WorkManager", "Retrofit"],
    },
    {
      name: "Resource Optimization Engine for KSRTC using Machine Learning",
      description:
        "An app-driven model for KSRTC that integrates real-time bus tracking and seat booking with machine learning to predict passenger patterns, optimize fuel consumption, and increase profitability.",
      link: "https://github.com/Samanyu13/I-Love-KSRTC",
      skills: ["Flutter", "WebSockets"],
    },
    {
      name: "KSRTC App Backend",
      description:
        "The model backend framework for the above mentioned KSRTC app-driven model.",
      link: "https://github.com/Samanyu13/KSRTC-Backend",
      skills: ["Node.js", "Sequelize", "ExpressJS", "Machine Learning"],
    },
        {
      name: "Karma",
      description:
        "An Information Management Framework for colleges, delivering a RESTful API service to centralize educational data and enhance institutional efficiency.",
      link: "https://github.com/ccfcet/karma",
      skills: ["Node.js", "Sequelize", "Mocha-Chai"],
    },
  ],
  publications: [
  {
    title: "CuraFrame: a patient-centric secure and privacy preserving medical framework with zero-leak using blockchain",
    description: "Proposes Curaframe, a secure record-keeping framework specifically crafted for Electronic Health Records (EHRs). " + 
    "A consensus algorithm, GNG-dBFT, was proposed with a 9% lower consensus delay and 19% throughput increase compared to the state-of-the-art schemes. " + 
    "Also introduced a new lightweight authentication mechanism using zero-knowledge proof to ensure privacy-preserving access control",
    publisher: "Springer Nature / Peer-to-Peer Networking and Applications",
    year: '2025',
    link: "https://link.springer.com/article/10.1007/s12083-025-02061-1",
    tags: ["Blockchain", "EHR", "Security"],
  },
    {
    title: "Fast Implementation of AES Modes Based on Turing Architecture",
    description: "Evaluates the performance of AES encryption modes (ECB, CBC, CTR) across NVIDIA’s Turing and Pascal GPU architectures, " + 
    "demonstrating that parallelizable modes on Turing-based hardware, such as the GTX 1650, significantly maximize cryptographic throughput.",
    publisher: "Springer Nature /  Advancements in Interdisciplinary Research",
    year: '2022',
    link: "https://link.springer.com/chapter/10.1007/978-3-031-23724-9_44",
    tags: ["AES", "Cryptography", "GPU"],
  },
],
  experience: [
    {
      company: "Samsung Research Institute, Noida",
      title: "R&D Engineer, Android",
      dateRange: "Jauly 2022 - Present",
      bullets: [
        "Collaborated with Google and Samsung HQ in defining the SystemUI framework for Android XR, OneUI.",
        "Led the end-to-end implementation of the Notifications and App notification settings for Android XR",
        "Built NowBrief Widget settings and the Jetpack Compose migration of Ui elements",
        "PoC for Classic DeX taskbar features used across flagship Samsung devices globally",
      ],
    },
    {
      company: "Indian Institute of Technology, Jodhpur",
      title: "Teaching Assistant",
      dateRange: "September 2020 - March 2022",
      bullets: [
        "Courses: Introduction to Computer Science, Machine Learning",
        "Led lab sessions, created assignments, and evaluated student submissions.",
      ],
    },
    {
      company: "Indian Institute of Technology, Jodhpur",
      title: "Webmaster",
      dateRange: "Aug 2021 - May 2022",
      bullets: [
        "Created and maintained official IITJ student chapter website",
        "Modeled and built the website for vehicular networks research lab in IITJ",
      ],
    },
    {
      company: "QuEST Global, Technopark, Trivandrum",
      title: "Summer Intern",
      dateRange: "July 2019 - August 2019",
      bullets: [
        "Set up a machine learning project for autonomously tagging stack-overflow questions"
      ]
    },
        {
      company: "Central Computing Facility, College of Engineering ",
      title: "Software Intern",
      dateRange: "June 2018 - August 2018",
      bullets: [
        "Improved CampusSoft, the software that manages the day to day activities of the CET",
        "Worked on the front end of college website using React javascript library"
      ]
    }
  ],
  education: [
    {
      school: "Indian Institute of Technology, Jodhpur",
      degree: "Master of Technology (M.Tech) in Computer Science",
      dateRange: "2020 - 2022",
      achievements: [
        "Graduated with 8.05 GPA",
        "Majored in security, privacy preservation and blockchain",
        "First Runner Up: IS3, IIT Jodhpur's ACM Student Chapter Ideathon, 2022",
      ],
    },
    {
      school: "College of Engineering, Trivandrum",
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
      dateRange: "2016 - 2020",
      achievements: [
        "Graduated with 9.05 GPA",
        "Collaboration with KSRTC aimed at improving resource allocation of public transport",
      ],
    },
  ],
};
