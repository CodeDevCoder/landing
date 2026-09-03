import {
  BookText,
  CodeSquare,
  GitBranchIcon,
  HomeIcon,
  UserRound,
  MessageCircle,
  BriefcaseBusiness,
  Crop,
  Pencil,
  Computer,
  Rocket,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <GitBranchIcon size={30} strokeWidth={1} />,
    src: "http://github.com/codedevcoder",
  },
  {
    id: 2,
    logo: <BriefcaseBusiness size={30} strokeWidth={1} />,
    src: "http://linkedin.com",
  },
  {
    id: 3,
    logo: <MessageCircle size={30} strokeWidth={1} />,
    src: "http://web.whatsapp.com",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Home",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "User",
    icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
    link: "/about_me",
  },
  {
    id: 3,
    title: "Book",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Target",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Desarrollador Frontend Autónomo",
    subtitle: "Proyectos Personales y Prácticas",
    description:
      "Desarrollador Front-End apasionado por transformar ideas en código limpio y experiencias interactivas. He dedicado cientos de horas a dominar herramientas modernas como React, Next.js y Tailwin CSS, construyendo interfaces desde cero de forma eficiente y accesible.",
    date: "Actual",
  },
  {
    id: 2,
    title: "Especializacion en Frameworks Modernos",
    subtitle: "Rendimiento y Optimización",
    description:
      "Profundicé en el ecosistema de Next.js(App Router), optimización de recursos , manejo de estados avazados y consumo de APIs de forma eficiente utilizando entronos ágiles como Bun.",
    date: "May 2025",
  },
  {
    id: 3,
    title: "Fundamentos del Desarrollo Web",
    subtitle: "Inicio de mi Ruta Autodidacta",
    description:
      "Comencé mi camino en la programación dominando las bases sólidas  del desarrollo de interfaces: HTML5 semántico, CSS3 avanzado (Flexbox, Grid) y la lógica de programacion con JavaScript moderno (ES6+).",
    date: "Ago 2023",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 300,
    text: "Hrs de Estudio Dedicadas",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 4,
    text: "Tecnologias Dominadas",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 1,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 3,
    text: "Años de Disciplina",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Desarrollo Front-End",
    description:
      "Creación de aplicaciones web interactivas y dinámicas utilizando Next.js, React y TypeScript. Enfoque y arquitectura de componentes limpia, modular y facil de mantener.",
  },
  {
    icon: <Pencil />,
    title: "Maquetación UI Moderna",
    description:
      "Diseño de interfaces fluidas y totalmente resposivas con Tailwind CSS. Dominio de layouts complejos (Flexbox, Grid) y esteticas premium.",
  },
  {
    icon: <Computer />,
    title: "Integración interactiva",
    description:
      "Implementacion de animacionesdinámicas, sliders fluidos y elementos interactivos que mejoran la experiencia de usuario.",
  },
  {
    icon: <Rocket />,
    title: "Entornos Ágiles y Git",
    description:
      "Uso de flujos de trabajo eficientesoptimizados con Bun, edicion directa desde terminal con lazyvim y control de versiones con Git/GitHub.",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Portfolio Web",
    image: "/portfolio-preview.png",
    urlGithub: "https://github.com/CodeDevCoder/landing",
    urlDemo: "#!",
    showDemo: false,
  },
  // {
  //   id: 2,
  //   title: "Desarrollo Web Ágil",
  //   image: "/image-2.jpg",
  //   urlGithub: "#!",
  //   urlDemo: "#!",
  // },
  // {
  //   id: 3,
  //   title: "Estrategias Web",
  //   image: "/image-3.jpg",
  //   urlGithub: "#!",
  //   urlDemo: "#!",
  // },
  // {
  //   id: 4,
  //   title: "Ideas Creativas",
  //   image: "/image-4.jpg",
  //   urlGithub: "#!",
  //   urlDemo: "#!",
  // },
  // {
  //   id: 5,
  //   title: "Webs Impactantes",
  //   image: "/image-5.jpg",
  //   urlGithub: "#!",
  //   urlDemo: "#!",
  // },
  // {
  //   id: 6,
  //   title: "Web Dinámica",
  //   image: "/image-6.jpg",
  //   urlGithub: "#!",
  //   urlDemo: "#!",
  // },
  // {
  //   id: 7,
  //   title: "Dark Web ",
  //   image: "/image-7.jpg",
  //   urlGithub: "#!",
  //   urlDemo: "#!",
  // },
  // {
  //   id: 8,
  //   title: "E-commerce web",
  //   image: "/image-8.jpg",
  //   urlGithub: "#!",
  //   urlDemo: "#!",
  // },
];
