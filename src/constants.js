import projectImgVoyage from "./images/project-cards/voyage.png";
import projectImgMemery from "./images/project-cards/memery.png";
import projectImgNotelux from "./images/project-cards/notelux.png";
import desktopScnMemery from "./images/projects/memery-desktop.png";
import mobileScnMemery from "./images/projects/memery-mobile.png";
import desktopScnNotelux from "./images/projects/notelux-desktop.png";
import mobileScnNotelux from "./images/projects/notelux-mobile.png";
import desktopScnVoyage from "./images/projects/voyage-desktop.png";
import mobileScnVoyage from "./images/projects/voyage-mobile.png";
import LinkedInIcon from "./icons/LinkedInIcon";
import EnvelopeIcon from "./icons/EnvelopeIcon";
import GithubIcon from "./icons/GithubIcon";

export const githubLink = "https://github.com/anna-rudas";
export const emailAddress = "mailto:anna.rudas@protonmail.com";
export const linkedInLink = "https://www.linkedin.com/in/annarudas/";

export const footerLinks = [
  {
    icon: <LinkedInIcon />,
    link: linkedInLink,
  },
  {
    icon: <EnvelopeIcon />,
    link: emailAddress,
  },
  {
    icon: <GithubIcon />,
    link: githubLink,
  },
];

export const skillTags = [
  "HTML",
  "CSS",
  "Sass",
  "JavaScript",
  "TypeScript",
  "React",
  "Git",
  "State Management",
  "Figma",
];

export const myProjects = [
  {
    name: "memery",
    title: "memory game",
    intro:
      "A memory game with card packs of varying sizes and types. You can track your progress and how many turns it took to complete the game.",
    skillTags: ["JavaScript", "React", "Responsive Design", "CSS animations"],
    projectImg: projectImgMemery,
  },
  {
    name: "notelux",
    title: "notes app",
    intro:
      "A note-taking application with extensive features and responsive UI.",
    skillTags: ["TypeScript", "React", "JavaScript", "CSS modules"],
    projectImg: projectImgNotelux,
  },
  {
    name: "voyage",
    title: "landing page",
    intro: "A landing page for the fictional travel business Voyage.",
    skillTags: ["JavaScript", "React", "Responsive Design", "CSS modules"],
    projectImg: projectImgVoyage,
  },
];

export const navLinksMain = ["about", "projects", "contact"];
export const navLinksProjects = ["memery", "notelux", "voyage"];

export const heroMain = {
  before: "Hello, my name is",
  main: "Anna Rudas",
  intro: "I am a junior frontend developer based in Germany.",
  btnText: "Download my CV",
};

export const heroProjects = {
  before: "",
  main: "My Projects",
  intro:
    "I've spent the last year teaching myself to code, using the foundation that my university education gave me. To see what I'm currently working on, take a look around on my Github.",
  btnText: "Back to home page",
};

export const projectDetails = [
  {
    projectName: "memery",
    text: [
      "I have been an avid collector of different types of cat images and I have finally found a use for it: a memory game! I love using my developer skills to create fun games like this that I can share with my friends.",
      "The game offers three different types of card pack sizes and types for you to choose from. You can track your progress and how many turns it takes to complete the game.",
      "The most challenging aspect of this project was the styling, specifically with the cards grid, to make sure the cards don't overflow and to maintain a responsive design. This project also made me learn more about css transformations and animations as these are what I used to rotate the cards and create the flipping effect.",
    ],
    mobileScn: mobileScnMemery,
    desktopScn: desktopScnMemery,
    github: "https://github.com/anna-rudas/memery",
    website: "https://a-simple-memery-game.netlify.app/",
  },
  {
    projectName: "notelux",
    text: [
      "Notelux is a CRUD application, storing data in Local Storage. You can specify what colour you would like your notes to be, choose the theme (with the preference being stored so you don't lose it on reload) and switch between list and grid view.",
      "This project gave me a lot of insight into how React works: I had trouble working out how to reuse components, and implement a Context API. It was very satisfactory to figure these things out and as a result I have gained a lot of confidence in using React.",
      "The most fun part of this project was to implement a way to sort the notes and make sure the last modified is on top, especially because the layout consists of the notes stacked in columns, which I also wanted to keep roughly the same length. This project had a simple concept with a couple of challenging aspects, and I am very satisfied with how it turned out.",
    ],
    mobileScn: mobileScnNotelux,
    desktopScn: desktopScnNotelux,
    github: "https://github.com/anna-rudas/notelux",
    website: "https://notelux.netlify.app/",
  },
  {
    projectName: "voyage",
    text: [
      "With this project I wanted to concentrate on the styling and create a product that reflects my design skills. I enjoyed working on little details, for example checking to make sure the email input is valid and having a little warning if that is not the case.",
      "This project taught me about the importance of choosing the right sized image and implementing lazy loading if necessary; this was my first time working on a project with so many images and I had issues with loading time as a consequence of this.",
      "At the bottom of the page you can navigate to the credits page where you can find all the images I have used in the project.",
    ],
    mobileScn: mobileScnVoyage,
    desktopScn: desktopScnVoyage,
    github: "https://github.com/anna-rudas/voyage-landing-page",
    website: "https://voyage-landing-page.netlify.app/",
  },
];
