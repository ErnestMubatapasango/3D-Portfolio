import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    ernest_logo,
    mohcc,
    zpc,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    figma,
    // typescript,
    // mongodb,
    // docker,
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    // threejs,
    carrent,
    jobit,
    tripguide,
    medical,
    rest,
    electron
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "Graphics Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "IT Intern",
      company_name: "Zimbabwe Power Company",
      icon: zpc,
      iconBg: "#fff", //#383E56
      date: "January 2020 - July 2021",
      points: [
        "Business application support.",
        "Systems maintenance and management.",
        "Networking and security.",
        "Database management.",
      ],
    },
    {
      title: "IT Support Technician",
      company_name: "Ministry of Health and Child Care",
      icon: mohcc,
      iconBg: "#383E56", //E6DEDD
      date: "Jan 2022 - April 2023",
      points: [
        "Training and Technical support for various practice specific software and firm proprietary software.",
        "Recording and triaging service requests to determine priority, assignment and routing.",
        "IT services and systems management as well as maintenance .",
        "Hardware and software repair, patching and support.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Ernest Dev",
      icon: ernest_logo,
      iconBg: "#ffff",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Enerst proved me wrong.",
      name: "Nancy Paguwa",
      designation: "Private Tutor",
      company: "Nacata",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Enerst does.",
      name: "Solomon Muyambo",
      designation: "COO",
      company: "Delta FX",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Enerst optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Thomas",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Medical Centre",
      description:
        "Landing page for a medical centre that offers comprehensive and compassionate healthcare services to patients. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: medical,
      source_code_link: "https://github.com/",
      live_app_link: "https://entumbane-medical-centre.web.app/"
    },
    {
      name: "Restaurant",
      description:
        `This is a landing page for a restaurant that offers a seamless dining experience. Book a table with ease, explore the menu and enjoy.`,
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "styled components",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: rest,
      source_code_link: "https://github.com/",
      live_app_link: "https://valtru-restaurant.web.app/"
    },
    {
      name: "POS Web App",
      description:
        "A comprehensive Point of Sale application that manages inventory, process PaymentResponse, and enhances business experience effortlessly",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "electronjs",
          color: "blue-text-gradient",
        },
      ],
      image: electron,
      source_code_link: "https://github.com/",
      live_app_link: "https://github.com/ErnestMubatapasango/EasyRetail_App"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };