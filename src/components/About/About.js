import React from "react";
import { className } from "../../helpers";
import * as style from "./About.module.css";
import * as shared from "../shared.module.css";
import { skillTags, linkedInLink, emailAddress } from "../../constants";
import aboutImg from "../../images/about-me.jpg";

function About() {
  return (
    <div {...className(shared.section)} id="about">
      <h2 {...className(shared.title, shared.titlePrimary)}>About me</h2>
      <p {...className(shared.sectionText, shared.paragraph)}>
        In 2022 I have completed my Bachelor of Science, majoring in Electrical
        Engineering. While in university not only did I study natural science,
        but also gained an understanding of the principles of OOP, as well as
        had numerous classes focused on learning programming languages like C,
        C++, SQL and Matlab.
        <br /> All of this helped me discover my passion for software
        development and gave me a foundation of knowledge that I could build on
        to create websites like the ones you can see in the{" "}
        <a href="#projects" {...className(shared.links)}>
          {"Projects"}
        </a>{" "}
        section. Check them out!
        <br />
        I&apos;m open to job opportunities where I can learn and contribute. If
        you have a good opportunity that matches my skills and experience then
        don&apos;t hesitate to contact me on{" "}
        <a
          {...className(shared.links)}
          target="_blank"
          rel="noreferrer"
          href={linkedInLink}
        >
          {"LinkedIn"}
        </a>{" "}
        or write me an{" "}
        <a {...className(shared.links)} href={emailAddress}>
          {"email"}
        </a>
        .
      </p>
      <div {...className(style.skills)}>
        <div {...className(style.imgCon)}>
          <img
            {...className(style.img, shared.frame, shared.frameRight)}
            src={aboutImg}
            alt=""
          />
        </div>
        <div {...className(style.skillsTextCon)}>
          <div>
            <h3 {...className(shared.title, shared.titleSecondary)}>
              My Skills
            </h3>
            <p {...className(shared.paragraph)}>
              I am constantly working to add to my list of skills, as I am the
              happiest when creating, exploring or learning something new.{" "}
              <br />
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
