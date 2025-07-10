import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "HARISHWA D REDDY",
  initials: "HDR",
  url: "https://harishwacom",
  location: "Bangalore, India",
  locationLink: "",
  description:
    " Computer Science graduate passionate about building real-world AI systems. I work on machine learning, generative models, and intelligent systems with a focus on creativity, impact, and continuous learning.",
  summary:
    "In 2021, [I began my academic journey in Artificial Intelligence](/#education), focusing on advanced topics in machine learning, data science, and emerging technologies. Throughout my studies, [I have engaged in numerous AI projects](/#projects), [participated in competitive challenges](/#hackathons), and explored practical applications of AI to address complex problems. I am dedicated to deepening my expertise in AI and contributing to the field through continuous learning, collaboration, and innovation.",
  avatarUrl: "/pfp.jpg",
  skills: [
    "AI/ML",
    "PyTorch",
    "TensorFlow",
    "Python",
    "JavaScript",
    "Java",
    "C++",
    "MATLAB",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Apache HUDI,",
    "Postgres",
    "Docker",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "harishwadreddy@gmail.com",
    tel: "+917022277237",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://www.github.com/HARISHWA2003",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/harishwa-d-reddy",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/HARISHWA2",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:harishwadreddy@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "DataCouch",
      href: "https://datacouch.io/",
      badges: [],
      location: "OnSite",
      title: "Technical Intern",
      logoUrl: "/datacouch.png",
      start: "Nov 2023",
      end: "Nov 2024",
      description:
        "Developed and optimized RAG-based language models using TensorFlow and PyTorch, improving inference efficiency by 13%. \n Created enterprise chatbot leveraging LLaMA and RAG, automating over 1000 interactions/month.\n Built predictive models for real-world data using Azure ML, AI Studio, and Databricks with 80-85% accuracy. \n  Engineered end-to-end ML pipelines with reduced latency and efficient deployment using MLOps principles.",
    },
    {
      company: "Bennett University",
      badges: [],
      href: "https://www.bennett.edu.in/",
      location: "OnSite",
      title: "Research Assistant",
      logoUrl: "/bennett.jpg",
      start: "Jan 2023",
      end: "May 2023",
      description:
        "Designed a high-performance data loader for CNNs, reducing training time by 8%. \n Implemented a single-image prediction module using CNNs, achieving a 15% improvement in top-5 accuracy on ImageNet",
    },
  ],
  education: [
    {
      school: "National Taiwan University",
      href: "https://www.ntu.edu.tw/english/",
      degree: "Semester Exchange",
      logoUrl: "/NTUlogo.jpg",
      start: "Feb 25",
      end: "Jun 25",
      description:
        "Studied advanced topics in AI, machine learning, and data systems through rigorous coursework and practical assignments.\nCollaborated with international peers on team-based projects, enhancing both technical and cross-cultural skills.\nEngaged with a new culture, built lasting friendships, and broadened my perspective beyond the classroom.",
      // gpa: "p",
    },
    {
      school: "Bennett Universtiy",
      href: "https://www.bennett.edu.in/",
      degree: "Bachelors of Technology Artificial Intelligence (B.Tech)",
      logoUrl: "/bennett.jpg",
      start: "2021",
      end: "2025",
      description:
        "Completed a Bachelor’s degree in Computer Science with a strong focus on AI, machine learning, and systems programming.\nGraduated with a GPA of 8.89/10, consistently ranking among the top performers in core technical courses.\nActively participated in projects, research work, and hackathons that strengthened both theoretical knowledge and practical skills.",
      // gpa: "8.89",
    },
  ],
  projects: [
    {
      title: "Legis",
      href: "",
      dates: "Oct 2023 - Nov 2023",
      active: true,
      description:
        "Designed and developed a website using NextJS that allows lawyers to input their details, enabling AI to generate personalized landing pages. Built a custom Large Language Model (LLM) based on the Mistral model, deployed and accessed via FastAPI. Utilized Firestore for efficient storage and management of user data, and implemented secure authentication services using Firebase Auth.",
      technologies: [
        "Next.js",
        "Typescript",
        "FastAPI",
        "HuggingFace",
        "Mistral",
        "Firebase Auth",
        "Firestore",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "Captify",
      href: "",
      dates: "Jan 2023 - Mar 2023",
      active: true,
      description:
        "Developed a website using SvelteKit that enables content creators to generate real-time captions for their videos and create thumbnails or images for their posts. Leveraged WhisperAI and MidJourney API to produce captions and images, respectively. Utilized AWS Lambda for storage and Supabase for authentication services.",
      technologies: [
        "SvelteKit",
        "Fast API",
        "WhisperAI",
        "MidJourney API",
        "AWS Lambda",
        "Supabase",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://magicui.design",
        //   icon: <Icons.globe className="size-3" />,
        // },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
  ],
  hackathons: [
    {
      title: "Industrial Showcase",
      dates: "",
      location: "Delhi, India",
      description:
        "Project STONKS was chosen for the Industrial Project Showcase, an event featuring the top 100 projects from thousands of submissions by 2nd and 3rd year Computer Science and Engineering students. \n The showcase attracted esteemed industrialists who evaluated projects across various specializations",
      image: "",
      mlh: "",
      links: [],
    },
    {
      title: "Fish Hunt",
      dates: "",
      location: "Delhi, India",
      description:
        "Winner of Fish Hunt Capture The Flag (CTF) and cryptography tournament. Hosted by Association for Computing Machinery (ACM)",
      image: "",
      mlh: "",
      links: [],
    },
  ],
} as const;
