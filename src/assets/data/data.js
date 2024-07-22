import Kwiatostan from '../img/projects/kwiatostan.jpg'
import Kursy from '../img/projects/kursy.jpg'
import Konferencja from '../img/projects/konferencja.jpg'
import Zabieg from '../img/projects/zabieg.jpg'
import Holy from '../img/projects/holy.jpg'
import Osa from '../img/projects/osa.jpg'
import Hedo from '../img/projects/hedo.jpg'
import NailSpot from '../img/projects/nailspot.jpg'
import Currency from '../img/projects/currency.jpg'
import Young from '../img/projects/young.jpg'
import Ausbilder from '../img/projects/ausbilder.jpg'
import KWcovid from '../img/projects/KWcovid.jpg'
import KWmap from '../img/projects/KWmap.jpg'
import Food from '../img/projects/food.png'


export const HERO = `I am an experienced programmer specializing in React and TypeScript. Currently, I am engaged in a full-stack private project utilizing TypeScript, React, MongoDB, and Node.js. My passion for coding drives me to continually enhance my skills and stay updated with the latest industry trends. I am adept at building dynamic, efficient web pages and applications and thrive in collaborative environments.`;

export const ABOUT = `For over four years, I have been developing my skills as a front-end developer, with a focus on the React framework. During this time, I have gained experience working on various projects, both individually and in teams. In my career so far, I have had the opportunity to participate in the creation of e-commerce applications, educational platform, content management systems, single-page applications and classic websites which has allowed me to acquire extensive knowledge and skills in creating interactive, responsive, and efficient web applications.
I have solid foundations in HTML, CSS, and JavaScript, as well as experience using libraries. I always strive to write clean, modular code and follow best practices in optimizing applications.
I am an ambitious, self-reliant individual, focused on continuous development. I value teamwork and willingly share my knowledge and help other team members solve problems. My professional experience has taught me effective communication and flexibility in adapting to changing project requirements.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Frontend Developer",
    company: "Indigo Nails",
    description: `Creating and developing scalable web applications using JavaScript, React, and TypeScript. Implementing user interfaces provided in Figma according to best UX/UI practices, ensuring smooth and intuitive user experiences. Close collaboration with the backend team to integrate APIs and optimize application performance. Cooperation with UX Designer. Preparing landing pages. Implementing functionalities for currently developed projects. Optimizing pages for smartphones.`,
    technologies: ["Javascript", "TypeScript", "React.js", "CSS Modules", "CSS", "HTML"],
  },
  {
    year: "2022 - 2023",
    role: "Full Stack Developer",
    description: `Developing one page websites. Creating web applications using the React.js. Developing CMS-based websites with WordPress. Implementing WooCommerce stores. Identifying and solving issues related to improperly written source code for websites and applications.`,
    technologies: ["React", "WordPress", "WooCommerce"],
  },
  {
    year: "2020 - 2022",
    role: "Junior Full Stack Developer",
    company: "Koleje Wielkopolskie",
    description: `Developing websites and web applications. Creating interfaces based on REST API with Leaflet.js. Fixing existing bugs. Implementing database logic using SQLite and MS SQL (T-SQL). `,
    technologies: ["JavaScript", "jQuery", "React", "CSS", "T-SQL", "HTML"],
  },
];

export const PROJECTS = [
  {
    title: "Kwiatostan (work in progress)",
    image: Kwiatostan,
    description:
      `Kwiatostan is a website presenting the delivery service of custom bouquets with the option to configure the bouquet.`,
    technologies: ["React", "JavaScript", "React Router", "Swiper.js", "GSAP", "CSS Modules"],
  },
  {
    title: "Food App (work in progress)",
    image: Food,
    description:
      `Food App is a full-stack application that operates similarly to takeaway.com. Food App allows users to create an account, place an order, and access an administrative panel..`,
    technologies: ["React", "TypeScript", "React Router", "React Query", "React Hook Form", "TailwindCSS", "Node.js", "Express", "Auth0", "MongoDB"],
  },
  {
    title: "Indigo Nails Streaming Platform",
    image: Kursy,
    description:
      `Indigo Educational Platform is an application based on video materials intended for the beauty industry. It allows the purchase of multi-episode courses and account personalization.`,
    technologies: ["HTML", "CSS", "JavaScript", "Video.js", "Swiper.js", "Axios"],
  },
  {
    title: "Indigo Nails Conference",
    image: Konferencja,
    description:
      `Landing page promoting an online event targeted at beauticians and manicurists to present new products.`,
    technologies: ["React", "JavaScript", "React Router", "React Hook Form", "Swiper.js", "GSAP", "CSS Modules"],
  },
  {
    title: "Young Team",
    image: Young,
    description:
      `Landing page encouraging young manicurists to participate in a program that expands their knowledge and provides an Indigo instructor certificate. `,
    technologies: ["React", "JavaScript", "Swiper.js", "Axios", "TailwindCSS"],
  },
  {
    title: "Protein Treatment",
    image: Zabieg,
    description:
      `Landing page promoting an online event for manicurists to present the protein base.`,
    technologies: ["React", "TypeScript", "React Hook Form", "React Router", "Axios", "CSS Modules"],
  },
  {
    title: "Ausbilder",
    image: Ausbilder,
    description:
      `Landing page encouraging manicurists in Germany to join the Indigo instructor team.`,
    technologies: ["React", "JavaScript", "React Router", "React Hook Form", "React Helmet", "i18next", "CSS Modules"],
  },
  {
    title: "NailSpot",
    image: NailSpot,
    description:
      `Landing page promoting the NailSpot app for manicurists.`,
    technologies: ["React", "JavaScript", "React Router", "React Hook Form", "React Scroll", "CSS Modules"],
  },
  {
    title: "Hedo Designers",
    image: Hedo,
    description:
      `Single Page form used for registering for the HedoDesigners program by the Hedonista brand.`,
    technologies: ["React", "JavaScript", "React Router", "React Helmet", "React Hook Form", "i18next", "CSS Modules"],
  },
  {
    title: "Holy Beauty",
    image: Holy,
    description:
      `An online store built on the WordPress and WooCommerce.`,
    technologies: ["HTML", "CSS", "JavaScript", "Wordpress", "WooCommerce"],
  },
  {
    title: "O.S.A design",
    image: Osa,
    description:
      `Architectural studio business card website.`,
    technologies: ["HTML", "CSS", "JavaScript", "Wordpress", "Elementor"],
  },
  {
    title: "Currency Converter",
    image: Currency,
    description:
      `A currency conversion application that records all operations to a list. Currency values are retrieved via an API.`,
    technologies: ["React", "TypeScript", "React Router", "React Hook Form", "Video.js", "Swiper.js", "CSS Modules"],
  },
  {
    title: "KWCovid",
    image: KWcovid,
    description:
      `KWCovid is a simple application displaying the current number of people infected with COVID-19 on advertising banners inside trains.`,
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Axios"],
  },
  {
    title: "KWmap",
    image: KWmap,
    description:
      `KWmap is an application used to display the current location of vehicles of the Koleje Wielkopolskie company. It is integrated with the API and has access levels for viewers.`,
    technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Leaflet.js", "Axios"],
  },
];

export const CONTACT = {
  address: "Senatorska 50, Łódź, Poland",
  phoneNo: "+48 781 580 273",
  email: "dev@krystiankozak.com",
};