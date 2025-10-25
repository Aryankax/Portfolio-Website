export const profile = {
  name: "Aryan Kacker",
  role: "Software Engineer",
  email: "kackeraryan@gmail.com",
  phone: "+91-9936260102",
  location: "India",
  education: {
    school: "SRM Institute of Science and Technology, Chennai",
    degree: "Bachelor of Technology in Computer Science",
    cgpa: "9.05/10",
    duration: "Sep 2022 – May 2026",
  },
  links: {
    linkedin: "https://www.linkedin.com/in/aryan-kacker/",
    github: "https://github.com/Aryankax",
    leetcode: "https://leetcode.com/u/AryanKax/",
  },
  skills: [
    "C++", "JavaScript", "SQL", "Bash", "Swift",
    "React", "Next.js", "Express", "Node.js", "SwiftUI", "JWT", "Selenium", "Socket.io",
    "AWS", "Docker", "Jenkins", "Kubernetes", "Firebase", "Xcode", "Linux CLI", "Git",
    "MongoDB", "MySQL"
  ],
};

export const experience = [
  {
    company: "Barclays",
    role: "Technology Summer Intern (BA4 Intern)",
    location: "Pune, Maharashtra",
    start: "Jun 2025",
    end: "Aug 2025",
    points: [
      "Developed and deployed feature flag management solutions using Togglz, FF4J, and Microsoft Feature Management across Java Spring Boot, .NET, and Angular applications, enabling safe feature releases and runtime toggling.",
      "Created OpenAPI specification documents and auto‑generated API interfaces in Java Spring Boot using Maven plugins, improving API consistency and reducing integration errors.",
      "Implemented Trunk‑Based Development (TBD) practices and built a CI pipeline in GitLab, streamlining workflows and accelerating feature deployment.",
      "Delivered a proof‑of‑concept adopted by Risk, Finance, and Treasury teams, introducing role‑based access control for feature toggles and improving operational efficiency."
    ],
    icon: "barclays",
  },
  {
    company: "Infosys",
    role: "iOS Application Developer Intern",
    location: "Mysore, Karnataka",
    start: "Apr 2025",
    end: "May 2025",
    points: [
      "Built a Fleet Management iOS app using SwiftUI and Firebase with MVVM, delivering 18+ features for admin, driver, and maintenance roles.",
      "Enabled real‑time trip tracking, geofence alerts, and route visibility via Apple Maps and Firebase Realtime DB.",
      "Automated 90% of manual operations with integrated vehicle inspection and inventory tracking.",
      "Implemented secure role‑based authentication using Firebase Auth and Firestore Security Rules."
    ],
    icon: "infosys",
  }
];

export const projects = [
  {
    name: "Fleetly",
    stack: "SwiftUI, Firebase, Git",
    time: "Apr 2025 – May 2025",
    summary: "Fleet Management iOS app with real‑time tracking, geofence alerts, role‑based features, and admin/driver/maintenance workflows.",
    links: [],
  },
  {
    name: "DigiBox (Barclays Hack‑O‑Hire 2024)",
    stack: "Node.js, Express, MongoDB, AWS",
    time: "Mar 2024 – Apr 2024",
    summary: "Digital Box mobile backend enabling 1,000+ test queries via live chat and ticketing; scalable MVC with S3, API Gateway, Lambda.",
    links: [],
  },
  {
    name: "FundBoost",
    stack: "Next.js, Node.js, Express, Tailwind, MongoDB, Axios, Git",
    time: "Feb 2024 – Mar 2024",
    summary: "Full‑stack crowdfunding platform; JWT auth, role‑based access, improved modularity, and ~40% faster development.",
    links: [],
  }
];

export const contact = {
  email: "kackeraryan@gmail.com",
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/aryan-kacker/" },
    { label: "GitHub", href: "https://github.com/Aryankax" },
    { label: "LeetCode", href: "https://leetcode.com/u/AryanKax/" },
  ],
};
