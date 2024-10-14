import projectImgMortle from "../assets/images/project-cards/mortle.png";
import projectImgMemery from "../assets/images/project-cards/memery.png";
import projectImgNotelux from "../assets/images/project-cards/notelux.png";
import desktopScnMemery from "../assets/images/projects/memery-desktop.png";
import mobileScnMemery from "../assets/images/projects/memery-mobile.png";
import desktopScnNotelux from "../assets/images/projects/notelux-desktop.png";
import mobileScnNotelux from "../assets/images/projects/notelux-mobile.png";
import desktopScnMortle from "../assets/images/projects/mortle-desktop.png";
import mobileScnMortle from "../assets/images/projects/mortle-mobile.png";
import LinkedInIcon from "../assets/icons/LinkedInIcon";
import EnvelopeIcon from "../assets/icons/EnvelopeIcon";
import GithubIcon from "../assets/icons/GithubIcon";

export const githubLink = "https://github.com/anna-rudas";
export const emailAddress = "mailto:mail@annarudas.com";
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
  "VueJs",
  "Figma",
  "Responsive Design",
];

const ProjectLinks = {
  memery: "https://memery.annarudas.com/",
  mortle: "https://mortle.annarudas.com/",
  notelux: "https://notelux.annarudas.com/",
};

export const myProjects = [
  {
    name: "memery",
    title: "memory game",
    intro:
      "A memory game with card packs of varying sizes and types. You can track your progress and how many turns it took to complete the game.",
    skillTags: ["JavaScript", "React", "Responsive Design", "CSS animations"],
    projectImg: projectImgMemery,
    link: ProjectLinks.memery,
  },
  {
    name: "mortle",
    title: "wordle game",
    intro:
      "The classic wordle game with added dictionary definitions and saved statistics data.",
    skillTags: ["Typescript", "React", "Responsive Design", "Sass"],
    projectImg: projectImgMortle,
    link: ProjectLinks.mortle,
  },
  {
    name: "notelux",
    title: "notes app",
    intro:
      "A note-taking application with extensive features and responsive UI.",
    skillTags: ["TypeScript", "React", "JavaScript", "CSS modules"],
    projectImg: projectImgNotelux,
    link: ProjectLinks.notelux,
  },
];

export const navLinksMain = ["about", "projects", "contact"];
export const navLinksProjects = ["memery", "mortle", "notelux"];

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
    website: ProjectLinks.memery,
  },
  {
    projectName: "mortle",
    text: [
      "I absolutely love word games, and the classic Wordle is one of my favourites! One thing I was always missing from it though is definitions for the solutions, because sometimes I have no idea what they mean. So, I added them! I have also not set a word limit per day, so it's a perfect game to pass the time while also working my brain.",
      "Besides the main gameplay, there is also the functionality to see your statistics, with information about your win percentage and guess distribution.",
      "My main struggle was to work out the logic of the game and it took me awhile to get that right. What I love the most about this project is the design: it's unique and fun and it gave me a lot of joy to create it.",
    ],
    mobileScn: mobileScnMortle,
    desktopScn: desktopScnMortle,
    github: "https://github.com/anna-rudas/wordle",
    website: ProjectLinks.mortle,
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
    website: ProjectLinks.notelux,
  },
];
