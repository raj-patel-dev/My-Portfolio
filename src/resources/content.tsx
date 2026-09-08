import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Raj",
  lastName: "Patel",
  name: "Raj Patel",
  role: "React / TypeScript / Node.js Developer",
  avatar: "/images/avatar.jpg",
  email: "praj212004@gmail.com",
  live: "Ahmedabad, Gujarat, India",
  location: "Asia/Kolkata",
  languages: ["English", "Gujarati", "Hindi"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on backend development, Java, and full-stack projects.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/raj-patel-dev",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/raj-patel21/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/avatar.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building reliable APIs and full-stack web applications</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Smart Cafe Management</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured project
        </Text>
      </Row>
    ),
    href: "/work/cafe-management",
  },
  subline: (
    <>
      I&apos;m {person.firstName}, an entry-level {person.role} based in {person.live}. I build
      backend services and full-stack apps with Java, Spring Boot, React, and Node.js.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.live}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I&apos;m an entry-level developer targeting React , TypeScript, and Node.js roles, with a six-month
        MERN-stack internship and hands-on project work using Java, Spring Boot, React.js, Node.js,
        Express.js, MongoDB, PostgreSQL, JavaScript, TypeScript, and REST APIs. I care about backend
        services, full-stack web applications, database integration, and reliable API-driven systems.
      </>
    ),
  },
  work: {
    display: true,
    title: "Internship",
    experiences: [
      {
        company: "Vedshil Careers",
        timeframe: "6 months · Sargasan, Gandhinagar",
        role: "MERN Stack Intern",
        achievements: [
          <>
            Completed a six-month practical internship focused on MERN-stack web development.
          </>,
          <>
            Gained practical experience with Node.js, Express.js, React.js, and MongoDB.
          </>,
          <>
            Worked across frontend development, backend APIs, database integration, and full-stack
            application workflows.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Kalol Institute of Technology & Research Center (KITRC)",
        description: (
          <>
            Bachelor of Engineering (B.E.) in Information Technology — Gujarat Technological
            University (GTU) · CGPA 6.86 · 2022–2026.
          </>
        ),
      },
      {
        name: "Mangaldeep Vidyalaya",
        description: <>Higher Secondary (12th), GSHSEB — 66% · 2021–2022.</>,
      },
      {
        name: "Geeta Secondary School",
        description: <>Secondary (10th), GSEB — 82% · 2019–2020.</>,
      },
    ],
  },
  coursework: {
    display: true,
    title: "Relevant coursework",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems",
      "Operating Systems",
      "Computer Networks",
      "Web Development",
      "Software Engineering",
      "Computer Architecture",
      "Java",
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "React & TypeScript",
        description: (
          <>Building responsive web interfaces with React, TypeScript, HTML5, CSS3, and Bootstrap.</>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "TypeScript", icon: "typescript" },
          { name: "Bootstrap", icon: "bootstrap" },
        ],
        images: [],
      },
      {
        title: "Java & Spring Boot",
        description: <>Building backend applications and REST APIs with Java and Spring Boot.</>,
        tags: [
          { name: "Java", icon: "java" },
          { name: "Spring Boot", icon: "spring" },
          { name: "REST API", icon: "api" },
        ],
        images: [],
      },
      {
        title: "Node.js & Express",
        description: <>Developing backend services and RESTful APIs using Node.js and Express.js.</>,
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express.js", icon: "express" },
          { name: "JavaScript", icon: "javascript" },
        ],
        images: [],
      },
      {
        title: "Databases",
        description: (
          <>Working with relational and NoSQL databases for application data and API integration.</>
        ),
        tags: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "MongoDB", icon: "mongodb" },
          { name: "MySQL", icon: "mysql" },
        ],
        images: [],
      },
      {
        title: "Authentication & APIs",
        description: (
          <>Implementing JWT and Google OAuth authentication and integrating REST APIs.</>
        ),
        tags: [
          { name: "JWT", icon: "jwt" },
          { name: "OAuth", icon: "google" },
          { name: "REST API", icon: "api" },
        ],
        images: [],
      },
      {
        title: "Development Tools",
        description: (
          <>Git, GitHub, VS Code, IntelliJ IDEA, Postman, Linux/Ubuntu, and Docker.</>
        ),
        tags: [
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
          { name: "Postman", icon: "postman" },
          { name: "Docker", icon: "docker" },
        ],
        images: [],
      },
    ],
  },
  strengths: {
    display: true,
    title: "Core strengths",
    items: [
      "Problem Solving",
      "Logical Thinking",
      "Communication",
      "Teamwork",
      "Quick Learning",
      "Debugging",
      "Troubleshooting",
      "Adaptability",
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about backend and full-stack development",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Full-stack and backend projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
