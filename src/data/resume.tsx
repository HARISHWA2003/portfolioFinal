import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "HARISHWA D REDDY",
  initials: "HDR",
  url: "https://harishwacom",
  location: "Bangalore, India",
  locationLink: "",
  description:
    "Student with a passion for exploring the latest in machine learning and data science. I love building innovative projects and sharing my learning journey. Constantly curious and eager to make an impact.",
  summary:
    "In 2021, [I began my academic journey in Artificial Intelligence](/#education), focusing on advanced topics in machine learning, data science, and emerging technologies. Throughout my studies, [I have engaged in numerous AI projects](/#projects), [participated in competitive challenges](/#hackathons), and explored practical applications of AI to address complex problems. I am dedicated to deepening my expertise in AI and contributing to the field through continuous learning, collaboration, and innovation.",
  avatarUrl: "/me.png",
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
    email: "hello@example.com",
    tel: "+123456789",
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
        url: "harishwadreddy@gmail.com",
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
      end: "Present",
      description:
        "Developed and validated machine learning models, including a Retrieval-Augmented Generation (RAG) based Large Language Model (LLM), using TensorFlow and PyTorch. \n Conducted data preprocessing and analysis with Apache HUDI and PySpark, ensuring data quality and efficient handling of large datasets. \n Implemented voice cloning projects to create Indian accents for module recordings, utilizing advanced speech synthesis techniques.",
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
        "Developed a data loader to efficiently feed training and validation data into the Convolutional Neural Network (CNN) model. \n Implemented a single image prediction module, tailored to the specific requirements of our CNN architecture, which was not readily available",
    },
  ],
  education: [
    {
      school: "Will Attend Soon",
      href: "",
      degree: "",
      logoUrl: "",
      start: "",
      end: "",
    },
    {
      school: "Bennett Universtiy",
      href: "https://www.bennett.edu.in/",
      degree: "Bachelors of Technology Artificial Intelligence (B.Tech)",
      logoUrl: "/bennett.jpg",
      start: "2021",
      end: "2025",
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
