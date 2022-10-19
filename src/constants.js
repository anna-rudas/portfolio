import projectImgVoyage from "./images/projects/voyage.png";
import projectImgMemery from "./images/projects/memery.png";
import projectImgNotelux from "./images/projects/notelux.png";

export const skillTags = [
  "HTML",
  "CSS",
  "SASS",
  "JavaScript",
  "TypeScript",
  "React",
  "Responsive Design",
];

export const skillTagsMemery = ["JavaScript", "React", "Responsive Design"];
export const skillTagsNotelux = [
  "TypeScript",
  "React",
  "JavaScript",
  "Responsive Design",
];
export const skillTagsVoyage = ["JavaScript", "React", "Responsive Design"];

export const myProjects = [
  {
    name: "Memery",
    title: "Memory game",
    intro:
      "A memory game with card packs of varying sizes and types. You can track your progress and how many turns it took to complete the game.",
    skillTags: skillTagsMemery,
    projectImg: projectImgMemery,
  },
  {
    name: "Notelux",
    title: "Notes app",
    intro:
      "A note taking application, where your notes are stored in local storage You can specify your note's colour, the theme, or switch between list and grid view.",
    skillTags: skillTagsNotelux,
    projectImg: projectImgNotelux,
  },
  {
    name: "Voyage",
    title: "Landing page",
    intro: "A landing page for the fictional travel business Voyage.",
    skillTags: skillTagsVoyage,
    projectImg: projectImgVoyage,
  },
];

export const navLinksMain = ["about", "projects", "contact"];
export const navLinksProjects = ["memery", "notelux", "voyage"];

export const heroMain = {
  before: "Hello, my name is",
  main: "Anna Rudas",
  intro:
    " I am a junior frontend developer based in Germany, who doesn't mind making mistakes because she knows she can learn from them.",
  btnText: "Download my CV",
};

export const heroProjects = {
  before: "",
  main: "My Projects",
  intro:
    "On this page you can read about my projects in more detail. To see what I'm currently working on, take a look around on my github.",
  btnText: "Back to home page",
};
