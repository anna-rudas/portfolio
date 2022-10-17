import React from "react";
import { className } from "../../helpers";
import style from "./About.module.css";
import shared from "../shared.module.css";
import { skillTags } from "../../constants";

function About() {
  return (
    <div {...className(shared.section)}>
      <h2 {...className(shared.title, shared.titlePrimary)}>About me</h2>
      <p {...className(shared.sectionText, shared.paragraph)}>
        I have recently completed my Bachelor of Science, majoring in Electrical
        Engineering at the Budapest University of Technology and Economics.
        While in university not only did I learn that if I put my finger in an
        outlet it will hurt, but I have also gained an understanding of the
        principles of OOP, as well as had numerous classes focused on learning
        programming languages like C++, SQL, HTML, CSS. <br /> All of this
        helped me discover my passion for software development and UI/UX design
        and gave me a foundation of knowledge that I could build on to create
        websites like the ones you can see in the Projects section. Check them
        out!
        <br /> I&apos;m open to Job opportunities where I can learn and
        contribute. If you have a good opportunity that matches my skills and
        experience then don&apos;t hesitate to contact me on Linkedin or write
        me an email.
      </p>
      <div {...className(style.skills)}>
        <div {...className(style.skillsImgCon)}>
          <div {...className(style.imgFrame)}>
            <div {...className(style.img)} />
          </div>
        </div>
        <div {...className(style.skillsTextCon)}>
          <div {...className(style.skillsText)}>
            <h3 {...className(shared.title, shared.titleSecondary)}>
              My Skills
            </h3>
            <p {...className(shared.paragraph)}>
              I am constantly working to add to my list of skills, as I am the
              happiest when creating, exploring or learning something new.
              I&apos;m not afraid of challenging myself; progress comes from
              failing and learning from your mistakes.
            </p>
          </div>
          <ul {...className(shared.tagsCon)}>
            {skillTags.map((currentTag) => {
              return (
                <li key={currentTag} {...className(shared.skillTags)}>
                  {currentTag}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
